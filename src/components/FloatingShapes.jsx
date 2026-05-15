import { useEffect, useRef } from 'react'

/* ── Individual 3D shape ─────────────────────────────────────── */
function Shape3D({ style, className, animClass, size, border, delay = 0 }) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        border,
        animationDelay: `${delay}s`,
        ...style,
      }}
    >
      <div
        className={animClass}
        style={{
          width: '100%',
          height: '100%',
          border,
          opacity: 0.5,
        }}
      />
    </div>
  )
}

/*
  variant: 'light' | 'dark'
  Renders a set of slowly rotating / floating 3D geometric shapes
  positioned absolutely — place inside a `relative overflow-hidden` section.
*/
export default function FloatingShapes({ variant = 'light' }) {
  const lime   = variant === 'dark' ? 'rgba(170,255,0,0.22)'  : 'rgba(170,255,0,0.12)'
  const blue   = variant === 'dark' ? 'rgba(120,160,255,0.15)' : 'rgba(100,140,220,0.1)'
  const silver = variant === 'dark' ? 'rgba(255,255,255,0.1)'  : 'rgba(140,160,200,0.14)'

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* ── Large lime square — slow rotateY ── */}
      <div style={{
        position: 'absolute', top: '10%', right: '8%',
        width: 160, height: 160,
        perspective: 600,
        animation: 'bob 7s ease-in-out infinite',
        animationDelay: '0s',
      }}>
        <div style={{
          width: '100%', height: '100%',
          border: `1.5px solid ${lime}`,
          animation: 'float3d-y 22s linear infinite',
          transformStyle: 'preserve-3d',
        }} />
      </div>

      {/* ── Medium diamond — rotateX ── */}
      <div style={{
        position: 'absolute', bottom: '18%', left: '5%',
        width: 90, height: 90,
        perspective: 400,
        animation: 'bob 9s ease-in-out infinite',
        animationDelay: '-3s',
      }}>
        <div style={{
          width: '100%', height: '100%',
          border: `1.5px solid ${blue}`,
          transform: 'rotate(45deg)',
          animation: 'float3d-x 16s linear infinite',
          transformStyle: 'preserve-3d',
        }} />
      </div>

      {/* ── Small silver square — combo ── */}
      <div style={{
        position: 'absolute', top: '55%', right: '18%',
        width: 56, height: 56,
        perspective: 300,
        animation: 'bob 6s ease-in-out infinite',
        animationDelay: '-1.5s',
      }}>
        <div style={{
          width: '100%', height: '100%',
          border: `1px solid ${silver}`,
          animation: 'float3d-combo 12s linear infinite',
          transformStyle: 'preserve-3d',
        }} />
      </div>

      {/* ── Tiny lime dot orbit ── */}
      <div style={{
        position: 'absolute', top: '30%', left: '20%',
        width: 36, height: 36,
        perspective: 200,
        animation: 'bob 11s ease-in-out infinite',
        animationDelay: '-5s',
      }}>
        <div style={{
          width: '100%', height: '100%',
          border: `1px solid ${lime}`,
          borderRadius: '50%',
          animation: 'float3d-y 9s linear infinite',
          transformStyle: 'preserve-3d',
        }} />
      </div>

      {/* ── Extra large faint frame — bottom right ── */}
      <div style={{
        position: 'absolute', bottom: '-4%', right: '-3%',
        width: 220, height: 220,
        perspective: 800,
        animation: 'bob 14s ease-in-out infinite',
        animationDelay: '-7s',
      }}>
        <div style={{
          width: '100%', height: '100%',
          border: `1px solid ${silver}`,
          animation: 'float3d-combo 35s linear infinite',
          transformStyle: 'preserve-3d',
        }} />
      </div>
    </div>
  )
}
