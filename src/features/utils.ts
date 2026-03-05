import type { Deal, RawDeal, RawRestaurant, Restaurant } from './types'

export function normaliseDeal(raw: RawDeal): Deal {
  return {
    id: raw.objectId,
    discount: Number(raw.discount),
    dineIn: raw.dineIn === 'true',
    lightning: raw.lightning === 'true',
    startTime: raw.start ?? raw.open,
    endTime: raw.end ?? raw.close,
    qtyLeft: Number(raw.qtyLeft),
  }
}

export function normaliseRestaurant(raw: RawRestaurant): Restaurant {
  return {
    id: raw.objectId,
    name: raw.name.trim(),
    address1: raw.address1,
    suburb: raw.suburb,
    cuisines: raw.cuisines,
    imageUrl: raw.imageLink,
    open: raw.open,
    close: raw.close,
    deals: raw.deals.map(normaliseDeal),
  }
}

export function getBestDeal(restaurant: Restaurant): Deal | null {
  if (!restaurant.deals.length) return null
  const maxDiscount = Math.max(...restaurant.deals.map((d) => d.discount))
  return restaurant.deals.find((d) => d.discount === maxDiscount) ?? null
}

export function sortRestaurantsByBestDeal(restaurants: Restaurant[]): Restaurant[] {
  return [...restaurants].sort(
    (a, b) => (getBestDeal(b)?.discount ?? 0) - (getBestDeal(a)?.discount ?? 0)
  )
}

export function sortDealsByHighestDiscount(deals: Deal[]): Deal[] {
  return [...deals].sort((a, b) => b.discount - a.discount)
}

export function formatDealTime(start?: string, end?: string): string {
  if (start && end) return `${start} - ${end}`
  if (start) return `From ${start}`
  if (end) return `Until ${end}`
  return 'Any time today'
}

export function filterRestaurants(restaurants: Restaurant[], searchTerm: string): Restaurant[] {
  const query = searchTerm.trim().toLowerCase()

  if (!query) return restaurants

  return restaurants.filter((restaurant) => {
    const nameMatch = restaurant.name.toLowerCase().includes(query)
    const cuisineMatch = restaurant.cuisines.some((cuisine) =>
      cuisine.toLowerCase().includes(query)
    )

    return nameMatch || cuisineMatch
  })
}
