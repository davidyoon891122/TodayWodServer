import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { WodService } from './wod.service';
import { GenderType } from './entities/type/gender.type';

@Controller('wod')
export class WodController {
  constructor(private readonly wodService: WodService) {}

  @Get()
  getRandomProgram(
    @Query('methodType') method,
    @Query('level') level,
    @Query('gender') gender,
    @Query('id') id,
  ) {
    console.log(
      `method: ${method}, level: ${level}, gender: ${gender}, id: ${id}`,
    );

    if (method == null || method == '' || level == null || level == '') {
      throw new BadRequestException('Invalid parameter');
    }

    if (id == null || id == '') {
      if (gender == null || gender == '') {
        return this.wodService.findRandomProgram(method, level, 'man');
      } else {
        return this.wodService.findRandomProgram(method, level, gender);
      }
    } else {
      if (gender == null || gender == '') {
        return this.wodService.findOtherProgram(method, level, 'man', id);
      } else {
        return this.wodService.findOtherProgram(method, level, gender, id);
      }
    }
  }

  @Get(':id')
  findByid(
    @Param('id') id: string,
    @Query('methodType') method,
    @Query('level') level,
    @Query('gender') gender,
  ) {
    if (!id) {
      throw new BadRequestException('ID parameter is required');
    }

    if (method == null || method == '' || level == null || level == '') {
      throw new BadRequestException('Invalid parameter');
    }

    console.log('find by id : ', id);
    console.log(
      `method: ${method}, level: ${level}, gender: ${gender}, id: ${id}`,
    );

    if (gender == null || gender == '') {
      console.log(`empty gender: ${gender}`);
      return this.wodService.findProgram(method, level, 'man', id);
    } else {
      return this.wodService.findProgram(method, level, gender, id);
    }
  }
}
