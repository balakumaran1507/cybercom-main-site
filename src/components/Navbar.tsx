"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./UI";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Challenges", href: "#challenges" },
  { label: "Events", href: "#events" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "h-[80px] w-full fixed top-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-[rgba(8,9,10,0.8)] backdrop-blur-xl border-[#222324]" : "bg-transparent"
      )}
    >
      <div className="h-full max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-white flex items-center justify-center overflow-hidden relative">
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45" />
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[-4.5px]" />
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[4.5px]" />
          </div>
          <span className="font-bold text-[20px] tracking-tight text-[#f4f4f5]">CYBERCOM</span>
        </div>

        {/* Nav links */}
        <div className="hidden lg:flex items-center text-[14.5px] font-medium text-[#8a8f98] gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 rounded-md text-[#8a8f98] hover:text-white transition-all duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Separator */}
          <div className="w-[1px] h-4 bg-[#2c2d30] mx-4" />

          <Button href="#contact" className="gap-2">
            Host a CTF <span className="text-[16px] leading-none">→</span>
          </Button>
        </div>
        
        {/* Mobile menu button (Simplified for now) */}
        <button className="lg:hidden text-[#8a8f98]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
}
