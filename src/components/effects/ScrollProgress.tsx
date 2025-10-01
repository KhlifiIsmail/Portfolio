// src/components/effects/ScrollProgress.tsx

"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [320, 0]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2">
      {/* Progress Bar Container */}
      <div className="relative h-80 w-2 bg-white/20 rounded-full overflow-hidden shadow-lg">
        {/* Active Progress */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          style={{
            height: "100%",
            scaleY: scaleY,
            transformOrigin: "bottom",
          }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full blur-xl opacity-70"
          style={{
            y: glowY,
          }}
        />
      </div>

      {/* Percentage indicator */}
      <motion.div
        className="text-xs font-mono text-blue-400 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-md border border-blue-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {scrollPercentage}%
      </motion.div>
    </div>
  );
};
