import type { Metadata } from "next";
import { Host_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const host = Host_Grotesk({ variable: "--font-host", subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "Smart Content — Research outliers, write scripts that work",
  description:
    "Find outlier short-form videos in your niche, understand why they worked, and turn the pattern into your own script.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${host.variable} antialiased`}>
      <body className="flex min-h-svh flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
