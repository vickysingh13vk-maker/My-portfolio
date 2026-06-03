"use client";

/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { testimonials } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import SectionHeader from "@/components/ui/SectionHeader";

const avatars = [
  "https://i.pravatar.cc/120?img=12",
  "https://i.pravatar.cc/120?img=32",
  "https://i.pravatar.cc/120?img=51",
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, j) => (
        <svg key={j} width="13" height="13" viewBox="0 0 13 13" fill="#818cf8">
          <path d="M6.5 1l1.5 3 3.3.48L9 6.7l.56 3.3L6.5 8.5 3.44 10l.56-3.3L1.7 4.48 5 4 6.5 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-[500px] h-[350px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <SectionHeader
            theme="dark"
            eyebrow="Testimonials"
            title="What Clients Say"
            description="Feedback from founders, PMs, and executives I've worked with."
          />

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-7 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-300 flex flex-col"
              >
                <div className="mb-5"><Stars /></div>
                <blockquote className="text-[14px] text-white/55 leading-relaxed flex-1 mb-7">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <img src={avatars[i % avatars.length]} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="text-[13px] font-bold text-white">{t.name}</p>
                    <p className="text-[11px] text-white/40">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6"
              >
                <div className="mb-4"><Stars /></div>
                <blockquote className="text-[14px] text-white/55 leading-relaxed mb-6">
                  &ldquo;{testimonials[current].content}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <img src={avatars[current % avatars.length]} alt={testimonials[current].name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] font-bold text-white">{testimonials[current].name}</p>
                    <p className="text-[11px] text-white/40">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button onClick={() => paginate(-1)} className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-indigo-500" : "w-1.5 bg-white/20"}`}
                  />
                ))}
              </div>
              <button onClick={() => paginate(1)} className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
