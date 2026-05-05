import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-story",
});

export const metadata: Metadata = {
  title: "Creative Portfolio | Digital Experiences",
  description: "Specializing in high-performance web applications and immersive digital designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrumentSerif.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
