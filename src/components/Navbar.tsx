"use client";

import { useState, useRef } from "react";

const productItems = [
  {
    category: "Intake",
    description: "Make your product operations self-driving",
  },
  {
    category: "Plan",
    description: "Plan and navigate from idea to launch",
  },
  {
    category: "Build",
    description: "Move work forward across teams and agents",
  },
  {
    category: "Diffs",
    description: "Make code review effortless",
  },
  {
    category: "Monitor",
    description: "Understand progress at scale",
  },
  {
    category: "Integrations",
    description: "Collaborate across tools",
  },
];

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 80);
  };

  return (
    <nav
      style={{
        borderBottom: "1px solid rgba(180, 185, 195, 0.15)", // Silver finish highlight
        background: "rgba(10, 10, 11, 0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)", // subtle top highlight for modern look
      }}
      className="h-[80px] w-full relative z-50 sticky top-0"
    >
      <div className="h-full max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-white flex items-center justify-center overflow-hidden relative">
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45" />
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[-4.5px]" />
            <div className="absolute w-[150%] h-[1.5px] bg-white transform -rotate-45 translate-y-[4.5px]" />
          </div>
          <span className="font-bold text-[20px] tracking-tight text-[#f4f4f5]">Cybercom</span>
        </div>

        {/* Nav links */}
        <div className="hidden lg:flex items-center text-[14.5px] font-medium text-[#8a8f98] gap-3">

          {/* Product — with dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              className={`px-3 py-1.5 rounded-md transition-all duration-200 ${dropdownOpen ? "bg-[#1f2124] text-white shadow-[0_1px_2px_rgba(0,0,0,0.2)]" : "text-[#8a8f98] hover:bg-[#1a1b1e] hover:text-white"}`}
            >
              Product
            </button>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div
                className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[640px] rounded-xl border border-[#222324] bg-[#0d0e0f] shadow-2xl p-6"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                {/* Grid of items */}
                <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                  {productItems.map((item) => (
                    <a
                      key={item.category}
                      href="#"
                      className="group flex flex-col gap-1.5 p-3 -m-3 rounded-lg hover:bg-[#1a1b1e] transition-colors"
                    >
                      <span className="text-[13px] text-[#8a8f98] font-medium tracking-wide">
                        {item.category}
                      </span>
                      <span className="text-[15px] text-white font-medium leading-snug group-hover:text-[#f4f4f5]">
                        {item.description}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Bottom bar */}
                <div
                  className="mt-6 pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid #222324" }}
                >
                  <span className="text-[14px] font-semibold text-white">
                    New: Deeplink to AI coding tools
                  </span>
                  <a href="#" className="text-[14px] text-[#5c7cf4] hover:underline">
                    Changelog
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Other links */}
          {["Resources", "Customers", "Pricing", "Now", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="px-3 py-1.5 rounded-md text-[#8a8f98] hover:bg-[#1a1b1e] hover:text-white transition-all duration-200"
            >
              {link}
            </a>
          ))}

          {/* Separator */}
          <div className="w-[1px] h-4 bg-[#2c2d30] mx-2" />

          <a href="#" className="px-3 py-1.5 rounded-md text-[#8a8f98] hover:bg-[#1a1b1e] hover:text-white transition-all duration-200">Log in</a>
          <button className="bg-[#f4f4f5] text-black text-[14px] font-semibold px-3 py-1.5 rounded-md hover:bg-white transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
