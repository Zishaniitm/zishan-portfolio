"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const links = [
  {
    label: "Email",
    value: "admadzishan1713@gmail.com",
    href: "mailto:admadzishan1713@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    accent: "#3b82f6",
    accentBg: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.25)",
  },
  {
    label: "LinkedIn",
    value: "zishan-ahmad-155b24239",
    href: "https://www.linkedin.com/in/zishan-ahmad-155b24239/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    accent: "#0ea5e9",
    accentBg: "rgba(14,165,233,0.08)",
    accentBorder: "rgba(14,165,233,0.25)",
  },
  {
    label: "GitHub",
    value: "Zishaniitm",
    href: "https://github.com/Zishaniitm",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.25)",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "16px" }}
        >
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3b82f6" }}>
            Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}
        >
          Let's build{" "}
          <span className="gradient-text">something.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ fontSize: "17px", color: "#71717a", lineHeight: 1.7, marginBottom: "56px" }}
        >
          I'm actively looking for ML engineering and data science opportunities.
          If you're building something interesting — or just want to talk tech — reach out.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card"
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 24px", textDecoration: "none",
                border: `1px solid ${link.accentBorder}`,
                background: link.accentBg,
                borderRadius: "14px",
                transition: "all 0.2s ease",
              }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ color: link.accent }}>{link.icon}</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "11px", color: "#52525b", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: "14px", color: "#a1a1aa", fontWeight: 500 }}>
                    {link.value}
                  </div>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={link.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://drive.google.com/file/d/1VKgGJEpGCJEoR3OieEEvuw2PUXi81W8k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 32px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
              background: "#3b82f6", color: "white", textDecoration: "none",
              boxShadow: "0 0 30px rgba(59,130,246,0.25)",
              transition: "all 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}