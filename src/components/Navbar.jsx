import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-gold/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-display text-xl text-gold font-bold">BIO Vitrine</div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'FAQ', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-cream/70 hover:text-cream transition"
            >
              {item}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-gold hover:bg-gold/90 text-dark font-bold px-6 py-2 rounded-full transition"
          >
            Comprar
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cream"
        >
          ☰
        </button>
      </div>
    </nav>
  )
}