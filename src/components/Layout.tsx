import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data/content'

type NavItem = { label: string; to: string }

const items: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
]

export default function Layout() {
  const location = useLocation()
  // Initialized once at mount; a re-render never changes the copyright year.
  const [year] = useState(() => new Date().getFullYear())

  return (
    <>
      <header className="sticky-header">
        <NavLink to="/" className="logo">
          Ulwan<span>.</span>
        </NavLink>
        <nav aria-label="Primary">
          <ul>
            {items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={location.pathname === item.to ? 'active' : undefined}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contact" className="nav-cta">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© {year} {profile.fullName} · Semarang, Indonesia</p>
        <div className="foot-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </footer>
    </>
  )
}
