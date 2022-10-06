import { EnumIdentity } from '../../../enum/enum-identity';
import { Unit } from '../../../model/unit';

export class Temperature extends Unit implements EnumIdentity {
  private static values: { [id: number]: Temperature } = {};

  static readonly Celsius = new Temperature(0);
  static readonly Fahrenheit = new Temperature(1);
  static readonly Kelvin = new Temperature(2);

  private constructor(public readonly id: number) {
    super();
    Temperature.values[id] = this;
  }
}
