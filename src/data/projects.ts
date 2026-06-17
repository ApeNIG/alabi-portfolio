import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "duro",
    title: "Duro",
    category: "ai-systems",
    tagline: "Multi-agent memory and governance platform",
    description:
      "A local-first agent orchestration platform managing 5,000+ artifacts across 84 operational rules. Features epistemic gates that classify AI claims by confidence level, a failure-to-rule pipeline that converts operational failures into permanent system rules, and cryptographic artifact signing with provenance chains. Built an autonomy ladder where AI tools earn execution privileges through demonstrated reliability.",
    thumbnail: "/images/duro-concept.svg",
    images: ["/images/duro-concept.svg"],
    year: "2026",
    role: "Solo Engineer",
    tools: ["Python", "SQLite", "MCP Protocol", "HMAC Signing", "Vector Embeddings", "OpenAI", "Anthropic"],
    featured: true,
    stats: [
      { label: "Commits", value: "607" },
      { label: "Artifacts", value: "5,000+" },
      { label: "Rules", value: "84" },
      { label: "Skills", value: "61" },
    ],
  },
  {
    slug: "trading-system",
    title: "Algorithmic Trading Platform",
    category: "ai-systems",
    tagline: "Autonomous trading with real capital",
    description:
      "Live algorithmic trading system running IBS mean reversion strategy on a Linux server with 20 systemd timers. Two-way broker state reconciliation detects and self-heals position drift. Automatic kill thresholds saved ~$400 on one strategy. Morning review pipeline runs automated portfolio checks, orphan detection, and Telegram alerting.",
    thumbnail: "/images/trading-concept.svg",
    images: ["/images/trading-concept.svg"],
    year: "2026",
    role: "Solo Engineer",
    tools: ["Python", "asyncio", "Alpaca API", "systemd", "DigitalOcean", "Telegram API"],
    featured: true,
    stats: [
      { label: "Timers", value: "20" },
      { label: "Capital", value: "Real" },
      { label: "Uptime", value: "24/7" },
    ],
  },
  {
    slug: "cinematch",
    title: "Cinematch",
    category: "web",
    tagline: "Creative professional network",
    description:
      "Full-stack web application for film and music industry professionals, live in production. Supabase backend with Row Level Security, real-time features, and automated keep-alive scheduling. Production-grade with user authentication and responsive design.",
    thumbnail: "/images/cinematch-screenshot.jpeg",
    images: ["/images/cinematch-screenshot.jpeg"],
    year: "2026",
    role: "Full-Stack Engineer",
    tools: ["Next.js", "React", "TypeScript", "Supabase", "Vercel", "Tailwind CSS"],
    link: "https://cinematch-rosy.vercel.app",
    featured: true,
  },
  {
    slug: "undatone",
    title: "Undatone",
    category: "creative-tech",
    tagline: "Culture intelligence publication",
    description:
      "Design-led editorial platform covering Afrobeats with data-driven artist dossiers. Interactive web dossiers with custom ankara SVG patterns unique to each artist, responsive layouts, and animated data visualisations. Brand identity system with Ojuju display typography and signal-trace editorial framework.",
    thumbnail: "/images/undatone-concept.svg",
    images: ["/images/undatone-concept.svg"],
    year: "2026",
    role: "Creator & Designer",
    tools: ["HTML", "CSS", "JavaScript", "Interactive SVG", "Substack"],
    featured: true,
  },
  {
    slug: "telegram-bot",
    title: "AI Assistant Bot",
    category: "ai-systems",
    tagline: "Voice + search + memory conversational AI",
    description:
      "Conversational AI bot with direct database access, voice transcription via Whisper, web search integration, and text-to-speech. Deployed as a systemd service on DigitalOcean with logrotate and automatic restart. Queries 5,000+ memory artifacts for contextual responses.",
    thumbnail: "/images/bot-concept.svg",
    images: ["/images/bot-concept.svg"],
    year: "2026",
    role: "Solo Engineer",
    tools: ["Python", "Claude API", "faster-whisper", "Edge TTS", "DuckDuckGo", "SQLite"],
    featured: true,
  },
  {
    slug: "video-pipeline",
    title: "Video Production Pipeline",
    category: "creative-tech",
    tagline: "Automated editing and colour grading",
    description:
      "Automated video editing pipeline connecting Descript API, HeyGen avatar generation, and local FFmpeg processing. CDL colour grading with curves rolloff, multi-pass rendering, and frame-accurate editing. Turned manual video production into a programmable pipeline.",
    thumbnail: "/images/video-thumb.svg",
    images: ["/images/video-thumb.svg"],
    year: "2026",
    role: "Pipeline Engineer",
    tools: ["Python", "Descript API", "HeyGen", "FFmpeg", "CDL"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(
  category: Project["category"]
): Project[] {
  return projects.filter((p) => p.category === category);
}
