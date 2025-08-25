import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Utensils } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/why-choose-us', label: 'Why Choose Us?' },
  { to: '/menu', label: 'Explore Menu' },
  { to: '/delivery-payment', label: 'Delivery & Payment' },
  { to: '/follow-us', label: 'Follow Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="container-px flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-500">
            <Utensils className="h-5 w-5" />
          </span>
          <span className="text-lg">TasteBuds</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) => `text-sm hover:text-white/90 ${isActive ? 'text-white' : 'text-white/70'}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/menu" className="btn-primary">Order Now</Link>
        </nav>

        <button className="md:hidden btn-ghost" onClick={() => setOpen(o=>!o)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container-px py-3 space-y-2">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} onClick={()=>setOpen(false)}
                className="block py-2 text-white/90">
                {l.label}
              </NavLink>
            ))}
            <Link to="/menu" className="btn-primary w-full inline-flex justify-center" onClick={()=>setOpen(false)}>
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
