import { BadRequestException, Injectable } from '@nestjs/common';
import {
  bodyAdvancedA,
  bodyBegginerA,
  bodyElementaryA,
  bodyIntermediateA,
  machineAdvancedA,
  machineBeginnerA,
  machineElementaryA,
  machineIntermediateA,
} from './entities/program.data';

@Injectable()
export class WodService {
  findProgram(method: string, level: string) {
    return this.createProgram(method, level);
  }

  createProgram(method: string, level: string) {
    if (method == 'body' && level == 'beginner') {
      return bodyBegginerA; // A, B, C 중 랜덤하게 데이터 내려가도록 변경
    } else if (method == 'body' && level == 'elementary') {
      return bodyElementaryA;
    } else if (method == 'body' && level == 'intermediate') {
      return bodyIntermediateA;
    } else if (method == 'body' && level == 'advanced') {
      return bodyAdvancedA;
    }

    if (method == 'machine' && level == 'beginner') {
      return machineBeginnerA;
    } else if (method == 'machine' && level == 'elementary') {
      return machineElementaryA;
    } else if (method == 'machine' && level == 'intermediate') {
      return machineIntermediateA;
    } else if (method == 'machine' && level == 'advanced') {
      return machineAdvancedA;
    } else {
      throw new BadRequestException('Invalid parameter');
    }
  }
}
