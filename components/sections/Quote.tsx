"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/animations";

export default function Quote() {
  return (
    <section style={{ position: "relative", padding: "100px 24px", overflow: "hidden", textAlign: "center" }}>

      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none", zIndex: 0,
        }}
      />

      {/* Top divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: "120px", height: "1px", margin: "0 auto 72px",
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.8), rgba(59,130,246,0.8), transparent)",
          boxShadow: "0 0 12px rgba(99,102,241,0.4)",
          transformOrigin: "center", position: "relative", zIndex: 1,
        }}
      />

      {/* Quote block */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "780px", margin: "0 auto" }}>

        {/* Big quotation mark */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "100px", lineHeight: 0.8, marginBottom: "20px",
            background: "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(139,92,246,0.4))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", fontFamily: "Georgia, serif", userSelect: "none",
          }}
          aria-hidden="true"
        >"</motion.div>

        {/* Quote text */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={viewportConfig}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 400,
            lineHeight: 1.75, color: "#d4d4d8", letterSpacing: "0.01em",
            marginBottom: "32px",
            textShadow: "0 0 40px rgba(59,130,246,0.12)",
          }}
        >
          Scientists investigate that which already is;{" "}
          <span style={{
            background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", fontWeight: 600,
          }}>
            engineers create that which has never been.
          </span>
        </motion.p>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontSize: "12px", color: "#52525b", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}
        >
          — Albert Einstein
        </motion.p>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: "60px", height: "1px", margin: "72px auto 0",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
          transformOrigin: "center", position: "relative", zIndex: 1,
        }}
      />
    </section>
  );
}