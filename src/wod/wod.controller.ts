import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WodService } from './wod.service';

@Controller('wod')
export class WodController {
  constructor(private readonly wodService: WodService) {}

  @Get()
  findProgram(@Query('method') method, @Query('level') level) {
    console.log(method, level);

    return this.wodService.findProgram(method, level);
  }
}
