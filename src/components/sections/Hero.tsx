// src/components/sections/Hero.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils/constants";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/utils/animations";

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={staggerItem}>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={staggerItem}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            <span className="text-gray-400 mx-2">&</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI/ML Engineer
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {siteConfig.description}. Passionate about creating elegant
            solutions to complex problems with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button href="#projects" size="lg" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" size="lg" variant="secondary">
              Get In Touch
            </Button>
            <Button
              href="/cv/IsmailKhlifi.pdf"
              size="lg"
              variant="ghost"
              icon={<Download size={18} />}
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-4 pt-8"
          >
            {[
              {
                icon: Github,
                href:
                  siteConfig.socialLinks.find((l) => l.name === "GitHub")
                    ?.url || "https://github.com/KhlifiIsmail",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href:
                  siteConfig.socialLinks.find((l) => l.name === "LinkedIn")
                    ?.url || "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: `mailto:${siteConfig.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};
