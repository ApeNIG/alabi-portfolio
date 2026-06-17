import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A]">
      <div className="h-px bg-white/[0.06]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white/80 transition-colors duration-300"
            >
              I. Alabi
            </Link>
            <p className="mt-3 text-sm text-white/20 font-light">
              Infinite by design.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/15 mb-3">
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/work"
                  className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  Work
                </Link>
                <Link
                  href="#contact"
                  className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/15 mb-3">
                Connect
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:sibagun@gmail.com"
                  className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  Email
                </a>
                <a
                  href="https://github.com/ApeNIG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/alabiibagun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04]">
          <p className="font-mono text-[10px] text-white/15 tracking-wider">
            &copy; {currentYear} Alabi Ibagun
          </p>
        </div>
      </div>
    </footer>
  );
}
