import { motion } from 'framer-motion'
import { Star, Quote, MessageSquare } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const reviews = [
  {
    name: 'Eugenia M.',
    initials: 'EM',
    role: 'Residente',
    service: 'Limpieza',
    date: 'Hace 1 semana',
    rating: 5,
    text: 'Me gustó mucho el servicio, Daniela fue excelente. La reserva fue súper fácil y el recordatorio muy útil. Definitivamente vuelvo a reservar.',
  },
  {
    name: 'Andrea S.',
    initials: 'AS',
    role: 'Administradora',
    service: 'Administración',
    date: 'Hace 2 semanas',
    rating: 5,
    text: 'GATO nos ha facilitado la coordinación de servicios en el condominio. Los residentes están contentos y todo queda organizado.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 lg:py-32 bg-coral-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-coral text-sm font-medium tracking-wide uppercase mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-text tracking-tight mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Opiniones reales de residentes y administradores que ya usan GATO.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          {reviews.map((r) => (
            <motion.div key={r.name} variants={item}>
              <div className="bg-white border border-border/50 rounded-2xl p-6 h-full hover:shadow-card transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-[11px] font-medium px-2.5 py-0.5 bg-coral/10 text-coral border-coral/10">
                    {r.service}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-4 h-4 text-coral/15 ml-2" />
                  </div>
                </div>

                <p className="text-app-text text-sm leading-relaxed mb-5">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-coral text-white text-[10px] font-semibold">
                        {r.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-app-text">{r.name}</p>
                      <p className="text-[11px] text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-muted-foreground">{r.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
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
