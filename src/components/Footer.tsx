import Link from "next/link";
import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-serif text-2xl text-ivory">Dyuti Parruck</div>
            <p className="mt-2 max-w-xs text-sm text-taupe">
              {profile.positioning}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
                Site
              </div>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-taupe">
                <li><Link className="hover:text-ivory" href="/about">About</Link></li>
                <li><Link className="hover:text-ivory" href="/expertise">Expertise</Link></li>
                <li><Link className="hover:text-ivory" href="/public-figure">Public Figure</Link></li>
                <li><Link className="hover:text-ivory" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
                Connect
              </div>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-taupe">
                <li>
                  <a className="hover:text-ivory" href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="hover:text-ivory" href={profile.instagramUrl} target="_blank" rel="noreferrer noopener">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-taupe-dim sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Dyuti Parruck · Dubai, UAE</span>
          <span>Every claim on this site is sourced — see Media Coverage</span>
        </div>
      </div>
    </footer>
  );
}
