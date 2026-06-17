import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative py-32 md:py-40 bg-[var(--color-bg-secondary)] overflow-hidden"
    >
      <div className="relative max-w-[var(--width-wide)] mx-auto px-6 md:px-12">
        {/* Section header - enhanced */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[var(--color-accent)]" />
              <p className="text-editorial text-xs text-[var(--color-accent)] tracking-[0.3em]">
                Selected Work
              </p>
            </div>
            <h2 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--color-text-primary)] leading-[1.1]">
              Things I&apos;ve
              <br className="hidden sm:block" />
              <span className="text-[var(--color-text-muted)] italic font-normal">
                made.
              </span>
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span className="relative">
              View all work
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
            </span>
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
        </div>

        {/* Projects grid - Asymmetric editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* First row - Large featured item spanning 12 cols */}
          {featuredProjects[0] && (
            <div className="md:col-span-12">
              <ProjectCard project={featuredProjects[0]} variant="featured" />
            </div>
          )}

          {/* Second row - Asymmetric: 7 + 5 columns */}
          {featuredProjects[1] && (
            <div className="md:col-span-7">
              <ProjectCard project={featuredProjects[1]} />
            </div>
          )}
          {featuredProjects[2] && (
            <div className="md:col-span-5">
              <ProjectCard project={featuredProjects[2]} />
            </div>
          )}

          {/* Third row - Asymmetric: 5 + 7 columns (reversed) */}
          {featuredProjects[3] && (
            <div className="md:col-span-5">
              <ProjectCard project={featuredProjects[3]} />
            </div>
          )}
          {featuredProjects[4] && (
            <div className="md:col-span-7">
              <ProjectCard project={featuredProjects[4]} />
            </div>
          )}
        </div>

        {/* View all CTA (mobile) */}
        <div className="mt-16 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--color-border-strong)] text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-text-primary)] hover:text-white hover:border-[var(--color-text-primary)] transition-all duration-300"
          >
            View all work
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
    </section>
  );
}
