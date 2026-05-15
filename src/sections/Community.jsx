import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import FloatingShapes from '../components/FloatingShapes'

const ease = [0.16, 1, 0.3, 1]

const professions = [
  { label: 'Кинооператоры', size: 'lg' },
  { label: 'Монтажёры', size: 'md' },
  { label: 'Арт-директоры', size: 'md' },
  { label: 'Режиссёры', size: 'lg' },
  { label: 'Дизайнеры', size: 'md' },
  { label: 'Motion-дизайнеры', size: 'sm' },
  { label: 'Фотографы', size: 'md' },
  { label: 'Архитекторы', size: 'sm' },
  { label: 'Художники', size: 'lg' },
  { label: 'Музыканты', size: 'sm' },
  { label: 'Строители', size: 'md' },
  { label: 'Мастера', size: 'md' },
]

const marqueeItems = [...professions, ...professions]

const sizeMap = {
  sm: 'text-sm px-5 py-3.5',
  md: 'text-base px-5 py-3.5',
  lg: 'text-lg px-6 py-3.5 font-bold',
}

export default function Community() {
  const [ref, inView] = useInView()

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EDF1F7 0%, #E0E8F4 100%)' }}
    >
      {/* Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 rounded-full opacity-20 pointer-events-none -z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(170,255,0,0.3), transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none -z-0"
        style={{ background: 'radial-gradient(circle, rgba(100,140,220,0.3), transparent 70%)', filter: 'blur(50px)' }} />

      <div
        className="absolute inset-0 -z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <FloatingShapes variant="light" />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--lime)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--ink-muted)', letterSpacing: '0.15em', fontFamily: 'Manrope, sans-serif' }}>
              Creative Community
            </span>
          </div>
          <h2
            className="font-display font-bold text-[var(--ink)] leading-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Одни ценности.
            <br />
            <span className="lime-text">Разные языки.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
            mnd — бренд, который объединяет творческих людей из разных областей.
            Неважно, чем ты занимаешься — важно, как ты это делаешь.
          </p>
        </motion.div>

        {/* Asymmetric pills grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16 items-center"
        >
          {professions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.05 }}
              whileHover={{
                scale: 1.06,
                backgroundColor: 'rgba(170,255,0,0.12)',
                borderColor: 'rgba(170,255,0,0.4)',
                y: -3,
              }}
              className={`glass-card rounded-2xl font-display text-[var(--ink)] ${sizeMap[item.size]}`}
              style={{ cursor: 'default' }}
            >
              {item.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Central statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="glass-card rounded-3xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <div className="shrink-0 text-center md:text-left">
            <p className="font-display font-bold text-[var(--ink)]" style={{ fontSize: 'clamp(20px, 3vw, 36px)' }}>
              Бренд, который
              <br />
              <span className="lime-text">формирует комьюнити.</span>
            </p>
          </div>
          <div className="h-px md:h-14 w-16 md:w-px" style={{ background: 'var(--grid-line)' }} />
          <p className="text-sm md:text-base leading-relaxed max-w-sm text-center md:text-left" style={{ color: 'var(--ink-muted)' }}>
            Не масс-маркет. Не для всех. Для тех, кто понимает —
            что важно не просто делать, а делать с отдачей.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
