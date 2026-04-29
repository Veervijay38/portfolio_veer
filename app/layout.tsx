import type { Metadata } from "next";
import { DM_Sans, Syne, Fira_Code } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Veervijaysinh Rana | Sr. Software Developer",
  description:
    "Senior Software Developer with 7+ years of experience in React Native, React.js, and AWS. Building high-performance cross-platform applications.",
  keywords: [
    "React Native",
    "React.js",
    "AWS",
    "Software Developer",
    "Mobile Development",
    "TypeScript",
  ],
  authors: [{ name: "Veervijaysinh Rana" }],
  openGraph: {
    title: "Veervijaysinh Rana | Sr. Software Developer",
    description:
      "Senior Software Developer specializing in React Native, React.js & AWS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${syne.variable} ${firaCode.variable} font-sans bg-bg text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
