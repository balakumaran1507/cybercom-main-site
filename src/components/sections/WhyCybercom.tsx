"use client";

import { SectionLabel, SectionHeading } from "../SectionTypography";
import { Server, Zap, ShieldCheck } from "lucide-react";

const reasons = [
  {
    title: "Owned Infrastructure",
    description: "We run on our own servers — no third-party cloud dependencies. Zero surprise downtime on event day.",
    icon: <Server className="w-6 h-6 text-white" />,
  },
  {
    title: "300+ Battle-Tested Challenges",
    description: "Curated pool across 13 categories, difficulty-tagged from beginner to expert. Deployed in minutes.",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    title: "Full-Event Management",
    description: "Pre-event setup, live monitoring, real-time scoreboard, and a post-event report. We run it end to end.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
];

export function WhyCybercom() {
  return (
    <section id="why" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
      <SectionLabel>{"// WHY CYBERCOM"}</SectionLabel>
      <SectionHeading>
        We Handle Everything.<br />
        You Focus on the Competition.
      </SectionHeading>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <div 
            key={reason.title} 
            className="group p-8 rounded-2xl border border-[#222324] bg-[#0d0e0f] hover:border-[#8a8f98]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-[#161718] border border-[#222324] flex items-center justify-center mb-6 group-hover:bg-[#1f2022] transition-colors">
              {reason.icon}
            </div>
            <h3 className="text-[20px] font-medium text-white mb-4">{reason.title}</h3>
            <p className="text-[16px] leading-relaxed text-[#8a8f98]">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
