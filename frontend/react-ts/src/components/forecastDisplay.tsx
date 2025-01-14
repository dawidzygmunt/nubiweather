import { WeatherDataWithDate } from '@/types/types'
import { Card } from './ui/card'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'

const ForecastDisplay = ({ data }: { data: WeatherDataWithDate[] }) => {
  return (
    <div className="flex flex-col">
      <h3 className="p-2">5 Days Forecast</h3>
      <Card className="rounded-xl shadow p-5 bg-[#242222] text-white border-0">
        <h3>{data[0].city}</h3>
        {data.map((singleDay) => (
          <div
            className="flex gap-10 justify-between items-center"
            key={`${singleDay.date}-${singleDay.temp_c}-${singleDay.wind_kph}`}
          >
            <div className="flex gap-2 items-center w-[70px] justify-between">
              <img
                src={singleDay.icon}
                alt="weather icon"
                className="w-10 h-10"
              />
              <span className="text-lg text-right">
                {singleDay.temp_c.toFixed(0)}&deg;
              </span>
            </div>
            <div className="text-xs text-[#a1a1a1]">
              {format(new Date(singleDay.date), 'd MMM')}
            </div>
            <div className="text-xs text-right text-[#a1a1a1] w-[60px]">
              {format(new Date(singleDay.date), 'EEEE', { locale: enUS })}
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default ForecastDisplay
