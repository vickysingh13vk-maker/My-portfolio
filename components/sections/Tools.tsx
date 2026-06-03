"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { aiTools, designTools, skills } from "@/lib/data";
import { fadeUp, stagger, scaleIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/SectionHeader";

function ToolTile({ name, domain }: { name: string; domain: string }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-default"
    >
      <span className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
        <img
          src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`}
          alt=""
          width={26}
          height={26}
          className="w-[26px] h-[26px] object-contain"
          loading="lazy"
        />
      </span>
      <span className="text-[12px] font-semibold text-white/70 group-hover:text-white text-center leading-tight transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

function SkillRow({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="group flex items-center gap-4 px-3 py-2.5 -mx-3 rounded-xl hover:bg-white/[0.03] transition-colors">
      <span className="text-[13px] font-semibold text-white/80 group-hover:text-white w-32 flex-shrink-0 transition-colors">
        {name}
      </span>
      <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 shadow-[0_0_14px_rgba(99,102,241,0.6)]"
        />
      </div>
      <span className="text-[13px] font-bold text-white w-11 text-right tabular-nums flex-shrink-0">
        {level}%
      </span>
    </div>
  );
}

export default function Tools() {
  return (
    <section id="tools" className="py-24 lg:py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute left-1/4 top-1/4 w-[450px] h-[400px] rounded-full bg-indigo-600/12 blur-[140px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[350px] h-[300px] rounded-full bg-sky-500/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <SectionHeader
            theme="dark"
            eyebrow="Skills & Stack"
            title="AI & Design Stack"
            description="The skills and tools I use daily to design, think, and build."
          />

          {/* Skills proficiency — featured card */}
          <motion.div
            variants={fadeUp}
            className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.1] rounded-3xl p-8 lg:p-10 mb-6 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-indigo-600/15 blur-[80px] pointer-events-none" />

            <div className="relative flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M3 12l3-6 3 4 3-7 3 9" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white">Core Skills</h3>
                  <p className="text-[12px] text-white/40">Proficiency across the product design craft</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-400/20 px-3 py-1.5 rounded-full">
                {skills.length} core skills
              </span>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-1">
              {skills.map((skill, i) => (
                <SkillRow key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Tools — tile grids */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Tools */}
            <motion.div variants={fadeUp} className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 overflow-hidden">
              <div className="absolute -top-16 -left-16 w-44 h-44 rounded-full bg-indigo-600/15 blur-[70px] pointer-events-none" />
              <div className="relative flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M9 1l2 4 4.5.65-3.25 3.17.77 4.48L9 11.5l-4.02 2.3.77-4.48L2.5 5.65 7 5 9 1z" fill="white"/></svg>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white">AI Tools</h3>
                    <p className="text-[12px] text-white/40">Accelerating design with AI</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-400/20 px-2.5 py-1 rounded-full">{aiTools.length}</span>
              </div>
              <motion.div variants={stagger} className="relative grid grid-cols-3 sm:grid-cols-4 gap-3">
                {aiTools.map((tool) => (
                  <ToolTile key={tool.name} name={tool.name} domain={tool.domain} />
                ))}
              </motion.div>
            </motion.div>

            {/* Design Tools */}
            <motion.div variants={fadeUp} className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-sky-500/15 blur-[70px] pointer-events-none" />
              <div className="relative flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M9 2.5L3 7l6 4.5L15 7 9 2.5z" fill="white" opacity="0.95"/><path d="M3 7v4l6 4.5 6-4.5V7" stroke="white" strokeWidth="1.2" fill="none"/></svg>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white">Design Tools</h3>
                    <p className="text-[12px] text-white/40">Core design workflow</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-sky-300 bg-sky-500/15 border border-sky-400/20 px-2.5 py-1 rounded-full">{designTools.length}</span>
              </div>
              <motion.div variants={stagger} className="relative grid grid-cols-3 sm:grid-cols-4 gap-3">
                {designTools.map((tool) => (
                  <ToolTile key={tool.name} name={tool.name} domain={tool.domain} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
