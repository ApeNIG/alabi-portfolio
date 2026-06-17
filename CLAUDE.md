# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev -- -p 4321  # Start development server (use custom port)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 15 portfolio site using the App Router with React 18, TypeScript, and Tailwind CSS 4.

### Key Patterns

- **Path alias**: `@/*` maps to `./src/*`
- **Dynamic rendering**: Pages use `export const dynamic = "force-dynamic"` to avoid static generation issues
- **Barrel exports**: Components use index.ts files for grouped exports (`@/components/layout`, `@/components/landing`)

### Data Layer

Projects are stored in `src/data/projects.ts` as a static array. Helper functions (`getProjectBySlug`, `getProjectsByCategory`, `featuredProjects`) provide filtered access. The `Project` type is defined in `src/types/project.ts` with categories: "video" | "build" | "creative".

### Route Structure

- `/` - Landing page (Hero, WhatIDo, SelectedWork, Contact sections)
- `/work` - Project grid with filtering
- `/work/[slug]` - Individual project detail pages

### Styling

- Tailwind CSS 4 with PostCSS
- CSS custom properties for theming (colors in globals.css)
- Google Fonts: Inter (body) and Space Grotesk (display)
- Design tokens: `--width-content`, `--width-wide`, `--width-narrow`, `--color-*`
