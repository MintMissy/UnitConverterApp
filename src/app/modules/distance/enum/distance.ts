import { MetricUnit } from '../../../model/metric-unit';

export class Distance extends MetricUnit {
  private static values: { [name: string]: Distance } = {};

  static readonly NANOMETER = new Distance(1, 'NANOMETER', Math.pow(10, -7));
  static readonly MICROMETER = new Distance(2, 'MICROMETER', Math.pow(10, -4));
  static readonly MILLIMETER = new Distance(3, 'MILLIMETER', 0.1);
  static readonly CENTIMETER = new Distance(4, 'CENTIMETER', 1);
  static readonly DECIMETER = new Distance(5, 'DECIMETER', 10);
  static readonly METER = new Distance(6, 'METER', 100);
  static readonly KILOMETER = new Distance(7, 'KILOMETER', 100000);

  static readonly INCH = new Distance(8, 'INCH', 2.54);
  static readonly FOOT = new Distance(9, 'FOOT', 30.48);
  static readonly YARD = new Distance(10, 'YARD', 91.44);
  static readonly MILE = new Distance(11, 'MILE', 160934);
  static readonly NAUTICAL_MILE = new Distance(12, 'NAUTICAL_MILE', 185200);

  private constructor(id: number, name: string, baseUnitValue: number) {
    super(id, name, baseUnitValue);
    Distance.values[name] = this;
  }

  public static parse(name: string): Distance {
    return Distance.values[name];
  }
}
