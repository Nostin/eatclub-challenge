import { useMemo, useState } from 'react'
import { RestaurantCard } from '../components/RestaurantCard'
import { SearchBar } from '../components/SearchBar'
import { useRestaurants } from '../features/hooks'
import { filterRestaurants, sortRestaurantsByBestDeal } from '../features/utils'

export const RestaurantListPage = () => {
  const { data, isLoading, isError, refetch } = useRestaurants()
  const [searchTerm, setSearchTerm] = useState('')

  const restaurants = useMemo(() => {
    const source = data ?? []
    const filtered = filterRestaurants(source, searchTerm)
    return sortRestaurantsByBestDeal(filtered)
  }, [data, searchTerm])

  const refetchRestaurants = () => {
    refetch()
  }

  if (isLoading) {
    return (
      <p>is loading...</p>
    )
  }

  if (isError) {
    return (
      <main className="flex flex-col items-center gap-4 p-4">
        <p className="text-gray-600">Something went wrong loading restaurants.</p>
        <button
          onClick={refetchRestaurants}
          type="button"
          className="rounded-lg bg-eatclubred px-4 py-2 text-white hover:bg-eatclubred/90 focus:outline-none focus:ring-2 focus:ring-eatclubred focus:ring-offset-2"
        >
          Try again
        </button>
      </main>
    )
  }

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} disabled={isLoading} />

      <article className="w-full py-4">
        {restaurants.length === 0 ? (
          <p className="py-8 text-center text-gray-500">No restaurants found</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </article>
    </>
  )
}
