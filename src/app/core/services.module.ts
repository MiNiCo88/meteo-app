import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { LocationService } from './services/location.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    WeatherService,
    LocationService,
  ]
})

export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule
    };
  }
}
