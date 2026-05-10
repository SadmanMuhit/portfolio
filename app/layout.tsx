import type { Metadata } from "next";
import {
  Outfit,
  Instrument_Serif,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import Footer2 from "@/components/common component/cta-01/footer/footer";
import { Navbar } from "@/components/shadcn-space/blocks/navbar-01/navbar";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

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
  title: "Sadman Muhit - frontend developer",
  description:
    "Specializing in high-performance web applications and immersive digital designs.",
    icons: {
      icon: "/favicon.ico",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        outfit.variable,
        instrumentSerif.variable,
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Navbar />
          <Footer2 />
        </ThemeProvider>
      </body>
    </html>
  );
}
