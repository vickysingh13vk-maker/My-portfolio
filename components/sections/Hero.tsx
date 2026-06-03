"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Digital Products" },
  { value: "10+", label: "Global Clients" },
  { value: "1000+", label: "Screens Designed" },
];

// Decorative floating tool cards — symmetric framing around centered content
const floatingCards = [
  // Left column (top → bottom)
  { domain: "figma.com", label: "Figma", glow: "bg-pink-500/25", pos: "top-[18%] left-[6%] xl:left-[10%]", anim: "animate-float", delay: 0.5 },
  { domain: "claude.ai", label: "Claude", glow: "bg-orange-500/25", pos: "top-[46%] left-[3%] xl:left-[6%]", anim: "animate-float-alt", delay: 0.8 },
  { domain: "chatgpt.com", label: "ChatGPT", glow: "bg-emerald-500/25", pos: "bottom-[16%] left-[8%] xl:left-[13%]", anim: "animate-float-delay", delay: 1.1 },
  // Right column (top → bottom)
  { domain: "adobe.com", label: "Photoshop", glow: "bg-blue-500/25", pos: "top-[20%] right-[6%] xl:right-[10%]", anim: "animate-float-alt", delay: 0.65 },
  { domain: "framer.com", label: "Framer", glow: "bg-indigo-500/25", pos: "top-[48%] right-[3%] xl:right-[6%]", anim: "animate-float", delay: 0.95 },
  { domain: "dribbble.com", label: "Dribbble", glow: "bg-pink-500/25", pos: "bottom-[18%] right-[8%] xl:right-[13%]", anim: "animate-float-delay", delay: 1.25 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0a0a0f]">
      {/* Subtle background — two faint orbs only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-500/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
      </div>

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating tool cards — decorative, desktop only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {floatingCards.map((card) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.6, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${card.pos}`}
          >
            <div className={card.anim}>
              <div className="relative group">
                {/* Colored glow halo */}
                <div className={`absolute inset-0 rounded-2xl blur-xl ${card.glow} scale-110`} />
                {/* Card */}
                <div className="relative flex items-center gap-2.5 pl-2.5 pr-4 py-2.5 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-2xl shadow-black/30">
                  <span className="w-9 h-9 rounded-xl bg-white flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md">
                    <img
                      src={`https://www.google.com/s2/favicons?sz=64&domain=${card.domain}`}
                      alt=""
                      width={22}
                      height={22}
                      className="w-[22px] h-[22px] object-contain"
                      loading="lazy"
                    />
                  </span>
                  <span className="text-[12px] font-semibold text-white/85 pr-0.5">{card.label}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center text-center">
          {/* Personal-intro headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[34px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.15] tracking-[-0.03em] mb-8"
          >
            <span className="block whitespace-nowrap">
              <span className="text-white">Hi, I&apos;m</span>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
                alt="Vikram Singh"
                className="inline-block align-middle mx-3 w-[48px] h-[40px] sm:w-[64px] sm:h-[54px] lg:w-[80px] lg:h-[66px] rounded-2xl object-cover -translate-y-1"
              />
              <span className="text-white">Vikram Singh!</span>
            </span>
            <span className="block">
              <span className="text-white/35">I&apos;m a </span>
              <span className="text-white">Product Designer</span>
              <span className="text-white/35"> at</span>
            </span>
            <span className="block">
              <span className="text-indigo-400">Alpheric Inc.</span>
              <span className="inline-flex items-center gap-2 align-middle ml-4 -translate-y-1.5 text-[13px] font-semibold tracking-normal text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3.5 py-1.5 rounded-full whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to work
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUp} className="text-[16px] lg:text-[17px] text-white/55 leading-relaxed max-w-2xl mx-auto mb-3">
            Senior AI Product Designer with 5+ years of experience creating
            SaaS, FinTech, EdTech, eCommerce, ERP, OTT, and AI-powered digital
            products.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[14px] text-white/35 leading-relaxed max-w-xl mx-auto mb-10">
            I help startups and businesses transform ideas into exceptional
            digital products through product strategy, user experience design,
            branding, and AI-powered creative workflows.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-indigo-600 text-white text-[14px] font-semibold hover:bg-indigo-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-white/[0.06] border border-white/[0.12] text-white/80 text-[14px] font-semibold hover:bg-white/[0.1] hover:text-white transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[14px] text-white/35 leading-snug mb-16">
            Feel free to explore my work and reach out — I&apos;d love to connect.
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} className="w-full max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden divide-x divide-y sm:divide-y-0 divide-white/[0.07]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative p-6 text-center hover:bg-white/[0.04] transition-colors duration-300"
                >
                  <p className="text-[32px] lg:text-[38px] font-bold tracking-[-0.02em] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-white/45 font-semibold uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-12 bg-indigo-500 rounded-full transition-all duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
