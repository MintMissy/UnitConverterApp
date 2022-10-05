import { TemperatureUnit } from './temperature-unit';
import { Temperature } from '../enum/temperature';

export class KelvinUnit extends TemperatureUnit {
  constructor() {
    super(Temperature.Kelvin);
  }

  convertFromBaseUnit(value: number): number {
    return 0;
  }

  getBaseUnitValue(value: number): number {
    return 0;
  }
}
