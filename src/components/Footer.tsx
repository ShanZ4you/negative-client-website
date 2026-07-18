import { Link } from '../lib/router'
import Logo from './Logo'
import release from '../config/release.json'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Logo size={22} />
              <span className="font-display text-[14px] font-semibold">Negative Client</span>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">
              A quieter way to launch modded Minecraft. Built for people who just want to hit Play.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">Product</p>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                <li><Link to="/features" className="hover:text-text">Features</Link></li>
                <li><Link to="/downloads" className="hover:text-text">Downloads</Link></li>
                <li><Link to="/changelog" className="hover:text-text">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">Support</p>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                <li><Link to="/faq" className="hover:text-text">FAQ</Link></li>
                <li><Link to="/about" className="hover:text-text">About</Link></li>
                <li><a href="#" className="hover:text-text">Discord</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">Legal</p>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                <li><a href="#" className="hover:text-text">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-text">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-[12px] text-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Negative Client. Not affiliated with Mojang or Microsoft.</p>
          <p className="font-mono">v{release.version}</p>
        </div>
      </div>
    </footer>
  )
}
