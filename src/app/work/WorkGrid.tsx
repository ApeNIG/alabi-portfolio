"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ProjectCategory } from "@/types/project";

const categories: {
  value: ProjectCategory | "all";
  label: string;
  color?: string;
}[] = [
  { value: "all", label: "All" },
  { value: "ai-systems", label: "AI Systems", color: "#EA580C" },
  { value: "web", label: "Web", color: "#7C3AED" },
  { value: "creative-tech", label: "Creative Tech", color: "#06B6D4" },
];

export function WorkGrid() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all"
  );

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (
      categoryParam &&
      ["ai-systems", "web", "creative-tech"].includes(categoryParam)
    ) {
      setActiveCategory(categoryParam as ProjectCategory);
    }
  }, [searchParams]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getGridClass = (index: number) => {
    const pattern = index % 5;
    if (pattern === 0) return "md:col-span-8";
    if (pattern === 1) return "md:col-span-4";
    if (pattern === 2) return "md:col-span-4";
    if (pattern === 3) return "md:col-span-4";
    return "md:col-span-8";
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category.value;
              return (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? "text-white"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-transparent border border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? category.color || "var(--color-text-primary)"
                      : undefined,
                  }}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <p className="text-sm text-[var(--color-text-muted)]">
            <span className="text-[var(--color-text-primary)] font-medium">
              {filteredProjects.length}
            </span>{" "}
            project{filteredProjects.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.slug}
              className={`${getGridClass(index)} transition-all duration-500`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ProjectCard
                project={project}
                variant={
                  index % 5 === 0 || index % 5 === 4 ? "featured" : "default"
                }
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-[var(--color-text-muted)] text-lg">
              No projects in this category yet.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-4 text-sm text-[var(--color-accent)] hover:underline"
            >
              View all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
