'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface SectionProps {
  id: string
  children: React.ReactNode
  onVisible?: (id: string) => void
}

export function Section({ id, children, onVisible }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" })

  useEffect(() => {
    if (isInView && onVisible) {
      onVisible(id)
    }
  }, [isInView, id, onVisible])

  return (
    <section id={id} ref={ref} className="scroll-mt-16 mb-16">
      {children}
    </section>
  )
}

