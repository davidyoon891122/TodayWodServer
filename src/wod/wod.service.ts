import { Injectable } from '@nestjs/common';
import {
  bodyAdvancedA,
  bodyBegginerA,
  bodyElementaryA,
  bodyIntermediateA,
  Program,
} from './entities/program.entity';
import { WeeklyWorkout } from './entities/weeklyWorkout.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class WodService {
  findProgram(method: string, level: string) {
    return this.createProgram(method, level);
  }

  createProgram(method: string, level: string) {
    if (method == 'body' && level == 'beginner') {
      return bodyBegginerA;
    } else if (method == 'body' && level == 'elementary') {
      return bodyElementaryA;
    } else if (method == 'body' && level == 'intermediate') {
      return bodyIntermediateA;
    } else if (method == 'body' && level == 'advanced') {
      return bodyAdvancedA;
    }

    return 'no programs';
  }
}
