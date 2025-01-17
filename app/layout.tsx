import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
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
  title: "TextCraft Pro - SVG Text Generator",
  description: "Transformw your text into beautiful Images with TextCraft Pro. Created by Kanugu Rajesh",
  authors: [{ name: "Kanugu Rajesh", url: "https://github.com/kanugurajesh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800`}
      >
        <Navigation />
        <div className="flex flex-col min-h-screen pt-16">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
