import type { RawRestaurantsResponse, Restaurant } from './types'
import { normaliseRestaurant } from './utils'

// Brief specifies: https://eccdn.com.au/misc/challengedata.json — use that URL in production; local mock used here for dev/offline
const RESTAURANTS_URL = '/mock-data/challengedata.json'
const ENABLE_ARTIFICIAL_DELAY = true
const ARTIFICIAL_DELAY_MS = 400

function delay(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  if (ENABLE_ARTIFICIAL_DELAY) {
    await delay(ARTIFICIAL_DELAY_MS)
  }

  const response = await fetch(RESTAURANTS_URL)

  if (!response.ok) {
    throw new Error(`Failed to fetch restaurants: ${response.status}`)
  }

  const data = (await response.json()) as RawRestaurantsResponse

  return data.restaurants.map(normaliseRestaurant)
}
