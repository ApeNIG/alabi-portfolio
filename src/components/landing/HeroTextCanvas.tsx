"use client";

import { useEffect, useState } from "react";

export function HeroTextCanvas() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-text-primary)]">
      {/* Background image (hidden, used for clip-path) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/images/hero-studio.jpg)" }}
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Tagline above */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-editorial text-xs md:text-sm text-[var(--color-accent)] tracking-[0.4em]">
            Creative Technologist
          </p>
        </div>

        {/* Massive text with image clipped through */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h1
            className="text-center text-[clamp(6rem,22vw,18rem)] font-black leading-[0.85] tracking-[-0.04em] select-none"
            style={{
              backgroundImage: "url(/images/hero-studio.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            ALABI
          </h1>

          {/* Outline version behind for depth */}
          <h1
            className="absolute inset-0 text-center text-[clamp(6rem,22vw,18rem)] font-black leading-[0.85] tracking-[-0.04em] select-none pointer-events-none -z-10"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.1)",
              color: "transparent",
            }}
            aria-hidden="true"
          >
            ALABI
          </h1>
        </div>

        {/* Disciplines */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-editorial text-sm md:text-base text-white/70 tracking-[0.3em]">
            Video<span className="text-[var(--color-accent)]"> / </span>Build
            <span className="text-[var(--color-accent)]"> / </span>Creative
          </p>
        </div>

        {/* Description */}
        <div
          className={`text-center mt-8 max-w-lg mx-auto transition-all duration-1000 delay-400 ${
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
          className={`flex justify-center gap-4 mt-12 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-300"
          >
            Explore Work
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
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
          <span className="text-xs uppercase tracking-wider">Scroll</span>
        </div>
      </div>
    </section>
  );
}
