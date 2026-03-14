import { Button } from "@/components/UI";
import { SectionLabel, SectionHeading } from "@/components/SectionTypography";
import { BattleLog } from "@/components/sections/BattleLog";
import { Team } from "@/components/sections/Team";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "Meet the team behind CyberCom — CTF competitors turned infrastructure builders, powering competitions for colleges and organisations.",
};

export default function AboutPage() {
  return (
    <main className="pt-32 flex flex-col">
      {/* 1. Page Hero */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 text-center md:text-left">
        <SectionLabel>{"// WHO WE ARE"}</SectionLabel>
        <SectionHeading>We Started as Players.<br />Now We Build the Arena.</SectionHeading>
        <p className="mt-8 text-xl text-[#8a8f98] max-w-[800px] leading-relaxed">
          CyberCom was founded by a team of CTF competitors who were tired of poorly run events — broken platforms, missing flags, and zero support. We built the infrastructure we always wished we had.
        </p>
      </section>

      {/* 2. Our Story */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 border-t border-[#222324]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionLabel>{"// OUR STORY"}</SectionLabel>
          <div className="space-y-6 text-[17px] text-[#8a8f98] leading-relaxed">
            <h3 className="text-2xl text-white font-medium mb-6">From Competitors to Operators</h3>
            <p>
              Founded in 2023, CyberCom began as a passion project among a group of cybersecurity enthusiasts who spent their weekends hunting for flags in global competitions. We saw first-hand how much effort organisers put into content, only for it to be overshadowed by infrastructure failures.
            </p>
            <p>
              We decided to fix that. By building a proprietary orchestration engine designed specifically for CTF workloads, we&apos;ve eliminated the &quot;event-day jitters&quot; for our partners. Today, we power major tech fests and corporate training exercises across the globe.
            </p>
            <p>
              Our mission is simple: to provide the world&apos;s most reliable and engaging platform for cybersecurity education and competition, allowing organisers to focus on what matters—the challenges.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Stats Block */}
      <section className="py-24 bg-[#0d0e0f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "CTFs Hosted", value: "5+" },
            { label: "Challenges in Pool", value: "300+" },
            { label: "Team Members", value: "12" },
            { label: "Uptime", value: "99.9%" }
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-white">{stat.value}</span>
              <span className="text-[13px] text-[#8a8f98] uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-[#222324] bg-[#0d0e0f]">
            <h4 className="text-xl text-white font-medium mb-4">CTF Hosting</h4>
            <p className="text-[#8a8f98] mb-6">We design and operate full-scale CTF events for colleges and corporates.</p>
          </div>
          <div className="p-8 rounded-2xl border border-[#222324] bg-[#0d0e0f]">
            <h4 className="text-xl text-white font-medium mb-4">Attack-Defence Events</h4>
            <p className="text-[#8a8f98] mb-6">Live competitions where teams defend their services and attack others simultaneously.</p>
            <Link href="/services#attack-defence" className="text-white hover:underline text-[15px]">See full details →</Link>
          </div>
          <div className="p-8 rounded-2xl border border-[#222324] bg-[#0d0e0f]">
            <h4 className="text-xl text-white font-medium mb-4">Infra Products</h4>
            <p className="text-[#8a8f98] mb-6">We build and maintain the underlying platform for self-hosting.</p>
            <span className="text-[#8a8f98]/50 text-[13px] uppercase tracking-tighter">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* 5. Full Battle Log */}
      <BattleLog id="events" />

      {/* 6. Team Section */}
      <Team />

      {/* 7. CTA Block */}
      <section className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto text-center">
        <h3 className="text-3xl font-medium text-white mb-8">Want to Work With Us?</h3>
        <Button href="/contact" className="px-10 py-4">Get in Touch →</Button>
      </section>
    </main>
  );
}
