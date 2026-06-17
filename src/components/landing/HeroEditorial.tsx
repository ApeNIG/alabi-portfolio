"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroEditorial() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Hidden image for preloading and error handling */}
      <Image
        src="/images/hero-editorial.jpg"
        alt="I. Alabi"
        width={1920}
        height={1080}
        priority
        className="hidden"
        onError={() => setImageError(true)}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Top Section - Dark with Text-Masked Title */}
      <div className="bg-[#0A0A0A] pt-20 pb-8 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 flex items-center justify-center overflow-hidden">
        <div className="w-full">
          <div
            className={`transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1
              className={`
                font-[family-name:var(--font-bebas-neue)]
                leading-[0.85]
                uppercase
                text-center
                text-[28vw]
                tracking-[0.02em]
                ${imageError
                  ? "text-white"
                  : "bg-cover bg-center bg-clip-text"
                }
              `}
              style={imageError ? {
                transform: "scaleX(1.85)",
              } : {
                backgroundImage: "url('/images/hero-editorial.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transform: "scaleX(1.85)",
              }}
            >
              ALABI
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Section - White with Content */}
      <div className="bg-[var(--color-bg-primary)] flex-1 py-12 md:py-16 lg:py-20">
        <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-12 lg:px-24">
          {/* Headline */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-display font-bold text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.1] tracking-tight text-[var(--color-text-primary)] max-w-4xl">
              MEET YOUR CRAFT&apos;S<br />NEW STANDARD
            </h2>
          </div>

          {/* Bottom row: Disciplines + Description + CTAs */}
          <div className="mt-10 md:mt-14 lg:mt-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Left: Disciplines + Description */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)] max-w-md">
                Crafting compelling narratives through video, building robust digital products,
                and bringing creative concepts to life with technical precision.
              </p>
            </div>

            {/* Right: CTA */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-text-primary)] text-white text-sm font-medium transition-all duration-300 hover:bg-[var(--color-accent)] hover:gap-4"
              >
                View Work
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
        </div>
      </div>
    </section>
  );
}
