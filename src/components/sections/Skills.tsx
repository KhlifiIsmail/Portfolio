// src/components/sections/Skills.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data/skills";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/utils/animations";

export const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skillCategory, index) => (
          <motion.div key={index} variants={staggerItem}>
            <Card className="h-full">
              <div className="space-y-4">
                {/* Category Title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">
                      {index === 0
                        ? "⚛️"
                        : index === 1
                        ? "⚙️"
                        : index === 2
                        ? "💾"
                        : index === 3
                        ? "☁️"
                        : "🛠️"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Badge variant="gradient">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Card className="inline-block">
          <p className="text-gray-300">
            Always learning and exploring new technologies to stay ahead of the
            curve 🚀
          </p>
        </Card>
      </motion.div>
    </Section>
  );
};
