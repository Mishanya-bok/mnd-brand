import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ease = [0.16, 1, 0.3, 1]

const specs = [
  { label: 'Ткань', value: '100% кольцевой хлопок', icon: '◈' },
  { label: 'Плотность', value: '320 г/м²', icon: '◉' },
  { label: 'Посадка', value: 'Oversize / dropped shoulder', icon: '◎' },
  { label: 'Принт', value: 'Силкскрин + рукописный принт', icon: '◇' },
  { label: 'Шов', value: 'Двойная строчка', icon: '◈' },
  { label: 'Размерный ряд', value: 'XS — 2XL', icon: '◉' },
]

export default function Materials() {
  const [ref, inView] = useInView()

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#EDF1F7' }}
    >
      <div
        className="absolute inset-0 -z-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease }}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/assets/tshirt-black.jpeg"
                alt="mnd t-shirt detail"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'right center' }}
              />
            </div>

            {/* Floating detail card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="absolute -bottom-5 -left-5 glass rounded-2xl p-5 shadow-xl"
            >
              <p className="text-xs text-[var(--ink-faint)] mb-1">Качество пошива</p>
              <p className="font-display font-bold text-xl text-[var(--ink)]">
                Premium
              </p>
              <p className="text-xs text-[var(--ink-muted)] mt-1">Двойная строчка, усиленные швы</p>
            </motion.div>

            {/* Floating gram card */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-3"
            >
              <p className="text-xs text-[var(--ink-faint)]">Плотность</p>
              <p className="font-display font-bold text-2xl text-[var(--ink)]">
                320<span className="text-sm font-medium text-[var(--ink-muted)]"> г/м²</span>
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
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">
                  Материал и качество
                </span>
              </div>
              <h2
                className="font-display font-bold text-[var(--ink)] leading-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                Сделано, чтобы
                <br />
                <span style={{ color: 'var(--lime)' }}>носить</span> по-настоящему.
              </h2>
              <p className="text-[var(--ink-muted)] mt-4 text-sm md:text-base leading-relaxed max-w-sm">
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
                  className="glass rounded-2xl p-4"
                >
                  <p className="text-xs text-[var(--ink-faint)] mb-1">{spec.label}</p>
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
