import { WeeklyWorkout } from './weeklyWorkout.entity';

export class Program {
  id: string;
  methodType: string;
  level: string;
  weeklyWorkouts: Array<WeeklyWorkout>;
}
