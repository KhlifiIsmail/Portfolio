// src/lib/data/projects.ts

import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "devlog",
    title: "DevLog - AI Development Journal",
    description:
      "Full-stack platform that captures GitHub commits, processes them into coding sessions, and generates AI narratives using GPT-4",
    longDescription:
      "Automated development journal that integrates with GitHub webhooks to track coding activity. Uses LangChain, GPT-4, and Groq Llama 3 to generate meaningful insights about your development journey. Features microservices architecture with async processing, vector similarity search, and a premium glassmorphic Next.js 15 dashboard.",
    tags: [
      "Next.js 15",
      "Django 5",
      "PostgreSQL",
      "Redis",
      "Celery",
      "GPT-4",
      "LangChain",
      "ChromaDB",
      "Docker",
      "TypeScript",
    ],
    image: "gradient-purple",
    github: "https://github.com/KhlifiIsmail/devlog-backend",
    live: null,
    featured: true,
    status: "in-development",
    metrics: [
      { label: "Backend", value: "90%" },
      { label: "Frontend", value: "75%" },
      { label: "Tech Stack", value: "10+ Tools" },
    ],
  },
  {
    id: "hirekit",
    title: "HireKit - AI Resume Optimizer",
    description:
      "AI-powered platform that optimizes resumes for ATS systems with 95% pass rate using Groq AI and advanced ML algorithms",
    longDescription:
      "Cutting-edge resume optimization platform that analyzes resumes against job descriptions using Groq AI. Features include ATS compatibility checking, job-specific optimization, smart suggestions, comprehensive scoring, and export options. Built with Next.js 15, Supabase, and includes a credits system with generous free tier.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Groq AI",
      "PostgreSQL",
      "Framer Motion",
    ],
    image: "gradient-blue",
    github: "https://github.com/KhlifiIsmail/HireKit",
    live: "https://hirekit.ikhlif.me/",
    featured: true,
    status: "in-development",
    metrics: [
      { label: "ATS Pass Rate", value: "95%" },
      { label: "Speed", value: "<30s" },
      { label: "Free Credits", value: "5" },
    ],
  },
  {
    id: "medical-xray",
    title: "Medical X-Ray Classification",
    description:
      "AI-powered chest X-ray analysis using Vision Transformer (ViT) for automated pneumonia detection with 85%+ accuracy",
    longDescription:
      "Flask-based medical imaging platform that uses Vision Transformer (ViT) architecture for automated chest X-ray classification. The system processes uploaded X-ray images, analyzes them using deep learning models (ViT-base), and provides predictions for pneumonia detection. Features attention mechanisms for focusing on relevant regions, transfer learning from pre-trained medical models, and explainable AI capabilities.",
    tags: [
      "Python",
      "Flask",
      "PyTorch",
      "Transformers",
      "ViT",
      "Computer Vision",
      "Medical AI",
    ],
    image: "gradient-green",
    github:
      "https://github.com/KhlifiIsmail/Medical-Report-Generation-Based-on-Images",
    live: "https://medical-report-generation-based-on-images-production.up.railway.app/",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "85%+" },
      { label: "Model", value: "ViT" },
      { label: "Response", value: "<3s" },
    ],
  },
  {
    id: "churn-predictor",
    title: "ChurnPredictor - Customer Analytics",
    description:
      "AI-powered customer churn prediction platform with real-time analytics dashboard and 85%+ ML accuracy",
    longDescription:
      "Premium customer analytics platform featuring ML-powered churn prediction using Random Forest, real-time Metabase analytics dashboard, and glassmorphic UI. The system provides instant churn probability calculations, automated risk assessment, interactive visualizations, and preset examples for testing. Built with Next.js 15, FastAPI, and scikit-learn.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "FastAPI",
      "scikit-learn",
      "Metabase",
      "Random Forest",
      "Tailwind CSS",
    ],
    image: "gradient-pink",
    github: "https://github.com/KhlifiIsmail/ChurnPredictor-ui",
    live: null,
    featured: true,
    metrics: [
      { label: "ML Accuracy", value: "85%" },
      { label: "Real-time", value: "Yes" },
      { label: "Features", value: "11" },
    ],
  },
  {
    id: "book-recommender",
    title: "Book Recommendation System",
    description:
      "Intelligent book recommendation engine using collaborative filtering to suggest personalized reading lists",
    longDescription:
      "Python-based recommendation system that uses collaborative filtering algorithms to provide personalized book suggestions. The system analyzes user ratings and book features to generate recommendations, demonstrating different recommendation algorithms and evaluating their performance.",
    tags: [
      "Python",
      "Flask",
      "Collaborative Filtering",
      "Machine Learning",
      "Pandas",
      "scikit-learn",
    ],
    image: "gradient-cyan",
    github: "https://github.com/IsmailKhlifi/bookrecommendationsystem-py",
    live: null,
    featured: false,
  },
  {
    id: "patic-ecommerce",
    title: "Patic E-Commerce Platform",
    description:
      "Full-featured e-commerce web application with product catalog, shopping cart, and payment integration",
    longDescription:
      "Complete e-commerce solution built for Patic, featuring product browsing, shopping cart functionality, user authentication, order management, and payment processing. Demonstrates full-stack development capabilities with modern web technologies.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    image: "gradient-orange",
    github: "https://github.com/IsmailKhlifi/patic",
    live: null,
    featured: false,
  },
];
