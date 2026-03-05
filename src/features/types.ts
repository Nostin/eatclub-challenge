export type RawDeal = {
  objectId: string
  discount: string
  dineIn: string
  lightning: string
  open?: string
  close?: string
  start?: string
  end?: string
  qtyLeft: string
}

export type RawRestaurant = {
  objectId: string
  name: string
  address1: string
  suburb: string
  cuisines: string[]
  imageLink: string
  open?: string
  close?: string
  deals: RawDeal[]
}

export type RawRestaurantsResponse = {
  restaurants: RawRestaurant[]
}

export type Deal = {
  id: string
  discount: number
  dineIn: boolean
  lightning: boolean
  startTime?: string
  endTime?: string
  qtyLeft: number
}

export type Restaurant = {
  id: string
  name: string
  address1: string
  suburb: string
  cuisines: string[]
  imageUrl: string
  open?: string
  close?: string
  deals: Deal[]
}
