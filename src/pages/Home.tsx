import { useRef } from 'react'
import { Link } from '../lib/router'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import VerificationStrip from '../components/VerificationStrip'
import Magnetic from '../components/Magnetic'
import { StaggerGroup, StaggerItem } from '../components/Stagger'
import release from '../config/release.json'

const stats = [
  { label: 'Latest version', value: `v${release.version}` },
  { label: 'Supported loaders', value: release.supportedLoaders },
  { label: 'Platform', value: 'Windows 10/11' },
]

function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const tx1 = useTransform(sx, (v) => v * 0.6)
  const ty1 = useTransform(sy, (v) => v * 0.6)
  const tx2 = useTransform(sx, (v) => v * -0.4)
  const ty2 = useTransform(sy, (v) => v * -0.4)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set(e.clientX - rect.left - rect.width / 2)
    my.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <div ref={ref} onMouseMove={onMove} className="absolute inset-0">
      <motion.div
        style={{ x: tx1, y: ty1 }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]"
      >
        <motion.div
          className="h-full w-full rounded-full bg-violet/20"
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      <motion.div
        style={{ x: tx2, y: ty2 }}
        className="pointer-events-none absolute -top-24 right-[8%] h-[380px] w-[380px] rounded-full bg-cyan/10 blur-[110px]"
      >
        <motion.div
          className="h-full w-full rounded-full bg-cyan/10"
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="grid-fade pointer-events-none absolute inset-0" />
        <HeroGlow />

        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-24 text-center sm:pt-32">
          <StaggerGroup>
            <StaggerItem>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-muted"
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-cyan"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                v{release.version} is live — now available in 19 languages
              </motion.span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                A quieter way
                <br />
                to launch <span className="text-gradient">modded Minecraft</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
                Negative Client is a fast, minimal launcher for Fabric, Forge, and NeoForge — with
                Modrinth and CurseForge built in, and nothing else in your way.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic strength={10}>
                  <motion.div
                    whileHover={{ scale: 1.035 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  >
                    <Link
                      to="/downloads"
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-blue px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-lg shadow-violet/20 transition-shadow hover:shadow-violet/40"
                    >
                      Get Negative Client
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </Magnetic>
                <Magnetic strength={8}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  >
                    <Link
                      to="/features"
                      className="group inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 text-[14.5px] font-medium text-text transition hover:bg-white/[0.05]"
                    >
                      View features
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </Magnetic>
              </div>
              <p className="mt-4 text-[12.5px] text-faint">
                Windows 10/11 · Fabric · Forge · NeoForge
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <VerificationStrip />

      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <Reveal>
          <Carousel />
        </Reveal>
      </section>

      <section className="border-t border-white/[0.06] py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-[13px] text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
