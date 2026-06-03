"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import { fadeUp, stagger, scaleIn } from "@/lib/motion";
import SectionHeader from "@/components/ui/SectionHeader";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/60"
    >
      {/* Cover image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center h-6 px-2.5 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-bold text-gray-700">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center h-6 px-2.5 rounded-md bg-black/40 backdrop-blur-sm text-[10px] font-semibold text-white tracking-wide uppercase">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[19px] font-bold text-[#0a0a0a] mb-2 leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex h-5 items-center px-2 rounded-md bg-gray-100 text-[10px] font-medium text-gray-600">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/case-study/${project.slug}`}
          className="inline-flex items-center gap-2 text-[12px] font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group/link"
        >
          View Case Study
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover/link:translate-x-0.5 transition-transform">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

const INITIAL_COUNT = 3;

export default function Projects() {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const shown = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <SectionHeader
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A selection of products I've designed — from concept through to shipped."
          />

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>

          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisible(projects.length)}
                className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-full bg-white border border-gray-200 text-[14px] font-semibold text-[#0a0a0a] hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700 transition-all duration-300 shadow-sm"
              >
                Load More Projects
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 group-hover:bg-indigo-100 transition-colors">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="group-hover:translate-y-0.5 transition-transform">
                    <path d="M5.5 1.5v8M2 6l3.5 3.5L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-[12px] text-gray-400 group-hover:text-indigo-400 font-medium">
                  {projects.length - visible} more
                </span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
