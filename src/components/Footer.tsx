import { Separator } from '@/components/ui/separator'
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#como-funciona' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Solicitar acceso', href: 'https://gato-app.com' },
]

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/gato.cr', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/gatocr', label: 'Facebook' },
  { icon: Mail, href: 'mailto:hola@gatohomeservices.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1C1A19] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/images/gato-icon.png"
                alt="GATO"
                className="w-10 h-10 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Conectamos comunidades residenciales con proveedores de servicios
              verificados en la Gran Área Metropolitana de Costa Rica.
            </p>
            <div className="flex items-center gap-1.5 text-white/40 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>San José, Costa Rica</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">Navegación</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/40 hover:text-coral transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">Conectá con nosotros</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hola@gatohomeservices.com"
                className="text-sm text-white/40 hover:text-coral transition-colors"
              >
                hola@gatohomeservices.com
              </a>

              <div className="flex gap-2 mt-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-coral/20 flex items-center justify-center transition-colors group"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4 text-white/40 group-hover:text-coral transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} GATO. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Términos</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
