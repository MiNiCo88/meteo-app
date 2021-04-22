import { TestBed } from '@angular/core/testing';

import { OpenWeatherMapApi } from './open-weather-map.api';

describe('OpenWeatherMapService', () => {
  let service: OpenWeatherMapApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenWeatherMapApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
