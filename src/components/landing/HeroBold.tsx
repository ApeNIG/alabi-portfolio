"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const meta = [
  { key: "Location", value: "Manchester, UK" },
  { key: "Stack", value: "Python + TypeScript" },
  { key: "Commits", value: "607" },
  { key: "Status", value: "Open to hire", accent: true },
];

export function HeroBold() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col bg-[#0A0A0A] overflow-hidden"
    >
      {/* Warm ambient glow */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.04] blur-[200px] pointer-events-none transition-all duration-[3000ms] ease-out"
        style={{
          background: "radial-gradient(circle, #EA580C 0%, transparent 70%)",
          left: `${mousePos.x * 100 - 35}%`,
          top: `${mousePos.y * 100 - 35}%`,
        }}
      />

      {/* Subtle warm gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#EA580C]/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 w-full pb-16 pt-28">
        {/* Top: Section number + status */}
        <div
          className="animate-fade-in flex items-center gap-4 mb-auto pt-4"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="font-mono text-[11px] text-[#EA580C]/50 tracking-[0.15em]">
            00
          </span>
          <div
            className="h-px flex-1 max-w-[50px] bg-[#EA580C]/20 animate-line-draw"
            style={{ animationDelay: "0.4s" }}
          />
          <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
            Available for hire
          </span>
        </div>

        {/* Main content: Split layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-12 mb-8">
          {/* Left: Text content */}
          <div className="flex-1">
            {/* Name block */}
            <div className="mb-8">
              <h1>
                <span
                  className="animate-clip-up block text-display text-[clamp(3.2rem,9vw,7rem)] text-white"
                  style={{ animationDelay: "0.15s" }}
                >
                  ALABI
                </span>
                <span
                  className="animate-clip-up block text-display text-[clamp(3.2rem,9vw,7rem)] text-[#EA580C]"
                  style={{ animationDelay: "0.25s" }}
                >
                  IBAGUN
                </span>
              </h1>

              {/* Role */}
              <div
                className="animate-fade-up flex items-center gap-4 mt-6"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="h-px w-10 bg-[#EA580C]/30" />
                <p className="text-lg md:text-xl text-white/60 font-light tracking-tight">
                  Production AI Engineer
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p
              className="animate-fade-up text-base md:text-lg text-white/45 font-light leading-relaxed max-w-md mb-10"
              style={{ animationDelay: "0.6s" }}
            >
              I build{" "}
              <span className="text-white/90 font-normal">AI systems</span>{" "}
              that run in production,{" "}
              <span className="text-white/90 font-normal">platforms</span>{" "}
              that scale, and{" "}
              <span className="text-white/90 font-normal">tools</span> that
              solve real problems.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up flex flex-wrap gap-4 mb-16 lg:mb-0"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href="#work"
                className="group relative px-7 py-3 bg-white text-[#0A0A0A] text-[13px] font-medium uppercase tracking-wider overflow-hidden hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-shadow duration-300"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  View Work
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-[#EA580C] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 flex items-center justify-center gap-2.5 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-[13px] font-medium uppercase tracking-wider">
                  View Work
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-white/[0.12] text-white/50 text-[13px] font-medium uppercase tracking-wider hover:border-[#EA580C]/40 hover:text-white/80 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: Editorial portrait */}
          <div
            className="animate-fade-up relative w-full lg:w-[340px] xl:w-[380px] shrink-0 hidden lg:block"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Warm overlay gradient */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40 pointer-events-none" />
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none" />
              {/* Orange accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#EA580C]/30 z-20" />
              <Image
                src="/images/hero-editorial.jpg"
                alt="Alabi Ibagun"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 0px, 380px"
                priority
              />
              {/* Fine frame lines */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06] z-20" />
              <div className="absolute top-0 bottom-0 right-0 w-px bg-white/[0.06] z-20" />
            </div>
            {/* Photo caption */}
            <div className="flex items-center gap-3 mt-3">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/15">
                Manchester, UK
              </span>
            </div>
          </div>
        </div>

        {/* Fine line - warm */}
        <div
          className="h-px bg-gradient-to-r from-[#EA580C]/20 via-white/[0.06] to-transparent animate-line-draw mb-8"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Meta row */}
        <div
          className="animate-fade-up grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4"
          style={{ animationDelay: "0.9s" }}
        >
          {meta.map((item) => (
            <div key={item.key}>
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 mb-1">
                {item.key}
              </span>
              <span
                className={`block font-mono text-[13px] ${
                  item.accent
                    ? "text-[#22c55e]/80"
                    : "text-white/55"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="h-px bg-white/[0.06]" />
    </section>
  );
}
