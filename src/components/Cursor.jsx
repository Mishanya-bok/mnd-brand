import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/* ── pixel art arrow (4px per "pixel", 6 cols × 10 rows) ─────── */
const PIXEL = 4
const ARROW = [
  [0,0],
  [0,1],[1,1],
  [0,2],[1,2],[2,2],
  [0,3],[1,3],[2,3],[3,3],
  [0,4],[1,4],[2,4],[3,4],[4,4],
  [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],
  [0,6],[1,6],[2,6],[3,6],[4,6],
  [0,7],[1,7],[3,7],[4,7],
  [0,8],[1,8],[4,8],[5,8],
  [5,9],[6,9],
]
// SVG size
const W = 7 * PIXEL
const H = 10 * PIXEL

const BOX = 44 // following ring size

export default function Cursor() {
  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  // spring-follow for the box ring
  const springX = useSpring(rawX, { damping: 26, stiffness: 200, mass: 0.6 })
  const springY = useSpring(rawY, { damping: 26, stiffness: 200, mass: 0.6 })

  // Box centered on cursor
  const boxX = useTransform(springX, v => v - BOX / 2)
  const boxY = useTransform(springY, v => v - BOX / 2)

  const [hovered, setHovered] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const onMove = (e) => { rawX.set(e.clientX); rawY.set(e.clientY) }
    const onOver = (e) => { if (e.target.closest('a,button,[data-cursor]')) setHovered(true) }
    const onOut  = (e) => { if (e.target.closest('a,button,[data-cursor]')) setHovered(false) }
    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout',  onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout',  onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
    }
  }, [])

  const fill = hovered ? '#AAFF00' : clicking ? '#AAFF00' : '#0A0A0F'
  const scale = clicking ? 0.85 : 1

  return (
    <>
      {/* Pixel arrow — hot-point at (0,0) so no offset needed */}
      <motion.div
        className="cursor-pixel"
        style={{ x: rawX, y: rawY }}
        animate={{ scale }}
        transition={{ duration: 0.1 }}
      >
        <svg
          width={W}
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          style={{ imageRendering: 'pixelated', display: 'block' }}
          shapeRendering="crispEdges"
        >
          {/* white outline layer — 1 pixel larger on each side */}
          {ARROW.map(([col, row], i) => (
            <rect
              key={`bg-${i}`}
              x={col * PIXEL - 1}
              y={row * PIXEL - 1}
              width={PIXEL + 2}
              height={PIXEL + 2}
              fill="rgba(255,255,255,0.9)"
            />
          ))}
          {/* main pixel layer */}
          {ARROW.map(([col, row], i) => (
            <rect
              key={`px-${i}`}
              x={col * PIXEL}
              y={row * PIXEL}
              width={PIXEL}
              height={PIXEL}
              fill={fill}
            />
          ))}
        </svg>
      </motion.div>

      {/* Following box ring */}
      <motion.div
        className="cursor-box"
        style={{ x: boxX, y: boxY, width: BOX, height: BOX }}
        animate={{
          scale: hovered ? 1.6 : clicking ? 0.85 : 1,
          rotate: hovered ? 45 : 0,
          borderColor: hovered ? 'rgba(170,255,0,0.7)' : 'rgba(10,10,15,0.25)',
          backgroundColor: hovered ? 'rgba(170,255,0,0.06)' : 'transparent',
        }}
        transition={{ duration: 0.22, ease: [0.16,1,0.3,1] }}
        style={{
          x: boxX,
          y: boxY,
          width: BOX,
          height: BOX,
          border: '2px solid rgba(10,10,15,0.25)',
          borderRadius: 0, // square = pixel art feel
        }}
      />
    </>
  )
}
