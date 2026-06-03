"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import SectionHeader from "@/components/ui/SectionHeader";

const WHATSAPP_NUMBER = "919729680598"; // intl format, no +

const contactLinks = [
  { label: "Email", value: "hello@vikramsingh.design", href: "mailto:hello@vikramsingh.design", favicon: false, domain: "" },
  { label: "LinkedIn", value: "linkedin.com/in/vikramsingh", href: "https://linkedin.com/in/vikramsingh", favicon: true, domain: "linkedin.com" },
  { label: "Behance", value: "behance.net/vikramsingh", href: "https://behance.net/vikramsingh", favicon: true, domain: "behance.net" },
  { label: "Dribbble", value: "dribbble.com/vikramsingh", href: "https://dribbble.com/vikramsingh", favicon: true, domain: "dribbble.com" },
];

const EmailIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1.5" y="3.5" width="15" height="11" rx="2.5" stroke="#fff" strokeWidth="1.6"/>
    <path d="M2 5.5l7 5 7-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

interface FormState { name: string; email: string; phone: string; subject: string; message: string; }

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 text-[#0a0a0a] text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-[600px] h-[400px] -translate-x-1/2 rounded-full bg-indigo-100/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <SectionHeader
            align="center"
            eyebrow="Get In Touch"
            title={<>Let&apos;s Build Something <span className="text-indigo-600">Amazing Together</span></>}
            description="Available for product design, branding, AI-powered creative projects, and digital product consulting."
          />

          {/* Two-tone premium card */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/60 bg-white"
          >
            {/* Left — dark info panel */}
            <div className="lg:col-span-2 relative bg-[#0a0a0f] p-8 lg:p-10 overflow-hidden flex flex-col">
              {/* Ambient */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-indigo-600/30 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-sky-500/20 blur-[90px] pointer-events-none" />

              <div className="relative flex-1">
                <h3 className="text-[22px] font-bold text-white leading-tight mb-2">Let&apos;s talk</h3>
                <p className="text-[13px] text-white/45 leading-relaxed mb-8">
                  Reach out through any channel — I usually reply within 24 hours.
                </p>

                {/* Contact links */}
                <div className="space-y-2.5 mb-7">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 group"
                    >
                      <span className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:bg-white/[0.12] group-hover:scale-105 transition-all">
                        {link.favicon ? (
                          <span className="w-6 h-6 rounded-md bg-white flex items-center justify-center overflow-hidden">
                            <img src={`https://www.google.com/s2/favicons?sz=64&domain=${link.domain}`} alt="" width={18} height={18} className="w-[18px] h-[18px] object-contain" loading="lazy" />
                          </span>
                        ) : (
                          EmailIcon
                        )}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{link.label}</p>
                        <p className="text-[13px] font-semibold text-white/85 group-hover:text-white truncate transition-colors">{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 h-12 rounded-xl bg-[#25D366] text-white text-[14px] font-bold hover:bg-[#1eb858] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Availability */}
              <div className="relative mt-7 pt-6 border-t border-white/[0.08] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] font-semibold text-white/70">Currently available for new projects</span>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 13l6 6 10-10" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="text-[22px] font-bold text-[#0a0a0a] mb-2">Message Sent!</h3>
                  <p className="text-[14px] text-gray-500 max-w-xs">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass}/>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                      <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={inputClass}/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Mobile Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 00000 00000" className={inputClass}/>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                      <input type="text" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="What's this about?" className={inputClass}/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#0a0a0a] text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all resize-none"/>
                  </div>
                  <button type="submit" className="w-full h-12 rounded-xl bg-indigo-600 text-white text-[14px] font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
