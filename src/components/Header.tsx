import { MenuIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const buttonClasses =
  'cursor-pointer rounded-lg flex h-12 w-12 items-center justify-center transition hover:bg-eatclubred/10 active:scale-95 active:bg-eatclubred/20 focus:outline-none focus:ring-2 focus:ring-eatclubred focus:ring-offset-2'

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-gray-50 py-4">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button type="button" aria-label="User menu" className={buttonClasses}>
          <UserIcon className="size-8 shrink-0" />
        </button>

        <Link to="/" type="button" aria-label="Home" className={buttonClasses}>
          <Logo className="size-10 shrink-0 text-eatclubred" />
        </Link>

        <button type="button" aria-label="Open menu" className={buttonClasses}>
          <MenuIcon className="size-8 shrink-0 bg-grey-100" />
        </button>
      </nav>
    </header>
  )
}
