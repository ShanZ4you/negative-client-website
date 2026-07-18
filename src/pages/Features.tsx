import {
  Zap, Layers, Blocks, Compass, Package, Image, Sparkles, RefreshCw, MonitorSmartphone, HardDrive, ShieldCheck,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import FeatureCard from '../components/FeatureCard'

const features = [
  { icon: Zap, title: 'Fast launch', desc: 'Cold start in about a second. No splash screens, no waiting on background tasks you never asked for.' },
  { icon: Layers, title: 'Multiple profiles', desc: 'Keep every modpack, version, and Java runtime separate. Switch between them without a restart.' },
  { icon: Blocks, title: 'Fabric, Forge & NeoForge', desc: 'Install and launch any loader from the same place, with per-profile version pinning.' },
  { icon: Compass, title: 'Modrinth integration', desc: 'Search, install, and update mods from Modrinth without leaving the client.' },
  { icon: Package, title: 'CurseForge integration', desc: 'Browse CurseForge packs and mods side by side with Modrinth results.' },
  { icon: Image, title: 'Resource pack manager', desc: 'Drag, reorder, and preview resource packs before you commit to a load order.' },
  { icon: Sparkles, title: 'Shader manager', desc: 'Install and swap shader packs with live previews, and roll back in one click.' },
  { icon: RefreshCw, title: 'Automatic updates', desc: 'The client updates itself in the background. You will always be on the latest release.' },
  { icon: MonitorSmartphone, title: 'Modern UI', desc: 'A clean, keyboard-friendly interface that stays out of your way once your game is running.' },
  { icon: HardDrive, title: 'Local data storage', desc: 'Your profiles and settings live on your machine. Nothing is synced anywhere without asking.' },
  { icon: ShieldCheck, title: 'Microsoft authentication', desc: 'Secure sign-in through Microsoft\u2019s official flow.', badge: 'Coming soon' },
]

export default function Features() {
  return (
    <div>
      <PageHeader
        eyebrow="Features"
        title="Everything you need, nothing you don't"
        description="Negative Client focuses on the handful of things that actually matter before you hit Play — the rest stays out of sight."
      />

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              badge={f.badge}
              delay={(i % 3) * 0.06}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
