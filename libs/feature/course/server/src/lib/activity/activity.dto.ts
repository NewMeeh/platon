import { ApiProperty } from "@nestjs/swagger";
import { BaseDTO, toArray, toDate } from "@platon/core/server";
import { Activity, ActivityFilters, ActivityStates, CreateActivity, UpdateActivity } from "@platon/feature/course/common";
import { Transform } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class ActivityDTO extends BaseDTO implements Activity {
  @IsNumber()
  @ApiProperty()
  readonly progression = 0;

  @IsUUID()
  @ApiProperty()
  readonly courseId!: string;

  @IsUUID()
  @ApiProperty()
  readonly sectionId!: string;

  @IsOptional()
  @IsDate()
  readonly openAt?: Date;

  @IsOptional()
  @IsDate()
  readonly closeAt?: Date;

  @IsString()
  readonly title!: string;

  @IsString()
  readonly state!: ActivityStates;
}

export class ActivityFiltersDTO implements ActivityFilters {
  @IsOptional()
  @IsUUID()
  @ApiProperty()
  readonly sectionId?: string;
}

export class CreateCourseActivityDTO implements CreateActivity {
  @IsUUID()
  @ApiProperty()
  readonly sectionId!: string;


  @IsUUID()
  @ApiProperty()
  readonly resourceId!: string;

  @IsString()
  @ApiProperty()
  readonly resourceVersion!: string;


  @Transform(({ value }) => toDate(value))
  @IsDate()
  @IsOptional()
  @ApiProperty()
  readonly openAt?: Date;

  @Transform(({ value }) => toDate(value))
  @IsDate()
  @IsOptional()
  @ApiProperty()
  readonly closeAt?: Date;

  @Transform(({ value }) => toArray(value))
  @IsString({ each: true })
  @IsOptional()
  @ApiProperty()
  readonly members?: string[];

  @Transform(({ value }) => toArray(value))
  @IsString({ each: true })
  @IsOptional()
  @ApiProperty()
  readonly correctors?: string[];
}

export class UpdateCourseActivityDTO implements UpdateActivity {
  @Transform(({ value }) => toDate(value))
  @IsDate()
  @IsOptional()
  @ApiProperty()
  readonly openAt?: Date | null;

  @Transform(({ value }) => toDate(value))
  @IsDate()
  @IsOptional()
  @ApiProperty()
  readonly closeAt?: Date | null;
}
