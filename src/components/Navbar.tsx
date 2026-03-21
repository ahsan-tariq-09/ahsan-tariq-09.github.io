import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import type { Theme } from '../types'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          Ahsan.dev
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </div>
    </header>
  )
}