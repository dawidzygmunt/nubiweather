export interface WeatherData {
  city: string;
  temp_c: number;
  condition: string;
  humidity: number;
  wind_kph: number;
}

export interface ForecastData extends WeatherData {
  date: string;
}
