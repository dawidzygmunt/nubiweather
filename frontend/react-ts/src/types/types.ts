export interface WeatherData {
  city: string
  temp_c: number
  condition: string
  humidity: number
  wind_kph: number
  icon: string
}

export interface WeatherDataWithDate extends WeatherData {
  date: string
}

export type WeatherResponse = WeatherDataWithDate[]
