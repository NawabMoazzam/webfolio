"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingAnimation = ({
  children,
  className,
  yOffset = 10,
  duration = 4,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-yOffset, yOffset, -yOffset] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
};

export default FloatingAnimation;