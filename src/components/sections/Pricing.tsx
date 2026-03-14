"use client";

import { Button } from "../UI";
import { SectionLabel, SectionHeading } from "../SectionTypography";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small events and internal training.",
    features: [
      "Up to 100 players",
      "20 challenges from pool",
      "Standard shared infrastructure",
      "Email support",
      "Basic scoreboard",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
  {
    name: "Pro",
    description: "Our most popular tier for colleges and corporate events.",
    features: [
      "Up to 500 players",
      "60 challenges from pool",
      "Dedicated infrastructure",
      "Priority support + Slack channel",
      "Live scoreboard + analytics",
      "Custom branding",
    ],
    cta: "Get a Quote",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Tailored solutions for massive global competitions.",
    features: [
      "Unlimited players",
      "Full challenge pool access",
      "Private cloud deployment",
      "Dedicated event manager",
      "White-label platform",
      "Post-event report + certificates",
    ],
    cta: "Contact Us",
    highlight: false,
    price: "Custom",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <SectionLabel className="justify-center flex mb-4">{"// DEPLOYMENT TIERS"}</SectionLabel>
        <SectionHeading>Transparent Pricing. No Surprises.</SectionHeading>
        <p className="text-[18px] text-[#8a8f98]">
          All plans include full platform access, live scoreboard, and challenge deployment. 
          Need something custom? See Enterprise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`flex flex-col p-8 rounded-2xl border ${
              plan.highlight ? "border-[#f4f4f5] bg-[#161718]" : "border-[#222324] bg-[#0d0e0f]"
            } relative overflow-hidden`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 px-4 py-1 bg-[#f4f4f5] text-black text-[11px] font-bold uppercase tracking-wider rounded-bl-lg">
                Most Popular
              </div>
            )}
            
            <h3 className="text-[20px] font-medium text-white mb-2">{plan.name}</h3>
            <p className="text-[14px] text-[#8a8f98] mb-8 min-h-[40px]">{plan.description}</p>
            
            {plan.price && (
              <div className="mb-6">
                <span className="text-3xl font-medium text-white">{plan.price}</span>
              </div>
            )}

            <div className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-[14px]">
                  <Check className="w-4 h-4 text-[#8a8f98] mt-1 shrink-0" />
                  <span className="text-[#8a8f98]">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              variant={plan.highlight ? "primary" : "outline"}
              className="w-full py-3"
              href="#contact"
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-xl border border-[#222324] bg-[#0d0e0f]/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[18px] text-[#8a8f98]">Not sure which plan fits? Let&apos;s talk.</span>
        <Button variant="ghost" href="#contact" className="gap-2">
          Request a Custom Proposal <span className="text-[18px] leading-none">→</span>
        </Button>
      </div>
    </section>
  );
}
