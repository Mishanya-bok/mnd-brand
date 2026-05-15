import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const ringX = useSpring(dotX, { damping: 28, stiffness: 220, mass: 0.5 })
  const ringY = useSpring(dotY, { damping: 28, stiffness: 220, mass: 0.5 })

  const [hovered, setHovered] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const enter = (e) => {
      const el = e.target.closest('a, button, [data-cursor]')
      if (el) {
        setHovered(true)
        setLabel(el.dataset.cursorLabel || '')
      }
    }

    const leave = (e) => {
      const el = e.target.closest('a, button, [data-cursor]')
      if (el) {
        setHovered(false)
        setLabel('')
      }
    }

    const down = () => setClicking(true)
    const up = () => setClicking(false)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', enter)
    window.addEventListener('mouseout', leave)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', enter)
      window.removeEventListener('mouseout', leave)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: clicking ? 0.5 : hovered ? 0 : 1,
          backgroundColor: hovered ? '#AAFF00' : '#0A0A0F',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: clicking ? 0.8 : hovered ? 2.0 : 1,
          borderColor: hovered ? 'rgba(170,255,0,0.6)' : 'rgba(10,10,15,0.3)',
          backgroundColor: hovered ? 'rgba(170,255,0,0.08)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center text-[9px] font-bold uppercase tracking-widest text-[var(--ink)] whitespace-nowrap"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  )
}
