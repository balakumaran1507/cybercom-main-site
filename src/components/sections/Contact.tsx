"use client";

import { Button } from "../UI";
import { SectionLabel, SectionHeading } from "../SectionTypography";
import { Mail, Linkedin, Instagram, Disc as Discord } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Info */}
        <div>
          <SectionLabel>{"// INITIATE CONTACT"}</SectionLabel>
          <SectionHeading>Ready to Host Your Next CTF?</SectionHeading>
          <p className="text-[18px] text-[#8a8f98] mb-12">
            Fill in the form and our team will get back to you within 24 hours with a custom plan.
          </p>

          <div className="space-y-6">
            <a href="mailto:hello@cybercom.hosting" className="flex items-center gap-4 text-white hover:text-[#8a8f98] transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-[#0d0e0f] border border-[#222324] flex items-center justify-center group-hover:bg-[#161718]">
                <Mail size={18} />
              </div>
              <span className="text-[16px] font-medium">hello@cybercom.hosting</span>
            </a>
            
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Discord size={18} />, label: "Discord" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-[#0d0e0f] border border-[#222324] flex items-center justify-center text-white hover:bg-[#161718] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-[#0d0e0f] border border-[#222324] rounded-2xl p-8 md:p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Full Name</label>
              <input type="text" className="bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8a8f98]/50 transition-colors" placeholder="John Doe" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Organisation Name</label>
              <input type="text" className="bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8a8f98]/50 transition-colors" placeholder="University of Cyber" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Event Type</label>
              <select className="bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8a8f98]/50 transition-colors appearance-none">
                <option>College CTF</option>
                <option>Corporate CTF</option>
                <option>Custom</option>
                <option>Not Sure</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Expected Participants</label>
              <select className="bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8a8f98]/50 transition-colors appearance-none">
                <option>&lt;100</option>
                <option>100–300</option>
                <option>300–700</option>
                <option>700+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Preferred Event Date</label>
              <input type="date" className="bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8a8f98]/50 transition-colors" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Message</label>
              <textarea rows={4} className="bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8a8f98]/50 transition-colors resize-none" placeholder="Tell us about your event requirements..." />
            </div>

            <div className="md:col-span-2 mt-2">
              <Button className="w-full py-4 text-[16px] gap-2">
                Send Request <span className="text-[20px] leading-none">→</span>
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
