import { Variants } from "framer-motion";

// ─── Fade Up ───────────────────────────────────────────────────────────────
// Use on individual elements that should rise into view
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Fade In ───────────────────────────────────────────────────────────────
// Simple opacity fade, no movement
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Stagger Container ─────────────────────────────────────────────────────
// Wrap around a list of elements to stagger their child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ─── Stagger Item ──────────────────────────────────────────────────────────
// Child of staggerContainer — each item fades up one by one
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Scale In ──────────────────────────────────────────────────────────────
// For cards and badges that should pop into view
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Slide In Left ─────────────────────────────────────────────────────────
// For elements entering from the left side
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Slide In Right ────────────────────────────────────────────────────────
// For elements entering from the right side
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Viewport Config ───────────────────────────────────────────────────────
// Reusable whileInView config — triggers animation once when element enters viewport
export const viewportConfig = {
  once: true,
  margin: "-80px",
};