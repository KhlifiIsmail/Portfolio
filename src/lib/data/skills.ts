// src/lib/data/skills.ts

import { Skill } from "../types";

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Python",
      "Django",
      "FastAPI",
      "GraphQL",
      "REST APIs",
      "Express",
    ],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Prisma"],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Docker",
      "AWS",
      "CI/CD",
      "Kubernetes",
      "Linux",
      "Nginx",
      "GitHub Actions",
    ],
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "Figma",
      "Postman",
      "Jest",
      "Webpack",
      "VS Code",
      "Agile/Scrum",
    ],
  },
];
