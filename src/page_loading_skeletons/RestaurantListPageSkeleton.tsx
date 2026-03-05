import { Skeleton } from '../components/Skeleton'

export const RestaurantListPageSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300">
      <Skeleton className="h-44 w-full rounded-none" />
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="size-5 rounded-full" />
        </div>
        <Skeleton className="mb-2 h-4 w-1/2" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  )
}
