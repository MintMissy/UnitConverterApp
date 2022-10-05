import { Component, Inject } from '@angular/core';
import { Unit } from '../model/unit';

@Component({
  template: '',
})
export class BaseConverterComponent {
  unitFrom: Unit;
  unitTo: Unit;

  valueBeforeConversion = 0;
  convertedValue = 0;

  constructor(
    @Inject('defaultUnitFrom') defaultUnitFrom: Unit,
    @Inject('defaultUnitTo') defaultUnitTo: Unit
  ) {
    this.unitFrom = defaultUnitFrom;
    this.unitTo = defaultUnitTo;
  }

  convert() {
    // const valueInBaseUnit = this.unitFrom.getBaseUnitValue(this.valueBeforeConversion);
    // this.convertedValue = this.unitTo.convertFromBaseUnit(valueInBaseUnit);
  }
}
