import { motion } from 'framer-motion'

const links = [
  { label: 'Дроп', href: '#drop' },
  { label: 'О бренде', href: '#about' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Контакт', href: '#contact' },
]

const socials = [
  { label: 'TG', href: 'https://t.me/mnd_brand' },
  { label: 'IG', href: 'https://instagram.com/mnd.brand' },
]

export default function Footer() {
  return (
    <footer
      className="relative py-12 border-t overflow-hidden"
      style={{
        background: '#EDF1F7',
        borderColor: 'var(--grid-line)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-2xl tracking-tight text-[var(--ink)]">
            mnd<span style={{ color: 'var(--lime)' }}>.</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="glass rounded-xl px-4 py-2 text-xs font-bold text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors hover-sheen"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--grid-line)' }}
        >
          <p className="text-xs text-[var(--ink-faint)]">
            © 2025 mnd. — for people who create
          </p>
          <p className="text-xs text-[var(--ink-faint)]">
            hello@mnd.brand
          </p>
        </div>
      </div>
    </footer>
  )
}
