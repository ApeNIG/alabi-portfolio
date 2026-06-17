import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 md:px-16 py-6 md:py-8">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-white hover:opacity-60 transition-opacity duration-300"
        >
          I. Alabi
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/work"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
