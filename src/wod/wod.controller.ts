import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { WodService } from './wod.service';

@Controller('wod')
export class WodController {
  constructor(private readonly wodService: WodService) {}

  @Get()
  findProgram(@Query('methodType') method, @Query('level') level) {
    console.log(method, level);

    if (method == null || method == '' || level == null || level == '') {
      throw new BadRequestException('Invalid parameter');
    }

    return this.wodService.findProgram(method, level);
  }
}
