'use client'

import { Moon, Sun } from 'lucide-react'
import { useThemeStore } from '@/lib/theme'
import { useEffect } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-background border border-border transition-colors duration-300"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

