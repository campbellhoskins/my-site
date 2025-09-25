'use client'

import { Button } from './ui/button'
import { useState, useEffect } from 'react'

const navItems = [
  {
    name: 'about',
    action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    name: 'experience',
    action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    name: 'projects',
    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects']
      const scrollPosition = window.scrollY + 200 // Offset to account for scroll margin

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="mb-8 tracking-tight">
      <div className="flex flex-col space-y-2">
        {navItems.map(({ name, action }) => {
          const isActive = activeSection === name
          return (
            <Button
              key={name}
              variant="ghost"
              onClick={action}
              className="justify-start w-fit h-auto py-2 px-3 group relative hover:bg-transparent"
            >
              <div className="flex items-center">
                <div 
                  className={`h-px bg-gray-400/60 transition-all duration-300 ${
                    isActive ? 'w-16' : 'w-4 group-hover:w-16'
                  }`}
                />
                <span 
                  className={`ml-3 transition-all duration-300 ${
                    isActive ? 'text-white font-medium' : 'text-gray-400/80 group-hover:text-white group-hover:font-medium'
                  }`}
                >
                  {name.toUpperCase()}
                </span>
              </div>
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
