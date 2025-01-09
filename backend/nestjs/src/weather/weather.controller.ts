import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('realtime-weather')
  getRealTimeWeather() {
    return this.weatherService.getCurrentWeather();
  }

  @Get('forecast-weather')
  async getForecastWeather(@Query('days') days: number) {
    return this.weatherService.getForecastWeather(days);
  }
}
