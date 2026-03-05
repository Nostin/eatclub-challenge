import { Link } from 'react-router-dom'
import type { Restaurant } from '../features/types'
import { FallbackImage } from './FallbackImage'

type RestaurantCardProps = {
  restaurant: Restaurant
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {

  return (
    <div className="block overflow-hidden rounded-md border border-gray-300">
      <Link to={`/restaurant/${restaurant.id}`} className="text-inherit no-underline">
        <div className="relative h-44 w-full overflow-hidden">
          <FallbackImage
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="h-full w-full object-cover"
          />
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
        </div>
      </div>
    </div>
  )
}
