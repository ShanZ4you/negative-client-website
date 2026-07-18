import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

export default function Magnetic({
  children,
  className = '',
  strength = 14,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
