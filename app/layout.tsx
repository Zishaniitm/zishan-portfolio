import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/ui/LenisProvider";

// ─── Fonts ─────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ─── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Zishan Ahmad — ML Engineer & Data Science Student at IIT Madras",
  description:
    "CS & Data Science student at IIT Madras. Building intelligent systems at the intersection of ML engineering, data pipelines, and full-stack development.",
  keywords: [
    "Zishan Ahmad",
    "IIT Madras",
    "Data Science",
    "Machine Learning",
    "ML Engineer",
    "Python",
    "Java",
    "Portfolio",
  ],
  authors: [{ name: "Zishan Ahmad", url: "https://github.com/Zishaniitm" }],
  creator: "Zishan Ahmad",
  openGraph: {
    type: "website",
    title: "Zishan Ahmad — ML Engineer & Data Science Student",
    description:
      "Building intelligent systems at the intersection of ML, data engineering, and full-stack development.",
    siteName: "Zishan Ahmad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zishan Ahmad — ML Engineer",
    description: "ML engineering. Data science. Real-world systems.",
  },
};

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-[#f5f5f5] antialiased overflow-x-hidden">
      
        {/* Noise texture overlay for premium feel */}
        <div className="noise-overlay" aria-hidden="true" />
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}