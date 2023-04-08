/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, DialogService } from '@platon/core/browser';
import { ListResponse, User } from '@platon/core/common';
import { CourseService } from '@platon/feature/course/browser';
import { Course, Activity, CourseMember, CourseMemberFilters, CourseSection, CreateCourseMember, CreateCourseSection, UpdateCourse, UpdateCourseSection } from '@platon/feature/course/common';
import { LayoutState } from '@platon/shared/ui';
import { BehaviorSubject, firstValueFrom, Subscription } from 'rxjs';

@Injectable()
export class CoursePresenter implements OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  private readonly context = new BehaviorSubject<Context>(this.defaultContext());

  readonly contextChange = this.context.asObservable();

  constructor(
    private readonly authService: AuthService,
    private readonly dialogService: DialogService,
    private readonly courseService: CourseService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe(params => {
        this.onChangeRoute(params.get('id') as string);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  defaultContext(): Context {
    return { state: 'LOADING' };
  }

  // Members

  async addMember(input: CreateCourseMember): Promise<void> {
    const { course } = this.context.value as Required<Context>;
    try {
      await firstValueFrom(this.courseService.createMember(course, input));
    } catch {
      this.alertError();
    }
  }

  async deleteMember(member: CourseMember): Promise<void> {
    try {
      await firstValueFrom(this.courseService.deleteMember(member));
    } catch {
      this.alertError();
    }
  }

  async searchMembers(
    filters: CourseMemberFilters = {}
  ): Promise<ListResponse<CourseMember>> {
    const { course } = this.context.value as Required<Context>;
    return firstValueFrom(this.courseService.searchMembers(course, filters));
  }


  // Sections

  async listSections(): Promise<CourseSection[]> {
    const { course } = this.context.value;
    if (!course) {
      return [];
    }
    const response = await firstValueFrom(
      this.courseService.listSections(course)
    );
    return response.resources;
  }

  async addSection(input: CreateCourseSection): Promise<void> {
    const { course } = this.context.value as Required<Context>;;
    try {
      await firstValueFrom(
        this.courseService.createSection(course, input)
      );
    } catch {
      this.alertError();
    }
  }

  async updateSection(section: CourseSection, input: UpdateCourseSection): Promise<void> {
    try {
      await firstValueFrom(
        this.courseService.updateSection(section, input)
      );
    } catch {
      this.alertError();
    }
  }

  async deleteSection(section: CourseSection): Promise<void> {
    try {
      await firstValueFrom(
        this.courseService.deleteSection(section)
      );
    } catch {
      this.alertError();
    }
  }


  // Activities

  async listActivities(): Promise<Activity[]> {
    const { course } = this.context.value;
    if (!course) {
      return [];
    }
    const response = await firstValueFrom(
      this.courseService.listActivities(course)
    );
    return response.resources;
  }


  async update(input: UpdateCourse): Promise<boolean> {
    const { course } = this.context.value as Required<Context>;;
    try {
      const changes = await firstValueFrom(
        this.courseService.update(course.id, input)
      );
      this.context.next({
        ...this.context.value,
        course: changes,
      });

      this.dialogService.success('Les informations du cours ont bien été modifiées !');
      return true;
    } catch {
      this.alertError();
      return false;
    }
  }



  private async refresh(id: string): Promise<void> {
    const [user, course] = await Promise.all([
      this.authService.ready(),
      firstValueFrom(this.courseService.find(id))
    ]);

    this.context.next({
      state: 'READY',
      user,
      course,
    });
  }

  private async onChangeRoute(id: string): Promise<void> {
    try {
      await this.refresh(id);
    } catch (error) {
      const status = (error as HttpErrorResponse).status || 500;
      if (status >= 400 && status < 500) {
        this.context.next({ state: 'NOT_FOUND' });
      } else {
        this.context.next({ state: 'SERVER_ERROR' });
      }
    }
  }

  private alertError(): void {
    this.dialogService.error(
      'Une erreur est survenue lors de cette action, veuillez réessayer un peu plus tard !',
    );
  }
}

export interface Context {
  state: LayoutState;
  user?: User;
  course?: Course;
}
