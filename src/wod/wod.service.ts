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
  ExerciseType,
  ExerciseTypeKeys,
  getRandomImageByType,
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
import {
  Gender,
  GenderType,
  GenderTypeKeys,
} from './entities/type/gender.type';

@Injectable()
export class WodService {
  findRandomProgram(method: string, level: string, gender: Gender) {
    return this.getRandomProgram(method, level, gender);
  }

  findOtherProgram(method: string, level: string, gender: Gender, id: string) {
    return this.getOtherProgramExceptId(method, level, gender, id);
  }

  findProgram(method: string, level: string, gender: Gender, id: string) {
    return this.getProgramById(method, level, gender, id);
  }

  getRandomProgram(method: string, level: string, gender: Gender) {
    if (method == 'body' && level == 'beginner') {
      const dataArray = [bodyBegginerA, bodyBegginerB, bodyBegginerC];
      const randomIndex = this.getRandomIndex(dataArray.length);
      const result = this.applyGenderToProgram(dataArray[randomIndex], gender);
      return result;
    } else if (method == 'body' && level == 'elementary') {
      const dataArray = [bodyElementaryA, bodyElementaryB, bodyElementaryC];
      const randomIndex = this.getRandomIndex(dataArray.length);
      const result = this.applyGenderToProgram(dataArray[randomIndex], gender);
      return result;
    } else if (method == 'body' && level == 'intermediate') {
      const dataArray = [
        bodyIntermediateA,
        bodyIntermediateB,
        bodyIntermediateC,
      ];
      const randomIndex = this.getRandomIndex(dataArray.length);

      const result = this.applyGenderToProgram(dataArray[randomIndex], gender);
      return result;
    } else if (method == 'body' && level == 'advanced') {
      const dataArray = [bodyAdvancedA, bodyAdvancedB, bodyAdvancedC];

      const randomIndex = this.getRandomIndex(dataArray.length);
      const result = this.applyGenderToProgram(dataArray[randomIndex], gender);
      return result;
    }

    if (method == 'machine' && level == 'beginner') {
      const dataArray = [machineBeginnerA, machineBeginnerB, machineBeginnerC];

      const randomIndex = this.getRandomIndex(dataArray.length);
      const result = this.applyGenderToProgram(dataArray[randomIndex], gender);
      return result;
    } else if (method == 'machine' && level == 'elementary') {
      const dataArray = [
        machineElementaryA,
        machineElementaryB,
        machineElementaryC,
      ];

      const randomIndex = this.getRandomIndex(dataArray.length);
      const result = this.applyGenderToProgram(dataArray[randomIndex], gender);
      return result;
    } else if (method == 'machine' && level == 'intermediate') {
      const dataArray = [
        machineIntermediateA,
        machineIntermediateB,
        machineIntermediateC,
      ];
      const randomIndex = this.getRandomIndex(dataArray.length);
      const result = this.applyGenderToProgram(dataArray[randomIndex], gender);
      return result;
    } else if (method == 'machine' && level == 'advanced') {
      const dataArray = [machineAdvancedA, machineAdvancedB, machineAdvancedC];
      const randomIndex = this.getRandomIndex(dataArray.length);
      const result = this.applyGenderToProgram(dataArray[randomIndex], gender);
      return result;
    } else {
      throw new BadRequestException('Invalid parameter');
    }
  }

  getOtherProgramExceptId(
    method: string,
    level: string,
    gender: Gender,
    id: string,
  ) {
    if (method == 'body' && level == 'beginner') {
      const dataArray = [bodyBegginerA, bodyBegginerB, bodyBegginerC];
      const filteredArray: Program[] = dataArray.filter(
        (program) => program.id != id,
      );

      const randomIndex = this.getRandomIndex(filteredArray.length);
      const result = this.applyGenderToProgram(
        filteredArray[randomIndex],
        gender,
      );
      return result;
    } else if (method == 'body' && level == 'elementary') {
      const dataArray = [bodyElementaryA, bodyElementaryB, bodyElementaryC];
      const filteredArray: Program[] = dataArray.filter(
        (program) => program.id != id,
      );

      const randomIndex = this.getRandomIndex(filteredArray.length);
      const result = this.applyGenderToProgram(
        filteredArray[randomIndex],
        gender,
      );
      return result;
    } else if (method == 'body' && level == 'intermediate') {
      const dataArray = [
        bodyIntermediateA,
        bodyIntermediateB,
        bodyIntermediateC,
      ];
      const filteredArray: Program[] = dataArray.filter(
        (program) => program.id != id,
      );
      const randomIndex = this.getRandomIndex(filteredArray.length);
      const result = this.applyGenderToProgram(
        filteredArray[randomIndex],
        gender,
      );
      return result;
    } else if (method == 'body' && level == 'advanced') {
      const dataArray = [bodyAdvancedA, bodyAdvancedB, bodyAdvancedC];
      const filteredArray: Program[] = dataArray.filter(
        (program) => program.id != id,
      );
      const randomIndex = this.getRandomIndex(filteredArray.length);
      const result = this.applyGenderToProgram(
        filteredArray[randomIndex],
        gender,
      );
      return result;
    }

    if (method == 'machine' && level == 'beginner') {
      const dataArray = [machineBeginnerA, machineBeginnerB, machineBeginnerC];
      const filteredArray: Program[] = dataArray.filter(
        (program) => program.id != id,
      );
      const randomIndex = this.getRandomIndex(filteredArray.length);
      const result = this.applyGenderToProgram(
        filteredArray[randomIndex],
        gender,
      );
      return result;
    } else if (method == 'machine' && level == 'elementary') {
      const dataArray = [
        machineElementaryA,
        machineElementaryB,
        machineElementaryC,
      ];
      const filteredArray: Program[] = dataArray.filter(
        (program) => program.id != id,
      );

      const randomIndex = this.getRandomIndex(dataArray.length);
      const result = this.applyGenderToProgram(
        filteredArray[randomIndex],
        gender,
      );
      return result;
    } else if (method == 'machine' && level == 'intermediate') {
      const dataArray = [
        machineIntermediateA,
        machineIntermediateB,
        machineIntermediateC,
      ];
      const filteredArray: Program[] = dataArray.filter(
        (program) => program.id != id,
      );
      const randomIndex = this.getRandomIndex(filteredArray.length);
      const result = this.applyGenderToProgram(
        filteredArray[randomIndex],
        gender,
      );
      return result;
    } else if (method == 'machine' && level == 'advanced') {
      const dataArray = [machineAdvancedA, machineAdvancedB, machineAdvancedC];
      const filteredArray: Program[] = dataArray.filter(
        (program) => program.id != id,
      );
      const randomIndex = this.getRandomIndex(filteredArray.length);

      const result = this.applyGenderToProgram(
        filteredArray[randomIndex],
        gender,
      );
      return result;
    } else {
      throw new BadRequestException('Invalid parameter');
    }
  }

