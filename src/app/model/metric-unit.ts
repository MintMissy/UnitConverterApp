import { Unit } from './unit';

export abstract class MetricUnit extends Unit {
  protected constructor(
    id: number,
    name: string,
    protected readonly baseUnitValue: number
  ) {
    super(id, name);
  }

  protected getBaseUnitValue(value: number) {
    return value * this.baseUnitValue;
  }

  convertTo(value: number, toUnit: MetricUnit): number {
    const baseUnitValue = this.getBaseUnitValue(value);
    return toUnit.convertFromBaseUnit(baseUnitValue);
  }

  convertFrom(value: number, fromUnit: MetricUnit): number {
    const baseUnitValue = fromUnit.getBaseUnitValue(value);
    return this.convertFromBaseUnit(baseUnitValue);
  }

  convertFromBaseUnit(value: number): number {
    return value / this.baseUnitValue;
  }
}
