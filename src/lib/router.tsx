import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode, MouseEvent } from 'react'

type RouterCtx = {
  path: string
  navigate: (to: string) => void
}

const Ctx = createContext<RouterCtx | null>(null)

function readHash() {
  const h = window.location.hash.replace(/^#/, '')
  return h || '/'
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(() => {
    try {
      return readHash()
    } catch {
      return '/'
    }
  })

  useEffect(() => {
    const onHashChange = () => setPath(readHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (to: string) => {
    try {
      window.location.hash = to
    } catch {
      // ignore
    }
    setPath(to)
  }

  return <Ctx.Provider value={{ path, navigate }}>{children}</Ctx.Provider>
}

export function useRoute() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useRoute must be used within RouterProvider')
  return ctx
}

export function Link({
  to,
  children,
  className,
  onClick,
}: {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
}) {
  const { navigate } = useRoute()
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate(to)
    onClick?.()
  }
  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
