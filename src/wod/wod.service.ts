import { Injectable } from '@nestjs/common';
import { CreateWodDto } from './dto/create-wod.dto';
import { UpdateWodDto } from './dto/update-wod.dto';

@Injectable()
export class WodService {
  create(createWodDto: CreateWodDto) {
    return 'This action adds a new wod';
  }

  findAll() {
    return `This action returns all wod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wod`;
  }

  update(id: number, updateWodDto: UpdateWodDto) {
    return `This action updates a #${id} wod`;
  }

  remove(id: number) {
    return `This action removes a #${id} wod`;
  }
}
