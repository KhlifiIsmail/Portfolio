// src/components/ui/badge.tsx

import React from "react";
import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300";

  const variants = {
    default: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    gradient:
      "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/20",
    outline:
      "bg-transparent text-gray-300 border border-gray-600 hover:border-gray-400",
  };

  return (
    <motion.span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
};
