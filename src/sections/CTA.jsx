import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ease = [0.16, 1, 0.3, 1]

const contacts = [
  {
    label: 'Telegram',
    href: 'https://t.me/mishanya_bok',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.800-.893-.595-.314-1.232.313-1.808.156-.143 2.887-2.643 2.942-2.867.006-.027.007-.127-.044-.179-.051-.053-.126-.034-.181-.020-.077.018-1.300.826-3.671 2.424-.347.237-.663.352-.949.346-.312-.007-.914-.176-1.360-.321-.549-.178-.984-.272-.947-.574.020-.157.209-.317.568-.480 2.226-.972 3.710-1.615 4.454-1.929 2.12-.881 2.561-1.033 2.848-1.038z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/mnd.brand',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hello@mnd.brand',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #E2EAF5 0%, #EDF1F7 100%)' }}
    >
      <div
        className="absolute inset-0 -z-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Lime glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] -z-0 pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse, var(--lime), transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          className="glass rounded-3xl p-10 md:p-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)] mb-6"
          >
            Готов?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="font-display font-bold text-[var(--ink)] leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 6vw, 72px)' }}
          >
            Поводов ждать{' '}
            <span style={{ color: 'var(--lime-text)' }}>нет.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[var(--ink-muted)] text-sm md:text-base max-w-sm mx-auto mb-10 leading-relaxed"
          >
            Лимитированный дроп. Выбирай размер, пиши — оформим.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          >
            <a
              href="https://t.me/mishanya_bok"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold text-[var(--ink)] hover-sheen transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'var(--lime)',
                boxShadow: '0 8px 32px rgba(170,255,0,0.3)',
              }}
            >
              Написать в Telegram
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#drop"
              className="inline-flex items-center justify-center gap-2 glass rounded-2xl px-8 py-4 text-sm font-semibold text-[var(--ink)] hover-sheen transition-all duration-200 hover:scale-[1.02]"
            >
              Смотреть дроп
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center justify-center gap-3"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="glass rounded-xl p-3 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors duration-200 hover-sheen"
                aria-label={c.label}
              >
                {c.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
