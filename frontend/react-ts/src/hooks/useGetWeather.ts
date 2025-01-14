import { WeatherData } from '@/types/types'
import axiosInstance from '@/utils/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export const useGetWeather = () => {
  return useQuery<WeatherData[]>({
    queryKey: ['weather'],
    queryFn: async () => {
      const response = await axiosInstance.get('/weather/realtime-weather')
      return response.data
    },
  })
}