  getProgramById(method: string, level: string, gender: Gender, id: string) {
    if (method == 'body' && level == 'beginner') {
      const dataArray = [bodyBegginerA, bodyBegginerB, bodyBegginerC];
      const selectedResult = dataArray.find((program) => program.id == id);

      const result = this.applyGenderToProgram(selectedResult, gender);
      return result;
    } else if (method == 'body' && level == 'elementary') {
      const dataArray = [bodyElementaryA, bodyElementaryB, bodyElementaryC];
      const selectedResult = dataArray.find((program) => program.id == id);

      const result = this.applyGenderToProgram(selectedResult, gender);
      return result;
    } else if (method == 'body' && level == 'intermediate') {
      const dataArray = [
        bodyIntermediateA,
        bodyIntermediateB,
        bodyIntermediateC,
      ];
      const selectedResult = dataArray.find((program) => program.id == id);

      const result = this.applyGenderToProgram(selectedResult, gender);
      return result;
    } else if (method == 'body' && level == 'advanced') {
      const dataArray = [bodyAdvancedA, bodyAdvancedB, bodyAdvancedC];
      const selectedResult = dataArray.find((program) => program.id == id);

      const result = this.applyGenderToProgram(selectedResult, gender);
      return result;
    }

    if (method == 'machine' && level == 'beginner') {
      const dataArray = [machineBeginnerA, machineBeginnerB, machineBeginnerC];

      const selectedResult = dataArray.find((program) => program.id == id);

      const result = this.applyGenderToProgram(selectedResult, gender);
      return result;
    } else if (method == 'machine' && level == 'elementary') {
      const dataArray = [
        machineElementaryA,
        machineElementaryB,
        machineElementaryC,
      ];
      const selectedResult = dataArray.find((program) => program.id == id);

      const result = this.applyGenderToProgram(selectedResult, gender);
      return result;
    } else if (method == 'machine' && level == 'intermediate') {
      const dataArray = [
        machineIntermediateA,
        machineIntermediateB,
        machineIntermediateC,
      ];
      const selectedResult = dataArray.find((program) => program.id == id);

      const result = this.applyGenderToProgram(selectedResult, gender);
      return result;
    } else if (method == 'machine' && level == 'advanced') {
      const dataArray = [machineAdvancedA, machineAdvancedB, machineAdvancedC];
      const selectedResult = dataArray.find((program) => program.id == id);

      const result = this.applyGenderToProgram(selectedResult, gender);
      return result;
    } else {
      throw new BadRequestException('Invalid parameter');
    }
  }

  getRandomIndex(count: number) {
    const randomIndex = Math.floor(Math.random() * count);
    return randomIndex;
  }

  private applyGenderToProgram(program: Program, gender: Gender): Program {
    const copiedProgram = JSON.parse(JSON.stringify(program));

    return {
      ...copiedProgram,
      dayWorkouts: copiedProgram.dayWorkouts.map((workout) => ({
        ...workout,
        imageName: `${getRandomImageByType(
          this.getExerciseTypeFromTitle(workout.title), program.methodType
        )}${GenderType[gender]}`,
      })),
    };
  }

  private getExerciseTypeFromTitle(title: string): ExerciseTypeKeys {
    if (title.includes('상체 근련')) {
      return ExerciseType.UpperBodyStrength;
    } else if (title.includes('하체 근력')) {
      return ExerciseType.LowerBodyStrength;
    } else if (title.includes('코어 강화')) {
      return ExerciseType.CoreStrength;
    } else if (title.includes('전신 운동')) {
      return ExerciseType.FullBodyConditioning;
    } else if (title.includes('상체 지구력')) {
      return ExerciseType.UpperBodyEndurance
    } else if (title.includes('하체 지구력')) {
      return ExerciseType.LowerBodyEndurance;
    } else {
      return ExerciseType.UpperBodyStrength;
    }
  }
}
