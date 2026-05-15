import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Дроп', href: '#drop' },
  { label: 'О бренде', href: '#about' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Контакт', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'glass rounded-2xl px-6 py-3' : ''
          }`}
        >
          {/* Logo */}
          <a href="#" className="font-display font-bold text-xl tracking-tight text-[var(--ink)]">
            mnd<span style={{ color: 'var(--lime)' }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="#drop"
              className="hidden md:inline-flex items-center gap-2 glass rounded-pill px-5 py-2 text-sm font-semibold text-[var(--ink)] hover-sheen transition-all duration-300 hover:shadow-lg"
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              Смотреть дроп
            </a>

            {/* Burger mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden glass rounded-xl p-2.5"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="block h-0.5 bg-[var(--ink)] rounded-full origin-center"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 bg-[var(--ink)] rounded-full"
                />
                <motion.span
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="block h-0.5 bg-[var(--ink)] rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 glass rounded-3xl p-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="text-2xl font-display font-bold text-[var(--ink)] hover:text-[var(--lime)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#drop"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex justify-center glass rounded-2xl px-6 py-4 text-sm font-bold text-[var(--ink)] border border-[var(--lime)]"
              >
                Смотреть дроп
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden fixed bottom-6 left-4 right-4 z-40"
      >
        <a
          href="#drop"
          className="flex items-center justify-center glass rounded-2xl py-4 text-sm font-bold text-[var(--ink)] hover-sheen"
          style={{ border: '1.5px solid var(--lime)', background: 'rgba(170,255,0,0.1)' }}
        >
          Смотреть дроп
        </a>
      </motion.div>
    </>
  )
}
