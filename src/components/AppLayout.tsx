import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const AppLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 pb-6">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}
