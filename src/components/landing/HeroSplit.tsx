"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSplit() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = {
    years: new Date().getFullYear() - 2016,
    projects: "50+",
  };

  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[45%_55%] overflow-hidden bg-[var(--color-text-primary)]">
      {/* Left Column - Content */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32 lg:py-0">
        {/* Tagline */}
        <div
          className={`transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-editorial text-xs text-[var(--color-accent)] tracking-[0.4em] mb-8">
            Creative Technologist
          </p>
        </div>

        {/* Name */}
        <div
          className={`transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-display text-white">
            <span className="block text-[clamp(3.5rem,10vw,7rem)] leading-[0.9]">
              I.
            </span>
            <span className="block text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] -mt-1">
              Alabi
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div
          className={`my-8 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`h-px bg-[var(--color-accent)] transition-all duration-1000 delay-500 ${
              isLoaded ? "w-24" : "w-0"
            }`}
          />
        </div>

        {/* Disciplines */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-white/60 tracking-wider">
            <span className="text-white/90">Video</span>
            <span className="text-[var(--color-accent)]"> / </span>
            <span className="text-white/90">Build</span>
            <span className="text-[var(--color-accent)]"> / </span>
            <span className="text-white/90">Creative</span>
          </p>
        </div>

        {/* Description */}
        <div
          className={`mt-6 max-w-sm transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base text-white/40 leading-relaxed">
            I make things that move — videos that tell stories, products that
            solve problems, ideas that come to life.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-300"
          >
            View Work
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-[var(--color-text-primary)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator - left side */}
        <div
          className={`absolute bottom-10 left-8 md:left-16 lg:left-20 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 text-white/30">
            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
            <span className="text-xs uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </div>

      {/* Right Column - Image with hover overlay */}
      <div
        className="relative hidden lg:block"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Image with zoom-out effect */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-studio.jpg"
            alt="Studio"
            fill
            className={`object-cover transition-all duration-1000 ease-out ${
              isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
            priority
          />
          {/* Default gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-l from-transparent via-[var(--color-text-primary)]/20 to-[var(--color-text-primary)]/80 transition-opacity duration-500 ${
              isHovering ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Hover overlay with stats */}
        <div
          className={`absolute inset-0 bg-[var(--color-text-primary)]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
            isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-center">
            <div className="flex gap-16">
              <div>
                <p className="text-[4rem] font-bold text-white leading-none">
                  {stats.years}
                </p>
                <p className="text-sm text-white/50 mt-2 uppercase tracking-wider">
                  Years
                </p>
              </div>
              <div>
                <p className="text-[4rem] font-bold text-white leading-none">
                  {stats.projects}
                </p>
                <p className="text-sm text-white/50 mt-2 uppercase tracking-wider">
                  Projects
                </p>
              </div>
            </div>
            <p className="mt-8 text-white/40 text-sm">
              Hover to see more
            </p>
          </div>
        </div>

        {/* Year badge */}
        <div
          className={`absolute bottom-10 right-10 transition-all duration-700 delay-700 ${
            isLoaded && !isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs text-white/40 tracking-wider">EST. 2016</span>
        </div>
      </div>

      {/* Mobile image background */}
      <div className="absolute inset-0 lg:hidden -z-0">
        <Image
          src="/images/hero-studio.jpg"
          alt="Studio"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-primary)] via-[var(--color-text-primary)]/90 to-[var(--color-text-primary)]/70" />
      </div>
    </section>
  );
}
