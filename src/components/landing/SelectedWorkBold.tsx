"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ProjectCategory } from "@/types/project";

const categoryLabels: Record<ProjectCategory, string> = {
  "ai-systems": "AI",
  web: "Web",
  "creative-tech": "Creative",
};

export function SelectedWorkBold() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const displayProjects = featuredProjects.slice(0, 5);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-mono text-[11px] text-[#EA580C]/50 tracking-[0.15em]">
            02
          </span>
          <div className={`h-px w-10 bg-[#EA580C]/20 origin-left transition-transform duration-1000 ease-out ${isInView ? "scale-x-100" : "scale-x-0"}`} />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
            Selected Work
          </span>
        </div>

        {/* Section heading */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20 transition-all duration-800 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-display text-[clamp(2.5rem,7vw,5rem)] text-white">
            THINGS
            <br />
            I&apos;VE <span className="text-white/25">BUILT</span>
          </h2>

          <Link
            href="/work"
            className="group flex items-center gap-2 self-start md:self-auto mb-2"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/30 group-hover:text-[#EA580C] transition-colors duration-300">
              View All
            </span>
            <svg
              className="w-3.5 h-3.5 text-white/30 group-hover:text-[#EA580C] transition-all duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Project cards */}
        <div className="space-y-20 md:space-y-28">
          {displayProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isLive =
              project.link ||
              project.slug === "trading-system" ||
              project.slug === "duro" ||
              project.slug === "telegram-bot";

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group block transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 120 + 200}ms` }}
              >
                <div
                  className={`flex flex-col gap-8 ${
                    isEven
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="relative lg:w-[58%] shrink-0">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                      {/* Warm overlay on hover */}
                      <div className="absolute inset-0 bg-[#EA580C]/0 group-hover:bg-[#EA580C]/[0.04] transition-colors duration-500" />
                      {/* Bottom gradient fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                      {/* Frame lines */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#EA580C]/0 group-hover:bg-[#EA580C]/30 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center lg:w-[42%]">
                    {/* Index + Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[11px] text-[#EA580C]/50 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px w-6 bg-[#EA580C]/20" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                        {categoryLabels[project.category]}
                      </span>
                      {isLive && (
                        <>
                          <div className="h-px w-4 bg-white/[0.06]" />
                          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
                          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#22c55e]/60">
                            Live
                          </span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-display text-2xl md:text-3xl lg:text-[2rem] text-white/90 tracking-tight mb-3 group-hover:text-[#EA580C] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-[15px] text-white/40 font-light leading-relaxed mb-6 max-w-sm">
                      {project.tagline}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[9px] px-2 py-0.5 border border-white/[0.06] text-white/25 group-hover:border-[#EA580C]/20 group-hover:text-white/40 transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/20 group-hover:text-[#EA580C] transition-colors duration-300">
                        View Project
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-white/15 group-hover:text-[#EA580C] transition-all duration-300 group-hover:translate-x-1 -rotate-45 group-hover:rotate-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom line */}
        <div className={`h-px bg-gradient-to-r from-[#EA580C]/15 via-white/[0.06] to-transparent mt-20 origin-left transition-transform duration-1000 ease-out ${isInView ? "scale-x-100" : "scale-x-0"}`} />
      </div>
    </section>
  );
}
