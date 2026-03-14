import { Button, Accordion, AccordionItem } from "@/components/UI";
import { SectionLabel, SectionHeading } from "@/components/SectionTypography";
import { Check, Minus } from "lucide-react";

export const metadata = {
  title: "Pricing",
  description: "Transparent CTF hosting pricing for colleges and organisations. Starter, Pro, and Enterprise plans with custom quote option.",
};

const plans = [
  {
    name: "Starter",
    label: "For small events",
    price: "₹ 15,000",
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
    label: "Most Popular",
    price: "₹ 45,000",
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
    label: "For large events",
    price: "Custom",
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
  },
];

const comparisonData = [
  { feature: "Max Players", starter: "100", pro: "500", enterprise: "Unlimited" },
  { feature: "Challenges Included", starter: "20", pro: "60", enterprise: "Full Pool" },
  { feature: "Infrastructure Type", starter: "Shared", pro: "Dedicated", enterprise: "Private Cloud" },
  { feature: "Scoreboard", starter: "Standard", pro: "Advanced", enterprise: "Customizable" },
  { feature: "Custom Branding", starter: false, pro: true, enterprise: true },
  { feature: "Support Type", starter: "Email", pro: "Slack + Priority", enterprise: "24/7 Dedicated" },
  { feature: "Post-Event Report", starter: false, pro: true, enterprise: true },
  { feature: "White-Label", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated Manager", starter: false, pro: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <main className="pt-32 flex flex-col">
      {/* 1. Page Hero */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 text-center">
        <SectionLabel className="justify-center flex">{"// DEPLOYMENT TIERS"}</SectionLabel>
        <SectionHeading>Transparent Pricing. No Surprises.</SectionHeading>
        <p className="mt-8 text-xl text-[#8a8f98] max-w-[800px] mx-auto leading-relaxed">
          All plans include full platform access, live scoreboard, and challenge deployment. 
          Prices scale with your event — not with hidden fees.
        </p>
      </section>

      {/* 2. Pricing Cards */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-12">
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
                  {plan.label}
                </div>
              )}
              
              <h3 className="text-[20px] font-medium text-white mb-2">{plan.name}</h3>
              <p className="text-[13px] text-[#8a8f98] mb-6">{plan.highlight ? "" : plan.label}</p>
              
              <div className="mb-8">
                <span className="text-3xl font-medium text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-[#8a8f98] text-sm ml-2">/ event</span>}
              </div>

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
                href="/contact"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Feature Comparison Table */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 hidden md:block">
        <h3 className="text-2xl text-white font-medium mb-12 text-center">Compare Features</h3>
        <div className="w-full border border-[#222324] rounded-2xl overflow-hidden bg-[#0d0e0f]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#161718] border-b border-[#222324]">
                <th className="py-6 px-8 text-[#8a8f98] font-medium uppercase text-[12px] tracking-wider">Feature</th>
                <th className="py-6 px-8 text-white font-medium uppercase text-[12px] tracking-wider">Starter</th>
                <th className="py-6 px-8 text-white font-medium uppercase text-[12px] tracking-wider">Pro</th>
                <th className="py-6 px-8 text-white font-medium uppercase text-[12px] tracking-wider">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222324]">
              {comparisonData.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 px-8 text-[15px] text-white font-medium">{row.feature}</td>
                  <td className="py-5 px-8 text-[14px] text-[#8a8f98]">
                    {typeof row.starter === "boolean" ? (row.starter ? <Check className="w-4 h-4" /> : <Minus className="w-4 h-4 opacity-30" />) : row.starter}
                  </td>
                  <td className="py-5 px-8 text-[14px] text-[#8a8f98]">
                    {typeof row.pro === "boolean" ? (row.pro ? <Check className="w-4 h-4" /> : <Minus className="w-4 h-4 opacity-30" />) : row.pro}
                  </td>
                  <td className="py-5 px-8 text-[14px] text-[#8a8f98]">
                    {typeof row.enterprise === "boolean" ? (row.enterprise ? <Check className="w-4 h-4" /> : <Minus className="w-4 h-4 opacity-30" />) : row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="px-6 md:px-8 max-w-[1000px] mx-auto py-24">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center flex">{"// COMMON QUESTIONS"}</SectionLabel>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
        </div>
        
        <Accordion>
          <AccordionItem title="How far in advance do we need to book?">
            For standard events using our challenge pool, we recommend booking at least 2 weeks in advance. For custom challenge development, we require 4-6 weeks lead time.
          </AccordionItem>
          <AccordionItem title="Can we use our own challenges?">
            Absolutely. Our platform is CTFd-compatible and supports custom challenge deployment via our secure orchestration engine.
          </AccordionItem>
          <AccordionItem title="Do you support online-only events?">
            Yes. While we power many in-person tech fests, our infrastructure is built for high-concurrency online competitions with players from around the globe.
          </AccordionItem>
          <AccordionItem title="What happens if the platform goes down during an event?">
            We provide a 99.9% uptime SLA. For Pro and Enterprise tiers, you have direct Slack access to a dedicated engineer for real-time troubleshooting.
          </AccordionItem>
          <AccordionItem title="Can we get a custom quote?">
            Yes. If your requirements don&apos;t fit into our standard tiers, contact us for a custom proposal tailored to your player count and specific needs.
          </AccordionItem>
        </Accordion>
      </section>

      {/* 5. Custom Quote CTA */}
      <section className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto text-center">
        <div className="bg-[#161718] border border-[#222324] rounded-3xl p-12 md:p-16">
          <h3 className="text-2xl text-white font-medium mb-4">Not sure which plan fits your event?</h3>
          <p className="text-[#8a8f98] mb-10 max-w-[600px] mx-auto">
            Tell us your requirements and we&apos;ll build a custom proposal within 24 hours.
          </p>
          <Button href="/contact" className="gap-2">
            Request a Custom Proposal <span className="text-xl">→</span>
          </Button>
        </div>
      </section>
    </main>
  );
}
