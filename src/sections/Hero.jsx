import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden grid-bg"
      style={{ background: 'linear-gradient(160deg, #E8EEF8 0%, #D8E4F0 50%, #E2ECF6 100%)' }}
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/assets/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-40' : 'opacity-0'
          }`}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8EEF8]/60 via-transparent to-[#E8EEF8]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8EEF8]/40 via-transparent to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 md:pb-28 pt-36">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-pill px-4 py-1.5 mb-8"
            style={{ borderRadius: 'var(--radius-pill)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--lime)' }}
            />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-muted)]">
              Drop — 2025
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="font-display font-bold leading-[0.92] tracking-tight text-[var(--ink)] mb-6"
            style={{ fontSize: 'clamp(56px, 10vw, 120px)' }}
          >
            для тех,
            <br />
            кто{' '}
            <span style={{ color: 'var(--lime)', WebkitTextStroke: '0px' }}>
              создаёт.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="text-base md:text-lg text-[var(--ink-muted)] max-w-sm mb-10 leading-relaxed"
          >
            mnd — это бренд для дизайнеров, операторов,
            монтажёров, архитекторов и всех, кто делает
            сильные вещи своими руками.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#drop"
              className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-[var(--ink)] hover-sheen transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'var(--lime)',
                boxShadow: '0 8px 32px rgba(170,255,0,0.3)',
              }}
            >
              Смотреть дроп
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a
              href="#drop"
              className="inline-flex items-center gap-2 glass rounded-2xl px-7 py-4 text-sm font-semibold text-[var(--ink)] hover-sheen transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Выбрать футболку
            </a>
          </motion.div>
        </div>

        {/* Supporting line — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="hidden md:block absolute bottom-28 right-6 text-right"
        >
          <p className="text-xs tracking-widest uppercase text-[var(--ink-faint)] font-medium">
            worn by creators
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 glass rounded-pill flex items-start justify-center pt-1.5"
          style={{ borderRadius: 'var(--radius-pill)' }}
        >
          <div className="w-1 h-2 rounded-full bg-[var(--ink-faint)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
