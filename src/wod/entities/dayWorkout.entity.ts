import { WodType } from './program.entity';
import { Wod } from './wod.entity';

export class DayWorkout {
  id: string;
  type: WodType;
  wods: Array<Wod>;
}
