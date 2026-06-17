"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroOrganic() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-text-primary)]">
      {/* Animated organic blob - background */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 -left-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] transition-all duration-1000 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-blob-morph"
          style={{ filter: "blur(0px)" }}
        >
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient)"
            d="M47.1,-57.8C59.9,-45.2,68.3,-29.4,71.4,-12.3C74.5,4.8,72.3,23.2,63.6,38.1C54.9,53,39.7,64.4,23.1,68.3C6.5,72.2,-11.5,68.6,-27.3,61.4C-43.1,54.2,-56.7,43.4,-64.1,29.1C-71.5,14.8,-72.7,-2.9,-67.8,-18.5C-62.9,-34.1,-51.9,-47.6,-38.3,-60C-24.7,-72.4,-8.4,-83.7,5.3,-89.7C19,-95.7,34.3,-70.4,47.1,-57.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Studio image - right side, organic shape mask */}
      <div
        className={`absolute top-0 right-0 w-[65%] h-full transition-all duration-1000 delay-200 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            clipPath: "ellipse(80% 100% at 70% 50%)",
          }}
        >
          <Image
            src="/images/hero-studio.jpg"
            alt="Studio"
            fill
            className="object-cover"
            priority
          />
          {/* Blue tint overlay */}
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>
      </div>

      {/* Content - overlays the blob */}
      <div className="relative z-10 max-w-[var(--width-wide)] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl">
          {/* Tagline */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-editorial text-xs text-[var(--color-accent)] tracking-[0.4em] mb-6">
              Creative Technologist
            </p>
          </div>

          {/* Name - with text stroke for layering effect */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h1 className="text-display text-white relative">
              <span
                className="block text-[clamp(4rem,12vw,9rem)] leading-[0.9]"
                style={{
                  textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
                }}
              >
                I.
              </span>
              <span
                className="block text-[clamp(4rem,12vw,9rem)] leading-[0.9] -mt-2"
                style={{
                  textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
                }}
              >
                Alabi
              </span>
            </h1>
          </div>

          {/* Disciplines */}
          <div
            className={`mt-10 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-white/30" />
              <p className="text-sm text-white/70 tracking-wider">
                Video / Build / Creative
              </p>
            </div>
          </div>

          {/* Description */}
          <div
            className={`mt-8 transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base text-white/40 leading-relaxed max-w-md">
              I make things that move — videos that tell stories, products that
              solve problems, ideas that come to life.
            </p>
          </div>

          {/* Floating CTA */}
          <div
            className={`mt-12 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-[var(--color-text-primary)] text-sm font-medium rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
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
          </div>
        </div>
      </div>

      {/* Scroll indicator - bottom right */}
      <div
        className={`absolute bottom-10 right-12 transition-all duration-1000 delay-800 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 text-white/30">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-12 h-px bg-gradient-to-r from-white/30 to-transparent" />
        </div>
      </div>

      {/* Year badge */}
      <div
        className={`absolute bottom-10 left-12 transition-all duration-1000 delay-800 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs text-white/30 tracking-wider">EST. 2016</span>
      </div>

      <style jsx>{`
        @keyframes blob-morph {
          0%, 100% {
            d: path("M47.1,-57.8C59.9,-45.2,68.3,-29.4,71.4,-12.3C74.5,4.8,72.3,23.2,63.6,38.1C54.9,53,39.7,64.4,23.1,68.3C6.5,72.2,-11.5,68.6,-27.3,61.4C-43.1,54.2,-56.7,43.4,-64.1,29.1C-71.5,14.8,-72.7,-2.9,-67.8,-18.5C-62.9,-34.1,-51.9,-47.6,-38.3,-60C-24.7,-72.4,-8.4,-83.7,5.3,-89.7C19,-95.7,34.3,-70.4,47.1,-57.8Z");
          }
          50% {
            d: path("M43.7,-54.9C56.3,-43.8,66.2,-28.9,69.3,-12.7C72.4,3.5,68.8,20.9,60.2,35.7C51.6,50.5,38.1,62.6,22.3,68.5C6.5,74.4,-11.6,74.1,-27.4,67.3C-43.2,60.5,-56.7,47.2,-64.3,31.4C-71.9,15.6,-73.6,-2.7,-68.8,-19.1C-64,-35.5,-52.7,-50,-38.9,-60.6C-25.1,-71.2,-8.8,-77.9,4.3,-83.1C17.4,-88.3,31.1,-66,43.7,-54.9Z");
          }
        }
        .animate-blob-morph path {
          animation: blob-morph 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
