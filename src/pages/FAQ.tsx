import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'

const sections = [
  {
    title: 'Installation',
    items: [
      {
        q: 'How do I install Negative Client?',
        a: 'Download the installer from the Downloads page, run it, and follow the setup wizard. No separate Java install is required — a compatible runtime is bundled in.',
      },
      {
        q: 'Does it come with a Minecraft license?',
        a: 'No. Negative Client only launches the game — you\u2019ll sign in with your own Minecraft or Microsoft account.',
      },
      {
        q: 'Can I install it without admin rights?',
        a: 'Yes, the installer supports a per-user install location that doesn\u2019t require administrator privileges.',
      },
    ],
  },
  {
    title: 'System requirements',
    items: [
      {
        q: 'What are the minimum requirements?',
        a: 'Windows 10 or 11 (64-bit), 4 GB of RAM available to the client, and about 200 MB of free disk space before any modpacks are installed.',
      },
      {
        q: 'Is macOS or Linux supported?',
        a: 'Not yet. Windows is the only supported platform right now — it\u2019s listed on the roadmap in About.',
      },
    ],
  },
  {
    title: 'Updates',
    items: [
      {
        q: 'How do updates work?',
        a: 'Negative Client checks for a new version on launch and installs it in the background. You can disable this in Settings and update manually from the Downloads page instead.',
      },
      {
        q: 'Will updating remove my profiles or mods?',
        a: 'No. Updates only replace the client itself — profiles, modpacks, and settings are stored separately and are untouched.',
      },
    ],
  },
  {
    title: 'Troubleshooting',
    items: [
      {
        q: 'The client won\u2019t launch a modpack — what should I check first?',
        a: 'Confirm the profile\u2019s Java runtime matches what the modpack expects, and check the profile\u2019s log for the mod that failed to load — it\u2019s usually named in the first error.',
      },
      {
        q: 'Where can I get more help?',
        a: 'Join the Discord server linked in the footer — the support channel is monitored daily.',
      },
    ],
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[14.5px] font-medium text-text">{q}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-faint transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-[13.5px] leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <PageHeader eyebrow="FAQ" title="Common questions" description="Installation, requirements, updates, and the occasional stuck launch." />

      <section className="mx-auto max-w-2xl px-6 pb-28">
        <div className="space-y-10">
          {sections.map((s, si) => (
            <Reveal key={s.title} delay={si * 0.06}>
              <h2 className="mb-1 font-display text-[13px] font-semibold uppercase tracking-wider text-cyan/80">
                {s.title}
              </h2>
              <div>
                {s.items.map((it) => (
                  <Item key={it.q} q={it.q} a={it.a} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
