"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn } from "@/lib/motion";

const highlights = [
  "5+ years designing digital products",
  "Expertise in SaaS, FinTech, EdTech, Crypto, ERP, OTT",
  "AI-powered design workflows",
  "Product strategy & design systems",
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-100 bg-indigo-50 text-[11px] font-bold tracking-widest uppercase text-indigo-600 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              About Me
            </span>
            <h2 className="text-[36px] lg:text-[48px] font-bold tracking-[-0.03em] text-[#0a0a0a] leading-[1.1] mb-8">
              Designing with Purpose &amp; Precision
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-[15px] text-gray-600 leading-relaxed">
                I&apos;m a Senior AI Product Designer with 5+ years of experience
                helping startups and businesses create digital products that
                users genuinely love.
              </p>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                My expertise spans SaaS, FinTech, EdTech, Crypto, ERP, OTT,
                Branding, and AI-powered experiences.
              </p>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                I combine product thinking, design systems, branding, and modern
                AI tools to deliver impactful digital solutions that align user
                needs with business goals.
              </p>
            </div>

            <div className="space-y-3 mb-10">
              {highlights.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[13px] text-gray-600 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-indigo-600 text-white text-[13px] font-semibold hover:bg-indigo-700 transition-colors">
                Work Together
              </a>
              <a href="#projects" className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-white border border-gray-300 text-[#0a0a0a] text-[13px] font-semibold hover:border-gray-900 transition-colors">
                View My Work
              </a>
            </div>
          </motion.div>

          <motion.div variants={scaleIn} className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=720&q=80"
                  alt="Vikram Singh portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-5 -right-5 bg-white border border-gray-200 rounded-xl p-4 shadow-xl shadow-gray-200/60 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l1.8 3.6 4 .58-2.9 2.83.68 3.99L8 11.16l-3.58 1.84.68-3.99L2.2 6.18 6.2 5.6 8 2z" fill="white"/></svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#0a0a0a]">Top Designer</p>
                    <p className="text-[10px] text-gray-500">5+ Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-lg animate-float-alt">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#0a0a0a]">10+ Clients</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
