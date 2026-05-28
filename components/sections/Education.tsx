"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const education = [
  {
    id: "iit-madras",
    institution: "Indian Institute of Technology Madras",
    short: "IIT Madras",
    degree: "BS in Data Science & Programming",
    duration: "2025 – Present",
    status: "In Progress",
    primary: true,
    description:
      "One of India's most rigorous online degree programs. Covers ML, statistics, data engineering, and software systems at depth. Admitted through a competitive qualifier process.",
    subjects: ["Data Science", "Machine Learning", "Statistics", "Linear Algebra", "Python", "Data Structures", "Database Systems", "Modern Application Development"],
    highlight: "Dual Degree",
  },
  {
    id: "fugs",
    institution: "United Institute of Management (FUGS)",
    short: "FUGS, Prayagraj",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2024 – Present",
    status: "In Progress",
    primary: false,
    description:
      "Formal CS foundation covering core computer science principles — operating systems, computer architecture, DBMS, and OOP in depth.",
    subjects: ["Operating Systems", "DBMS", "Computer Architecture", "OOP", "Cybersecurity", "Networking"],
    highlight: "CS Foundation",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3b82f6" }}>
            Education
          </span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#f5f5f5", marginTop: "12px", lineHeight: 1.15 }}>
            Where I'm learning.<br />
            <span className="gradient-text">And what I'm earning.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={staggerItem}
              className="glass-card"
              style={{ padding: "36px", position: "relative", overflow: "hidden" }}
            >
              {/* Primary glow accent */}
              {edu.primary && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                }} />
              )}

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                {/* Left */}
                <div style={{ flex: 1, minWidth: "260px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                    <span style={{
                      padding: "4px 12px", fontSize: "11px", fontWeight: 600, borderRadius: "999px", letterSpacing: "0.08em",
                      border: "1px solid rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.08)", color: "#60a5fa",
                    }}>
                      {edu.highlight}
                    </span>
                    <span style={{
                      padding: "4px 12px", fontSize: "11px", fontWeight: 500, borderRadius: "999px",
                      border: "1px solid rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.06)", color: "#4ade80",
                    }}>
                      {edu.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "#f5f5f5", marginBottom: "4px" }}>
                    {edu.degree}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#60a5fa", fontWeight: 500, marginBottom: "12px" }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontSize: "14px", color: "#71717a", lineHeight: 1.7, marginBottom: "20px" }}>
                    {edu.description}
                  </p>

                  {/* Subjects */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {edu.subjects.map((subject) => (
                      <span key={subject} style={{
                        padding: "4px 10px", fontSize: "11px", fontWeight: 500, borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", color: "#52525b",
                      }}>
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — duration */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "13px", color: "#3f3f46", fontWeight: 500, letterSpacing: "0.05em" }}>
                    {edu.duration}
                  </div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "rgba(255,255,255,0.04)", marginTop: "8px", letterSpacing: "-0.02em" }}>
                    {edu.short}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}