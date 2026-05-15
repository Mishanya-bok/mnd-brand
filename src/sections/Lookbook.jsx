import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ease = [0.16, 1, 0.3, 1]

export default function Lookbook() {
  const [ref, inView] = useInView()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section
      id="lookbook"
      ref={sectionRef}
      className="relative py-24 md:py-0 md:h-screen flex items-center overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
      {/* Video background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          src="/assets/lookbook-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/60 via-transparent to-[#0A0A0F]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ background: 'var(--lime)' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-white/50">
              Lookbook / Drop 01
            </span>
          </div>

          <h2
            className="font-display font-bold text-white leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(40px, 7vw, 88px)' }}
          >
            Контент
            <br />
            <span style={{ color: 'var(--lime)' }}>— это жизнь.</span>
          </h2>

          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
            Для тех, кто снимает, монтирует, проектирует
            и создаёт — каждый день, без поводов.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#drop"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-[var(--ink)] transition-all hover:scale-[1.02]"
              style={{ background: 'var(--lime)', boxShadow: '0 8px 32px rgba(170,255,0,0.25)' }}
            >
              Смотреть дроп
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass-dark rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
            >
              Написать
            </a>
          </div>
        </motion.div>

        {/* Floating glass pill */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2"
        >
          <div className="glass-dark rounded-3xl p-6 text-center">
            <p
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
            >
              ПОВОДОВ
              <br />
              ЖДАТЬ
            </p>
            <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">нет</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
