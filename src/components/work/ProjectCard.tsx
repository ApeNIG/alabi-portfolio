import Image from "next/image";
import Link from "next/link";
import { Project, ProjectCategory } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
}

const categoryColors: Record<ProjectCategory, string> = {
  "ai-systems": "#EA580C",
  web: "#7C3AED",
  "creative-tech": "#06B6D4",
};

const categoryLabels: Record<ProjectCategory, string> = {
  "ai-systems": "AI Systems",
  web: "Web",
  "creative-tech": "Creative Tech",
};

const categoryBgColors: Record<ProjectCategory, string> = {
  "ai-systems": "rgba(234, 88, 12, 0.1)",
  web: "rgba(124, 58, 237, 0.1)",
  "creative-tech": "rgba(6, 182, 212, 0.1)",
};

export function ProjectCard({
  project,
  variant = "default",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article
        className={`relative overflow-hidden rounded-sm ${
          isFeatured ? "aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        {/* Image with enhanced hover */}
        <div className="absolute inset-0 bg-[var(--color-bg-tertiary)]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
        </div>

        {/* Category badge */}
        <div className="absolute top-5 left-5 z-10">
          <span
            className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 text-white font-medium backdrop-blur-sm"
            style={{ backgroundColor: categoryColors[project.category] }}
          >
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-white/40 group-hover:w-12 transition-all duration-500" />
              <p className="text-xs text-white/60 tracking-wider uppercase">
                {project.year}
              </p>
            </div>

            <h3 className="text-display text-xl md:text-2xl lg:text-3xl text-white mb-3 group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-sm text-white/70 line-clamp-2 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-5 right-5 z-10">
          <div className="w-10 h-10 flex items-center justify-center bg-white/0 group-hover:bg-white border border-white/20 group-hover:border-white transition-all duration-300 rounded-full overflow-hidden">
            <svg
              className="w-4 h-4 text-white group-hover:text-[var(--color-text-primary)] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
        </div>
      </article>

      {!isFeatured && (
        <div className="mt-5 pl-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                {project.role}
              </p>
            </div>
            <span
              className="text-xs px-2 py-1 rounded-full mt-1"
              style={{
                backgroundColor: categoryBgColors[project.category],
                color: categoryColors[project.category],
              }}
            >
              {project.year}
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}
