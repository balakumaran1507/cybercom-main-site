import { Hero } from "@/components/sections/Hero";
import { WhyCybercom } from "@/components/sections/WhyCybercom";
import { Arsenal } from "@/components/sections/Arsenal";
import { BattleLog } from "@/components/sections/BattleLog";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/UI";
import { SectionLabel, SectionHeading } from "@/components/SectionTypography";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Why CyberCom (Teaser) */}
      <WhyCybercom />
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-24 -mt-12">
        <Link href="/services" className="text-[#8a8f98] hover:text-white flex items-center gap-2 transition-colors">
          See all services <span className="text-xl">→</span>
        </Link>
      </div>

      {/* 3. Services Preview */}
      <section className="py-24 bg-[#0d0e0f]/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 text-center">
          <SectionLabel className="justify-center flex">{"// SERVICE PREVIEW"}</SectionLabel>
          <SectionHeading>Everything You Need to Run a Serious CTF</SectionHeading>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "College CTF Hosting", desc: "Built for tech fests and inter-college battles." },
              { title: "Attack-Defence Events", desc: "Live competitions where teams attack and defend services." },
              { title: "Custom Challenge Dev", desc: "Tailored challenges for your specific skill domains." },
              { title: "White-Label Branding", desc: "Your event, your brand, your glory. CyberCom stays invisible." }
            ].map((service) => (
              <div key={service.title} className="p-8 rounded-2xl border border-[#222324] bg-[#0d0e0f] text-left hover:border-[#8a8f98]/30 transition-all">
                <h3 className="text-lg font-medium text-white mb-3">{service.title}</h3>
                <p className="text-[14px] text-[#8a8f98] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="outline" href="/services">View All Services →</Button>
          </div>
        </div>
      </section>

      {/* 4. The Arsenal (Full) */}
      <Arsenal />

      {/* 5. Battle Log Preview (3 rows) */}
      <BattleLog limit={3} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-24 -mt-12">
        <Link href="/about#events" className="text-[#8a8f98] hover:text-white flex items-center gap-2 transition-colors">
          View All Events <span className="text-xl">→</span>
        </Link>
      </div>

      {/* 6. Testimonials (2 cards) */}
      <Testimonials limit={2} />

      {/* 7. Final CTA Banner */}
      <section className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto text-center">
        <div className="bg-[#161718] border border-[#222324] rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
          <SectionHeading className="mb-6">Ready to Host Your Next CTF?</SectionHeading>
          <p className="text-[18px] text-[#8a8f98] mb-10 max-w-[600px] mx-auto">
            Join the colleges and organisations that trust CyberCom to run their competitions.
          </p>
          <Button href="/contact" className="px-10 py-4 text-lg gap-2">
            Get in Touch <span className="text-2xl leading-none">→</span>
          </Button>
        </div>
      </section>
    </main>
  );
}
