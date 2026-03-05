import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Restaurant } from '../features/types'
import { formatDealTime, getBestDeal } from '../features/utils'
import { FallbackImage } from './FallbackImage'

type RestaurantCardProps = {
  restaurant: Restaurant
}

const DealTile = ({
  pct,
  dineIn,
  from,
  until,
}: {
  pct: number
  dineIn: boolean
  from?: string
  until?: string
}) => {
  const timeValidityClasses = 'text-xs font-normal text-white'
  return (
    <div className="rounded-md bg-eatclubred/90 px-3 py-1 text-sm font-semibold text-white shadow">
      <p>
        {pct}% off {dineIn ? ' - Dine in' : ''}
      </p>
      <p className={timeValidityClasses}>{formatDealTime(from, until)}</p>
    </div>
  )
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const bestDeal = getBestDeal(restaurant)

  return (
    <div className="block overflow-hidden rounded-md border border-gray-300">
      <Link to={`/restaurant/${restaurant.id}`} className="text-inherit no-underline">
        <div className="relative h-44 w-full overflow-hidden">
          <FallbackImage
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          {bestDeal && (
            <div className="absolute left-3 top-3">
              <DealTile pct={bestDeal.discount} dineIn={bestDeal.dineIn} />
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <Link
            to={`/restaurant/${restaurant.id}`}
            className="mb-2 text-inherit no-underline rounded-lg hover:text-eatclubred active:bg-eatclubred/20 focus:outline-none focus:ring-2 focus:ring-eatclubred focus:ring-offset-2"
          >
            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          </Link>
          <button
            type="button"
            className="rounded-lg hover:bg-eatclubred/10 active:scale-95 active:bg-eatclubred/20 focus:outline-none focus:ring-2 focus:ring-eatclubred focus:ring-offset-2"
          >
            <Heart />
          </button>
        </div>
        <p className="mb-2 text-sm text-gray-600">{restaurant.suburb}</p>
        <p className="text-xs font-semibold text-gray-600">{restaurant.cuisines.join(' • ')}</p>
      </div>
    </div>
  )
}
