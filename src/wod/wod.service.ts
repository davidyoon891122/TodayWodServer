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
import { Program } from './entities/program.entity';

@Injectable()
export class WodService {
  findRandomProgram(method: string, level: string) {
    return this.getRandomProgram(method, level);
  }

  findOtherProgram(method: string, level: string, id: string) {
    return this.getOtherProgramExceptId(method, level, id);
  }

  findProgram(method: string, level: string, id: string) {
    return this.getProgramById(method, level, id);
  }

  getRandomProgram(method: string, level: string) {
    if (method == 'body' && level == 'beginner') {
      const dataArray = [bodyBegginerA, bodyBegginerB, bodyBegginerC];

      const randomIndex = this.getRandomIndex(dataArray.length);
      return dataArray[randomIndex];
    } else if (method == 'body' && level == 'elementary') {
      const dataArray = [bodyElementaryA, bodyElementaryB, bodyElementaryC];

      const randomIndex = this.getRandomIndex(dataArray.length);
      return dataArray[randomIndex];
    } else if (method == 'body' && level == 'intermediate') {
      
      const dataArray = [
        bodyIntermediateA,
        bodyIntermediateB,
        bodyIntermediateC,
      ];
      const randomIndex = this.getRandomIndex(dataArray.length);

      return dataArray[randomIndex];
    } else if (method == 'body' && level == 'advanced') {
      const dataArray = [bodyAdvancedA, bodyAdvancedB, bodyAdvancedC];

      const randomIndex = this.getRandomIndex(dataArray.length);
      return dataArray[randomIndex];
    }

    if (method == 'machine' && level == 'beginner') {
      const dataArray = [machineBeginnerA, machineBeginnerB, machineBeginnerC];

      const randomIndex = this.getRandomIndex(dataArray.length);
      return dataArray[randomIndex];
    } else if (method == 'machine' && level == 'elementary') {
      const dataArray = [
        machineElementaryA,
        machineElementaryB,
        machineElementaryC,
      ];

      const randomIndex = this.getRandomIndex(dataArray.length);
      return dataArray[randomIndex];
    } else if (method == 'machine' && level == 'intermediate') {
      const dataArray = [
        machineIntermediateA,
        machineIntermediateB,
        machineIntermediateC,
      ];
      const randomIndex = this.getRandomIndex(dataArray.length);
      return dataArray[randomIndex];
    } else if (method == 'machine' && level == 'advanced') {
      const dataArray = [machineAdvancedA, machineAdvancedB, machineAdvancedC];
      const randomIndex = this.getRandomIndex(dataArray.length);
      return dataArray[randomIndex];
    } else {
      throw new BadRequestException('Invalid parameter');
    }
  }

  getOtherProgramExceptId(method: string, level: string, id: string) {
    if (method == 'body' && level == 'beginner') {
      const dataArray = [bodyBegginerA, bodyBegginerB, bodyBegginerC];
      const filteredArray: Program[] = dataArray.filter((program) => program.id != id)

      const randomIndex = this.getRandomIndex(filteredArray.length);

      return filteredArray[randomIndex];
    } else if (method == 'body' && level == 'elementary') {
      const dataArray = [bodyElementaryA, bodyElementaryB, bodyElementaryC];
      const filteredArray: Program[] = dataArray.filter((program) => program.id != id)

      const randomIndex = this.getRandomIndex(filteredArray.length);
      return filteredArray[randomIndex];
    } else if (method == 'body' && level == 'intermediate') {
      const dataArray = [
        bodyIntermediateA,
        bodyIntermediateB,
        bodyIntermediateC,
      ];
      const filteredArray: Program[] = dataArray.filter((program) => program.id != id)
      const randomIndex = this.getRandomIndex(filteredArray.length);
      return filteredArray[randomIndex];
    } else if (method == 'body' && level == 'advanced') {
      const dataArray = [bodyAdvancedA, bodyAdvancedB, bodyAdvancedC];
      const filteredArray: Program[] = dataArray.filter((program) => program.id != id)
      const randomIndex = this.getRandomIndex(filteredArray.length);
      return filteredArray[randomIndex];
    }

    if (method == 'machine' && level == 'beginner') {
      const dataArray = [machineBeginnerA, machineBeginnerB, machineBeginnerC];
      const filteredArray: Program[] = dataArray.filter((program) => program.id != id)
      const randomIndex = this.getRandomIndex(filteredArray.length);
      return filteredArray[randomIndex];
    } else if (method == 'machine' && level == 'elementary') {
      const dataArray = [
        machineElementaryA,
        machineElementaryB,
        machineElementaryC,
      ];
      const filteredArray: Program[] = dataArray.filter((program) => program.id != id)

      const randomIndex = this.getRandomIndex(dataArray.length);
      return filteredArray[randomIndex];
    } else if (method == 'machine' && level == 'intermediate') {
      const dataArray = [
        machineIntermediateA,
        machineIntermediateB,
        machineIntermediateC,
      ];
      const filteredArray: Program[] = dataArray.filter((program) => program.id != id)
      const randomIndex = this.getRandomIndex(filteredArray.length);
      return filteredArray[randomIndex];
    } else if (method == 'machine' && level == 'advanced') {
      
      const dataArray = [machineAdvancedA, machineAdvancedB, machineAdvancedC];
      const filteredArray: Program[] = dataArray.filter((program) => program.id != id)
      const randomIndex = this.getRandomIndex(filteredArray.length);
      
      return filteredArray[randomIndex];
    } else {
      throw new BadRequestException('Invalid parameter');
    }
  }

  getProgramById(method: string, level: string, id: string) {
    if (method == 'body' && level == 'beginner') {
      const dataArray = [bodyBegginerA, bodyBegginerB, bodyBegginerC];
      const result = dataArray.find((program) => program.id == id)
      
      return result;
    } else if (method == 'body' && level == 'elementary') {
      const dataArray = [bodyElementaryA, bodyElementaryB, bodyElementaryC];
      const result = dataArray.find((program) => program.id == id)
      
      return result;
    } else if (method == 'body' && level == 'intermediate') {
      const dataArray = [
        bodyIntermediateA,
        bodyIntermediateB,
        bodyIntermediateC,
      ];
      const result = dataArray.find((program) => program.id == id)
      
      return result;
    } else if (method == 'body' && level == 'advanced') {
      const dataArray = [bodyAdvancedA, bodyAdvancedB, bodyAdvancedC];
      const result = dataArray.find((program) => program.id == id)
      
      return result;
    }

    if (method == 'machine' && level == 'beginner') {
      const dataArray = [machineBeginnerA, machineBeginnerB, machineBeginnerC];

      const result = dataArray.find((program) => program.id == id)
      
      return result;
    } else if (method == 'machine' && level == 'elementary') {
      const dataArray = [
        machineElementaryA,
        machineElementaryB,
        machineElementaryC,
      ];
      const result = dataArray.find((program) => program.id == id)
      
      return result;
    } else if (method == 'machine' && level == 'intermediate') {
      const dataArray = [
        machineIntermediateA,
        machineIntermediateB,
        machineIntermediateC,
      ];
      const result = dataArray.find((program) => program.id == id)
      
      return result;
    } else if (method == 'machine' && level == 'advanced') {
      const dataArray = [machineAdvancedA, machineAdvancedB, machineAdvancedC];
      const result = dataArray.find((program) => program.id == id)
      
      return result;
    } else {
      throw new BadRequestException('Invalid parameter');
    }
  }

  getRandomIndex(count: number) {
    const randomIndex = Math.floor(Math.random() * count);
    return randomIndex;
  }
}
