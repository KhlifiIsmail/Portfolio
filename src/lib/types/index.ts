// src/lib/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string | null;
  featured: boolean;
  status?: "completed" | "in-development";
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  secondaryEmail?: string;
  location: string;
  socialLinks: SocialLink[];
}
