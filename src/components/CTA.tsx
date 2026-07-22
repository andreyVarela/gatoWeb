import { motion } from 'framer-motion'
import { ArrowRight, Apple, Smartphone, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = 'https://gato-app.com'

export default function CTA() {
  return (
    <section id="descarga" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Residents / communities strip */}
        <motion.div
          id="comunidades"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-app-bg px-6 sm:px-8 py-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-11 h-11 rounded-xl bg-coral/10 items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-coral" />
            </div>
            <div>
              <p className="text-app-text font-semibold text-[15px]">¿Sos residente o administrás un condominio?</p>
              <p className="text-muted-foreground text-sm">GATO también te lleva servicios de confianza a la puerta de tu casa.</p>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-border hover:border-coral hover:text-coral shrink-0"
          >
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Quiero GATO en mi comunidad
            </a>
          </Button>
        </motion.div>

        {/* Main professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral via-coral to-coral-700 px-8 sm:px-16 py-16 sm:py-20 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300" />
              </span>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">
                Cupos limitados por comunidad
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Empezá a recibir reservas<br className="hidden sm:block" /> esta semana
            </h2>

            <p className="text-white/75 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
              Sumate como profesional, verificá tu perfil y conectá con residentes que
              ya están buscando lo que ofrecés. Gratis y sin membresía.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-coral hover:bg-white/90 rounded-full font-semibold shadow-lg"
              >
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Registrarme como profesional
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-white/50 text-sm">
              <div className="flex items-center gap-1.5">
                <Apple className="w-4 h-4" />
                <span>iOS — Próximamente</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4" />
                <span>Android — Próximamente</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
