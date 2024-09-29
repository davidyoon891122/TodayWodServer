import { Module } from '@nestjs/common';
import { WodService } from './wod.service';
import { WodController } from './wod.controller';

@Module({
  controllers: [WodController],
  providers: [WodService],
})
export class WodModule {}
