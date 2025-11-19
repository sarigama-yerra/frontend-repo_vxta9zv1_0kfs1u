import { useState } from 'react'
import { Menu } from 'lucide-react'

function MustacheLogo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mendeleeff Mustache Logo"
    >
      <path
        d="M100 40c10-12 26-12 36 0 8 10 28 6 28-10 0-12-10-18-20-18-12 0-22 6-28 12-6-6-16-12-28-12-10 0-20 6-20 18 0 16 20 20 28 10 10-12 26-12 36 0z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { href: '#products', label: 'Stills' },
    { href: '#craft', label: 'Craft' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-white group">
          <MustacheLogo className="w-10 h-10 text-white" />
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">Mendeleeff</div>
            <div className="text-lg font-semibold">Moonshine Atelier</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/70 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">Shop Now</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-white text-black text-center font-medium">Shop Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
