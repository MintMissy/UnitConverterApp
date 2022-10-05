import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseConverterComponent } from '../../../component/base-converter.component';
import { Temperature } from '../enum/temperature';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureConverterComponent
  extends BaseConverterComponent
  implements OnInit
{
  constructor() {
    super(Temperature.Celsius, Temperature.Kelvin);
  }

  ngOnInit(): void {}
}
