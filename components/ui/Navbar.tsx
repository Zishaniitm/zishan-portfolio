"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",     href: "#about" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Journey",   href: "#journey" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]    = useState(false);
  const [activeSection, setActive] = useState("");
  const [menuOpen, setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <nav style={{
        maxWidth: "1100px", margin: "0 auto", padding: "0 24px",
        height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo — left */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#f5f5f5", letterSpacing: "-0.02em" }}>
            Zishan<span style={{ color: "#3b82f6" }}>.</span>
          </span>
        </button>

        {/* Desktop nav — center */}
        <ul style={{ display: "flex", alignItems: "center", gap: "4px", listStyle: "none", margin: 0, padding: 0 }}
          className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.label} style={{ position: "relative" }}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: "8px 14px", fontSize: "13px", fontWeight: 500,
                    borderRadius: "8px", transition: "color 0.2s ease",
                    color: isActive ? "#60a5fa" : "#71717a",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#f5f5f5"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#71717a"; }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      style={{
                        position: "absolute", bottom: "4px", left: "50%",
                        transform: "translateX(-50%)", width: "4px", height: "4px",
                        borderRadius: "50%", background: "#3b82f6", display: "block",
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right side — Resume + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Resume button — bigger */}
          <a
            href="https://drive.google.com/file/d/1VKgGJEpGCJEoR3OieEEvuw2PUXi81W8k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-nav"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "10px 20px", borderRadius: "10px", fontSize: "13px", fontWeight: 600,
              border: "1px solid rgba(59,130,246,0.5)",
              background: "rgba(59,130,246,0.1)",
              color: "#60a5fa", textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(59,130,246,0.2)";
              e.currentTarget.style.borderColor = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(59,130,246,0.1)";
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
            }}
          >
            Resume
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="mobile-nav"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", color: "#a1a1aa",
              display: "flex", flexDirection: "column", gap: "5px",
            }}
          >
            <span style={{
              display: "block", width: "22px", height: "1.5px", background: "currentColor",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px", background: "currentColor",
              transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px", background: "currentColor",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: "hidden",
              background: "rgba(10,10,10,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                      padding: "12px 16px", fontSize: "15px", fontWeight: 500,
                      color: "#a1a1aa", borderRadius: "10px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#f5f5f5";
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#a1a1aa";
                      e.currentTarget.style.background = "none";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li style={{ paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "4px" }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block", textAlign: "center", padding: "12px",
                    borderRadius: "10px", fontSize: "14px", fontWeight: 600,
                    border: "1px solid rgba(59,130,246,0.4)",
                    background: "rgba(59,130,246,0.1)",
                    color: "#60a5fa", textDecoration: "none",
                  }}
                >
                  Download Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: inline-flex !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}