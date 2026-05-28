"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{
            fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#3b82f6",
          }}>
            Projects
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700,
            color: "#f5f5f5", marginTop: "12px", lineHeight: 1.15,
          }}>
            Things I've built.<br />
            <span className="gradient-text">Designed to survive production.</span>
          </h2>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="glass-card"
              style={{ padding: "36px", position: "relative", overflow: "hidden" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Subtle index number watermark */}
              <div style={{
                position: "absolute", top: "24px", right: "28px",
                fontSize: "72px", fontWeight: 800, color: "rgba(255,255,255,0.025)",
                lineHeight: 1, userSelect: "none", pointerEvents: "none",
              }}>
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Top row — status + category */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{
                  padding: "4px 12px", fontSize: "11px", fontWeight: 600,
                  borderRadius: "999px", letterSpacing: "0.08em",
                  border: project.status === "completed"
                    ? "1px solid rgba(34,197,94,0.3)"
                    : "1px solid rgba(251,191,36,0.3)",
                  background: project.status === "completed"
                    ? "rgba(34,197,94,0.08)"
                    : "rgba(251,191,36,0.08)",
                  color: project.status === "completed" ? "#4ade80" : "#fbbf24",
                }}>
                  {project.status === "completed" ? "✓ Completed" : "⟳ In Progress"}
                </span>
                <span style={{
                  padding: "4px 12px", fontSize: "11px", fontWeight: 500,
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#52525b",
                }}>
                  {project.category === "ml" ? "Machine Learning" :
                   project.category === "systems" ? "Systems" :
                   project.category === "fullstack" ? "Full Stack" : "Data"}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 700,
                color: "#f5f5f5", marginBottom: "8px",
              }}>
                {project.title}
              </h3>

              {/* Short description */}
              <p style={{ fontSize: "15px", color: "#71717a", marginBottom: "16px", lineHeight: 1.6 }}>
                {project.shortDescription}
              </p>

              {/* Metrics highlight */}
              {project.metrics && (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "8px 16px", borderRadius: "8px", marginBottom: "20px",
                  border: "1px solid rgba(59,130,246,0.25)",
                  background: "rgba(59,130,246,0.08)",
                }}>
                  <span style={{ fontSize: "11px", color: "#3b82f6", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Result</span>
                  <span style={{ width: "1px", height: "12px", background: "rgba(59,130,246,0.3)" }} />
                  <span style={{ fontSize: "14px", color: "#60a5fa", fontWeight: 600 }}>{project.metrics}</span>
                </div>
              )}

              {/* Engineering highlights */}
              <ul style={{ marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {project.highlights.map((h, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#3b82f6", fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: 1.6 }}>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom row — tech stack + buttons */}
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}>
                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} style={{
                      padding: "4px 10px", fontSize: "11px", fontWeight: 500,
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.03)",
                      color: "#52525b",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "10px" }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "8px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 500,
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.04)",
                        color: "#a1a1aa", textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "8px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 500,
                        border: "1px solid rgba(59,130,246,0.3)",
                        background: "rgba(59,130,246,0.1)",
                        color: "#60a5fa", textDecoration: "none",
                      }}
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "8px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 500,
                      border: "1px solid rgba(255,255,255,0.05)",
                      color: "#3f3f46", cursor: "not-allowed",
                    }}>
                      No Demo Yet
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <a
            href="https://github.com/Zishaniitm"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 28px", borderRadius: "10px", fontSize: "14px", fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              color: "#71717a", textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            See all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}