import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function StaggerGroup({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerParent} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerChild} className={className}>
      {children}
    </motion.div>
  )
}
