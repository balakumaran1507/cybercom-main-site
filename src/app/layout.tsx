import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cybercom",
  description: "A minimal, modern Cybercom platform built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen selection:bg-accent-grey/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
