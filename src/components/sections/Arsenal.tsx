"use client";

import { SectionLabel, SectionHeading } from "../SectionTypography";

const categories = [
  "Web Exploitation",
  "Binary Exploitation (Pwn)",
  "Reverse Engineering",
  "Cryptography",
  "Forensics",
  "Steganography",
  "OSINT",
  "Cloud Security",
  "Hardware / IoT",
  "Miscellaneous",
  "Web3 / Blockchain",
  "Real CVE-Based",
];

export function Arsenal() {
  return (
    <section id="challenges" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto text-center md:text-left">
      <div className="max-w-[800px]">
        <SectionLabel>{"// THE ARSENAL"}</SectionLabel>
        <SectionHeading>
          300+ Challenges<br />
          Across Every Domain
        </SectionHeading>
        <p className="text-[18px] text-[#8a8f98] mb-12">
          Difficulty-tagged Beginner → Expert. New challenges added every quarter. 
          Every challenge is tested, documented, and deployment-ready.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {categories.map((cat) => (
          <div 
            key={cat} 
            className="px-6 py-3 rounded-full border border-[#222324] bg-[#0d0e0f] text-white text-[15px] hover:border-[#8a8f98]/50 transition-colors cursor-default"
          >
            {cat}
          </div>
        ))}
        <div className="px-6 py-3 rounded-full border border-dashed border-[#222324] text-[#8a8f98] text-[15px]">
          More added quarterly
        </div>
      </div>
    </section>
  );
}
