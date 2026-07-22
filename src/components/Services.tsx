import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APP_URL = 'https://gato-app.com'

const services = [
  {
    icon: '/icons/hogar.png',
    title: 'Hogar',
    description: 'Limpieza, lavandería, fumigación y organización.',
    border: 'hover:border-orange-300/40',
    accent: 'from-orange-500/20 to-orange-500/5',
  },
  {
    icon: '/icons/mascotas.png',
    title: 'Mascotas',
    description: 'Paseos, grooming y cuidado a domicilio.',
    border: 'hover:border-amber-300/40',
    accent: 'from-amber-500/20 to-amber-500/5',
  },
  {
    icon: '/icons/clases.png',
    title: 'Clases',
    description: 'Tutorías, idiomas, música y arte.',
    border: 'hover:border-blue-300/40',
    accent: 'from-blue-500/20 to-blue-500/5',
  },
  {
    icon: '/icons/cuidado-personal.png',
    title: 'Cuidado Personal',
    description: 'Peluquería, manicure, masajes y fisioterapia.',
    border: 'hover:border-purple-300/40',
    accent: 'from-purple-500/20 to-purple-500/5',
  },
  {
    icon: '/icons/deportes.png',
    title: 'Deportes',
    description: 'Entrenamiento personal, yoga y pilates.',
    border: 'hover:border-rose-300/40',
    accent: 'from-rose-500/20 to-rose-500/5',
  },
  {
    icon: '/icons/otros.png',
    title: 'Otros',
    description: 'Fotografía, niñera, cuido de adulto mayor y más.',
    border: 'hover:border-emerald-300/40',
    accent: 'from-emerald-500/20 to-emerald-500/5',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Services() {
  return (
    <section id="categorias" className="relative py-24 lg:py-32 bg-[#1C1A19] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-coral/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-coral/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-coral text-sm font-medium tracking-wide uppercase mb-3">
            Categorías
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            ¿Qué ofrecés? Hay demanda para vos
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            Elegí tu categoría y empezá a recibir reservas de residentes que buscan
            justo lo que hacés. Estas son solo algunas de las 27 disponibles.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={item}>
              <div className={`group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 ${s.border} transition-all duration-300 cursor-pointer h-full overflow-hidden`}>
                {/* Card glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.06] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img src={s.icon} alt={s.title} className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{s.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{s.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-coral hover:bg-coral-600 text-white rounded-full font-semibold shadow-[0_8px_30px_-4px_rgba(222,113,83,0.4)]"
          >
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Registrar mi servicio
              <ArrowRight />
            </a>
          </Button>
          <p className="text-white/35 text-xs mt-4">Gratis · Sin membresía · Listo hoy mismo</p>
        </motion.div>
      </div>
    </section>
  )
}
