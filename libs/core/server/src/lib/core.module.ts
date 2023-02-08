import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './database/database.module';
import { ErrorsModule } from './errors/errors.module';
import { LevelModule } from './levels';
import { TopicModule } from './topics';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    UserModule,
    AuthModule,
    TopicModule,
    LevelModule,
    ErrorsModule,
  ],
  exports: [
    ConfigurationModule,
    DatabaseModule,
    UserModule,
    AuthModule,
    TopicModule,
    LevelModule,
    ErrorsModule,
  ],
})
export class CoreServerModule {}
