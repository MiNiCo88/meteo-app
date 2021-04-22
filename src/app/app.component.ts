import {Component, OnInit} from '@angular/core';
import {WeatherService} from './core/services/weather.service';
import {LocationService} from './core/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'meteo-app';
  public currentWeather = {};
  public forecast = [];
  public locationError = false;
  public isLocationEnabled = false;

  constructor(private weatherService: WeatherService, private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getPosition().then((data) => {
      this.getCurrentWeather(data);
      this.getForecast(data);
    }, () => {
      this.locationError = true;
    });
  }
  getCurrentWeather(data: any): void {
    this.weatherService.getCurrentWeather(data)
      .then((weather) => {
        this.currentWeather = weather;
        this.isLocationEnabled = true;
      });
  }
  getForecast(data: any): void {
    this.weatherService.getForecast(data)
      .then((forecast) => {
        this.forecast = forecast;
        this.isLocationEnabled = true;
      });
  }
}
