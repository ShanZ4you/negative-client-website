import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { Link, useRoute } from '../lib/router'

const links = [
  { to: '/features', label: 'Features' },
  { to: '/downloads', label: 'Downloads' },
  { to: '/changelog', label: 'Changelog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'About' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { path } = useRoute()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#08090dcc] backdrop-blur-xl border-b border-white/[0.06]' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <motion.div whileHover={{ rotate: -8, scale: 1.06 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
            <Logo />
          </motion.div>
          <span className="font-display text-[15px] font-semibold tracking-tight">Negative Client</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = path === l.to
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors ${
                  isActive ? 'text-text' : 'text-muted hover:text-text'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="hidden md:block">
          <Link to="/downloads">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="inline-block rounded-full bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-text ring-1 ring-white/10 transition-colors hover:bg-white/[0.1]"
            >
              Downloads
            </motion.span>
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-white/[0.06] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-5 pt-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-[14px] font-medium ${
                    path === l.to ? 'bg-white/[0.06] text-text' : 'text-muted'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/downloads"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-gradient-to-r from-violet to-blue px-3 py-2.5 text-center text-[14px] font-semibold text-white"
              >
                Downloads
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
