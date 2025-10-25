// src/components/sections/Projects.tsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  Rocket,
  CheckCircle,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/projects";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/utils/animations";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  const gradients: { [key: string]: string } = {
    "gradient-purple": "from-purple-500 to-pink-500",
    "gradient-pink": "from-pink-500 to-orange-500",
    "gradient-blue": "from-blue-500 to-cyan-500",
    "gradient-green": "from-green-500 to-emerald-500",
    "gradient-orange": "from-orange-500 to-red-500",
    "gradient-cyan": "from-cyan-500 to-blue-500",
  };

  return (
    <Section id="projects" className="bg-slate-900/30">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          A showcase of my work - from AI-powered platforms to full-stack
          applications
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              filter === "featured"
                ? "bg-purple-500 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Sparkles size={16} />
            Featured Only
          </button>
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div key={project.id} variants={staggerItem} layout>
            <Card className="h-full flex flex-col group">
              {/* Project Image/Gradient */}
              <div
                className={`h-48 rounded-xl bg-gradient-to-br ${
                  gradients[project.image] || "from-blue-500 to-purple-500"
                } mb-4 relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0)" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Status Badges */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.featured && (
                    <div className="px-3 py-1 rounded-full bg-yellow-500/90 text-yellow-900 text-xs font-bold flex items-center gap-1">
                      <Sparkles size={12} />
                      Featured
                    </div>
                  )}
                  {project.status === "in-development" && (
                    <div className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-bold flex items-center gap-1">
                      <Rocket size={12} />
                      In Dev
                    </div>
                  )}
                  {project.live && (
                    <div className="px-3 py-1 rounded-full bg-green-500/90 text-white text-xs font-bold flex items-center gap-1">
                      <CheckCircle size={12} />
                      Live
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <Badge key={i} variant="default">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="outline">+{project.tags.length - 4}</Badge>
                  )}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-white/10">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-blue-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      href={project.github}
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                      icon={<Github size={16} />}
                    >
                      Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      href={project.live}
                      variant="secondary"
                      size="sm"
                      className="flex-1"
                      icon={<ExternalLink size={16} />}
                    >
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* View More */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-gray-400 mb-4">Want to see more of my work?</p>
        <Button
          href="https://github.com/KhlifiIsmail"
          variant="primary"
          icon={<Github size={18} />}
        >
          View All on GitHub
        </Button>
      </motion.div>
    </Section>
  );
};
