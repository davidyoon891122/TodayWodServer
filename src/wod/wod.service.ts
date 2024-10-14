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
  machineAdvancedB,
  machineAdvancedC,
  machineBeginnerA,
  machineBeginnerB,
  machineBeginnerC,
  machineElementaryA,
  machineElementaryB,
  machineElementaryC,
  machineIntermediateA,
  machineIntermediateB,
  machineIntermediateC,
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
      const randomIndex = this.getRandomIndex();
      const dataArray = [machineBeginnerA, machineBeginnerB, machineBeginnerC];
      return dataArray[randomIndex];
    } else if (method == 'machine' && level == 'elementary') {
      const randomIndex = this.getRandomIndex();
      const dataArray = [
        machineElementaryA,
        machineElementaryB,
        machineElementaryC,
      ];
      return dataArray[randomIndex];
    } else if (method == 'machine' && level == 'intermediate') {
      const randomIndex = this.getRandomIndex();
      const dataArray = [
        machineIntermediateA,
        machineIntermediateB,
        machineIntermediateC,
      ];
      return dataArray[randomIndex];
    } else if (method == 'machine' && level == 'advanced') {
      const randomIndex = this.getRandomIndex();
      const dataArray = [machineAdvancedA, machineAdvancedB, machineAdvancedC];
      return dataArray[randomIndex];
    } else {
      throw new BadRequestException('Invalid parameter');
    }
  }

  getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
  }
}
