"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { fadeUp, fadeUpSm, stagger } from "@/lib/motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sections = [
  { key: "challenge", title: "01. Challenge" },
  { key: "research", title: "02. Research" },
  { key: "userJourney", title: "03. User Journey" },
  { key: "ia", title: "04. Information Architecture" },
  { key: "wireframes", title: "05. Wireframes" },
  { key: "designExploration", title: "06. Design Exploration" },
  { key: "finalUI", title: "07. Final UI" },
  { key: "designSystem", title: "08. Design System" },
  { key: "results", title: "09. Results & Outcomes" },
] as const;

type SectionKey = (typeof sections)[number]["key"];

function PlaceholderImage({ seed, label }: { seed: string; label: string }) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl border border-gray-200 overflow-hidden bg-gray-100">
      <img
        src={`https://picsum.photos/seed/${seed}/900/520`}
        alt={label}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-4 py-2">
        <span className="text-[11px] font-medium text-white/90 tracking-wide">{label}</span>
      </div>
    </div>
  );
}

export default function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <>
      <Header variant="light" />
      <main className="pt-20 bg-white min-h-screen">
        {/* Hero */}
        <div className="relative w-full bg-[#fafafa] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
            <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl mb-10">
              <motion.div variants={fadeUpSm} className="mb-4">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Back to Work
                </Link>
              </motion.div>
              <motion.div variants={fadeUp}>
                <span className="text-[11px] font-bold tracking-widest uppercase text-indigo-600 mb-3 block">{project.category}</span>
                <h1 className="text-[44px] lg:text-[64px] font-bold tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-5">{project.title}</h1>
                <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl">{project.description}</p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-7">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex h-7 items-center px-3 rounded-md bg-white border border-gray-200 text-[12px] font-semibold text-gray-600">{tag}</span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="rounded-xl overflow-hidden border border-gray-200 aspect-[21/9]">
              <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
                <nav className="space-y-0.5">
                  <a href="#overview" className="block text-[13px] font-medium text-gray-500 hover:text-[#0a0a0a] py-1.5 transition-colors">00. Overview</a>
                  {sections.map((s) => (
                    <a key={s.key} href={`#${s.key}`} className="block text-[13px] font-medium text-gray-500 hover:text-[#0a0a0a] py-1.5 transition-colors">{s.title}</a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-20">
              <motion.section id="overview" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
                <motion.div variants={fadeUp}>
                  <span className="text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-3 block">00. Overview</span>
                  <h2 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.02em] text-[#0a0a0a] mb-6 leading-tight">Project Overview</h2>
                  <p className="text-[15px] text-gray-600 leading-relaxed">{project.description}</p>
                </motion.div>
              </motion.section>

              {sections.map((section, idx) => (
                <motion.section key={section.key} id={section.key} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
                  <motion.div variants={fadeUp}>
                    <span className="text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-3 block">{section.title.split(". ")[0]}</span>
                    <h2 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.02em] text-[#0a0a0a] mb-6 leading-tight">{section.title.split(". ")[1]}</h2>
                    <p className="text-[15px] text-gray-600 leading-relaxed">{project[section.key as SectionKey]}</p>
                  </motion.div>

                  {(section.key === "wireframes" || section.key === "finalUI" || section.key === "designSystem") && (
                    <motion.div variants={fadeUpSm} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <PlaceholderImage seed={`${project.slug}-${idx}-a`} label={`${section.title.split(". ")[1]} — 01`} />
                      <PlaceholderImage seed={`${project.slug}-${idx}-b`} label={`${section.title.split(". ")[1]} — 02`} />
                    </motion.div>
                  )}

                  {section.key === "results" && (
                    <motion.div variants={fadeUpSm} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[{ metric: "Retention", value: "+40%" }, { metric: "Conversion", value: "3.4x" }, { metric: "Adoption", value: "91%" }, { metric: "NPS", value: "72" }].map((stat) => (
                        <div key={stat.metric} className="bg-[#fafafa] border border-gray-200 rounded-xl p-5 text-center">
                          <p className="text-[24px] font-bold text-indigo-600">{stat.value}</p>
                          <p className="text-[11px] text-gray-500 font-medium mt-1">{stat.metric}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.section>
              ))}

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-[14px] font-semibold text-gray-600 mb-1">Interested in working together?</p>
                    <p className="text-[13px] text-gray-400">I&apos;m available for new projects.</p>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/#contact" className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-indigo-600 text-white text-[13px] font-semibold hover:bg-indigo-700 transition-colors">Get In Touch</Link>
                    <Link href="/#projects" className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-white border border-gray-300 text-[#0a0a0a] text-[13px] font-semibold hover:border-gray-900 transition-all">More Work</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
