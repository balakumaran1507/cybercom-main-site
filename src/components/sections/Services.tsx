"use client";

import { SectionLabel, SectionHeading } from "../SectionTypography";
import { GraduationCap, Briefcase, Code, Paintbrush } from "lucide-react";

const services = [
  {
    title: "College CTF Hosting",
    description: "Built for tech fests, internal competitions, and inter-college battles. Scales from 50 to 1,000+ players with no configuration on your end.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    title: "Corporate & Organisation CTF",
    description: "Internal red team exercises, security hiring challenges, and awareness programs — tailored to your domain and skill level.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    title: "Custom Challenge Development",
    description: "Need challenges mapped to your curriculum or specific vulnerability classes? We design, build, and QA them for your event.",
    icon: <Code className="w-6 h-6 text-white" />,
  },
  {
    title: "White-Label Branding",
    description: "Your event, your brand, your glory. CyberCom operates entirely behind the scenes — the platform reflects your identity.",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
      <SectionLabel>{"// WHAT WE OFFER"}</SectionLabel>
      <SectionHeading>
        Everything You Need<br />
        to Run a Serious CTF
      </SectionHeading>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222324] border border-[#222324] rounded-2xl overflow-hidden">
        {services.map((service) => (
          <div 
            key={service.title} 
            className="p-10 bg-[#08090a] hover:bg-[#0d0e0f] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-[#161718] border border-[#222324] flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-[22px] font-medium text-white mb-4">{service.title}</h3>
            <p className="text-[17px] leading-relaxed text-[#8a8f98] max-w-[500px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
