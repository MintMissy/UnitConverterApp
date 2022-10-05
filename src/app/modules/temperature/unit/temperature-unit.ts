import { Unit } from '../../../model/unit';
import { Temperature } from '../enum/temperature';

export class TemperatureUnit extends Unit {
  group: Temperature;

  constructor(group: Temperature) {
    super();
    this.group = group;
  }
}
