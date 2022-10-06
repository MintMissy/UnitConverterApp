import { MetricUnit } from '../../../model/metric-unit';

export class Area extends MetricUnit {
  private static values: { [name: string]: Area } = {};

  static readonly SQUARE_CENTIMETER = new Area(1, 'SQUARE_CENTIMETER', 0.0001);
  static readonly SQUARE_DECIMETER = new Area(2, 'SQUARE_DECIMETER', 0.01);
  static readonly SQUARE_METER = new Area(3, 'SQUARE_METER', 1);
  static readonly SQUARE_KILOMETER = new Area(4, 'SQUARE_KILOMETER', 1000000);

  static readonly SQUARE_INCH = new Area(5, 'SQUARE_INCH', 0.00064516);
  static readonly SQUARE_FOOT = new Area(6, 'SQUARE_FOOT', 0.09290391328855555908);
  static readonly SQUARE_YARD = new Area(7, 'SQUARE_YARD', 0.836135219597);
  static readonly ACRE = new Area(8, 'ACRE', 4046.86);
  static readonly SQUARE_MILE = new Area(9, 'SQUARE_MILE', 2590012.4562236671336);

  static readonly ARE = new Area(10, 'ARE', 100);
  static readonly HECTARE = new Area(11, 'HECTARE', 10000);

  constructor(id: number, name: string, baseUnitValue: number) {
    super(id, name, baseUnitValue);
    Area.values[name] = this;
  }

  public static parse(name: string): Area {
    return Area.values[name];
  }
}
