"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

// ─── Props ─────────────────────────────────────────────────────────────────
interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

// ─── SectionWrapper ────────────────────────────────────────────────────────
// Wraps every section with consistent padding, max-width, and fade-up animation
export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUp}
      className={`section max-w-6xl mx-auto px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}