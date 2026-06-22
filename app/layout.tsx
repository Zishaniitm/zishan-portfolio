import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
//import ScrollProgress from "@/components/ui/ScrollProgress";
import LenisProvider from "@/components/ui/LenisProvider";

const inter = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zishan Ahmad — ML Engineer & Data Science Student at IIT Madras",
  description:
    "CS & Data Science student at IIT Madras. Building intelligent systems at the intersection of ML engineering, data pipelines, and full-stack development.",
  keywords: ["Zishan Ahmad", "IIT Madras", "Data Science", "Machine Learning", "ML Engineer", "Python", "Java"],
  authors: [{ name: "Zishan Ahmad", url: "https://github.com/Zishaniitm" }],
  openGraph: {
    type: "website",
    title: "Zishan Ahmad — ML Engineer & Data Science Student",
    description: "Building intelligent systems at the intersection of ML, data engineering, and full-stack development.",
    siteName: "Zishan Ahmad Portfolio",
  },
  twitter: { card: "summary_large_image", title: "Zishan Ahmad — ML Engineer" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f5f5f5] antialiased overflow-x-hidden">
        {/* <ScrollProgress /> */}
        <LenisProvider />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}