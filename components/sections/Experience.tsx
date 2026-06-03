"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { stagger, scaleIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <SectionHeader
            eyebrow="Career"
            title="Work Experience"
            description="5+ years across startups, agencies, and product companies."
          />

          <div className="relative">
            {/* Gradient timeline line */}
            <div className="absolute left-5 top-3 bottom-3 w-px hidden lg:block bg-gradient-to-b from-indigo-500/60 via-gray-300 to-transparent" />

            <motion.div variants={stagger} className="space-y-4">
              {experiences.map((exp, index) => {
                const isCurrent = exp.period.includes("Present");
                return (
                  <motion.div
                    key={`${exp.company}-${index}`}
                    variants={scaleIn}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="relative lg:pl-16 group"
                  >
                    {/* Node */}
                    <div
                      className={`hidden lg:flex absolute left-0 top-6 w-10 h-10 rounded-xl items-center justify-center shadow-sm text-xs font-bold z-10 transition-all ${
                        isCurrent
                          ? "bg-indigo-600 text-white border border-indigo-600 ring-4 ring-indigo-100"
                          : "bg-white border border-gray-200 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600"
                      }`}
                    >
                      {exp.company.charAt(0)}
                    </div>

                    <div
                      className={`rounded-2xl p-6 transition-all duration-300 ${
                        isCurrent
                          ? "bg-white border border-indigo-200 shadow-lg shadow-indigo-100/50"
                          : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h3 className="text-[17px] font-bold text-[#0a0a0a] leading-tight">{exp.company}</h3>
                            {isCurrent && (
                              <span className="inline-flex items-center gap-1.5 h-5 px-2 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-600 uppercase tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-[13px] font-semibold text-indigo-600 mt-1">{exp.role}</p>
                        </div>
                        <span className="inline-flex items-center h-6 px-3 rounded-md bg-gray-100 text-[11px] font-semibold text-gray-500 flex-shrink-0 w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[13px] text-gray-500 leading-relaxed mt-3">{exp.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
