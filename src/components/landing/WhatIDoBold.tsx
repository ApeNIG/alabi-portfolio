"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const facets = [
  {
    id: "ai-systems",
    title: "AI Systems",
    number: "01",
    description:
      "Multi-agent orchestration, RAG pipelines, epistemic gates, and autonomous trading. Production systems managing real capital and real decisions.",
    skills: [
      "LLM Orchestration",
      "RAG Pipelines",
      "Agent Governance",
      "Vector Search",
      "Prompt Engineering",
      "Model Routing",
    ],
  },
  {
    id: "web",
    title: "Full-Stack",
    number: "02",
    description:
      "End-to-end web applications from database to deploy. React frontends, Python backends, real-time features, and production infrastructure.",
    skills: [
      "Next.js / React",
      "Python / FastAPI",
      "PostgreSQL / SQLite",
      "Supabase",
      "Vercel / Render",
      "TypeScript",
    ],
  },
  {
    id: "creative-tech",
    title: "Creative Tech",
    number: "03",
    description:
      "Where engineering meets editorial. Automated video pipelines, interactive data visualisations, and design systems that tell stories.",
    skills: [
      "FFmpeg Pipelines",
      "Interactive SVG",
      "Brand Systems",
      "Data Visualisation",
      "API Automation",
      "Editorial Design",
    ],
  },
];

const stats = [
  { value: "607", label: "Git Commits" },
  { value: "5K+", label: "Artifacts Governed" },
  { value: "20", label: "Systemd Timers" },
  { value: "3", label: "Languages Spoken" },
];

const photoSlices = [
  { src: "/images/slice-1.png", alt: "With camera" },
  { src: "/images/slice-2.png", alt: "With gimbal rig" },
  { src: "/images/slice-4.png", alt: "With cinema camera" },
];

export function WhatIDoBold() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0C0C0C]"
    >
      {/* Subtle warm accent in corner */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EA580C]/[0.015] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-mono text-[11px] text-[#EA580C]/50 tracking-[0.15em]">
            01
          </span>
          <div className={`h-px w-10 bg-[#EA580C]/20 origin-left transition-transform duration-1000 ease-out ${isInView ? "scale-x-100" : "scale-x-0"}`} />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
            What I Build
          </span>
        </div>

        {/* Section heading with photo strip */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20 transition-all duration-800 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <h2 className="text-display text-[clamp(2.5rem,7vw,5rem)] text-white mb-4">
              THREE
              <br />
              <span className="text-white/25">DOMAINS</span>
            </h2>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#EA580C]/30" />
              <p className="font-mono text-[11px] text-white/30 tracking-wider uppercase">
                One engineering mindset
              </p>
            </div>
          </div>

          {/* Photo strip - B&W slices */}
          <div className="flex gap-3 items-end shrink-0">
            {photoSlices.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${i * 100 + 400}ms`,
                  width: i === 1 ? "90px" : "70px",
                  height: i === 1 ? "120px" : "100px",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-top grayscale"
                  sizes="90px"
                />
                {/* Warm tint on hover */}
                <div className="absolute inset-0 bg-[#EA580C]/0 hover:bg-[#EA580C]/10 transition-colors duration-500" />
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#EA580C]/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Domains */}
        <div>
          {facets.map((facet, index) => (
            <article
              key={facet.id}
              className={`group transition-all duration-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Top line */}
              <div className="h-px bg-white/[0.08]" />

              <div className="relative py-8 md:py-10">
                <div className="grid md:grid-cols-[200px_1fr_auto] gap-4 md:gap-10 items-start">
                  {/* Number + Title */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[11px] text-[#EA580C]/40 tracking-wider">
                        {facet.number}
                      </span>
                      <div className="h-px w-4 bg-[#EA580C]/15" />
                    </div>
                    <h3 className="text-display text-2xl md:text-[1.75rem] text-white/90 tracking-tight group-hover:text-[#EA580C] transition-colors duration-300">
                      {facet.title}
                    </h3>
                  </div>

                  {/* Description + Skills */}
                  <div className="space-y-4">
                    <p className="text-[15px] text-white/50 leading-relaxed max-w-xl font-light">
                      {facet.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {facet.skills.map((skill, si) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] px-2.5 py-1 border border-white/[0.06] text-white/30 group-hover:border-[#EA580C]/20 group-hover:text-white/50 transition-all duration-300"
                          style={{
                            transitionDelay:
                              activeIndex === index ? `${si * 30}ms` : "0ms",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="hidden md:flex items-start pt-1">
                    <Link
                      href={`/work?category=${facet.id}`}
                      className="group/btn flex items-center gap-2"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/20 group-hover/btn:text-[#EA580C] transition-colors duration-300">
                        Explore
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-white/15 group-hover/btn:text-[#EA580C] transition-all duration-300 group-hover/btn:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Hover accent line with glow */}
                <div
                  className="absolute bottom-0 left-0 h-px transition-all duration-500 ease-out"
                  style={{
                    width: activeIndex === index ? "100%" : "0%",
                    background: activeIndex === index ? "#EA580C" : "transparent",
                    boxShadow: activeIndex === index ? "0 0 10px rgba(234,88,12,0.3)" : "none",
                    transformOrigin: "left",
                  }}
                />
              </div>
            </article>
          ))}

          <div className="h-px bg-white/[0.08]" />
        </div>

        {/* Stats */}
        <div
          className={`mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-display text-3xl md:text-4xl text-white/90 mb-1.5">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
