import { Injectable } from '@nestjs/common';
import { CreateWodDto } from './dto/create-wod.dto';
import { UpdateWodDto } from './dto/update-wod.dto';
import { Program } from './entities/program.entity';
// import { v4 as uuidv4 } from 'uuid';
import { WeeklyWorkout } from './entities/weeklyWorkout.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class WodService {
  findProgram(method: string, level: string) {
    return this.createProgram(method, level);
  }

  createProgram(method: string, level: string) {
    const program = new Program();
    program.id = randomUUID();
    program.level = level;
    program.methodType = method;
    program.weeklyWorkouts = [];

    return program;
  }
}
