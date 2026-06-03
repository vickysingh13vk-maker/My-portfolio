"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ variant = "auto" }: { variant?: "auto" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // light pill once scrolled past dark hero, or always on light-variant pages
  const light = variant === "light" || scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`flex items-center gap-1 px-2.5 py-2 rounded-xl transition-all duration-300 ${
            light
              ? "bg-white/80 backdrop-blur-xl border border-black/[0.07] shadow-lg shadow-black/5"
              : "bg-white/[0.07] backdrop-blur-xl border border-white/[0.12]"
          }`}
        >
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white text-xs font-bold mr-2 flex-shrink-0"
          >
            VS
          </Link>

          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActive(link.href)}
                onMouseLeave={() => setActive(null)}
                className={`relative px-4 py-1.5 text-[13px] font-medium transition-colors rounded-lg ${
                  light ? "text-black/60 hover:text-black" : "text-white/65 hover:text-white"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-hover"
                    className={`absolute inset-0 rounded-lg ${light ? "bg-black/[0.05]" : "bg-white/[0.1]"}`}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center ml-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-8 px-4 rounded-lg bg-indigo-600 text-white text-[12px] font-semibold hover:bg-indigo-700 transition-colors"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 ml-1"
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className={`block w-5 h-0.5 ${light ? "bg-black/70" : "bg-white/70"}`} />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className={`block w-5 h-0.5 ${light ? "bg-black/70" : "bg-white/70"}`} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className={`block w-5 h-0.5 ${light ? "bg-black/70" : "bg-white/70"}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/90 backdrop-blur-xl border border-black/[0.08] rounded-xl p-5 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] font-medium text-black/70 hover:text-black py-2 px-3 rounded-lg hover:bg-black/[0.04] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center h-11 px-6 rounded-lg bg-indigo-600 text-white text-[14px] font-semibold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
