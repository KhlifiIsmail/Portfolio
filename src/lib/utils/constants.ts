// src/lib/utils/constants.ts

import { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Ismail Khlifi",
  title: "Full Stack Developer",
  description:
    "Building exceptional digital experiences with modern web technologies",
  email: "ismail.khlifi@example.com",
  location: "Tunis, Tunisia",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/ismailkhlifi",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ismailkhlifi",
      icon: "linkedin",
    },
  ],
};

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
