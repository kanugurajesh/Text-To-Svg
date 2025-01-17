import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link'
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
  description: "Transform your text into beautiful Images with TextCraft Pro. Created by Kanugu Rajesh",
  authors: [{ name: "Kanugu Rajesh", url: "https://github.com/kanugu-rajesh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800`}
      >
        <nav className="bg-slate-100 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">TextCraft Pro</Link>
            <div className="space-x-6">
              <Link href="/features" className="hover:text-blue-600">Features</Link>
              <Link href="/how-to-use" className="hover:text-blue-600">How to Use</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
