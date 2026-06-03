"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/vikramsingh", domain: "linkedin.com" },
  { label: "Behance", href: "https://behance.net/vikramsingh", domain: "behance.net" },
  { label: "Dribbble", href: "https://dribbble.com/vikramsingh", domain: "dribbble.com" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-1/2 -bottom-32 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA row */}
        <div className="py-14 border-b border-white/[0.06] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h3 className="text-[26px] lg:text-[32px] font-bold tracking-[-0.02em] text-white leading-tight">
              Let&apos;s create something <span className="text-indigo-400">exceptional</span>.
            </h3>
            <p className="text-[14px] text-white/40 mt-2">Available for new projects and collaborations.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-indigo-600 text-white text-[14px] font-semibold hover:bg-indigo-700 transition-colors">
              Start a Project
            </a>
            <a href="mailto:hello@vikramsingh.design" className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-white/[0.06] border border-white/[0.12] text-white/80 text-[14px] font-semibold hover:bg-white/[0.1] hover:text-white transition-all">
              hello@vikramsingh.design
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-[12px] font-bold">VS</div>
              <Link href="/" className="text-[16px] font-bold text-white hover:text-indigo-400 transition-colors">Vikram Singh</Link>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs mb-5">
              Senior AI Product Designer &amp; Creative Lead — designing AI-powered digital products that scale.
            </p>
            {/* Branded social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white flex items-center justify-center overflow-hidden hover:scale-110 hover:ring-2 hover:ring-indigo-500/30 transition-all"
                >
                  <img src={`https://www.google.com/s2/favicons?sz=64&domain=${s.domain}`} alt="" width={18} height={18} className="w-[18px] h-[18px] object-contain" loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-4">Get in touch</p>
            <ul className="space-y-2.5">
              <li><a href="mailto:hello@vikramsingh.design" className="text-[13px] text-white/50 hover:text-white transition-colors">hello@vikramsingh.design</a></li>
              <li><a href="https://wa.me/919729680598" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-white transition-colors">WhatsApp</a></li>
              <li className="flex items-center gap-2 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] text-emerald-400 font-medium">Available for work</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25">© {new Date().getFullYear()} Vikram Singh. All rights reserved.</p>
          <button onClick={scrollToTop} className="group inline-flex items-center gap-2 text-[11px] text-white/25 hover:text-white/70 transition-colors font-medium">
            Back to top
            <span className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
              <svg width="10" height="10" viewBox="0 0 11 11" fill="none"><path d="M5.5 9V2M2 5.5l3.5-3.5 3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
