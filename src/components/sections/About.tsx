// src/components/sections/About.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { fadeInUp } from "@/lib/utils/animations";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: "5+ Years",
      description: "Professional Development Experience",
    },
    {
      icon: Rocket,
      title: "50+ Projects",
      description: "Successfully Delivered",
    },
    {
      icon: Users,
      title: "20+ Clients",
      description: "Worldwide Collaboration",
    },
    {
      icon: Award,
      title: "95%",
      description: "Client Satisfaction Rate",
    },
  ];

  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Hey there! I'm a passionate full-stack developer with over 5 years
              of experience building scalable web applications and elegant user
              interfaces. I love turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p>
              My journey in tech started with curiosity about how websites work,
              and it has evolved into a career where I get to work with
              cutting-edge technologies and collaborate with talented teams
              worldwide.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying up-to-date with the latest industry trends.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
              Available for Freelance
            </div>
            <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
              Open to Opportunities
            </div>
          </div>
        </motion.div>

        {/* Right: Highlights Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="text-blue-400" size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
