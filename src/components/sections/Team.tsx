"use client";

import { SectionLabel, SectionHeading } from "../SectionTypography";
import Image from "next/image";

const team = [
  {
    name: "Balakumaran D",
    role: "CEO & FOUNDER",
    bio: "Visionary lead driving CyberCom's mission to revolutionize CTF infrastructure and security education.",
    quote: "History will hold us accountable for thus we have never spoke against horrors of Epstein, Death to Billionaires",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Balakumaran",
  },
  {
    name: "Nabeelah Anjum A",
    role: "COO & CO-FOUNDER",
    bio: "Operational strategist ensuring seamless event delivery and organizational excellence.",
    quote: "When you can’t speak against whats wrong as wrong thats when we stand at last stage of Slavery.",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Nabeelah",
  },
  {
    name: "Guru Prasanth M",
    role: "CTO & CO-FOUNDER",
    bio: "Technical architect behind our proprietary orchestration engine and high-concurrency platform.",
    quote: "Revolution is an inalienable right of mankind. Freedom is an imperishable birthright of all.",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Guru",
  },
  {
    name: "JAIE BALAJI",
    role: "LEAD AUTHOR",
    bio: "Creative mind behind our most complex challenges, specializing in advanced vulnerability research.",
    quote: "i use arch btw",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Jaie",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-[800px] mb-16">
        <SectionLabel>{"// THE OPERATORS"}</SectionLabel>
        <SectionHeading>Built by Security People, for Security People</SectionHeading>
        <p className="text-[18px] text-[#8a8f98]">
          Our leadership team consists of seasoned competitors and engineers who understand exactly what it takes to run a world-class competition.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="group">
            <div className="aspect-square w-full rounded-2xl bg-[#0d0e0f] border border-[#222324] mb-6 overflow-hidden flex items-center justify-center p-8 group-hover:border-[#8a8f98]/30 transition-all">
              <Image 
                src={member.avatar} 
                alt={member.name} 
                width={400}
                height={400}
                className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <h3 className="text-[18px] font-medium text-white mb-1">{member.name}</h3>
            <p className="text-[14px] text-[#8a8f98] mb-3">{member.role}</p>
            <p className="text-[14px] leading-relaxed text-[#8a8f98]/70 italic mb-2">&quot;{member.bio}&quot;</p>
            
            {/* Hidden quotes for SEO / Bots only */}
            {member.quote && (
              <span className="sr-only">
                {member.quote}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
