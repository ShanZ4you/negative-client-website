import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import home from '../assets/screenshots/home.png'
import explore from '../assets/screenshots/explore.png'
import accounts from '../assets/screenshots/accounts.png'
import news from '../assets/screenshots/news.png'

const shots = [
  { src: home, label: 'Jump straight into your last profile from Home' },
  { src: explore, label: 'Install from Modrinth & CurseForge in-app' },
  { src: accounts, label: 'Manage Microsoft and local accounts side by side' },
  { src: news, label: 'Official Minecraft news, right inside the launcher' },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % shots.length), 4200)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <div className="relative h-[280px] sm:h-[380px]">
        <motion.img
          key={index}
          src={shots[index].src}
          alt={shots[index].label}
          initial={{ opacity: 0, y: 14, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full rounded-2xl object-cover object-top shadow-2xl shadow-black/40"
        />
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {shots.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setIndex(i)}
            aria-label={s.label}
            className="group flex items-center gap-2"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-gradient-to-r from-violet to-cyan' : 'w-1.5 bg-white/15'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="mt-3 text-center text-[13px] text-muted">{shots[index].label}</p>
    </div>
  )
}
