import { Workout } from './Workout.entity';

export class DayWorkout {
  id: string;
  type: string;
  title: string;
  subTitle: string;
  expectedMinute: number;
  minExpectedCalorie: number;
  maxExpectedCalorie: number;
  workouts: Array<Workout>;
}
