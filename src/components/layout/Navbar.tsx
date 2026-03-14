"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../UI";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/services",
    dropdown: [
      { label: "CTF Hosting", href: "/services#ctf-hosting" },
      { label: "Attack-Defence", href: "/services#attack-defence" },
      { label: "Custom Challenges", href: "/services#custom-challenges" },
      { label: "White-Label", href: "/services#white-label" },
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // Avoid synchronous state update during render warning by wrapping in setTimeout
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "h-[80px] w-full fixed top-0 z-[100] transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-[rgba(8,9,10,0.8)] backdrop-blur-xl border-[#222324]" : "bg-transparent"
      )}
    >
      <div className="h-full max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-white flex items-center justify-center overflow-hidden relative">
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45" />
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[-4.5px]" />
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[4.5px]" />
          </div>
          <span className="font-bold text-[20px] tracking-tight text-[#f4f4f5]">CYBERCOM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 bg-[#0d0e0f]/50 border border-[#222324] rounded-full p-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            if (link.dropdown) {
              return (
                <div 
                  key={link.label} 
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "px-4 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-200 flex items-center gap-1",
                      isActive ? "bg-[#f4f4f5] text-black" : "text-[#8a8f98] hover:text-white"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-3 h-3 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-[calc(100%+8px)] left-0 w-48 bg-[#0d0e0f] border border-[#222324] rounded-xl overflow-hidden shadow-2xl p-1"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 text-[13px] text-[#8a8f98] hover:text-white hover:bg-[#1a1b1e] rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-200",
                  isActive ? "bg-[#f4f4f5] text-black" : "text-[#8a8f98] hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button href="/contact" className="gap-2">
            Host a CTF <span className="text-[16px] leading-none">→</span>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#8a8f98]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[80px] bg-[#08090a] z-[90] p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-2xl font-medium",
                      pathname === link.href ? "text-white" : "text-[#8a8f98]"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-3 mt-4 ml-4 border-l border-[#222324] pl-4">
                      {link.dropdown.map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.href}
                          className="text-lg text-[#8a8f98]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-8">
                <Button href="/contact" className="w-full py-4 text-lg">
                  Host a CTF →
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
