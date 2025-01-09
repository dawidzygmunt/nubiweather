import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('realtime-weather')
  getRealTimeWeather() {
    return this.weatherService.getCurrentWeather();
  }
}
