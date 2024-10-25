import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { WodService } from './wod.service';
import { query } from 'express';

@Controller('wod')
export class WodController {
  constructor(private readonly wodService: WodService) {}

  @Get()
  getRandomProgram(
    @Query('methodType') method,
    @Query('level') level,
    @Query('id') id,
  ) {
    console.log(method, level);

    if (method == null || method == '' || level == null || level == '') {
      throw new BadRequestException('Invalid parameter');
    }

    if (id == null || id == '') {
      return this.wodService.findRandomProgram(method, level);
    } else {
      return this.wodService.findOtherProgram(method, level, id);
    }
  }

  @Get(':id')
  findByid(
    @Param('id') id: string,
    @Query('methodType') method,
    @Query('level') level,
  ) {
    if (!id) {
      throw new BadRequestException('ID parameter is required');
    }

    console.log('find by id : ', id);

    return this.wodService.findProgram(method, level, id);
  }
}
