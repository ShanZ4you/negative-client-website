import Reveal from './Reveal'

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-14 pt-20 text-center sm:pt-28">
      <Reveal>
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-cyan/80">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted">{description}</p>
        )}
      </Reveal>
    </div>
  )
}
