"use client";

import Link from "next/link";

const facets = [
  {
    id: "video",
    title: "Video",
    number: "01",
    accent: "var(--color-accent)",
    description:
      "Commercial, music video, corporate, socials. 7+ years crafting visual stories that move audiences and drive engagement.",
    skills: [
      "Video Editing",
      "Camera Operation",
      "Sound Design",
      "Color Correction",
      "Motion Graphics",
      "Live Streaming",
    ],
  },
  {
    id: "build",
    title: "Build",
    number: "02",
    accent: "var(--color-complement)",
    description:
      "Products that solve problems. From concept to deployment, architecting AI-powered solutions and digital experiences.",
    skills: [
      "Product Architecture",
      "AI Integration",
      "System Design",
      "Next.js",
      "TypeScript",
      "RAG Systems",
    ],
  },
  {
    id: "creative",
    title: "Creative",
    number: "03",
    accent: "#8B5CF6",
    description:
      "Ideas brought to life. Creative direction that bridges technology and artistry, turning concepts into compelling experiences.",
    skills: [
      "Creative Direction",
      "Storyboarding",
      "Concept Development",
      "Visual Design",
      "Brand Strategy",
      "Art Direction",
    ],
  },
];

export function WhatIDo() {
  return (
    <section className="relative py-32 md:py-40 bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="relative max-w-[var(--width-wide)] mx-auto px-6 md:px-12">
        {/* Section header - more dramatic */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--color-accent)]" />
            <p className="text-editorial text-xs text-[var(--color-accent)] tracking-[0.3em]">
              What I Do
            </p>
          </div>
          <h2 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--color-text-primary)] max-w-3xl leading-[1.1]">
            Three disciplines,
            <br />
            <span className="text-[var(--color-text-muted)] italic font-normal">
              one vision.
            </span>
          </h2>
        </div>

        {/* Facets grid - enhanced layout */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {facets.map((facet, index) => (
            <article key={facet.id} className="group relative">
              {/* Large number */}
              <span className="text-display text-[7rem] md:text-[9rem] lg:text-[11rem] absolute -top-6 -left-2 md:-left-4 leading-none select-none pointer-events-none text-[var(--color-bg-tertiary)] group-hover:text-[var(--color-accent-light)] transition-colors duration-700">
                {facet.number}
              </span>

              {/* Content */}
              <div className="relative pt-20 md:pt-24 lg:pt-28">
                {/* Title with underline accent */}
                <div className="mb-5">
                  <h3 className="text-display text-2xl md:text-3xl text-[var(--color-text-primary)] inline-block relative">
                    {facet.title}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ backgroundColor: facet.accent }}
                    />
                  </h3>
                </div>

                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  {facet.description}
                </p>

                {/* Skills - refined pills */}
                <div className="flex flex-wrap gap-2">
                  {facet.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-muted)] rounded-full hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-300 cursor-default"
                      style={{
                        transitionDelay: `${skillIndex * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Explore link */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link
                    href={`/work?category=${facet.id}`}
                    className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                    style={{ color: facet.accent }}
                  >
                    Explore {facet.title.toLowerCase()} work
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Vertical divider for desktop */}
              {index < facets.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-4 lg:-right-8 w-px h-[calc(100%-6rem)] bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
              )}

              {/* Horizontal divider for mobile */}
              {index < facets.length - 1 && (
                <div className="md:hidden mt-12 border-b border-[var(--color-border)]" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
