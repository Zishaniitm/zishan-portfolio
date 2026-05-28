"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";

const stats = [
  { value: "2", label: "Degrees\nIn Progress", accent: "#3b82f6" },
  { value: "3+", label: "Real-World\nProjects", accent: "#8b5cf6" },
  { value: "84%", label: "Best Model\nAccuracy", accent: "#3b82f6" },
  { value: "IIT", label: "Madras\nData Science", accent: "#8b5cf6" },
];

const nowItems = [
  { icon: "⚙️", label: "Building", value: "CreditSense AI", sub: "Credit risk & fraud detection platform", color: "#3b82f6" },
  { icon: "📚", label: "Learning", value: "Kafka + Spring Boot", sub: "Real-time data pipelines", color: "#8b5cf6" },
  { icon: "🎯", label: "Goal", value: "ML Engineering Role", sub: "Open to internships & full-time", color: "#3b82f6" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 24px", maxWidth: "1100px", margin: "0 auto" }}>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "64px", textAlign: "center" }}
      >
        <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3b82f6" }}>
          About Me
        </span>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#f5f5f5", marginTop: "12px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          Not just learning —{" "}
          <span className="gradient-text">actively engineering.</span>
        </h2>
      </motion.div>

      {/* Two column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "start", marginBottom: "64px" }}>

        {/* Left — Bio */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={slideInLeft}>
          <p style={{ fontSize: "16px", color: "#a1a1aa", lineHeight: 1.8, marginBottom: "20px" }}>
            I'm Zishan — a CS & Data Science student at{" "}
            <span style={{ color: "#f5f5f5", fontWeight: 600 }}>IIT Madras</span>, with a self-taught foundation in Python, Java, and machine learning that predates my formal education.
          </p>
          <p style={{ fontSize: "16px", color: "#a1a1aa", lineHeight: 1.8, marginBottom: "20px" }}>
            I care about building things that are both{" "}
            <span style={{ color: "#f5f5f5", fontWeight: 500 }}>technically solid</span> and{" "}
            <span style={{ color: "#f5f5f5", fontWeight: 500 }}>actually useful</span> — not just assignments. My projects are designed to survive the real world.
          </p>
          <p style={{ fontSize: "16px", color: "#a1a1aa", lineHeight: 1.8, marginBottom: "32px" }}>
            I work across the full stack of data work: raw data → cleaning → feature engineering → model training → evaluation → deployment.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://github.com/Zishaniitm" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "10px 20px", borderRadius: "10px", fontSize: "13px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.1)", color: "#a1a1aa", textDecoration: "none" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/zishan-ahmad-155b24239/" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "10px 20px", borderRadius: "10px", fontSize: "13px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.1)", color: "#a1a1aa", textDecoration: "none" }}>
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "10px 20px", borderRadius: "10px", fontSize: "13px", fontWeight: 600, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", color: "#60a5fa", textDecoration: "none" }}>
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right — Now Card */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={slideInRight}>
          <div className="glass-card" style={{ padding: "28px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", display: "inline-block" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#4ade80", letterSpacing: "0.1em", textTransform: "uppercase" }}>Now</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {nowItems.map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontSize: "20px", lineHeight: 1 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#52525b", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>{item.label}</div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#f5f5f5", marginBottom: "2px" }}>{item.value}</div>
                    <div style={{ fontSize: "12px", color: "#71717a" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            <span style={{ fontSize: "13px", color: "#52525b" }}>India · Available Remotely</span>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem} className="glass-card" style={{ padding: "28px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", background: `linear-gradient(135deg, ${stat.accent}, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1, marginBottom: "8px" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "12px", color: "#52525b", fontWeight: 500, lineHeight: 1.4, whiteSpace: "pre-line" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}