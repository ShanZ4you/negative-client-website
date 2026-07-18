import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import changelog from '../config/changelog.json'

const groups: { key: 'added' | 'improved' | 'fixed'; label: string; dot: string }[] = [
  { key: 'added', label: 'Added', dot: 'bg-cyan' },
  { key: 'improved', label: 'Improved', dot: 'bg-blue' },
  { key: 'fixed', label: 'Fixed', dot: 'bg-violet' },
]

export default function Changelog() {
  return (
    <div>
      <PageHeader
        eyebrow="Changelog"
        title="Version history"
        description="Every release, in order, with nothing glossed over."
      />

      <section className="mx-auto max-w-2xl px-6 pb-28">
        <div className="relative">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-white/10" />
          <div className="space-y-14">
            {changelog.map((entry, i) => (
              <Reveal key={entry.version} delay={i * 0.05}>
                <div className="relative pl-9">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-base bg-gradient-to-br from-violet to-cyan" />
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="font-display text-xl font-semibold tracking-tight">v{entry.version}</h2>
                    <span className="font-mono text-[12px] text-faint">
                      {new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>

                  <div className="mt-5 space-y-5">
                    {groups.map((g) => {
                      const items = entry[g.key]
                      if (!items || items.length === 0) return null
                      return (
                        <div key={g.key}>
                          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-muted">
                            <span className={`h-1.5 w-1.5 rounded-full ${g.dot}`} />
                            {g.label}
                          </p>
                          <ul className="mt-2.5 space-y-1.5">
                            {items.map((it) => (
                              <li key={it} className="text-[13.5px] leading-relaxed text-muted">
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
