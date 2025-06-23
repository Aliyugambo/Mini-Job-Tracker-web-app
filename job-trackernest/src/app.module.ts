import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { AiModule } from './ai/ai.module';
import { AiService } from './ai/ai.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), JobsModule, AiModule],
  controllers: [AppController],
  providers: [AppService, AiService],
  exports: [AiService],
})
export class AppModule {}
