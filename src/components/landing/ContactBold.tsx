"use client";

import { useEffect, useState, useRef } from "react";

export function ContactBold() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0C0C0C]"
    >
      {/* Warm glow behind email */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#EA580C]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-mono text-[11px] text-[#EA580C]/50 tracking-[0.15em]">
            03
          </span>
          <div className={`h-px w-10 bg-[#EA580C]/20 origin-left transition-transform duration-1000 ease-out ${isInView ? "scale-x-100" : "scale-x-0"}`} />
          <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
            Available for hire
          </span>
        </div>

        {/* Heading */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-800 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-display text-[clamp(2.5rem,7vw,5rem)] text-white mb-4">
            LET&apos;S
            <br />
            <span className="text-white/25">CONNECT</span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#EA580C]/30" />
            <p className="font-mono text-[11px] text-white/30 tracking-wider uppercase">
              Production AI, not prototypes
            </p>
          </div>
        </div>

        {/* Email */}
        <div
          className={`mb-20 md:mb-24 transition-all duration-800 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="mailto:sibagun@gmail.com"
            className="group inline-flex items-center gap-4"
          >
            <span className="font-mono text-xl md:text-3xl lg:text-4xl font-medium text-white/80 group-hover:text-[#EA580C] transition-colors duration-300 tracking-tight">
              sibagun@gmail.com
            </span>
            <span className="font-mono text-xl md:text-3xl lg:text-4xl font-medium text-[#EA580C] animate-blink">
              _
            </span>
            <div className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-[#EA580C]/40 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.15)] transition-all duration-300">
              <svg
                className="w-4 h-4 text-white/25 group-hover:text-[#EA580C] transition-all duration-300 -rotate-45 group-hover:rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>

        {/* Fine line - warm gradient */}
        <div className={`h-px bg-gradient-to-r from-[#EA580C]/15 via-white/[0.06] to-transparent mb-12 md:mb-16 origin-left transition-transform duration-1000 ease-out delay-300 ${isInView ? "scale-x-100" : "scale-x-0"}`} />

        {/* Info grid */}
        <div
          className={`grid md:grid-cols-3 gap-10 mb-16 md:mb-20 transition-all duration-800 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            {
              label: "Based in",
              value: "Manchester, UK",
              sub: "Open to remote & hybrid",
            },
            {
              label: "Languages",
              value: "English, German, Yoruba",
              sub: "Native / Professional / Native",
            },
            {
              label: "Stack",
              value: "Python + TypeScript",
              sub: "AI backends, React frontends",
            },
          ].map((item) => (
            <div key={item.label}>
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-2">
                {item.label}
              </span>
              <p className="text-lg font-semibold text-white/85 tracking-tight mb-1">
                {item.value}
              </p>
              <p className="text-sm text-white/30 font-light">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Fine line */}
        <div className="h-px bg-white/[0.08]" />

        {/* Footer bar */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 pt-8 transition-all duration-800 delay-400 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center md:text-left">
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-1.5">
              Resume
            </span>
            <p className="text-sm text-white/40 font-light">
              Available on request
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 hidden md:block">
              Connect
            </span>
            <div className="flex gap-2.5">
              <a
                href="https://linkedin.com/in/alabiibagun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-[#EA580C] hover:border-[#EA580C]/30 hover:shadow-[0_0_12px_rgba(234,88,12,0.1)] transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/ApeNIG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-[#EA580C] hover:border-[#EA580C]/30 hover:shadow-[0_0_12px_rgba(234,88,12,0.1)] transition-all duration-300"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-1.5">
              Status
            </span>
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
              <span className="text-sm text-white/45 font-light">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
