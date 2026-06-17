"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const sliceImages = [
  { src: "/images/slice-1.png", alt: "I. Alabi with camera" },
  { src: "/images/slice-2.png", alt: "I. Alabi with gimbal" },
  { src: "/images/slice-3.png", alt: "I. Alabi portrait" },
  { src: "/images/slice-4.png", alt: "I. Alabi with rig" },
];

export function HeroSlices() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex flex-col">
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 pt-24 pb-8">
        {/* Tagline */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs text-white/50 tracking-[0.3em] uppercase">
            Creative Technologist
          </p>
        </div>

        {/* Vertical slices container */}
        <div
          className={`relative flex items-center justify-center gap-2 md:gap-3 lg:gap-4 h-[50vh] md:h-[55vh] lg:h-[60vh] transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {sliceImages.map((image, index) => (
            <div
              key={index}
              className="relative h-full overflow-hidden"
              style={{
                width: "clamp(40px, 12vw, 120px)",
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <div
                className={`relative h-full w-full transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 768px) 15vw, 12vw"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Name */}
        <div
          className={`mt-12 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-[family-name:var(--font-bebas-neue)] text-white text-[clamp(2rem,8vw,5rem)] tracking-[0.3em] uppercase">
            ALABI
          </h1>
        </div>
      </div>

      {/* Orange accent bar - right side */}
      <div
        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 transition-all duration-1000 delay-500 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        <div className="w-2 h-20 bg-[var(--color-accent)]" />
        <div className="w-2 h-20 bg-[var(--color-accent)]" />
      </div>

      {/* Bottom section */}
      <div className="px-6 md:px-12 lg:px-24 py-8 md:py-12">
        <div className="max-w-[var(--width-wide)] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left: Disciplines */}
          <div
            className={`transition-all duration-1000 delay-800 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xs text-white/40 tracking-[0.2em] uppercase mb-2">
              Video / Build / Creative
            </p>
            <p className="text-sm text-white/30 max-w-sm">
              Making things that move — videos, products, ideas.
            </p>
          </div>

          {/* Right: CTAs */}
          <div
            className={`flex gap-4 transition-all duration-1000 delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-medium transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
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
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#0A0A0A]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
