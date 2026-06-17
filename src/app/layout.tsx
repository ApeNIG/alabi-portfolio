import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "I. Alabi | Production AI Engineer",
  description:
    "AI engineer building production systems, scalable platforms, and creative technology. Python + TypeScript. Manchester, UK.",
  keywords: [
    "AI engineer",
    "production AI",
    "LLM orchestration",
    "multi-agent systems",
    "full-stack engineer",
    "Python",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Alabi Ibagun" }],
  openGraph: {
    title: "I. Alabi | Production AI Engineer",
    description:
      "AI engineer building production systems, scalable platforms, and creative technology.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "I. Alabi | Production AI Engineer",
    description:
      "AI engineer building production systems, scalable platforms, and creative technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
