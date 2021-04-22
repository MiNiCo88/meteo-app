import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapApi {

  constructor(protected httpClient: HttpClient) {
  }

  protected baseUrl = 'https://api.openweathermap.org/data/2.5/';

  getCurrentWeather(cord: {lat: string, lng: string}): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}weather?lat=${cord.lat}&lon=${cord.lng}&units=metric&APPID=ac6ca3aca0eb1ea2203309dfad3b8372&lang=it`);
  }
  getForecast(cord: {lat: string, lng: string}): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}forecast?lat=${cord.lat}&lon=${cord.lng}&units=metric&APPID=ac6ca3aca0eb1ea2203309dfad3b8372&lang=it`);
  }
}
