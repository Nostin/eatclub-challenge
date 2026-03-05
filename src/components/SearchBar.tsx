import { SearchIcon } from 'lucide-react'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

export const SearchBar = ({ value, onChange, disabled = false }: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className="flex items-center gap-2 mb-4 w-full border-b border-t border-gray-300 pl-4">
      <SearchIcon className="size-5 shrink-0" />
      <input
        id="search-input"
        type="text"
        placeholder="e.g. chinese, pizza"
        value={value}
        onChange={handleChange}
        className="w-full p-3 text-sm outline-none transition focus:border-eatclubred focus:ring-2 focus:ring-eatclubred/20 sm:text-base"
        disabled={disabled}
      />
    </div>
  )
}
