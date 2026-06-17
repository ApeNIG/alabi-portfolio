import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="text-center px-6">
        <p className="text-xs text-[#EA580C] uppercase tracking-[0.2em] font-medium mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#171717] mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-[#737373] mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white hover:bg-[#EA580C] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
