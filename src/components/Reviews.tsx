import { motion } from 'framer-motion'
import { Star, MessageSquare } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const reviews = [
  {
    name: 'Eugenia M.',
    initials: 'EM',
    service: 'Limpieza',
    date: 'Hace 1 semana',
    rating: 5,
    text: 'Me gustó mucho el servicio, Daniela fue excelente. La reserva fue súper fácil y el recordatorio muy útil. Definitivamente vuelvo a reservar.',
  },
  {
    name: 'Andrea S.',
    initials: 'AS',
    service: 'Administración',
    date: 'Hace 2 semanas',
    rating: 5,
    text: 'GATO nos ha facilitado la coordinación de servicios en el condominio. Los residentes están contentos y todo queda organizado.',
  },
]

export default function Reviews() {

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-coral text-sm font-medium tracking-wide uppercase mb-3">
              Reseñas
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-app-text tracking-tight">
              Opiniones reales
            </h2>
            <p className="text-muted-foreground text-base mt-3 max-w-md">
              Lo que nuestros usuarios dicen después de usar GATO.
            </p>
          </div>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {reviews.map((r) => (
            <motion.div
              key={r.name + r.service}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="bg-white border border-border/60 rounded-2xl p-5 h-full shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-[11px] font-medium px-2.5 py-0.5 bg-coral/10 text-coral border-coral/10">
                    {r.service}
                  </Badge>
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-app-text leading-relaxed mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2.5">
                    <Avatar className="w-7 h-7">
                      <AvatarFallback className="bg-coral/10 text-coral text-[10px] font-semibold">
                        {r.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium text-app-text">{r.name}</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">{r.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Button
            variant="outline"
            asChild
            className="rounded-full border-border hover:border-coral hover:text-coral"
          >
            <a href="mailto:hola@gatohomeservices.com?subject=Mi%20reseña%20GATO">
              <MessageSquare />
              Compartir mi experiencia
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
