import { Injectable } from '@angular/core';
import { OpenWeatherMapApi } from '../apis/open-weather-map.api';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(protected weatherApi: OpenWeatherMapApi ) { }

  public async getCurrentWeather(cord: any): Promise<any> {
    const response = await this.weatherApi.getCurrentWeather(cord).toPromise();
    return {
      city: response.name,
      icon: response.weather[0].icon,
      condition: response.weather[0].description,
      temp: response.main.temp,
      lastUpdate: new Date(response.dt * 1000),
    };
  }
  public async getForecast(cord: any): Promise<any> {
    const response = await this.weatherApi.getForecast(cord).toPromise();
    return response?.list.map((item: any) => ({
      icon: item.weather[0].icon,
      condition: item.weather[0].description,
      temp: item.main.temp,
      dt: new Date(item.dt * 1000),
    }));
  }
}
