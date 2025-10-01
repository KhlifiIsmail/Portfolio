// src/lib/data/projects.ts

import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Service Bot",
    description:
      "Intelligent chatbot using NLP to handle customer inquiries with 95% accuracy rate",
    longDescription:
      "Built an AI-powered chatbot that uses natural language processing to understand and respond to customer inquiries. The system integrates with existing CRM platforms and provides real-time analytics on customer sentiment and common issues.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "MongoDB", "Docker"],
    image: "gradient-purple",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "95%" },
      { label: "Response Time", value: "<2s" },
      { label: "Users", value: "10K+" },
    ],
  },
  {
    id: "ecommerce-analytics",
    title: "E-Commerce Analytics Platform",
    description:
      "Real-time dashboard for tracking sales metrics and customer behavior",
    longDescription:
      "Comprehensive analytics platform for e-commerce businesses featuring real-time sales tracking, customer segmentation, and predictive analytics. Built with modern web technologies for optimal performance.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "Redis", "AWS"],
    image: "gradient-pink",
    github: "https://github.com",
    featured: true,
    metrics: [
      { label: "Data Points", value: "1M+/day" },
      { label: "Load Time", value: "<1s" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "blockchain-supply",
    title: "Blockchain Supply Chain",
    description:
      "Decentralized tracking system for product authenticity verification",
    longDescription:
      "Blockchain-based supply chain management system that ensures product authenticity and provides full transparency from manufacturer to end consumer.",
    tags: ["Solidity", "Web3.js", "Node.js", "MongoDB", "React", "Ethereum"],
    image: "gradient-blue",
    github: "https://github.com",
    featured: false,
  },
  {
    id: "health-tracker",
    title: "Health Tracking Mobile App",
    description:
      "Cross-platform fitness app with personalized workout recommendations",
    longDescription:
      "Mobile application that tracks fitness activities, provides personalized workout plans, and integrates with wearable devices for comprehensive health monitoring.",
    tags: [
      "React Native",
      "Firebase",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "gradient-green",
    live: "https://demo.com",
    featured: false,
  },
  {
    id: "task-manager",
    title: "Team Collaboration Platform",
    description:
      "Project management tool with real-time collaboration features",
    longDescription:
      "All-in-one team collaboration platform featuring task management, real-time chat, video conferencing, and file sharing capabilities.",
    tags: ["Vue.js", "Socket.io", "PostgreSQL", "Express", "Docker", "AWS"],
    image: "gradient-orange",
    github: "https://github.com",
    featured: false,
  },
  {
    id: "weather-dashboard",
    title: "Weather Forecast Dashboard",
    description:
      "Beautiful weather application with detailed forecasts and maps",
    longDescription:
      "Modern weather dashboard providing detailed forecasts, interactive maps, and weather alerts. Features elegant UI with smooth animations.",
    tags: ["React", "TypeScript", "Tailwind", "Weather API", "Mapbox"],
    image: "gradient-cyan",
    live: "https://demo.com",
    featured: false,
  },
];
