import { TemperatureUnit } from './temperature-unit';
import { Temperature } from '../enum/temperature';

export class FahrenheitUnit extends TemperatureUnit {
  constructor() {
    super(Temperature.Fahrenheit);
  }

  convertFromBaseUnit(value: number): number {
    return 0;
  }

  getBaseUnitValue(value: number): number {
    return 0;
  }
}
