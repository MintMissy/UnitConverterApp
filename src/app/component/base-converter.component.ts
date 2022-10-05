import { Component, Inject } from '@angular/core';
import Unit from '../model/interface/unit';

@Component({
  template: '',
})
export class BaseConverterComponent {
  unitFrom: Unit;
  unitTo: Unit;

  valueBeforeConversion = 0;
  convertedValue = 0;

  constructor(@Inject('unitFrom') unitFrom: Unit, @Inject('unitTo') unitTo: Unit) {
    this.unitFrom = unitFrom;
    this.unitTo = unitTo;
  }

  convert() {
    const valueInBaseUnit = this.unitFrom.getBaseUnitValue(this.valueBeforeConversion);
    this.convertedValue = this.unitTo.convertFromBaseUnit(valueInBaseUnit);
  }
}
