import { Calendar, MapPin } from 'lucide-react'
import { Card } from './ui/card'
import { WeatherData } from '@/types/types'
import { Separator } from './ui/separator'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'

const WeatherTile = ({ data }: { data: WeatherData }) => {
  const date = format(new Date(), 'EEEE d, MMM', { locale: enUS })
  return (
    <div className="w-[280px]">
      <Card className="p-5 bg-[#242222] text-white border-0 ">
        <span>Now</span>
        <div className="flex items-center gap-8">
          <span className="text-5xl font-semibold">
            {data?.temp_c.toFixed(0)}&deg;C
          </span>
          <img
            src={data.icon}
            alt="weather icon"
            className="w-24 h-24"
          />
        </div>
        <p className="text-xs">{data?.condition}</p>
        <Separator className="my-3 bg-white/20" />
        <div className="flex flex-col gap-1 text-sm ">
          <div className="flex items-center gap-2">
            <Calendar size={15} />
            <span className="text-white/30">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <span className="text-white/30">{data?.city}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default WeatherTile
