import { Zap } from 'lucide-react'
import type { Deal } from '../features/types'
import { formatDealTime } from '../features/utils'

type DealCardProps = {
  deal: Deal
}

export const DealCard = ({ deal }: DealCardProps) => {
  const timeValidityClasses = 'text-gray-500 font-normal'
  return (
    <div className="flex items-center justify-between border-t border-gray-300 pt-4">
      <div>
        <span className="flex items-center gap-2">
          {deal.lightning && <Zap className="mb-2 text-yellow-500" />}
          <h3 className="mb-2 font-bold text-eatclubred">{deal.discount}% Off</h3>
        </span>
        <p className={timeValidityClasses}>{formatDealTime(deal.startTime, deal.endTime)}</p>
        <p className="mb-2 text-xs text-gray-400">{deal.qtyLeft} deals left</p>
      </div>
      <button
        type="button"
        className="rounded-full border py-1 px-4 cursor-pointer text-eatclubred hover:bg-eatclubred/10 active:scale-95 active:bg-eatclubred/20 focus:outline-none focus:ring-2 focus:ring-eatclubred focus:ring-offset-2"
      >
        Redeem
      </button>
    </div>
  )
}
