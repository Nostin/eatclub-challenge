import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/AppLayout'
import { RestaurantDetailPage } from '../pages/RestaurantDetailPage'
import { RestaurantListPage } from '../pages/RestaurantListPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <RestaurantListPage />,
      },
      {
        path: 'restaurant/:restaurantId',
        element: <RestaurantDetailPage />,
      },
    ],
  },
])
