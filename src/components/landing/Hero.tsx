"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-text-primary)]">
      {/* Hero Image - Right side on desktop, background on mobile */}
      <div className="absolute inset-0 md:left-1/2 md:right-0">
        <Image
          src="/images/hero-studio.jpg"
          alt="Studio silhouette"
          fill
          className={`object-cover object-center transition-all duration-1000 ${
            isLoaded ? "opacity-60 md:opacity-80 scale-100" : "opacity-0 scale-105"
          }`}
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-text-primary)]/90 to-transparent md:from-[var(--color-text-primary)] md:via-[var(--color-text-primary)]/70 md:to-transparent" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-primary)] via-transparent to-[var(--color-text-primary)]/50" />
      </div>

      <div className="relative z-10 max-w-[var(--width-wide)] mx-auto px-6 md:px-12 py-32 w-full">
        {/* Name - Massive Editorial treatment */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-editorial text-xs md:text-sm text-[var(--color-accent)] mb-8 md:mb-12 tracking-[0.4em]">
            Creative Technologist
          </p>

          <h1 className="text-display text-white">
            <span className="block text-[clamp(4rem,18vw,12rem)] leading-[0.85]">
              I.
            </span>
            <span className="block text-[clamp(4rem,18vw,12rem)] leading-[0.85] -mt-2 md:-mt-6">
              Alabi
            </span>
          </h1>
        </div>

        {/* Tagline with animated underline */}
        <div
          className={`mt-16 md:mt-20 transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex items-center gap-6">
            <div className={`h-px bg-[var(--color-accent)] transition-all duration-1000 delay-500 ${isLoaded ? "w-16 md:w-24" : "w-0"}`} />
            <p className="text-editorial text-base md:text-lg text-white/90 tracking-[0.4em]">
              Video<span className="text-[var(--color-accent)]"> / </span>Build
              <span className="text-[var(--color-accent)]"> / </span>Creative
            </p>
          </div>
        </div>

        {/* Brief intro */}
        <div
          className={`mt-10 md:mt-14 max-w-lg transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
            I make things that move &mdash; videos that tell stories, products
            that solve problems, ideas that come to life.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-14 md:mt-20 flex flex-wrap gap-5 transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-300 hover:gap-5"
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
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-[var(--color-text-primary)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator - repositioned */}
      <div
        className={`absolute bottom-10 left-6 md:left-12 transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-4 text-white/30">
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] writing-mode-vertical rotate-180" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
        </div>
      </div>

      {/* Year badge */}
      <div
        className={`absolute bottom-10 right-6 md:right-12 transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs text-white/30 tracking-wider">EST. 2016</span>
      </div>
    </section>
  );
}
