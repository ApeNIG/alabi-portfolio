import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { WorkGrid } from "./WorkGrid";

// Force dynamic rendering to avoid static generation issues with client components
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Work | I. Alabi",
  description:
    "Selected projects spanning video production, product development, and creative work.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-bg-primary)]">
        {/* Hero - Enhanced editorial style */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[var(--color-text-primary)] overflow-hidden">
          <div className="relative max-w-[var(--width-wide)] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[var(--color-accent)]" />
              <p className="text-editorial text-xs text-[var(--color-accent)] tracking-[0.3em]">
                Portfolio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <div>
                <h1 className="text-display text-[clamp(3rem,12vw,8rem)] text-white leading-[0.9] mb-0">
                  Work
                </h1>
              </div>
              <div className="md:pb-4">
                <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-md">
                  A selection of projects across video production, product
                  development, and creative work. Each piece represents a unique
                  challenge and solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Grid */}
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
