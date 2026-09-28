"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Shared fade-in-up on scroll. Set `once={false}` to re-trigger on every entry. */
export function Reveal({ children, className, delay = 0, once = true }: { children: ReactNode; className?: string; delay?: number; once?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
