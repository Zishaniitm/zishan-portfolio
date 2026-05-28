"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/animations";
import { timelineItems } from "@/data/timeline";

const typeColors: Record<string, { border: string; bg: string; dot: string; text: string }> = {
  education:  { border: "rgba(59,130,246,0.3)",  bg: "rgba(59,130,246,0.08)",  dot: "#3b82f6", text: "#60a5fa" },
  milestone:  { border: "rgba(34,197,94,0.3)",   bg: "rgba(34,197,94,0.08)",   dot: "#22c55e", text: "#4ade80" },
  project:    { border: "rgba(139,92,246,0.3)",  bg: "rgba(139,92,246,0.08)",  dot: "#8b5cf6", text: "#a78bfa" },
  learning:   { border: "rgba(251,191,36,0.25)", bg: "rgba(251,191,36,0.06)",  dot: "#f59e0b", text: "#fbbf24" },
};

export default function Journey() {
  return (
    <section id="journey" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3b82f6" }}>
            Journey
          </span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#f5f5f5", marginTop: "12px", lineHeight: 1.15 }}>
            The path so far.<br />
            <span className="gradient-text">Always in motion.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "20px", top: "8px", bottom: "8px",
            width: "1px", background: "linear-gradient(to bottom, rgba(59,130,246,0.4), rgba(139,92,246,0.2), transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {timelineItems.map((item, index) => {
              const colors = typeColors[item.type];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  style={{ display: "flex", gap: "28px", paddingBottom: "40px", position: "relative" }}
                >
                  {/* Dot */}
                  <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      border: `1px solid ${colors.border}`,
                      background: colors.bg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <div style={{
                        width: "8px", height: "8px", borderRadius: "50%",
                        background: colors.dot,
                        boxShadow: item.current ? `0 0 10px ${colors.dot}` : "none",
                        animation: item.current ? "pulse 2s infinite" : "none",
                      }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, paddingTop: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "12px", color: colors.text, fontWeight: 600, letterSpacing: "0.05em" }}>
                        {item.year}
                      </span>
                      {item.current && (
                        <span style={{
                          padding: "2px 8px", fontSize: "10px", fontWeight: 600,
                          borderRadius: "999px", letterSpacing: "0.1em", textTransform: "uppercase",
                          border: "1px solid rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.08)", color: "#4ade80",
                        }}>
                          Now
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#f5f5f5", marginBottom: "2px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#52525b", fontWeight: 500, marginBottom: "8px" }}>
                      {item.subtitle}
                    </p>
                    <p style={{ fontSize: "14px", color: "#71717a", lineHeight: 1.7, marginBottom: "12px" }}>
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {item.tags.map((tag) => (
                          <span key={tag} style={{
                            padding: "3px 10px", fontSize: "11px", fontWeight: 500, borderRadius: "6px",
                            border: "1px solid rgba(255,255,255,0.06)",
                            background: "rgba(255,255,255,0.02)", color: "#3f3f46",
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}