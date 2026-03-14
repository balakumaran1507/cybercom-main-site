"use client";

import { SectionLabel, SectionHeading } from "../SectionTypography";

const allTestimonials = [
  {
    quote: "The infrastructure was rock solid. We had 800+ players hitting the platform at once and experienced zero lag. CyberCom is in a league of its own.",
    author: "Dr. Rajesh Kumar",
    role: "HOD Computer Science",
    org: "Modern Tech University",
  },
  {
    quote: "Our internal corporate red team exercise was a huge success. The custom challenges built specifically for our stack were challenging and highly relevant.",
    author: "Elena Vance",
    role: "VP Security Ops",
    org: "Initech Financials",
  },
  {
    quote: "White-labeling the event made us look like pros. The CyberCom team handled everything behind the scenes so we could focus on our sponsors.",
    author: "Kevin Flynn",
    role: "Events Coordinator",
    org: "Grid Security Summit",
  },
];

export function Testimonials({ limit }: { limit?: number }) {
  const testimonials = limit ? allTestimonials.slice(0, limit) : allTestimonials;

  return (
    <section id="testimonials" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
      <SectionLabel>{"// FIELD REPORTS"}</SectionLabel>
      <SectionHeading>What Organisers Say</SectionHeading>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="p-8 rounded-2xl border border-[#222324] bg-[#0d0e0f] flex flex-col justify-between"
          >
            <p className="text-[18px] leading-relaxed text-white mb-8 italic">
              &quot;{t.quote}&quot;
            </p>
            <div>
              <div className="font-medium text-white">{t.author}</div>
              <div className="text-[14px] text-[#8a8f98]">{t.role}, {t.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
