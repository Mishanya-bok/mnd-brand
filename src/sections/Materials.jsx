import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import FloatingShapes from '../components/FloatingShapes'

const ease = [0.16, 1, 0.3, 1]

const specs = [
  { label: 'Ткань', value: '100% кольцевой хлопок' },
  { label: 'Плотность', value: '270 г/м²' },
  { label: 'Посадка', value: 'Oversize / dropped shoulder' },
  { label: 'Принт', value: 'Силкскрин + рукописный принт' },
  { label: 'Шов', value: 'Двойная строчка' },
  { label: 'Размерный ряд', value: 'XS — 2XL' },
]

export default function Materials() {
  const [ref, inView] = useInView()

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#EDF1F7' }}
    >
      {/* Blobs for glass effect */}
      <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full opacity-25 pointer-events-none -z-0"
        style={{ background: 'radial-gradient(circle, rgba(100,140,220,0.35), transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full opacity-20 pointer-events-none -z-0"
        style={{ background: 'radial-gradient(circle, rgba(170,255,0,0.2), transparent 70%)', filter: 'blur(40px)' }} />

      <div
        className="absolute inset-0 -z-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <FloatingShapes variant="light" />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/assets/tshirt-black.jpeg"
                alt="mnd t-shirt detail"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'right center' }}
              />
            </div>

            {/* Floating quality card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="absolute -bottom-5 -left-5 glass-card rounded-2xl p-5 shadow-xl"
            >
              <p className="text-xs mb-1" style={{ color: 'var(--ink-faint)', fontFamily: 'Manrope, sans-serif' }}>Качество пошива</p>
              <p className="font-display font-bold text-xl text-[var(--ink)]">Premium</p>
              <p className="text-xs mt-1" style={{ color: 'var(--ink-muted)', fontFamily: 'Manrope, sans-serif' }}>Двойная строчка, усиленные швы</p>
            </motion.div>

            {/* Floating density card */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
              className="absolute -top-4 -right-4 glass-card rounded-2xl px-5 py-3"
            >
              <p className="text-xs" style={{ color: 'var(--ink-faint)', fontFamily: 'Manrope, sans-serif' }}>Плотность</p>
              <p className="font-display font-bold text-2xl text-[var(--ink)]">
                270<span className="text-sm font-medium" style={{ color: 'var(--ink-muted)' }}> г/м²</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right — specs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: 'var(--lime)' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--ink-muted)', letterSpacing: '0.14em', fontFamily: 'Manrope, sans-serif' }}>
                  Материал и качество
                </span>
              </div>
              <h2
                className="font-display font-bold text-[var(--ink)] leading-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                Сделано, чтобы
                <br />
                <span style={{ color: 'var(--lime-text)', fontStyle: 'italic' }}>носить</span>{' '}
                по-настоящему.
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'var(--ink-muted)' }}>
                Плотный кольцевой хлопок. Классика oversize с dropped shoulder.
                Печать, которая не трескается и не выцветает.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass-card rounded-2xl p-4"
                >
                  <p className="text-xs mb-1" style={{ color: 'var(--ink-faint)', fontFamily: 'Manrope, sans-serif' }}>{spec.label}</p>
                  <p className="text-sm font-semibold text-[var(--ink)] leading-snug">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
