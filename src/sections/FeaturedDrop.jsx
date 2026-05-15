import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ease = [0.16, 1, 0.3, 1]

const products = [
  {
    id: 1,
    name: 'CONTENT IS OUR LIFE',
    colorway: 'White',
    colorHex: '#F5F5F0',
    price: '4 900 ₽',
    fabric: '100% хлопок',
    weight: '320 г/м²',
    fit: 'Oversize',
    print: 'Силкскрин + рукописный принт',
    description: 'Белая версия дропа. Чистый oversize с культовым принтом на спине. Лого mnd. на груди.',
    image: '/assets/tshirt-white.jpeg',
    tag: 'Drop 01',
    accent: 'var(--lime)',
  },
  {
    id: 2,
    name: 'CONTENT IS OUR LIFE',
    colorway: 'Black',
    colorHex: '#0A0A0F',
    price: '4 900 ₽',
    fabric: '100% хлопок',
    weight: '320 г/м²',
    fit: 'Oversize',
    print: 'Силкскрин + рукописный принт',
    description: 'Чёрная версия дропа. Максимальный контраст. Для тех, кто делает контент в любых условиях.',
    image: '/assets/tshirt-black.jpeg',
    tag: 'Drop 01',
    accent: '#FF4444',
  },
]

function ProductModal({ product, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(8, 12, 20, 0.6)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.4, ease }}
        className="glass rounded-3xl w-full max-w-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-pill"
                  style={{
                    background: 'var(--lime-dim)',
                    color: 'var(--ink)',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--lime)',
                  }}
                >
                  {product.tag}
                </span>
                <button
                  onClick={onClose}
                  className="glass rounded-xl p-2 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <h2 className="font-display font-bold text-2xl leading-tight text-[var(--ink)] mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-[var(--ink-muted)] mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Ткань', value: product.fabric },
                  { label: 'Плотность', value: product.weight },
                  { label: 'Посадка', value: product.fit },
                  { label: 'Принт', value: product.print },
                ].map((spec) => (
                  <div key={spec.label} className="glass rounded-xl p-3">
                    <p className="text-xs text-[var(--ink-faint)] mb-0.5">{spec.label}</p>
                    <p className="text-sm font-semibold text-[var(--ink)]">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Color */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs text-[var(--ink-muted)]">Цвет:</span>
                <div
                  className="w-5 h-5 rounded-full border-2 border-white shadow-md"
                  style={{ background: product.colorHex }}
                />
                <span className="text-sm font-medium text-[var(--ink)]">{product.colorway}</span>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-2xl text-[var(--ink)]">
                {product.price}
              </span>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-[var(--ink)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'var(--lime)',
                  boxShadow: '0 4px 16px rgba(170,255,0,0.3)',
                }}
              >
                Купить
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProductCard({ product, index }) {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease, delay: index * 0.15 }}
        className="group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* Image container */}
        <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/3]">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.6, ease }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 flex items-end p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }}
          >
            <span className="text-white text-sm font-semibold">Подробнее →</span>
          </motion.div>

          {/* Tag pill */}
          <div className="absolute top-4 left-4">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-pill"
              style={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(8px)',
                borderRadius: 'var(--radius-pill)',
                color: 'var(--ink)',
              }}
            >
              {product.tag}
            </span>
          </div>

          {/* Color dot */}
          <div className="absolute top-4 right-4">
            <div
              className="w-6 h-6 rounded-full border-2 border-white shadow-md"
              style={{ background: product.colorHex }}
            />
          </div>
        </div>

        {/* Card info */}
        <div className="glass rounded-2xl p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-display font-bold text-base text-[var(--ink)] leading-tight">
                {product.name}
              </h3>
              <p className="text-sm text-[var(--ink-muted)] mt-0.5">{product.colorway}</p>
            </div>
            <span className="font-display font-bold text-lg text-[var(--ink)]">
              {product.price}
            </span>
          </div>

          <div className="flex gap-2 flex-wrap mb-4">
            {[product.fit, product.fabric].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-pill text-[var(--ink-muted)]"
                style={{ background: 'rgba(100,120,160,0.08)', borderRadius: 'var(--radius-pill)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full text-center text-sm font-bold py-3 rounded-xl text-[var(--ink)] transition-all duration-200 hover-sheen"
            style={{
              background: 'var(--lime)',
              boxShadow: hovered ? '0 4px 20px rgba(170,255,0,0.35)' : '0 2px 8px rgba(170,255,0,0.15)',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            Купить
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <ProductModal product={product} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function FeaturedDrop() {
  const [headerRef, headerInView] = useInView()

  return (
    <section id="drop" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle bg */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, #EDF1F7 0%, #E2EAF5 50%, #EDF1F7 100%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="h-px flex-1 max-w-[40px]"
              style={{ background: 'var(--lime)' }}
            />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">
              Первый дроп
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display font-bold text-[var(--ink)] leading-tight"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            Content Is Our Life
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-[var(--ink-muted)] mt-4 max-w-lg text-base md:text-lg leading-relaxed"
          >
            Первый дроп mnd — для людей, у которых контент —
            не работа, а способ думать и создавать.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto md:mx-0">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center gap-6"
        >
          <p className="text-sm text-[var(--ink-faint)]">
            Лимитированный тираж — доступно сейчас
          </p>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: 'var(--grid-line)' }} />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)', boxShadow: '0 0 6px var(--lime)' }} />
            <span className="text-xs font-medium text-[var(--ink-muted)]">В наличии</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
