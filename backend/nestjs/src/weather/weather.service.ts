import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom, map } from 'rxjs';
import { ForecastData, WeatherData } from './weather.interface';

@Injectable()
export class WeatherService {
  private readonly cities = ['Gliwice', 'Hamburg'];
  private readonly cacheTimeout = 180000; // 3 minutes
  private cache = new Map<string, { data: any; timestamp: number }>();

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private getCacheKey(city: string, endpoint: string): string {
    return `${city}-${endpoint}`;
  }

  private isCacheValid(key: string): boolean {
    const cached = this.cache.get(key);
    if (!cached) return false;
    return Date.now() - cached.timestamp < this.cacheTimeout;
  }

  private async fetchWeatherApi(endpoint: string, city: string) {
    const baseUrl = this.configService.get<string>('weatherApi.baseUrl');
    const apiKey = this.configService.get<string>('weatherApi.key');

    const separator = endpoint.includes('?') ? '&' : '?';

    return firstValueFrom(
      this.httpService
        .get(`${baseUrl}${endpoint}${separator}key=${apiKey}&q=${city}`)
        .pipe(
          map((response) => response.data),
          catchError((error) => {
            console.log(error);
            throw new Error(`Weather API error: ${error.message}`);
          }),
        ),
    );
  }

  async getCurrentWeather(): Promise<WeatherData[]> {
    const results = await Promise.all(
      this.cities.map(async (city) => {
        const cacheKey = this.getCacheKey(city, 'current');

        if (this.isCacheValid(cacheKey)) {
          return this.cache.get(cacheKey).data;
        }

        const data = await this.fetchWeatherApi('/current.json', city);
        const weather: WeatherData = {
          city,
          temp_c: data.current.temp_c,
          condition: data.current.condition.text,
          humidity: data.current.humidity,
          wind_kph: data.current.wind_kph,
        };

        this.cache.set(cacheKey, { data: weather, timestamp: Date.now() });
        return weather;
      }),
    );

    return results;
  }

  async getForecastWeather(days: number = 5): Promise<ForecastData[][]> {
    const results = await Promise.all(
      this.cities.map(async (city) => {
        const cacheKey = this.getCacheKey(city, `forecast-${days}`);

        if (this.isCacheValid(cacheKey)) {
          return this.cache.get(cacheKey).data;
        }

        const data = await this.fetchWeatherApi(
          `/forecast.json?days=${days}`,
          city,
        );
        const forecast = data.forecast.forecastday.map((day) => ({
          city,
          date: day.date,
          temp_c: day.day.avgtemp_c,
          condition: day.day.condition.text,
          humidity: day.day.avghumidity,
          wind_kph: day.day.maxwind_kph,
        }));

        this.cache.set(cacheKey, { data: forecast, timestamp: Date.now() });
        return forecast;
      }),
    );

    return results;
  }
}
