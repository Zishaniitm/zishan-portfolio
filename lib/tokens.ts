// ─── Design System Tokens ───────────────────────────────────────────────────
// Single source of truth — import these wherever inline styles are needed
// All values mirror the CSS variables in globals.css

// ── Colors ──────────────────────────────────────────────────────────────────
export const colors = {
  // Backgrounds
  bg: {
    base:     "#0a0a0a",   // page background
    surface:  "#111111",   // card/panel background
    elevated: "#161616",   // raised surface (dropdowns, tooltips)
    overlay:  "#1c1c1c",   // modal backdrop base
  },
  // Borders
  border: {
    subtle:  "rgba(255,255,255,0.05)",
    default: "rgba(255,255,255,0.09)",
    bright:  "rgba(255,255,255,0.16)",
    focus:   "rgba(59,130,246,0.6)",
  },
  // Text
  text: {
    primary:   "#f4f4f5",   // headings, high-emphasis
    secondary: "#a1a1aa",   // body, descriptions
    muted:     "#71717a",   // captions, labels
    disabled:  "#52525b",   // placeholder, decorative
    inverse:   "#09090b",   // text on light backgrounds
  },
  // Brand accents
  accent: {
    blue:         "#3b82f6",
    blueBright:   "#60a5fa",
    blueSubtle:   "rgba(59,130,246,0.12)",
    purple:       "#8b5cf6",
    purpleBright: "#a78bfa",
    purpleSubtle: "rgba(139,92,246,0.12)",
  },
  // Semantic
  semantic: {
    success:       "#4ade80",
    successSubtle: "rgba(34,197,94,0.1)",
    warning:       "#fbbf24",
    warningSubtle: "rgba(251,191,36,0.1)",
    error:         "#f87171",
    errorSubtle:   "rgba(248,113,113,0.1)",
  },
  // Gradients (as string values for inline styles)
  gradient: {
    brand:     "linear-gradient(135deg, #60a5fa, #a78bfa)",
    primary:   "linear-gradient(135deg, #3b82f6, #6366f1)",
    subtle:    "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1))",
    divider:   "linear-gradient(90deg, transparent, rgba(99,102,241,0.7), rgba(59,130,246,0.7), transparent)",
  },
  // Glows
  glow: {
    blue:        "rgba(59,130,246,0.15)",
    blueStrong:  "rgba(59,130,246,0.30)",
    purple:      "rgba(139,92,246,0.15)",
    purpleStrong:"rgba(139,92,246,0.30)",
  },
} as const;

// ── Typography ───────────────────────────────────────────────────────────────
export const typography = {
  // Font families
  font: {
    heading: "'Space Grotesk', system-ui, sans-serif",
    body:    "'Inter', system-ui, sans-serif",
    mono:    "'JetBrains Mono', 'Fira Code', monospace",
  },
  // Font sizes (fluid with clamp where needed)
  size: {
    "2xs": "10px",
    xs:    "11px",
    sm:    "12px",
    base:  "14px",
    md:    "15px",
    lg:    "17px",
    xl:    "20px",
    "2xl": "24px",
    "3xl": "clamp(28px, 4vw, 36px)",
    "4xl": "clamp(32px, 5vw, 48px)",
    "5xl": "clamp(40px, 6vw, 64px)",
    "6xl": "clamp(52px, 7vw, 80px)",
    "7xl": "clamp(56px, 8vw, 96px)",
  },
  // Font weights
  weight: {
    regular: 400,
    medium:  500,
    semibold:600,
    bold:    700,
    extrabold:800,
  },
  // Line heights
  leading: {
    none:    1.0,
    tight:   1.15,
    snug:    1.35,
    normal:  1.6,
    relaxed: 1.75,
  },
  // Letter spacing
  tracking: {
    tight:  "-0.03em",
    normal: "0em",
    wide:   "0.05em",
    wider:  "0.1em",
    widest: "0.2em",
  },
} as const;

// ── Spacing ──────────────────────────────────────────────────────────────────
// 4px base unit system
export const space = {
  1:  "4px",
  2:  "8px",
  3:  "12px",
  4:  "16px",
  5:  "20px",
  6:  "24px",
  7:  "28px",
  8:  "32px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px",
  28: "112px",
  32: "128px",
  // Section padding
  sectionY:       "120px",
  sectionYMobile: "72px",
  sectionX:       "24px",
  sectionXMobile: "16px",
} as const;

// ── Border Radius ────────────────────────────────────────────────────────────
export const radius = {
  sm:   "6px",    // tags, pills inner
  md:   "10px",   // buttons, inputs
  lg:   "14px",   // cards, badges
  xl:   "16px",   // section cards (glass-card)
  "2xl":"20px",   // skill logo cards
  "3xl":"24px",   // large panels
  full: "999px",  // pills, avatars
} as const;

// ── Shadows ──────────────────────────────────────────────────────────────────
export const shadow = {
  sm:     "0 2px 8px rgba(0,0,0,0.3)",
  md:     "0 4px 24px rgba(0,0,0,0.4)",
  lg:     "0 8px 40px rgba(0,0,0,0.5)",
  xl:     "0 16px 64px rgba(0,0,0,0.6)",
  // Glow shadows
  glowBlue:   "0 0 24px rgba(59,130,246,0.25), 0 0 48px rgba(59,130,246,0.10)",
  glowPurple: "0 0 24px rgba(139,92,246,0.25), 0 0 48px rgba(139,92,246,0.10)",
  glowBlueSm: "0 0 12px rgba(59,130,246,0.20)",
  // Card hover
  cardHover:  "0 0 30px rgba(59,130,246,0.12), 0 8px 40px rgba(0,0,0,0.4)",
} as const;

// ── Container Widths ─────────────────────────────────────────────────────────
export const container = {
  sm:   "640px",
  md:   "768px",
  lg:   "1024px",
  xl:   "1100px",   // primary portfolio max-width
  "2xl":"1280px",
  "3xl":"1440px",
  full: "100%",
} as const;

// ── Breakpoints ──────────────────────────────────────────────────────────────
export const breakpoints = {
  xs:  "375px",   // small phones
  sm:  "480px",   // large phones
  md:  "768px",   // tablets
  lg:  "1024px",  // small laptops
  xl:  "1280px",  // desktops
  "2xl":"1536px", // large screens
} as const;

// ── Z-Index ──────────────────────────────────────────────────────────────────
export const zIndex = {
  base:     0,
  raised:   10,
  dropdown: 20,
  sticky:   30,    // navbar
  overlay:  40,
  modal:    50,
  progress: 9998,  // scroll progress bar
  noise:    9999,  // noise overlay
} as const;

// ── Animation Durations ──────────────────────────────────────────────────────
export const duration = {
  instant: 0.1,
  fast:    0.2,
  normal:  0.4,
  slow:    0.6,
  cinematic: 0.9,
} as const;

export const ease = {
  smooth:   [0.25, 0.1, 0.25, 1]   as const,
  out:      [0.0, 0.0, 0.2, 1]     as const,
  spring:   [0.34, 1.56, 0.64, 1]  as const,
  linear:   [0.0, 0.0, 1.0, 1.0]   as const,
} as const;