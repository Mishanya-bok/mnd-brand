import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ease = [0.16, 1, 0.3, 1]

const members = [
  { initials: 'АК', name: 'Артём К.', role: 'Кинооператор', note: 'носит mnd. с первого дропа' },
  { initials: 'МВ', name: 'Михаил В.', role: 'Монтажёр', note: 'снимает контент для 3M+ подписчиков' },
  { initials: 'ДС', name: 'Дарья С.', role: 'Арт-директор', note: 'работает с топовыми брендами' },
  { initials: 'ИЛ', name: 'Иван Л.', role: 'Motion Designer', note: 'создаёт визуальные миры' },
  { initials: 'ЕП', name: 'Елена П.', role: 'Фотограф', note: 'снимала 100+ fashion кампейнов' },
  { initials: 'НБ', name: 'Никита Б.', role: 'Режиссёр', note: 'авторское кино и коммерция' },
]

export default function Community() {
  const [ref, inView] = useInView()

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EDF1F7 0%, #E0E8F4 100%)' }}
    >
      <div
        className="absolute inset-0 -z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

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
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">
              Creative Community
            </span>
          </div>
          <h2
            className="font-display font-bold text-[var(--ink)] leading-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Уже носят
            <br />
            <span style={{ color: 'var(--lime)' }}>сильные люди.</span>
          </h2>
          <p className="text-[var(--ink-muted)] mt-4 text-sm md:text-base leading-relaxed">
            mnd — не массовый бренд. Его носят те, кто создаёт: операторы,
            монтажёры, дизайнеры, режиссёры. Сообщество творческих людей,
            которые делают сильные вещи.
          </p>
        </motion.div>

        {/* Members grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.08 }}
              className="glass rounded-2xl p-5 group hover-sheen"
            >
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-[var(--ink)] mb-4"
                style={{ background: 'rgba(170,255,0,0.12)', border: '1px solid rgba(170,255,0,0.3)' }}
              >
                {m.initials}
              </div>

              <p className="font-display font-semibold text-sm text-[var(--ink)] mb-0.5">{m.name}</p>
              <p className="text-xs font-medium text-[var(--lime)] mb-2">{m.role}</p>
              <p className="text-xs text-[var(--ink-faint)] leading-relaxed">{m.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center gap-4"
        >
          <p className="text-xs uppercase tracking-widest text-[var(--ink-faint)]">
            присоединяйся к кругу
          </p>
          <div className="h-px flex-1 max-w-[80px]" style={{ background: 'var(--grid-line)' }} />
        </motion.div>
      </div>
    </section>
  )
}
