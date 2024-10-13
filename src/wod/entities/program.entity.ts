import { WeeklyWorkout } from './weeklyWorkout.entity';
import { MethodType } from './type/method.type';
import { LevelType } from './type/level.type';

export class Program {
  id: string;
  methodType: MethodType;
  level: LevelType;
  weeklyWorkouts: Array<WeeklyWorkout>;
}
