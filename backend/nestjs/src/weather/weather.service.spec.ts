import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

import { of } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let httpService: HttpService;

  const mockHttpService = {
    get: jest.fn(),
  };

  const mockConfigService = {
    get: jest.fn().mockImplementation((key: string) => {
      if (key === 'weatherApi.baseUrl') return 'http://api.weatherapi.com/v1';
      if (key === 'weatherApi.key') return 'test-key';
    }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        WeatherService,
        { provide: HttpService, useValue: mockHttpService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    weatherService = moduleRef.get<WeatherService>(WeatherService);
    httpService = moduleRef.get<HttpService>(HttpService);
  });

  describe('getCurrentWeather', () => {
    it('should return current weather for cities', async () => {
      const mockResponse: AxiosResponse = {
        data: {
          current: {
            temp_c: 20,
            condition: { text: 'Sunny' },
            humidity: 50,
            wind_kph: 10,
          },
        },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };

      jest.spyOn(httpService, 'get').mockImplementation(() => of(mockResponse));

      const result = await weatherService.getCurrentWeather();
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty('temp_c');
      expect(result[0]).toHaveProperty('condition');
    });
  });
});
