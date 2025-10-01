// src/lib/data/experience.ts

import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    location: "Tunis, Tunisia",
    achievements: [
      "Led development of microservices architecture serving 500K+ daily active users",
      "Reduced API response time by 60% through query optimization and caching strategies",
      "Mentored team of 5 junior developers, conducting code reviews and technical workshops",
      "Implemented automated testing pipeline increasing code coverage to 85%",
    ],
    tags: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis"],
  },
  {
    company: "Digital Solutions Co.",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    location: "Remote",
    achievements: [
      "Built real-time collaboration features for SaaS product using WebSockets",
      "Implemented CI/CD pipeline with GitHub Actions reducing deployment time by 75%",
      "Architected scalable database solutions handling 10M+ records",
      "Developed RESTful APIs consumed by web and mobile applications",
    ],
    tags: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis", "AWS"],
  },
  {
    company: "StartupHub",
    role: "Junior Developer",
    period: "2019 - 2020",
    location: "Tunis, Tunisia",
    achievements: [
      "Developed responsive web applications for 10+ clients across various industries",
      "Collaborated with designers to implement pixel-perfect UIs using Figma designs",
      "Maintained 99.9% uptime for production systems through monitoring and optimization",
      "Integrated third-party APIs including payment gateways and analytics tools",
    ],
    tags: ["JavaScript", "React", "MongoDB", "Express", "Node.js", "Git"],
  },
];
