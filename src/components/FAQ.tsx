import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto cuesta usar GATO?',
    a: 'Nada para empezar. No cobramos membresía ni mensualidad. GATO gana una pequeña comisión únicamente cuando vos cobrás un servicio, así que solo ganamos si vos ganás.',
  },
  {
    q: '¿Cómo y cuándo me pagan?',
    a: 'Cada servicio se cobra de forma segura desde la app. Olvidate del efectivo, los vueltos y de perseguir el pago: el dinero queda registrado y llega a vos.',
  },
  {
    q: '¿Necesito experiencia o tener empresa?',
    a: 'No. Solo necesitás tu oficio y ganas de trabajar. Te guiamos para verificar tu perfil y darte el sello de confianza que hace que los residentes te reserven.',
  },
  {
    q: '¿Cómo consigo clientes?',
    a: 'Al activar tu perfil quedás visible para todos los residentes de los condominios donde GATO opera. Ellos te encuentran por categoría y te reservan directo, sin intermediarios.',
  },
  {
    q: '¿Puedo manejar mi propia agenda y mis precios?',
    a: 'Sí. Vos definís tus horarios, los servicios que ofrecés y tus tarifas. GATO te da las herramientas; el control del negocio es tuyo.',
  },
  {
    q: '¿Qué necesito para registrarme?',
    a: 'Tu identificación, un medio de contacto y las categorías que querés ofrecer. La verificación es rápida y podés quedar activo el mismo día.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-coral text-sm font-medium tracking-wide uppercase mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-app-text tracking-tight mb-4">
            Todo lo que querés saber antes de empezar
          </h2>
          <p className="text-muted-foreground text-base">
            Y si te queda alguna duda, escribinos. Estamos para ayudarte a arrancar.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? 'border-coral/30 bg-coral-50/40' : 'border-border bg-app-bg'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-app-text font-medium text-[15px]">{f.q}</span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-coral text-white rotate-45' : 'bg-white text-coral border border-border'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
