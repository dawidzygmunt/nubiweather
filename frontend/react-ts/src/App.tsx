import { Calendar, Cloud, LocateFixedIcon } from 'lucide-react'
import { Card } from './components/ui/card'
import { Separator } from './components/ui/separator'

function App() {
  return (
    <div className="min-h-screen w-full flex p-10 bg-[#0b0b0e]">
      <div>
        <Card className="p-5 bg-[#242222] text-white border-0 ">
          <span>Now</span>
          <div className="flex items-center gap-10">
            <span className="text-4xl">5oC </span>
            <Cloud size={60} />
          </div>
          <p className="text-xs">Broken Clouds</p>
          <Separator className="my-3" />
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={15} />
              Wed 12
            </div>
            <div className="flex items-center gap-2">
              <LocateFixedIcon size={15} />
              Gliwice, PL
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
