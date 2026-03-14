import { Button } from "@/components/UI";
import { SectionLabel, SectionHeading } from "@/components/SectionTypography";
import { Check, Code, Target } from "lucide-react";

export const metadata = {
  title: "Services",
  description: "From college CTFs to corporate red team exercises and attack-defence events — CyberCom offers fully managed CTF hosting for every scale and format.",
};

export default function ServicesPage() {
  return (
    <main className="pt-32 flex flex-col">
      {/* 1. Page Hero */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 text-center">
        <SectionLabel className="justify-center flex">{"// WHAT WE OFFER"}</SectionLabel>
        <SectionHeading>Every Format. Every Scale.<br />Fully Managed.</SectionHeading>
        <p className="mt-8 text-xl text-[#8a8f98] max-w-[800px] mx-auto leading-relaxed">
          Whether you&apos;re running a 50-person college fest or a 1,000-player national championship — CyberCom has the infrastructure and experience to make it happen.
        </p>
      </section>

      {/* 2. Service 1 — CTF Hosting */}
      <section id="ctf-hosting" className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 border-t border-[#222324]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">College & Organisation CTF Hosting</h2>
            <p className="text-[#8a8f98] text-lg leading-relaxed mb-8">
              Our core platform scales effortlessly from small internal workshops to massive public tech fests. We handle the containers, the flags, and the uptime, so you can focus on the leaderboards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Custom branding",
                "Challenge pool access",
                "Live scoreboard",
                "Real-time monitoring",
                "Post-event report",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-[#8a8f98]">
                  <Check className="w-4 h-4 text-white" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Button href="/contact">Request This Service →</Button>
          </div>
          <div className="p-12 rounded-2xl bg-[#0d0e0f] border border-[#222324] aspect-video flex items-center justify-center">
            <Target className="w-24 h-24 text-[#8a8f98]/20" />
          </div>
        </div>
      </section>

      {/* 3. Service 2 — Attack-Defence */}
      <section id="attack-defence" className="py-24 bg-[#0d0e0f]">
        <div className="px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Attack-Defence Events</h2>
            <p className="text-[#8a8f98] text-lg leading-relaxed max-w-[800px] mx-auto">
              Unlike standard jeopardy CTFs, Attack-Defence events place teams in a live network — defending their own services while actively exploiting the opposition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { step: "01", title: "Setup", desc: "Each team receives a server image with vulnerable services pre-installed." },
              { step: "02", title: "Defend", desc: "Teams patch and harden their services to prevent exploitation." },
              { step: "03", title: "Attack", desc: "Teams exploit identical services on opponent machines to capture flags." },
              { step: "04", title: "Score", desc: "Points awarded for uptime (SLA), successful attacks, and defences." }
            ].map((s) => (
              <div key={s.step} className="p-8 rounded-xl border border-[#222324] bg-[#08090a]">
                <span className="text-2xl font-mono text-white/20 block mb-4">{s.step}</span>
                <h4 className="text-white font-medium mb-3">{s.title}</h4>
                <p className="text-[14px] text-[#8a8f98]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl text-white font-medium mb-6">What We Provide:</h4>
              {[
                "Isolated VM/container per team",
                "Pre-built vulnerable service images",
                "Real-time attack-defence scoreboard",
                "Flag submission and validation system",
                "Network monitoring dashboard",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-[#8a8f98]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#8a8f98] italic mb-8">
                &quot;Best for advanced college clubs, corporate red/blue team exercises, and championship events.&quot;
              </p>
              <Button href="/contact" variant="primary">Request Attack-Defence →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service 3 — Custom Challenges */}
      <section id="custom-challenges" className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 border-t border-[#222324]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="p-12 rounded-2xl bg-[#0d0e0f] border border-[#222324] aspect-square flex items-center justify-center order-2 lg:order-1">
            <Code className="w-24 h-24 text-[#8a8f98]/20" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Custom Challenge Development</h2>
            <p className="text-[#8a8f98] text-lg leading-relaxed mb-8">
              Need challenges mapped to your specific curriculum or domain? We design, build, and QA challenges from Web Exploitation to Hardware Hacking.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Tailored to your curriculum",
                "Difficulty graded (Beginner to Expert)",
                "Fully tested and documented",
                "Delivered in CTFd-compatible formats",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-[#8a8f98]">
                  <Check className="w-4 h-4 text-white" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Button href="/contact">Request Custom Dev →</Button>
          </div>
        </div>
      </section>

      {/* 5. Service 4 — White-Label */}
      <section id="white-label" className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 border-t border-[#222324]">
        <div className="bg-[#161718] border border-[#222324] rounded-3xl p-12 md:p-16">
          <div className="max-w-[800px]">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">White-Label Event Hosting</h2>
            <p className="text-[#8a8f98] text-lg leading-relaxed mb-8">
              Your event, your brand, your glory. CyberCom operates entirely behind the scenes, providing a platform that reflects your identity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                "Custom domain & SSL",
                "Branded scoreboard",
                "Custom challenge themes",
                "CyberCom invisible to players",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-[#8a8f98]">
                  <Check className="w-4 h-4 text-white" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Button href="/contact">Go White-Label →</Button>
          </div>
        </div>
      </section>

      {/* 6. Infra Product Banner */}
      <section className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="p-12 rounded-2xl border border-dashed border-[#222324] flex flex-col items-center text-center">
          <h3 className="text-2xl text-white font-medium mb-4">Looking to self-host your own CTF platform?</h3>
          <p className="text-[#8a8f98] mb-8 max-w-[600px]">
            Check out our infrastructure product — built on the same stack that powers our events.
          </p>
          <Button variant="secondary" disabled>View Infra Product (Coming Soon) →</Button>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto text-center">
        <h3 className="text-3xl font-medium text-white mb-8">Not Sure Which Service Fits?</h3>
        <Button href="/contact" className="px-10 py-4">Talk to Our Team →</Button>
      </section>
    </main>
  );
}
