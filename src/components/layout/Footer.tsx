"use client";

import Link from "next/link";
import { Linkedin, Instagram, Disc as Discord, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#222324] pt-20 pb-10 px-6 md:px-8 bg-[#08090a]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
        {/* Left: Logo + Tagline */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-white flex items-center justify-center overflow-hidden relative">
              <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45" />
              <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[-4.5px]" />
              <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[4.5px]" />
            </div>
            <span className="font-bold text-[20px] tracking-tight text-[#f4f4f5]">CYBERCOM</span>
          </div>
          <p className="text-[16px] text-[#8a8f98] max-w-[320px] leading-relaxed">
            CTF Hosting for the Next Generation. Powering the world&apos;s most secure competitions.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
              { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
              { icon: <Discord size={20} />, label: "Discord", href: "#" },
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                className="w-10 h-10 rounded-lg bg-[#0d0e0f] border border-[#222324] flex items-center justify-center text-[#8a8f98] hover:text-white hover:bg-[#161718] transition-all"
                aria-label={`CyberCom on ${social.label}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-semibold uppercase tracking-wider text-[13px]">Navigation</h4>
          <div className="flex flex-col gap-4">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-[15px] text-[#8a8f98] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-semibold uppercase tracking-wider text-[13px]">Contact</h4>
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:hello@cybercom.hosting" 
              className="flex items-center gap-2 text-[15px] text-[#8a8f98] hover:text-white transition-colors"
            >
              <Mail size={16} />
              hello@cybercom.hosting
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-[#222324]/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-[#8a8f98]/60 uppercase tracking-[0.1em] font-mono">
          © 2025 CyberCom CTF Hosting. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[12px] text-[#8a8f98]/60 hover:text-white transition-colors uppercase tracking-[0.1em] font-mono">
            Privacy Policy
          </Link>
          <a href="#" className="text-[12px] text-[#8a8f98]/60 hover:text-white transition-colors uppercase tracking-[0.1em] font-mono">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
