import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic Operations Companion",
  description:
    "Discover how this autonomous agent researches, creates, and automates end-to-end workflows.",
  metadataBase: new URL("https://agentic-9e2ebed3.vercel.app"),
  openGraph: {
    title: "Agentic Operations Companion",
    description:
      "Explore an agent capable of orchestrating research, creativity, and automation with trustworthy guardrails.",
    url: "https://agentic-9e2ebed3.vercel.app",
    siteName: "Agentic Operations Companion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Operations Companion",
    description:
      "Explore an agent capable of orchestrating research, creativity, and automation with trustworthy guardrails.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
