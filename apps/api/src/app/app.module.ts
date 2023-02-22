import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreServerModule } from '@platon/core/server';
import { FeatureLtiServerModule, LTIMiddleware } from '@platon/feature/lti/server';
import { FeaturePlayerServerModule } from '@platon/feature/player/server';
import { FeatureResourceServerModule } from '@platon/feature/resource/server';


@Module({
  imports: [
    CoreServerModule,
    FeatureLtiServerModule,
    FeaturePlayerServerModule,
    FeatureResourceServerModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LTIMiddleware)
      .forRoutes('*');
  }
}
