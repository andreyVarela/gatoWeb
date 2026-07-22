import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = 'https://gato-app.com'

const links = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Preguntas', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById('hero')
      const heroBottom = heroEl ? heroEl.offsetHeight - 80 : window.innerHeight - 80
      setScrolled(window.scrollY > heroBottom)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-soft border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/images/gato-icon.png"
              alt="GATO"
              className={`w-10 h-10 object-contain transition-all group-hover:scale-105 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
            <img
              src="/images/gato-logo.png"
              alt="gato"
              className={`h-5 object-contain hidden sm:block transition-all ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 text-sm transition-colors rounded-lg ${
                  scrolled
                    ? 'text-muted-foreground hover:text-app-text hover:bg-muted'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#comunidades"
              className={`px-3 py-2 text-sm transition-colors rounded-lg ${
                scrolled
                  ? 'text-muted-foreground hover:text-app-text'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Soy residente
            </a>
            <Button
              asChild
              size="sm"
              className={`rounded-full font-semibold ${
                scrolled
                  ? 'bg-coral hover:bg-coral-600 text-white'
                  : 'bg-white text-coral-700 hover:bg-white/90'
              }`}
            >
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Ingresar como profesional
                <ArrowRight />
              </a>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2.5 rounded-lg transition-colors ${
              scrolled ? 'hover:bg-muted' : 'hover:bg-white/10'
            }`}
            aria-label="Menú"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-app-text' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-app-text' : 'text-white'}`} />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-4 text-lg font-medium text-app-text hover:text-coral transition-colors rounded-xl hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-coral hover:bg-coral-600 text-white rounded-full font-semibold"
              >
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                  Ingresar como profesional
                  <ArrowRight />
                </a>
              </Button>
              <a
                href="#comunidades"
                onClick={() => setMobileOpen(false)}
                className="text-center text-sm text-muted-foreground py-2"
              >
                Soy residente
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
