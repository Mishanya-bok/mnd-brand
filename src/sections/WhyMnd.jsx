import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ease = [0.16, 1, 0.3, 1]

const pills = [
  'for people who create',
  'premium 320 г/м²',
  'oversize silhouette',
  'нишевое комьюнити',
  'не масс-маркет',
  'clean visual identity',
  'limited drops',
  'кольцевой хлопок',
  'двойная строчка',
  'made with intention',
]

export default function WhyMnd() {
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--lime)' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {pills.map((pill, i) => (
            <motion.div
              key={pill}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.06 }}
              className="glass rounded-pill px-5 py-3 text-sm font-medium text-[var(--ink)] hover-sheen cursor-default"
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              {i === 0 || i === 6 ? (
                <span style={{ color: 'var(--lime)', fontWeight: 700 }}>{pill}</span>
              ) : (
                pill
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Center statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="mt-20 glass rounded-3xl px-8 py-10 md:px-16 md:py-14 text-center max-w-2xl mx-auto"
        >
          <p
            className="font-display font-bold text-[var(--ink)] leading-tight"
            style={{ fontSize: 'clamp(20px, 3.5vw, 36px)' }}
          >
            Сделано для тех, кто делает.
            <br />
            <span style={{ color: 'var(--lime)' }}>Без компромиссов.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
