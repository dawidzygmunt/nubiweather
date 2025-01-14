import { WeatherResponse } from '@/types/types'
import axiosInstance from '@/utils/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export const useGetForecast = () => {
  return useQuery<WeatherResponse[]>({
    queryKey: ['forecast-weather'],
    queryFn: async () => {
      const response = await axiosInstance.get('/weather/forecast-weather')
      return response.data
    },
  })
}
