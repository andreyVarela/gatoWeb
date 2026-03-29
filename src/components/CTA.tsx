import { motion } from 'framer-motion'
import { ArrowRight, Apple, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section id="descarga" className="py-24 lg:py-32 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-6">
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
            <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-6">
              Próximo lanzamiento
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Estamos por lanzar la app
            </h2>

            <p className="text-white/70 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
              Sé de los primeros en acceder. Registrá tu comunidad y disfrutá
              servicios de calidad directamente en tu hogar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-coral hover:bg-white/90 rounded-full font-semibold shadow-lg"
              >
                <a href="https://gato-app.com" target="_blank" rel="noopener noreferrer">
                  Solicitar acceso
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
