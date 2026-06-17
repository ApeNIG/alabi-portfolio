export type ProjectCategory = "ai-systems" | "web" | "creative-tech";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  thumbnail: string;
  images: string[];
  video?: string;
  year: string;
  client?: string;
  role: string;
  tools?: string[];
  link?: string;
  github?: string;
  featured: boolean;
  stats?: { label: string; value: string }[];
}
