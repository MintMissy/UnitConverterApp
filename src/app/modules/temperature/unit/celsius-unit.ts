import { TemperatureUnit } from './temperature-unit';
import { Temperature } from '../enum/temperature';

export class CelsiusUnit extends TemperatureUnit {
  constructor() {
    super(Temperature.Celsius);
  }

  convertFromBaseUnit(value: number): number {
    return 0;
  }

  getBaseUnitValue(value: number): number {
    return 0;
  }
}
