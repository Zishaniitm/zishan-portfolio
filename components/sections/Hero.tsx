"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // ✅ All useTransform calls at TOP LEVEL — not inside JSX
  const imgInnerX = useTransform(springX, (v) => v * -0.5);
  const imgInnerY = useTransform(springY, (v) => v * -0.5);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / window.innerWidth * 10);
      mouseY.set((e.clientY - window.innerHeight / 2) / window.innerHeight * 10);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  // Scroll parallax
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY  = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY   = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const blur    = useTransform(scrollYProgress, [0, 0.5], [0, 6]);
  const textFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <section ref={sectionRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "0 24px" }}>

      {/* Ambient glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", filter: "blur(40px)", animation: "float 12s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "20%", right: "5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", filter: "blur(40px)", animation: "float 10s ease-in-out infinite reverse" }} />
        <div style={{ position: "absolute", top: "50%", right: "8%", transform: "translateY(-50%)", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)", filter: "blur(30px)" }} />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "72px", alignItems: "center" }} className="hero-grid">

          {/* LEFT: Text */}
          <motion.div style={{ y: textY, filter: textFilter, opacity }}>
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">

              <motion.div variants={staggerItem} style={{ marginBottom: "28px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: 500, border: "1px solid rgba(59,130,246,0.25)", background: "rgba(59,130,246,0.06)", color: "#60a5fa", backdropFilter: "blur(8px)" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6", animation: "pulse 2s infinite" }} />
                  Open to ML Engineering &amp; Data Science Roles
                </span>
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 40, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } } }}
                style={{ fontSize: "clamp(56px, 8vw, 96px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "24px" }}
              >
                <span style={{ color: "#f5f5f5" }}>Zishan</span><br />
                <span className="gradient-text">Ahmad</span>
              </motion.h1>

              <motion.div variants={staggerItem} style={{ marginBottom: "10px" }}>
                <p style={{ fontSize: "clamp(16px, 2.2vw, 21px)", color: "#a1a1aa", fontWeight: 400, lineHeight: 1.6 }}>Building Intelligent Systems.</p>
                <p style={{ fontSize: "clamp(16px, 2.2vw, 21px)", color: "#e4e4e7", fontWeight: 600, lineHeight: 1.6 }}>From Raw Data to Real Impact.</p>
              </motion.div>

              <motion.p variants={staggerItem} style={{ fontSize: "11px", color: "#3f3f46", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "40px" }}>
                CS &amp; Data Science @ IIT Madras &nbsp;·&nbsp; ML Engineer in the Making
              </motion.p>

              <motion.div variants={staggerItem} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "44px" }}>
                <motion.a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 600, background: "linear-gradient(135deg, #3b82f6, #6366f1)", color: "white", textDecoration: "none", boxShadow: "0 0 24px rgba(59,130,246,0.3)" }}
                >
                  View Projects
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.a>

                {[
                  { label: "GitHub", href: "https://github.com/Zishaniitm", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/zishan-ahmad-155b24239/", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                ].map((btn) => (
                  <motion.a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 22px", borderRadius: "12px", fontSize: "14px", fontWeight: 500, border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)", color: "#a1a1aa", textDecoration: "none" }}
                  >
                    {btn.icon}{btn.label}
                  </motion.a>
                ))}
              </motion.div>

              <motion.div variants={staggerItem} style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {["Python", "Java", "Scikit-learn", "XGBoost", "Spring Boot", "Kafka"].map((tech, i) => (
                  <motion.span key={tech} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.07 }}
                    whileHover={{ y: -2 }}
                    style={{ padding: "5px 13px", fontSize: "12px", fontWeight: 500, borderRadius: "999px", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", color: "#3f3f46", cursor: "default" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Photo */}
          <motion.div
            style={{ y: imageY, x: springX, position: "relative", zIndex: 10, flexShrink: 0 }}
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-photo-wrapper"
          >
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", inset: "-4px", borderRadius: "50%", background: "conic-gradient(from 0deg, rgba(59,130,246,0.8), rgba(139,92,246,0.5), rgba(59,130,246,0.1), rgba(139,92,246,0.6), rgba(59,130,246,0.8))", filter: "blur(2px)" }}
            />
            <div style={{ position: "absolute", inset: "2px", borderRadius: "50%", background: "#0a0a0a", zIndex: 1 }} />

            {/* Photo container */}
            <div style={{ position: "relative", width: "340px", height: "340px", borderRadius: "50%", overflow: "hidden", zIndex: 2, boxShadow: "0 0 80px rgba(59,130,246,0.25), 0 0 160px rgba(139,92,246,0.12)" }}>
              <motion.div style={{ width: "100%", height: "100%", x: imgInnerX, y: imgInnerY }}>
                <Image src="/zishan.png" alt="Zishan Ahmad" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
              </motion.div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, rgba(10,10,10,0.4), transparent)", zIndex: 3 }} />
            </div>

           {/* Badge — IIT Madras */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              style={{ position: "absolute", bottom: "28px", left: "-48px", zIndex: 20, display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", borderRadius: "14px", background: "rgba(8,8,12,0.92)", border: "1px solid rgba(59,130,246,0.25)", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", cursor: "default" }}
            >
              <span style={{ fontSize: "22px" }}>🎓</span>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#f5f5f5", lineHeight: 1.3 }}>IIT Madras</div>
                <div style={{ fontSize: "10px", color: "#60a5fa", lineHeight: 1.3 }}>BS Data Science</div>
              </div>
            </motion.div>

            {/* Badge — 84% Accuracy */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              style={{ position: "absolute", top: "24px", right: "-44px", zIndex: 20, display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", borderRadius: "14px", background: "rgba(8,8,12,0.92)", border: "1px solid rgba(139,92,246,0.25)", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", cursor: "default" }}
            >
              <span style={{ fontSize: "22px" }}>🧠</span>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#f5f5f5", lineHeight: 1.3 }}>84% Accuracy</div>
                <div style={{ fontSize: "10px", color: "#a78bfa", lineHeight: 1.3 }}>Best ML Model</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
      >
        <span style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#2a2a2a", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(59,130,246,0.5), transparent)" }}
        />
      </motion.div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 40px !important; }
          .hero-photo-wrapper { width: 220px; height: 220px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}