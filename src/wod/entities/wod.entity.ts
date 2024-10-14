import { WodSet } from './wodset.entity';

export class Wod {
  id: string;
  title: string;
  subTitle: string;
  unit: string;
  unitValue: number;
  set?: number;
  wodSets?: Array<WodSet>;
}
