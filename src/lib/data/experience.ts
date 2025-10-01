// src/lib/data/experience.ts

import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "Wisecool",
    role: "Full Stack Engineer",
    period: "Jul 2025 - Aug 2025",
    location: "Tunisia",
    achievements: [
      "Built installment payment by subscription system (backend & frontend) using Next.js and Django within 6-week timeline",
      "Handled complex database relations and API integrations, improving data retrieval efficiency by 25%",
      "Improved calendar module with live events, attachments, and scheduling functionality for 500+ users",
      "Developed comprehensive attachments management system supporting PDFs, code, exercises, and course materials",
      "Cleaned and optimized API responses, reducing response time by 30%; added public library feature",
    ],
    tags: ["Next.js", "Django", "PostgreSQL", "REST APIs", "Full Stack"],
  },
  {
    company: "DrugIT",
    role: "ML Engineer & Full-Stack Dev",
    period: "Jul 2024 - Aug 2024",
    location: "Tunisia",
    achievements: [
      "Recommended Django and Flask frameworks to development team for building scalable web applications with ML integration",
      "Set up development environments using Docker and virtual environments for 5-person team, reducing setup time by 40%",
      "Configured CI/CD pipelines and version control workflows, improving team deployment efficiency by 35%",
    ],
    tags: ["Django", "Flask", "Docker", "CI/CD", "ML Integration", "Python"],
  },
  {
    company: "Keepcom",
    role: "Data Scientist / Web Developer",
    period: "Jun 2024 - Jul 2024",
    location: "Tunisia",
    achievements: [
      "Analyzed 167+ Facebook & Instagram ad campaigns data to measure ROI and optimize targeting",
      "Conducted data exploration, feature engineering, and EDA to extract insights from marketing performance metrics",
      "Built predictive ML models (regression, clustering, and time-series forecasting) to estimate campaign performance",
      "Designed and deployed a company showcase website using Express.js, Node.js, and EJS",
    ],
    tags: [
      "Python",
      "Scikit-learn",
      "Express.js",
      "Node.js",
      "Data Analysis",
      "ML",
    ],
  },
];
