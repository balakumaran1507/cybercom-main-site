"use client";

import { SectionLabel, SectionHeading } from "../SectionTypography";
import Image from "next/image";

const team = [
  {
    name: "Alex 'Cipher' Chen",
    role: "Founder & Lead Architect",
    bio: "Ex-Google Red Team. 10+ years competing in global CTFs like DEF CON and PCTF.",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Alex",
  },
  {
    name: "Sarah 'Root' Jenkins",
    role: "Head of Challenge Design",
    bio: "Security Researcher with 300+ custom challenges designed for major tech fests.",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Sarah",
  },
  {
    name: "Marcus 'Ping' Thorne",
    role: "Infrastructure Lead",
    bio: "Systems Engineer specialized in high-concurrency event hosting and mitigation.",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Marcus",
  },
  {
    name: "Elena 'Null' Rossi",
    role: "Event Operations Manager",
    bio: "Managed 50+ inter-college CTFs. Expert in real-time scoring and logistics.",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Elena",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-[800px] mb-16">
        <SectionLabel>{"// THE OPERATORS"}</SectionLabel>
        <SectionHeading>Built by Security People, for Security People</SectionHeading>
        <p className="text-[18px] text-[#8a8f98]">
          Every person on our team has competed in CTFs. We know what players need — because we&apos;ve been there.
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
            <p className="text-[14px] leading-relaxed text-[#8a8f98]/70 italic">&quot;{member.bio}&quot;</p>
          </div>
        ))}
      </div>
    </section>
  );
}
