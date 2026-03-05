import { ArrowLeft, Clock, Heart, MapPin, MapPinned, PhoneCall, SquareMenu } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { DealCard } from '../components/DealCard'
import { FallbackImage } from '../components/FallbackImage'
import { useRestaurants } from '../features/hooks'
import { sortDealsByHighestDiscount } from '../features/utils'
import { RestaurantDetailPageSkeleton } from '../page_loading_skeletons/RestaurantDetailPageSkeleton'

const ActionButtonItem = ({ label, icon }: { label: string; icon: React.ReactNode }) => {
  return (
    <button
      type="button"
      className="py-2 px-4 cursor-pointer flex flex-col items-center gap-2 rounded-lg hover:bg-eatclubred/10 active:scale-95 active:bg-eatclubred/20 focus:outline-none focus:ring-2 focus:ring-eatclubred focus:ring-offset-2"
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams()
  const { data, isLoading, isError, refetch } = useRestaurants()

  const refetchRestaurant = () => {
    refetch()
  }

  if (isLoading) {
    return <RestaurantDetailPageSkeleton />
  }

  if (isError || !data) {
    return (
      <main className="flex flex-col items-center gap-4 p-4">
        <p className="text-gray-600">Could not load restaurant.</p>
        <button
          onClick={refetchRestaurant}
          type="button"
          className="rounded-lg bg-eatclubred px-4 py-2 text-white hover:bg-eatclubred/90 focus:outline-none focus:ring-2 focus:ring-eatclubred focus:ring-offset-2"
        >
          Try again
        </button>
      </main>
    )
  }

  const restaurant = data.find((item) => item.id === restaurantId)

  if (!restaurant) {
    return <main className="p-4">Restaurant not found.</main>
  }

  const deals = sortDealsByHighestDiscount(restaurant.deals)

  return (
    <article className="w-full">
      <Link
        to="/"
        className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg p-2 hover:bg-eatclubred/10 active:scale-95 active:bg-eatclubred/20 focus:outline-none focus:ring-2 focus:ring-eatclubred focus:ring-offset-2"
      >
        <ArrowLeft />
        <span>Back</span>
      </Link>

      <FallbackImage
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="h-44 w-full object-cover sm:h-56"
      />

      <ul className="flex items-center justify-between border-b border-gray-300 py-2">
        <li>
          <ActionButtonItem label="Menu" icon={<SquareMenu />} />
        </li>
        <li>
          <ActionButtonItem label="Call Us" icon={<PhoneCall />} />
        </li>
        <li>
          <ActionButtonItem label="Location" icon={<MapPinned />} />
        </li>
        <li>
          <ActionButtonItem label="Favourite" icon={<Heart />} />
        </li>
      </ul>

      <section className="px-4">
        <div className="border-b border-gray-300 pb-4">
          <h1 className="mt-4 text-2xl font-bold text-center">{restaurant.name}</h1>
          <p className="text-center text-gray-500">{restaurant.cuisines.join(' • ')}</p>
        </div>

        <span className="flex items-center gap-2 pt-4 text-gray-500">
          <Clock />
          <p className="font-semibold">
            Hours: {restaurant.open} - {restaurant.close}
          </p>
        </span>
        <span className="flex items-center gap-2 py-4 text-gray-500">
          <MapPin />
          <p className="font-semibold">
            {restaurant.address1}, {restaurant.suburb}
          </p>
        </span>

        <div className="grid gap-3">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>
    </article>
  )
}
