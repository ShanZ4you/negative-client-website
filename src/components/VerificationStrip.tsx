import release from '../config/release.json'

export default function VerificationStrip() {
  const items = [
    `version ${release.version}`,
    release.supportedLoaders,
    `built ${release.releaseDate}`,
    'Windows 10/11',
  ]
  const track = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-surface/60 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-[12px] text-faint">
        {track.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{t}</span>
            <span aria-hidden="true" className="text-violet/60">◆</span>
          </span>
        ))}
      </div>
      <style>{`
        .marquee {
          animation: nc-marquee 28s linear infinite;
        }
        @keyframes nc-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}
