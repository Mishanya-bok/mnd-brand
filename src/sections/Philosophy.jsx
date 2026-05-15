import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import FloatingShapes from '../components/FloatingShapes'

const ease = [0.16, 1, 0.3, 1]

const theses = [
  { num: '01', text: 'вкус важнее техники' },
  { num: '02', text: 'скорость убивает глубину' },
  { num: '03', text: 'пиши как говоришь' },
  { num: '04', text: 'делай — не объясняй' },
]

export default function Philosophy() {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #E2EAF5 0%, #EDF1F7 100%)' }}
    >
      {/* Blobs — needed for backdrop-filter to look glassy */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-30 pointer-events-none -z-0"
        style={{ background: 'radial-gradient(circle, rgba(170,255,0,0.25), transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 pointer-events-none -z-0"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — manifesto card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease }}
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--ink-faint)]"
                  style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.15em' }}>
                  Manifesto / 01
                </span>
              </div>

              <h2
                className="font-display font-bold leading-[1.0] text-[var(--ink)] mb-6"
                style={{ fontSize: 'clamp(30px, 4.5vw, 50px)' }}
              >
                не оптимизируй,
                <br />
                не сравнивай,
                <br />
                не объясняй,
                <br />
                <span className="lime-text" style={{ fontStyle: 'italic' }}>
                  просто сделай.
                </span>
              </h2>

              <p className="text-sm md:text-base leading-relaxed max-w-xs" style={{ color: 'var(--ink-muted)' }}>
                бренд, который объединяет творческих людей из разных областей.
                Дизайнеры, операторы, архитекторы, монтажёры,
                художники — те, кто проявляется.
              </p>

              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-15 pointer-events-none"
                style={{ background: 'var(--lime)', filter: 'blur(2px)' }}
              />
            </div>
          </motion.div>

          {/* Right — theses */}
          <div className="flex flex-col gap-3">
            {theses.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.1 }}
                whileHover={{
                  x: 6,
                  backgroundColor: 'rgba(170,255,0,0.1)',
                  borderColor: 'rgba(170,255,0,0.35)',
                }}
                className="glass-card rounded-2xl px-6 py-5 flex items-center gap-5"
                style={{ cursor: 'default' }}
              >
                <span className="text-xs font-bold w-6 shrink-0" style={{ color: 'var(--lime)', fontFamily: 'Syne, sans-serif' }}>
                  {item.num}
                </span>
                <span className="font-display font-semibold text-base md:text-lg text-[var(--ink)]">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom — brand note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="mt-20 glass-card rounded-3xl px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
        >
          <div className="shrink-0">
            <p className="font-display font-bold text-[var(--ink)]" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>mnd.</p>
          </div>
          <div className="h-px md:h-12 w-full md:w-px" style={{ background: 'var(--grid-line)' }} />
          <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: 'var(--ink-muted)' }}>
            Бренд, который формирует креативное комьюнити.
            Одежда здесь — маркер принадлежности к кругу людей,
            которые создают что-то настоящее.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
