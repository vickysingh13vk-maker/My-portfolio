"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { stagger, scaleIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/SectionHeader";

const icons: Record<string, React.ReactNode> = {
  monitor: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="3" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M7.5 19h7M11 15v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  cpu: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="6.5" y="6.5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M9 2v3M13 2v3M9 17v3M13 17v3M2 9h3M2 13h3M17 9h3M17 13h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  "pen-tool": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2L20 11L11 20L2 11L11 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  ),
  layers: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M2 11l9-7 9 7-9 7-9-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M2 15.5l9 7 9-7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  ),
  grid: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
      <rect x="13" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
      <rect x="2" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  ),
  compass: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M14.5 7.5l-2.5 5-5 2.5 2.5-5 5-2.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <SectionHeader
            theme="dark"
            eyebrow="What I Do"
            title="My Services"
            description="Full-spectrum design capability — from strategy through to shipping."
          />

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-indigo-600/0 group-hover:bg-indigo-600/15 blur-3xl transition-all duration-500" />

                {/* Number index */}
                <span className="absolute top-6 right-7 text-[13px] font-bold text-white/15 group-hover:text-indigo-400/50 transition-colors">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {icons[service.icon]}
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-white/45 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Hover CTA */}
                  <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-semibold text-indigo-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:text-indigo-300">
                    Contact
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M1 6.5h11M7.5 2l4.5 4.5L7.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
