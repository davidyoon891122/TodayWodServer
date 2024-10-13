import { Wod } from './wod.entity';
import { WodType } from './type/wod.type';

export class DayWorkout {
  id: string;
  type: WodType;
  wods: Array<Wod>;
}
