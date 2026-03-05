import { ArrowLeft, Clock, MapPin } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { FallbackImage } from '../components/FallbackImage'
import { useRestaurants } from '../features/hooks'


export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams()
  const { data, isLoading, isError, refetch } = useRestaurants()

  const refetchRestaurant = () => {
    refetch()
  }

  if (isLoading) {
    return <p>is loading...</p>
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

  return (
    <main className="mx-auto max-w-3xl">
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

      <section className="px-4">
        <div className="border-b border-gray-300 pb-4">
          <h1 className="mt-4 text-2xl font-bold text-center">{restaurant.name}</h1>
          <p className="text-center text-gray-500">{restaurant.cuisines.join(' • ')}</p>
        </div>
      </section>
    </main>
  )
}
