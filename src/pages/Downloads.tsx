import { FileText } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import release from '../config/release.json'

export default function Downloads() {
  return (
    <div>
      <PageHeader
        eyebrow="Downloads"
        title="Get Negative Client"
        description="Public installer downloads are coming soon. In the meantime, here's what's in the latest build."
      />

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <Reveal>
          <div className="glass rounded-3xl p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-wider text-cyan/80">Latest build</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">v{release.version}</h2>
                <p className="mt-2 text-[13.5px] text-muted">
                  Built {new Date(release.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  {' · '}
                  {release.supportedLoaders}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[14.5px] font-medium text-muted">
                Download coming soon
              </span>
            </div>

            <div className="mt-7">
              <p className="flex items-center gap-2 text-[12.5px] font-medium text-muted">
                <FileText size={14} /> Release notes
              </p>
              <ul className="mt-3 space-y-2">
                {release.notes.map((n) => (
                  <li key={n} className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
