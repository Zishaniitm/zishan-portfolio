"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "About",     href: "#about" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Journey",   href: "#journey" },
  { label: "Contact",   href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "48px 24px",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "24px", marginBottom: "32px",
        }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#f5f5f5", letterSpacing: "-0.02em" }}>
              Zishan<span style={{ color: "#3b82f6" }}>.</span>
            </span>
          </button>

          {/* Nav links */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "6px 12px", fontSize: "13px", fontWeight: 500,
                  color: "#52525b", borderRadius: "8px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a1a1aa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="https://github.com/Zishaniitm" target="_blank" rel="noopener noreferrer"
              style={{ color: "#52525b", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a1a1aa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/zishan-ahmad-155b24239/" target="_blank" rel="noopener noreferrer"
              style={{ color: "#52525b", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a1a1aa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", marginBottom: "24px" }} />

        {/* Bottom row */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ fontSize: "13px", color: "#3f3f46" }}>
            © 2025 Zishan Ahmad. Built with Next.js & Framer Motion.
          </p>
          <p style={{ fontSize: "13px", color: "#3f3f46", fontStyle: "italic" }}>
            Always building. Always learning.
          </p>
        </div>
      </div>
    </footer>
  );
}