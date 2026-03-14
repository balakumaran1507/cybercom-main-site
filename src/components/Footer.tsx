"use client";

import { Linkedin, Instagram, Disc as Discord } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#222324] pt-20 pb-10 px-6 md:px-8 bg-[#08090a]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        
        {/* Left: Logo + Tagline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-white flex items-center justify-center overflow-hidden relative">
              <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45" />
              <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[-4.5px]" />
              <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[4.5px]" />
            </div>
            <span className="font-bold text-[20px] tracking-tight text-[#f4f4f5]">CYBERCOM</span>
          </div>
          <p className="text-[14px] text-[#8a8f98] max-w-[240px]">
            CTF Hosting for the Next Generation.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center md:justify-start">
          {["Services", "Challenges", "Events", "Pricing", "Contact"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-[14px] font-medium text-[#8a8f98] hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Socials */}
        <div className="flex justify-center md:justify-end gap-6">
          {[
            { icon: <Linkedin size={20} />, label: "LinkedIn" },
            { icon: <Instagram size={20} />, label: "Instagram" },
            { icon: <Discord size={20} />, label: "Discord" },
          ].map((social) => (
            <a 
              key={social.label}
              href="#" 
              className="text-[#8a8f98] hover:text-white transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-[#222324]/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-[#8a8f98]/60 uppercase tracking-[0.1em] font-mono">
          © 2025 CyberCom CTF Hosting. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[12px] text-[#8a8f98]/60 hover:text-white transition-colors uppercase tracking-[0.1em] font-mono">Privacy</a>
          <a href="#" className="text-[12px] text-[#8a8f98]/60 hover:text-white transition-colors uppercase tracking-[0.1em] font-mono">Terms</a>
        </div>
      </div>
    </footer>
  );
}
