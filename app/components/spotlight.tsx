'use client'

import { useMousePosition } from '@/lib/use-mouse-position'

export function Spotlight() {
  const { x, y, scrollX, scrollY } = useMousePosition()

  // Adjust spotlight position to account for scroll offset
  // On desktop (lg:absolute), we need to adjust for scroll position
  // On mobile (fixed), we don't need to adjust
  const adjustedX = x
  const adjustedY = y + scrollY

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-300 lg:absolute" 
      style={{
        background: `radial-gradient(600px at ${adjustedX}px ${adjustedY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    />
  )
}
