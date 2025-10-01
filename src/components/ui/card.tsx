// src/components/ui/card.tsx

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  glass = true,
}) => {
  const baseStyles = "rounded-2xl p-6 transition-all duration-300";
  const glassStyles = glass
    ? "bg-white/5 backdrop-blur-lg border border-white/10"
    : "bg-slate-800/50 border border-slate-700/50";

  const hoverStyles = hover
    ? "hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
    : "";

  return (
    <motion.div
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
