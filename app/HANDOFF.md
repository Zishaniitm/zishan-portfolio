# Zishan Ahmad Portfolio — Project Handoff Document

**Version:** 1.0.0  
**Last Updated:** June 2026  
**Author:** Zishan Ahmad  
**Status:** Production-Ready (Pre-Deployment)

---

## Table of Contents

1. [Project Purpose](#1-project-purpose)
2. [Architecture Overview](#2-architecture-overview)
3. [Tech Stack](#3-tech-stack)
4. [Design System & Decisions](#4-design-system--decisions)
5. [Coding Conventions](#5-coding-conventions)
6. [Current Progress](#6-current-progress)
7. [Pending Tasks](#7-pending-tasks)
8. [Known Bugs](#8-known-bugs)
9. [Future Roadmap](#9-future-roadmap)
10. [Deployment Guide](#10-deployment-guide)

---

## 1. Project Purpose

A **world-class personal portfolio website** for Zishan Ahmad — CS & Data Science student at IIT Madras (dual degree alongside BCA at United Institute of Management, Prayagraj).

### Goals
- Attract ML engineering and data science recruiters
- Showcase real projects with actual metrics (not filler)
- Communicate technical depth and production-readiness
- Serve as a living document of skills and growth

### Target Audience
- ML/Data Science hiring managers
- Senior engineers reviewing technical portfolios
- Startup founders seeking early ML engineers
- Open source collaborators

### Core Message
> "I'm not just learning technology — I'm engineering systems that could survive production."

---

## 2. Architecture Overview

### Folder Structure

```
zishan-portfolio/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, global providers
│   ├── page.tsx            # Single-page composition of all sections
│   └── globals.css         # Design system CSS variables + utility classes
│
├── components/
│   ├── sections/           # One file per page section
│   │   ├── Hero.tsx        # Full-viewport hero with photo, parallax, badges
│   │   ├── About.tsx       # Bio, NOW card, stats, social links
│   │   ├── Skills.tsx      # Logo showcase + category breakdown
│   │   ├── Projects.tsx    # Project cards with metrics and highlights
│   │   ├── Education.tsx   # IIT Madras + FUGS cards
│   │   ├── Journey.tsx     # Vertical timeline of milestones
│   │   ├── Quote.tsx       # Cinematic Einstein quote section
│   │   ├── Contact.tsx     # Email, LinkedIn, GitHub cards + Resume CTA
│   │   └── Footer.tsx      # Nav links, social icons, copyright
│   │
│   ├── ui/
│   │   ├── Navbar.tsx          # Sticky nav — blur on scroll, active highlighting
│   │   ├── ScrollProgress.tsx  # Thin gradient bar at top of viewport
│   │   ├── LenisProvider.tsx   # Smooth scroll initializer (client-only)
│   │   └── button.tsx          # shadcn/ui artifact — currently unused
│   │
│   └── layout/
│       └── SectionWrapper.tsx  # Reusable scroll-trigger wrapper — currently unused
│
├── data/
│   ├── projects.ts         # All project data with full TypeScript types
│   ├── skills.ts           # Skill categories, items, learning status
│   └── timeline.ts         # Journey milestone data
│
├── lib/
│   ├── animations.ts       # Framer Motion variants (fadeUp, stagger, etc.)
│   ├── tokens.ts           # TypeScript design system constants
│   └── utils.ts            # shadcn/ui artifact — currently empty
│
└── public/
    ├── zishan.png          # Profile photo
    └── resume.pdf          # Downloadable resume
```

### Data Flow

```
data/*.ts  →  components/sections/*.tsx  →  app/page.tsx  →  browser
```

All content (projects, skills, timeline) lives in `/data`. Components are purely presentational — they import data and render it. Nothing is hardcoded in JSX.

### Rendering Strategy

- **Static Site Generation (SSG)** — no dynamic routes, no API calls, no database
- Every section is a client component (`"use client"`) due to Framer Motion and scroll hooks
- `next/image` handles all image optimization
- Lenis runs client-side only via `useEffect`

---

## 3. Tech Stack

### Core

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14+ (App Router) | Framework, routing, image optimization |
| TypeScript | 5+ | Type safety throughout |
| React | 18+ | UI composition |
| Tailwind CSS | v4 | Utility classes (minimally used — see conventions) |

### Animation & Interaction

| Tool | Version | Purpose |
|---|---|---|
| Framer Motion | latest | All animations — entrance, hover, parallax, scroll |
| Lenis | 1.1+ | Smooth inertia scrolling (replaces native scroll) |

### UI & Fonts

| Tool | Purpose |
|---|---|
| shadcn/ui | Initialized but minimally used (button.tsx only) |
| Space Grotesk | Heading font — loaded via next/font |
| Inter | Body font — loaded via next/font |
| Inline SVGs | All brand logos — no icon library dependency |

### Dev Tools

| Tool | Purpose |
|---|---|
| VS Code | Primary editor |
| Git | Version control |
| Vercel | Deployment target |

### Notable Absences (intentional)

- **No `@lenis/react`** — package doesn't exist; Lenis v1.1+ includes React support natively
- **No `simple-icons`** — all SVG paths are inlined directly to avoid npm dependency
- **No GSAP** — Framer Motion handles everything needed
- **No Three.js** — not added; adds significant bundle weight for marginal visual gain
- **No database** — pure static site

---

## 4. Design System & Decisions

### Design System Files

| File | Purpose |
|---|---|
| `app/globals.css` | 40+ CSS custom properties, utility classes, keyframes |
| `lib/tokens.ts` | TypeScript mirror of CSS variables for inline styles |

### Color Philosophy

```
Background:  #0a0a0a  (matte black — not pure black, slightly warm)
Surface:     #111111  (card backgrounds)
Elevated:    #161616  (raised elements)
Accent:      #3b82f6 → #60a5fa  (electric blue — primary)
Accent:      #8b5cf6 → #a78bfa  (violet — secondary)
Text:        #f4f4f5 → #71717a  (5-step grey scale)
```

**Why these specific blues/purples:** They sit in the same perceptual brightness range, making gradients between them feel smooth and inevitable rather than jarring. The blue has enough green to feel "technical" — similar to VS Code's accent color.

### Typography Decisions

- **Space Grotesk for headings** — geometric, modern, slightly condensed. Feels like a premium SaaS product rather than a student portfolio.
- **Inter for body** — maximum legibility, neutral, widely trusted in developer tools.
- **Fluid type scale** — all headings use `clamp()` so they scale smoothly between breakpoints without media query hacks.

### Why Inline Styles Over Tailwind

Tailwind v4 was installed via shadcn init but changed the configuration format significantly from v3. Rather than debug v4 spacing class issues mid-build, the decision was made to use **inline styles for all layout and spacing** and reserve Tailwind only for the handful of classes where it adds value (`antialiased`, `overflow-x-hidden`, custom utility classes defined in globals.css).

This is a deliberate tradeoff — inline styles are more verbose but immune to Tailwind version issues, purging problems, and class name conflicts.

### Glassmorphism Implementation

```css
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.05);
```

Intentionally very subtle — 3% white background, not 10–15% like most glassmorphism tutorials. At higher opacity it looks dated; at this level it reads as depth without announcing itself.

### Animation Philosophy

- **Every animation has a purpose** — entrance animations give hierarchy, hover animations signal interactivity, scroll parallax creates depth
- **Duration hierarchy:** Fast interactions (hover) = 0.15–0.2s. Entrance animations = 0.4–0.6s. Cinematic reveals = 0.9s.
- **Easing standard:** `[0.25, 0.1, 0.25, 1]` throughout — a smooth ease-in-out that feels natural without overshooting
- **No bouncing, spinning decorations, or particle effects** — every animation removed that didn't serve the content

---

## 5. Coding Conventions

### File Naming
```
PascalCase   → all components (Hero.tsx, ProjectCard.tsx)
camelCase    → data files, lib files (projects.ts, animations.ts)
kebab-case   → never used in this project
```

### Component Structure Pattern

Every section follows this exact pattern:

```tsx
"use client";

// 1. Imports — framer-motion, lib, data
// 2. Local constants (if needed)
// 3. Sub-components (if needed)
// 4. Default export — main section component
```

### Data Externalization Rule

**Never hardcode content in JSX.** All text, URLs, metrics, and lists live in `/data/*.ts`. Components only receive and render data.

```tsx
// ✅ Correct
import { projects } from "@/data/projects";
projects.map(p => <ProjectCard key={p.id} project={p} />)

// ❌ Wrong
<ProjectCard title="Titanic Survival" metrics="84%" ... />
```

### TypeScript Rules

- All data structures have explicit interfaces in their data files
- No `any` types anywhere
- Props interfaces defined inline above the component

### Inline Style Convention

Since Tailwind spacing classes were unreliable on v4, spacing uses inline styles with the token values from `lib/tokens.ts`:

```tsx
// Use token values
style={{ marginBottom: "48px", padding: "28px" }}

// For repeated patterns, reference the CSS variable
style={{ padding: "var(--space-7)" }}
```

### Framer Motion Convention

- All reusable variants live in `lib/animations.ts`
- `whileInView` always paired with `viewport={{ once: true, margin: "-80px" }}`
- `useTransform` calls always at component top level — never inside JSX (this caused a previous bug)
- `"use client"` required on every component using Framer Motion

### Path Aliases

```ts
"@/*" → project root
// Usage:
import { fadeUp } from "@/lib/animations";
import { projects } from "@/data/projects";
```

---

## 6. Current Progress

### Completed Sections ✅

| Section | Status | Notes |
|---|---|---|
| Navbar | ✅ Complete | Blur on scroll, active dot, mobile hamburger |
| Hero | ✅ Complete | Photo, parallax, mouse-follow, floating badges, Lenis |
| About | ✅ Complete | Split layout, NOW card, stats, quick links |
| Skills | ✅ Complete | Logo pyramid (20 tools) + category breakdown |
| Projects | ✅ Complete | 3 real projects with metrics, highlights, GitHub links |
| Education | ✅ Complete | IIT Madras + FUGS dual-degree cards |
| Journey | ✅ Complete | Vertical timeline, color-coded by type |
| Quote | ✅ Complete | Einstein quote, cinematic reveal |
| Contact | ✅ Complete | Email, LinkedIn, GitHub, Resume download |
| Footer | ✅ Complete | Nav links, social icons, copyright |
| ScrollProgress | ✅ Complete | Blue-purple gradient bar |
| LenisProvider | ✅ Complete | Smooth scroll site-wide |
| Design System | ✅ Complete | CSS variables, TypeScript tokens, Tailwind config |

### Infrastructure ✅

- Next.js 14 App Router configured
- TypeScript strict mode
- All dependencies installed
- Fonts loaded (Space Grotesk + Inter)
- Profile photo in `/public/zishan.png`
- Resume PDF in `/public/resume.pdf`
- dev server running at `localhost:3000`

---

## 7. Pending Tasks

### Before Going Live — Required

- [ ] **Deploy to Vercel** — push to GitHub, connect repo, deploy
- [ ] **Add real CreditSense AI GitHub URL** — currently links to profile root (`github.com/Zishaniitm`), not the actual repo
- [ ] **Update copyright year** — Footer says `© 2025`, should be `© 2026`
- [ ] **Confirm resume.pdf is current** — the file exists but was never verified to contain the latest resume

### Before Going Live — Recommended

- [ ] **Add `og:image`** — `layout.tsx` has OpenGraph metadata but no image file. Create a 1200×630 PNG at `public/og-image.png`. This controls how the link looks when shared on LinkedIn/WhatsApp.
- [ ] **Add `aria-hidden="true"`** to all decorative divs (blobs, grid, scroll indicator, quote mark)
- [ ] **Fix focus styles** — `globals.css` now has `:focus-visible` defined ✅ but verify it's visible in browser by tabbing through the page
- [ ] **Throttle mousemove** in `Hero.tsx` with `requestAnimationFrame`

### Nice to Have

- [ ] **Convert `zishan.png` to WebP** — reduces image size ~50%
- [ ] **Add `sizes` prop to Hero `<Image>`** — `sizes="(max-width: 768px) 220px, 340px"`
- [ ] **Delete unused files** — `components/ui/button.tsx`, `lib/utils.ts` (empty shadcn artifacts)
- [ ] **Start using `SectionWrapper`** — currently built but unused; would eliminate ~40 lines of duplicated `whileInView` logic

---

## 8. Known Bugs

### Active Bugs

| ID | Severity | Location | Description | Fix |
|---|---|---|---|---|
| BUG-01 | Medium | `Hero.tsx` | Floating badges (`left: "-48px"`, `right: "-44px"`) overflow viewport on 900–1024px screens. CSS class `.hero-badge { display: none }` was added but `className="hero-badge"` needs to be on the badge divs | Add `className="hero-badge"` to both badge motion.divs |
| BUG-02 | Medium | `Skills.tsx` | Skills pyramid rows 2 and 3 (7 cards each) can trigger horizontal scroll on screens 400–480px | Add `overflowX: "hidden"` to the section, or reduce card size to `76px` at `sm` breakpoint |
| BUG-03 | Low | `Navbar.tsx` | On very fast scroll, the active section dot can lag by one section | Reduce `rootMargin` in IntersectionObserver from `-40% 0px -55%` to `-30% 0px -60%` |
| BUG-04 | Low | `Footer.tsx` | Copyright shows `© 2025` — one year behind | Change `2025` to `2026` in Footer.tsx line ~85 |
| BUG-05 | Low | `Hero.tsx` | Scroll indicator continues bouncing after user scrolls away — it never stops | Wrap in `useInView` and pause animation when section is not in viewport |

### Resolved Bugs (for reference)

| ID | Description | How It Was Fixed |
|---|---|---|
| FIXED-01 | `@lenis/react` package 404 — doesn't exist on npm | Removed; used `lenis` directly with `useEffect` in `LenisProvider.tsx` |
| FIXED-02 | PowerShell `@` symbol breaking npm installs | Switched to CMD for all npm commands |
| FIXED-03 | Framer Motion `useTransform` called inside JSX — silent crash, hero showed no photo | Moved all `useTransform` calls to component top level |
| FIXED-04 | Tailwind `mb-12`, `mb-14` not applying in v4 | Replaced with inline styles throughout |
| FIXED-05 | `ScrollProgress` runtime error in layout | Removed curly braces from import — was `{ ScrollProgress }` instead of `ScrollProgress` |
| FIXED-06 | `Set-ExecutionPolicy` not recognized in CMD | Only works in PowerShell; switched terminal to CMD for npm commands |

---

## 9. Future Roadmap

### Phase 2 — Content Expansion (1–2 months)

- **Add Timetable Management System repo** — actual GitHub link when repo is made public
- **Add CreditSense AI repo** — when project reaches a shareable state
- **Certifications section** — add IIT Madras course completions, any Coursera/edX certs
- **Blog section placeholder** — even empty, signals intent to produce written content

### Phase 3 — Technical Upgrades (3–6 months)

- **GitHub contribution graph** — embed live GitHub stats using `github-readme-stats` or a custom API route
- **Project demo videos** — short screen recordings embedded in project cards
- **Dark/light mode toggle** — design system tokens are already structured to support this (add `[data-theme="light"]` overrides)
- **Custom domain** — `zishanahmad.dev` or `zishan.dev` from Namecheap (~₹800/year); dramatically more professional on a resume

### Phase 4 — Performance (ongoing)

- Migrate to WebP images
- Add `will-change: transform` to animated elements
- Audit Lighthouse score post-deployment and address drops
- Consider `React.memo` on SkillCard and ProjectCard to prevent re-renders

### Phase 5 — After First Job

- Remove "Open to roles" badge from hero
- Add "Currently at [Company]" badge
- Add testimonials section from colleagues/professors
- Case study writeups for CreditSense AI

---

## 10. Deployment Guide

### One-Time Setup

```bash
# 1. Initialize git if not already done
git init
git add .
git commit -m "feat: complete portfolio v1.0"

# 2. Create GitHub repo at github.com/Zishaniitm
#    Name it: zishan-portfolio
#    Keep it Public

# 3. Connect and push
git remote add origin https://github.com/Zishaniitm/zishan-portfolio.git
git branch -M main
git push -u origin main

# 4. Deploy
vercel
# Answer: Y, your account, N (new project), zishan-portfolio, ./, N
```

### Future Updates (after initial deploy)

```bash
# Make changes in VS Code, then:
git add .
git commit -m "fix: update project links"
git push
# Vercel auto-deploys on every push to main — no extra commands needed
```

### Environment Variables

None required. This is a fully static site with no API keys, database connections, or server-side secrets.

### Recommended Vercel Settings

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Root Directory | `./` |
| Build Command | `next build` (default) |
| Output Directory | `.next` (default) |
| Node.js Version | 20.x |

---

## Appendix — Key Contacts & Links

| Resource | URL |
|---|---|
| GitHub Profile | https://github.com/Zishaniitm |
| LinkedIn | https://www.linkedin.com/in/zishan-ahmad-155b24239/ |
| IIT Madras BS Program | https://study.iitm.ac.in |
| Portfolio (local) | http://localhost:3000 |
| Portfolio (live) | TBD — after Vercel deployment |

---

*This document should be updated after every major feature addition or bug fix.*  
*Generated during portfolio build session — June 2026.*