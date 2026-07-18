import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

export default function FeatureCard({
  icon: Icon,
  title,
  desc,
  badge,
  delay = 0,
}: {
  icon: LucideIcon
  title: string
  desc: string
  badge?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [glow, setGlow] = useState({ x: 50, y: 50, on: false })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({ ry: (px - 0.5) * 8, rx: (0.5 - py) * 8 })
    setGlow({ x: px * 100, y: py * 100, on: true })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        setTilt({ rx: 0, ry: 0 })
        setGlow((g) => ({ ...g, on: false }))
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.05]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: glow.on ? 1 : 0,
          background: `radial-gradient(180px circle at ${glow.x}% ${glow.y}%, rgba(124,108,246,0.14), transparent 70%)`,
        }}
      />
      <div className="relative flex items-start justify-between">
        <motion.div
          whileHover={{ scale: 1.08, rotate: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet/25 to-blue/20 text-cyan"
        >
          <Icon size={18} strokeWidth={1.8} />
        </motion.div>
        {badge && (
          <span className="rounded-full border border-cyan/25 bg-cyan/10 px-2.5 py-1 text-[10.5px] font-medium text-cyan">
            {badge}
          </span>
        )}
      </div>
      <h3 className="relative mt-4 font-display text-[15.5px] font-semibold">{title}</h3>
      <p className="relative mt-2 text-[13.5px] leading-relaxed text-muted">{desc}</p>
    </motion.div>
  )
}
