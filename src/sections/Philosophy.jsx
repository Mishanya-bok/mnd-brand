import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ease = [0.16, 1, 0.3, 1]

const theses = [
  {
    num: '01',
    text: 'вкус важнее техники',
  },
  {
    num: '02',
    text: 'скорость убивает глубину',
  },
  {
    num: '03',
    text: 'пиши как говоришь',
  },
  {
    num: '04',
    text: 'делай — не объясняй',
  },
]

export default function Philosophy() {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #E2EAF5 0%, #EDF1F7 100%)' }}
    >
      <div
        className="absolute inset-0 -z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — manifesto card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Manifesto label */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--ink-faint)]">
                  Manifesto / 01
                </span>
              </div>

              <h2
                className="font-display font-bold leading-[1.0] text-[var(--ink)] mb-6"
                style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
              >
                не оптимизируй,
                <br />
                не сравнивай,
                <br />
                не объясняй,
                <br />
                <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>
                  просто сделай.
                </span>
              </h2>

              <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed max-w-xs">
                mnd — это бренд для людей, которые создают.
                Дизайнеры, операторы, архитекторы, монтажёры,
                художники — те, кто делает сильные вещи.
              </p>

              {/* Decoration */}
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10"
                style={{ background: 'var(--lime)' }}
              />
            </div>
          </motion.div>

          {/* Right — theses */}
          <div className="flex flex-col gap-4">
            {theses.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.1 }}
                className="glass rounded-2xl px-6 py-5 flex items-center gap-5 hover-sheen group cursor-default"
              >
                <span className="text-xs font-bold text-[var(--ink-faint)] w-6 shrink-0">
                  {item.num}
                </span>
                <span
                  className="font-display font-semibold text-base md:text-lg text-[var(--ink)] group-hover:text-transparent transition-all duration-300"
                  style={{
                    WebkitTextFillColor: 'inherit',
                  }}
                >
                  <span
                    className="group-hover:text-[var(--lime)] transition-colors duration-300"
                    style={{ color: 'inherit' }}
                  >
                    {item.text}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom — community note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="mt-20 glass rounded-3xl px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
        >
          <div className="shrink-0">
            <p className="text-4xl md:text-6xl font-display font-bold text-[var(--ink)]">mnd.</p>
          </div>
          <div className="h-px md:h-12 w-full md:w-px" style={{ background: 'var(--grid-line)' }} />
          <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed max-w-lg">
            Одежда здесь — не просто вещь. Это маркер принадлежности
            к кругу людей, которые создают что-то настоящее.
            Уже носят топовые операторы, монтажёры и медийные люди.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
