import { DayWorkout } from './dayWorkout.entity';

export class WeeklyWorkout {
  id: string;
  type: string;
  title: string;
  subTitle: string;
  expectedMinute: number;
  minExpectedCalories: number;
  maxExpectedCalories: number;
  dayWorkouts: Array<DayWorkout>;
}
