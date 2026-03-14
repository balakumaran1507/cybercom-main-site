import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CyberCom — CTF Hosting for Colleges & Organisations",
    template: "%s | CyberCom CTF Hosting"
  },
  description: "CyberCom provides end-to-end CTF hosting for colleges and organisations. Battle-tested infrastructure, 300+ challenges, full event management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen selection:bg-white selection:text-black bg-[#08090a] text-[#f7f8f8]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
