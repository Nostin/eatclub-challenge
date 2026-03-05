import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { fetchRestaurants } from './api'

export function useRestaurants() {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  })
}
