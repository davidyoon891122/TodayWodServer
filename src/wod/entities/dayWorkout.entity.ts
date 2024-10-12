import { Wod } from './wod.entity';

export class DayWorkout {
  id: string;
  type: string;
  wods: Array<Wod>;
}
