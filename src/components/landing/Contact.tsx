export function Contact() {
  const contactOptions = [
    {
      label: "Video Production",
      description: "Commercial, music videos, corporate content",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "Product Development",
      description: "AI integration, web applications, system design",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      label: "Collaboration",
      description: "Creative projects, partnerships, consulting",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[var(--color-text-primary)]"
    >
      <div className="max-w-[var(--width-content)] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Left column - CTA */}
          <div>
            <p className="text-editorial text-xs text-[var(--color-accent)] mb-4">
              Get in Touch
            </p>
            <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-white mb-6">
              Let&apos;s make
              <br />
              something.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-md">
              Have a project in mind? Looking for a creative partner? I&apos;m
              always open to discussing new opportunities.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:sibagun@gmail.com"
              className="group inline-flex items-center gap-4 text-white"
            >
              <span className="text-xl md:text-2xl font-medium group-hover:text-[var(--color-accent)] transition-colors">
                sibagun@gmail.com
              </span>
              <span className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-full group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
                <svg
                  className="w-5 h-5 -rotate-45"
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
              </span>
            </a>

            {/* Social links */}
            <div className="mt-12 flex gap-6">
              <a
                href="https://linkedin.com/in/alabideenib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/ApeNIG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column - What I can help with */}
          <div>
            <p className="text-sm text-white/40 uppercase tracking-wider mb-8">
              What I can help with
            </p>
            <div className="space-y-6">
              {contactOptions.map((option) => (
                <div
                  key={option.label}
                  className="group flex gap-4 p-4 border border-white/10 hover:border-white/30 transition-colors cursor-default"
                >
                  <div className="text-[var(--color-accent)]">{option.icon}</div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      {option.label}
                    </h3>
                    <p className="text-sm text-white/50">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 mb-2">Based in</p>
              <p className="text-white">England, United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
