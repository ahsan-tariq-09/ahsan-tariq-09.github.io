import type { Theme } from '../types'

interface ThemeToggleProps {
  theme: Theme
  onToggleTheme: () => void
}

export default function ThemeToggle({
  theme,
  onToggleTheme,
}: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={onToggleTheme}>
      {theme === 'dark' ? 'Dark mode' : 'Light mode'}
    </button>
  )
}