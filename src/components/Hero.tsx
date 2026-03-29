import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  'Proveedores verificados',
  'Pagos seguros',
  'Sin membresía',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-coral via-[#d46a4e] to-coral-700">
      {/* Decorative orbs */}
      <div className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-8%] w-[500px] h-[500px] rounded-full bg-black/[0.08] blur-[100px] pointer-events-none" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="max-w-lg">
            <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}
              className="inline-flex items-center gap-2.5 bg-white/15 border border-white/25 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">
                Disponible en Costa Rica
              </span>
            </motion.div>

            <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Servicios a domicilio para tu comunidad
            </motion.h1>

            <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-lg text-white/75 leading-relaxed mb-8 max-w-md"
            >
              La app que conecta a residentes de condominios con profesionales verificados. Seguridad, orden y calidad garantizada.
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}
              className="flex flex-wrap gap-x-5 gap-y-2.5 mb-10"
            >
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle className="w-4 h-4 text-amber-300" />
                  <span>{h}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-coral-700 hover:bg-white/90 rounded-full font-semibold shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)]"
              >
                <a href="https://gato-app.com" target="_blank" rel="noopener noreferrer">
                  Solicitar acceso
                  <ArrowRight />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/15 hover:text-white hover:border-white/40"
              >
                <a href="#como-funciona">Ver cómo funciona</a>
              </Button>
            </motion.div>

            <motion.div initial="hidden" animate="visible" custom={5} variants={fadeUp}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/15"
            >
              <div>
                <p className="text-2xl font-bold text-white">+500</p>
                <p className="text-xs text-white/50 mt-0.5">Hogares activos</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <p className="text-2xl font-bold text-white">4.9 <span className="text-lg text-amber-300">★</span></p>
                <p className="text-xs text-white/50 mt-0.5">Calificación</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <p className="text-2xl font-bold text-white">6</p>
                <p className="text-xs text-white/50 mt-0.5">Categorías</p>
              </div>
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Shadow under phone */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[220px] h-[40px] bg-black/20 blur-[30px] rounded-full" />

      {/* Floating icons */}
      <motion.img src="/icons/mascotas.png" alt=""
        className="absolute -left-16 top-8 w-16 h-16 object-contain drop-shadow-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img src="/icons/deportes.png" alt=""
        className="absolute -right-14 top-24 w-14 h-14 object-contain drop-shadow-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.img src="/icons/cuidado-personal.png" alt=""
        className="absolute -left-12 bottom-36 w-13 h-13 object-contain drop-shadow-2xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.img src="/icons/clases.png" alt=""
        className="absolute -right-10 bottom-52 w-12 h-12 object-contain drop-shadow-2xl"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Phone frame */}
      <div className="relative w-[290px] rounded-[2.8rem] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.35)] overflow-hidden bg-white">
        <div className="h-12 bg-gradient-to-b from-gray-50/80 to-white flex items-center justify-between px-7 pt-2">
          <span className="text-[11px] text-[#1C1A19] font-semibold">9:41</span>
          <div className="w-[18px] h-[10px] border border-black/25 rounded-[2px] relative">
            <div className="absolute left-[2px] top-[2px] bottom-[2px] w-[8px] bg-green-500 rounded-[1px]" />
          </div>
        </div>

        <div className="px-5 pt-2 pb-20">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[10px] text-[#8A8A8E]">Buenos días,</p>
              <p className="text-sm font-semibold text-[#1C1A19]">Residencial Las Palmas</p>
            </div>
            <img src="/images/gato-icon.png" alt="GATO" className="w-8 h-8 object-contain" />
          </div>

          <div className="bg-gradient-to-br from-coral to-coral-700 rounded-2xl p-4 mb-5">
            <p className="text-[10px] text-white/70 mb-0.5">Próximo servicio</p>
            <p className="font-semibold text-sm text-white">Limpieza del hogar</p>
            <p className="text-[10px] text-white/60 mt-1">Hoy · 10:00 AM · Gabriela R.</p>
          </div>

          <p className="text-[10px] text-[#8A8A8E] font-medium uppercase tracking-wider mb-3">Mis servicios</p>
          <div className="flex flex-col gap-2">
            {[
              { icon: '/icons/hogar.png', name: 'Limpieza del hogar', time: 'Hoy, 10:00 AM' },
              { icon: '/icons/mantenimiento.png', name: 'Mantenimiento', time: 'Mañana, 9:00 AM' },
              { icon: '/icons/jardineria.png', name: 'Jardinería', time: 'Vie, 8:00 AM' },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-3 bg-[#F5F5F5] rounded-xl px-3 py-2.5">
                <img src={s.icon} alt={s.name} className="w-8 h-8 object-contain" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-[#1C1A19] truncate">{s.name}</p>
                  <p className="text-[10px] text-[#8A8A8E]">{s.time}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-coral" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-[#E5E5E5] flex items-center justify-around px-6">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`w-5 h-5 rounded-full ${active ? 'bg-coral' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
