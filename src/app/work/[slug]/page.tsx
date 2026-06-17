import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectCategory } from "@/types/project";

// Force dynamic rendering to avoid static generation issues
export const dynamic = "force-dynamic";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const categoryColors: Record<ProjectCategory, string> = {
  video: "var(--color-accent)",
  build: "var(--color-complement)",
  creative: "#8B5CF6",
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | I. Alabi",
    };
  }

  return {
    title: `${project.title} | I. Alabi`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-bg-primary)]">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-text-primary)]">
          <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-12">
            {/* Back link */}
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
            >
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Work
            </Link>

            {/* Category */}
            <span
              className="inline-block text-xs uppercase tracking-wider px-3 py-1 text-white font-medium mb-6"
              style={{ backgroundColor: categoryColors[project.category] }}
            >
              {project.category}
            </span>

            {/* Title */}
            <h1 className="text-display text-[clamp(2.5rem,8vw,5rem)] text-white mb-4">
              {project.title}
            </h1>

            {/* Tagline */}
            <p className="text-xl text-white/70 max-w-2xl">{project.tagline}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Role
                </p>
                <p className="text-white">{project.role}</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Year
                </p>
                <p className="text-white">{project.year}</p>
              </div>
              {project.client && (
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                    Client
                  </p>
                  <p className="text-white">{project.client}</p>
                </div>
              )}
              {project.link && (
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                    Link
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    View Live
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main media (video or image) */}
        <section className="relative -mt-8 mb-16 md:mb-24">
          <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-12">
            {project.video ? (
              <div className="relative aspect-video bg-black overflow-hidden">
                <video
                  src={project.video}
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                  poster={project.thumbnail !== "/images/placeholder-project.svg" ? project.thumbnail : undefined}
                />
              </div>
            ) : (
              <div className="relative aspect-video bg-[var(--color-bg-tertiary)] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-[var(--width-narrow)] mx-auto px-6 md:px-12">
            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-display text-2xl text-[var(--color-text-primary)] mb-6">
                About the Project
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Tools */}
            {project.tools && project.tools.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Project images gallery */}
        {project.images.length > 1 && (
          <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
            <div className="max-w-[var(--width-wide)] mx-auto px-6 md:px-12">
              <h3 className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-8">
                Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video bg-[var(--color-bg-tertiary)]"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-16 md:py-24 border-t border-[var(--color-border)]">
          <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 gap-8">
              {/* Previous */}
              <Link
                href={`/work/${prevProject.slug}`}
                className="group text-left"
              >
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Previous
                </p>
                <p className="text-xl font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {prevProject.title}
                </p>
              </Link>

              {/* Next */}
              <Link
                href={`/work/${nextProject.slug}`}
                className="group text-right"
              >
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Next
                </p>
                <p className="text-xl font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {nextProject.title}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
