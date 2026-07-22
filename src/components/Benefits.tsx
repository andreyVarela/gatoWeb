import { motion } from 'framer-motion'
import { Users, Wallet, CalendarCheck, BadgeCheck, Star, Tag } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Clientes que ya te buscan',
    description:
      'Condominios completos con demanda constante. Dejá de perseguir clientes — ellos te encuentran a vos.',
  },
  {
    icon: Wallet,
    title: 'Pagos seguros y a tiempo',
    description:
      'Cobrás en automático por cada servicio. Nada de perseguir el pago ni cargar efectivo.',
  },
  {
    icon: CalendarCheck,
    title: 'Tu agenda, ordenada',
    description:
      'Reservas, recordatorios y citas recurrentes en un solo lugar. Menos WhatsApp, más trabajo hecho.',
  },
  {
    icon: Tag,
    title: 'Sin membresías ni cuotas',
    description:
      'Empezá gratis y sin riesgo. GATO solo crece cuando vos crecés.',
  },
  {
    icon: BadgeCheck,
    title: 'Perfil verificado',
    description:
      'Tu verificación te hace destacar. En una comunidad, la confianza es la que reserva.',
  },
  {
    icon: Star,
    title: 'Reseñas que te hacen crecer',
    description:
      'Cada trabajo bien hecho suma reputación. Más estrellas, más reservas, mejores clientes.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-coral/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-coral text-sm font-medium tracking-wide uppercase mb-3">
            La herramienta que necesitás
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-text tracking-tight mb-4">
            Todo tu negocio, en tu bolsillo
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            GATO no es solo una app de reservas: es la manera más simple de conseguir
            clientes, organizarte y cobrar sin complicaciones.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {benefits.map((b) => (
            <motion.div key={b.title} variants={item}>
              <div className="group relative h-full bg-app-bg border border-border rounded-2xl p-6 hover:border-coral/40 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral group-hover:scale-105 transition-all duration-300">
                  <b.icon className="w-6 h-6 text-coral group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-app-text font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
