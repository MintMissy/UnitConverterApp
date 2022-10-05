import { Unit } from './unit';

export class MetricUnit extends Unit {
  protected baseUnitValue: number;
  protected unitValue: number;

  constructor(baseUnitValue: number, unitValue: number) {
    super();
    this.baseUnitValue = baseUnitValue;
    this.unitValue = unitValue;
  }

  getBaseUnitValue(value: number) {
    return value * this.baseUnitValue;
  }

  convertFromBaseUnit(value: number): number {
    return value / this.baseUnitValue;
  }
}
