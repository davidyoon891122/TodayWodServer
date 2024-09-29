import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WodModule } from './wod/wod.module';

@Module({
  imports: [WodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
