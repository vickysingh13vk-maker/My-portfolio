"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  theme?: "light" | "dark";
  align?: "split" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  theme = "light",
  align = "split",
}: Props) {
  const dark = theme === "dark";

  const pill = dark
    ? "bg-white/[0.05] border-white/[0.1] text-white/70"
    : "bg-indigo-50 border-indigo-100 text-indigo-600";

  const titleColor = dark ? "text-white" : "text-[#0a0a0a]";
  const descColor = dark ? "text-white/40" : "text-gray-500";

  if (align === "center") {
    return (
      <motion.div variants={fadeUp} className="text-center mb-14 flex flex-col items-center">
        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-widest uppercase mb-5 ${pill}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          {eyebrow}
        </span>
        <h2 className={`text-[36px] lg:text-[52px] font-bold tracking-[-0.03em] leading-[1.1] ${titleColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-5 text-[15px] max-w-xl leading-relaxed ${descColor}`}>{description}</p>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeUp} className="mb-14">
      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-widest uppercase mb-5 ${pill}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
        {eyebrow}
      </span>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <h2 className={`text-[36px] lg:text-[48px] font-bold tracking-[-0.03em] leading-[1.1] max-w-xl ${titleColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-[14px] max-w-sm leading-relaxed ${descColor}`}>{description}</p>
        )}
      </div>
    </motion.div>
  );
}
