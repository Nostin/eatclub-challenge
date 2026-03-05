import { Skeleton } from '../components/Skeleton'

export const RestaurantDetailPageSkeleton = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg p-2">
        <Skeleton className="size-5" />
        <Skeleton className="h-4 w-12" />
      </div>
      <Skeleton className="h-56 w-full rounded-none" />
      <ul className="flex items-center justify-between border-b border-gray-300 px-2 py-4">
        {['menu', 'call', 'location', 'favourite'].map((id) => (
          <li key={id}>
            <Skeleton className="h-10 w-10 rounded-lg" />
            <Skeleton className="mt-2 h-3 w-10" />
          </li>
        ))}
      </ul>
      <section className="px-4">
        <div className="border-b border-gray-300 pb-4 pt-4">
          <Skeleton className="mx-auto mb-2 h-7 w-3/4" />
          <Skeleton className="mx-auto h-4 w-1/2" />
        </div>
        <div className="flex items-center gap-2 pt-4">
          <Skeleton className="size-5" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div className="flex items-center gap-2 py-4">
          <Skeleton className="size-5" />
          <Skeleton className="h-4 w-56" />
        </div>
        <div className="grid gap-3 pt-4">
          {['deal-1', 'deal-2', 'deal-3'].map((id) => (
            <div
              key={id}
              className="flex items-center justify-between border-t border-gray-300 pt-4"
            >
              <div className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
              <Skeleton className="h-8 w-20 rounded-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
