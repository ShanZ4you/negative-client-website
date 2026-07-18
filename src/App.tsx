import { motion } from 'framer-motion'
import { useEffect, type ReactElement } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useRoute } from './lib/router'
import Home from './pages/Home'
import Features from './pages/Features'
import Downloads from './pages/Downloads'
import Changelog from './pages/Changelog'
import FAQ from './pages/FAQ'
import About from './pages/About'

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
}

const pages: Record<string, () => ReactElement> = {
  '/': Home,
  '/features': Features,
  '/downloads': Downloads,
  '/changelog': Changelog,
  '/faq': FAQ,
  '/about': About,
}

function AnimatedRoutes() {
  const { path } = useRoute()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [path])

  const Page = pages[path] ?? Home

  return (
    <motion.div key={path} {...pageTransition}>
      <Page />
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <NavBar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}
