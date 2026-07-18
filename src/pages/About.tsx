import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'

const goals = [
  { title: 'Start fast, stay out of the way', desc: 'Every screen exists to get you into a world faster, not to hold your attention.' },
  { title: 'Respect your machine', desc: 'No telemetry beyond anonymous crash reports, no background processes once the game is running.' },
  { title: 'Make trust visible', desc: 'Every release ships with a public checksum, so you can verify what you installed.' },
]

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Why we built Negative Client"
        description="Most Minecraft launchers grew features faster than they grew judgment. We started over with a smaller list."
      />

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <Reveal>
          <p className="text-[14.5px] leading-relaxed text-muted">
            Negative Client began as a personal launcher for a small modding group that wanted something
            faster than the alternatives on the market, without giving up the loader and mod-source support
            they actually used. The name is the point: it's what's left after removing everything a launcher
            doesn't need.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-wider text-cyan/80">Goals</h2>
            <div className="mt-5 space-y-6">
              {goals.map((g) => (
                <div key={g.title} className="flex gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet to-cyan" />
                  <div>
                    <p className="text-[14px] font-medium text-text">{g.title}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
