import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ease = [0.16, 1, 0.3, 1]

const pills = [
  { text: 'for people who create', accent: true },
  { text: 'premium 270 г/м²', accent: false },
  { text: 'oversize silhouette', accent: false },
  { text: 'нишевое комьюнити', accent: false },
  { text: 'не масс-маркет', accent: false },
  { text: 'clean visual identity', accent: false },
  { text: 'limited drops', accent: true },
  { text: 'кольцевой хлопок', accent: false },
  { text: 'двойная строчка', accent: false },
  { text: 'made with intention', accent: false },
]

export default function WhyMnd() {
  const [ref, inView] = useInView()

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#EDF1F7' }}
    >
      {/* Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-15 pointer-events-none -z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(170,255,0,0.4), transparent 70%)', filter: 'blur(60px)' }} />

      <div
        className="absolute inset-0 -z-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--lime)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--ink-muted)', letterSpacing: '0.15em', fontFamily: 'Manrope, sans-serif' }}>
              Почему mnd
            </span>
            <div className="h-px w-8" style={{ background: 'var(--lime)' }} />
          </div>
          <h2
            className="font-display font-bold text-[var(--ink)] leading-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Это не просто футболка.
          </h2>
        </motion.div>

        {/* Pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {pills.map((pill, i) => (
            <motion.div
              key={pill.text}
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.07 }}
              whileHover={{
                scale: 1.07,
                y: -4,
                backgroundColor: pill.accent ? 'rgba(170,255,0,0.18)' : 'rgba(255,255,255,0.7)',
                borderColor: pill.accent ? 'rgba(170,255,0,0.5)' : 'rgba(255,255,255,0.9)',
              }}
              className="glass-card rounded-2xl px-5 py-3 text-sm font-semibold text-[var(--ink)]"
              style={{
                cursor: 'default',
                fontFamily: pill.accent ? 'Syne, sans-serif' : 'Manrope, sans-serif',
                borderColor: pill.accent ? 'rgba(170,255,0,0.3)' : undefined,
                background: pill.accent ? 'rgba(170,255,0,0.08)' : undefined,
              }}
            >
              {pill.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
