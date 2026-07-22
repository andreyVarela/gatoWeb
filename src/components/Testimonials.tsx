import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const stats = [
  { value: '+50', label: 'Hogares activos' },
  { value: '27', label: 'Categorías' },
  { value: '₡0', label: 'De membresía' },
  { value: '4.9★', label: 'Calificación promedio' },
]

const reviews = [
  {
    name: 'Carlos Gonzales',
    initials: 'CG',
    role: 'Entrenador personal',
    service: 'Deportes',
    rating: 5,
    text: 'Entré con dos clientes fijos. Hoy tengo la agenda llena solo con vecinos del mismo condominio. GATO me cambió el negocio.',
  },
  {
    name: 'Daniela Vargas',
    initials: 'DV',
    role: 'Limpieza del hogar',
    service: 'Hogar',
    rating: 5,
    text: 'Antes pasaba el día coordinando por WhatsApp y cobrando en efectivo. Ahora las reservas y los pagos llegan solos. Es otro nivel.',
  },
  {
    name: 'Mauricio Rojas',
    initials: 'MR',
    role: 'Jardinería',
    service: 'Hogar',
    rating: 5,
    text: 'La verificación me abrió puertas. Los residentes reservan tranquilos porque saben exactamente quién llega a su casa.',
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
        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-border/50 px-4 py-6 text-center shadow-soft">
              <p className="text-3xl font-bold text-coral tracking-tight">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-coral text-sm font-medium tracking-wide uppercase mb-3">
            Historias reales
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-text tracking-tight mb-4">
            Profesionales que ya crecen con GATO
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Personas como vos que convirtieron su oficio en un negocio estable.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {reviews.map((r) => (
            <motion.div key={r.name} variants={item}>
              <div className="bg-white border border-border/50 rounded-2xl p-6 h-full hover:shadow-card transition-shadow duration-300 flex flex-col">
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

                <p className="text-app-text text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="bg-coral text-white text-[11px] font-semibold">
                      {r.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-app-text">{r.name}</p>
                    <p className="text-[11px] text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
