import { motion } from 'framer-motion'
import { UserPlus, Search, ShieldCheck, ThumbsUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Tu comunidad se une',
    description: 'El administrador del condominio solicita acceso y activa GATO para todos los residentes.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Elegí tu servicio',
    description: 'Explorá el catálogo, seleccioná fecha, hora y reservá en segundos desde la app.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Profesionales verificados',
    description: 'Cada proveedor pasa un proceso de verificación. Sabés quién llega antes de que llegue.',
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'Calidad garantizada',
    description: 'Calificá el servicio y ayudá a tu comunidad. Si no quedás satisfecho, lo resolvemos.',
  },
]

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-coral-50/40 to-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-coral/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[250px] h-[250px] bg-coral/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-coral text-sm font-medium tracking-wide uppercase mb-3">
            Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-text tracking-tight mb-4">
            Simple por diseño
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Cuatro pasos para transformar la experiencia de servicios en tu comunidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
              variants={item}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px bg-gradient-to-r from-coral/20 to-coral/5" />
              )}

              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-coral-700 mb-5 shadow-[0_4px_20px_-4px_rgba(222,113,83,0.35)]">
                <step.icon className="w-6 h-6 text-white" />
              </div>

              <div className="text-xs font-bold text-coral mb-2">{step.number}</div>
              <h3 className="text-app-text font-semibold text-base mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
