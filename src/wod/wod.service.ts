import { BadRequestException, Injectable } from '@nestjs/common';
import {
  bodyAdvancedA,
  bodyAdvancedB,
  bodyAdvancedC,
  bodyBegginerA,
  bodyBegginerB,
  bodyBegginerC,
  bodyElementaryA,
  bodyElementaryB,
  bodyElementaryC,
  bodyIntermediateA,
  bodyIntermediateB,
  bodyIntermediateC,
} from './entities/mock/bodyProgram.data';
import {
  machineAdvancedA,
  machineBeginnerA,
  machineElementaryA,
  machineIntermediateA,
} from './entities/mock/machineProgram.data';

@Injectable()
export class WodService {
  findProgram(method: string, level: string) {
    return this.createProgram(method, level);
  }

  createProgram(method: string, level: string) {
    if (method == 'body' && level == 'beginner') {
      const randomIndex = this.getRandomIndex();
      const dataArray = [bodyBegginerA, bodyBegginerB, bodyBegginerC];
      return dataArray[randomIndex];
    } else if (method == 'body' && level == 'elementary') {
      const randomIndex = this.getRandomIndex();
      const dataArray = [bodyElementaryA, bodyElementaryB, bodyElementaryC];
      return dataArray[randomIndex];
    } else if (method == 'body' && level == 'intermediate') {
      const randomIndex = this.getRandomIndex();
      const dataArray = [
        bodyIntermediateA,
        bodyIntermediateB,
        bodyIntermediateC,
      ];
      return dataArray[randomIndex];
    } else if (method == 'body' && level == 'advanced') {
      const randomIndex = this.getRandomIndex();
      const dataArray = [bodyAdvancedA, bodyAdvancedB, bodyAdvancedC];
      return dataArray[randomIndex];
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

  getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
  }
}
