import { useGetWeather } from './hooks/useGetWeather'
import WeatherTile from './components/weatherTile'
import { useGetForecast } from './hooks/useGetForecast'
import ForecastDisplay from './components/forecastDisplay'
import Loader from './components/loader'

function App() {
  const { data: weather, isLoading: weatherIsLoading } = useGetWeather()
  const { data: forecast, isLoading: forecastIsLoading } = useGetForecast()

  if (weatherIsLoading || forecastIsLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0b0b0e]">
        <Loader />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col gap-8 p-10 bg-[#0b0b0e]">
      <div className="flex flex-col items-center sm:flex-row gap-10 ">
        {weather?.map((data) => (
          <WeatherTile
            data={data}
            key={`${data.city}-${data.wind_kph}`}
          />
        ))}
      </div>
      <div className="text-white flex-col xs:items-center sm:flex-row flex gap-10">
        {forecast?.map((city) => (
          <ForecastDisplay
            data={city}
            key={`${city[0].city}-${city[0].date}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
