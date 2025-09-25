'use client'

import { useState, useEffect } from 'react'

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateScrollPosition = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('scroll', updateScrollPosition)

    // Initialize scroll position
    updateScrollPosition()

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('scroll', updateScrollPosition)
    }
  }, [])

  return { ...mousePosition, scrollX: scrollPosition.x, scrollY: scrollPosition.y }
}
