import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    quote: 'El servicio me gustó mucho, Daniela fue excelente. El proceso de reserva fue muy fácil y el recordatorio también muy bueno. Súper recomendado.',
    author: 'Eugenia M.',
    role: 'Residente',
    initials: 'EM',
    rating: 5,
  },
  {
    quote: 'Como administradora, GATO nos ha facilitado coordinar servicios para los residentes. Todo queda organizado y verificado desde la app.',
    author: 'Andrea S.',
    role: 'Administradora',
    initials: 'AS',
    rating: 5,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-coral-50">
      <div className="max-w-6xl mx-auto px-6">
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
            Lo que dicen nuestras comunidades
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Residentes y administradores confían en GATO para gestionar sus servicios del hogar.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-4"
        >
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={item}>
              <div className="bg-white border border-border/50 rounded-2xl p-6 h-full hover:shadow-card transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-coral/20" />
                </div>

                <p className="text-app-text text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="bg-coral text-white text-xs font-semibold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-app-text">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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
