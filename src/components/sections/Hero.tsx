"use client";

import { motion } from "framer-motion";
import { Button } from "../UI";

const stats = [
  { label: "CTFs Hosted", value: "5+" },
  { label: "Challenges Ready", value: "300+" },
  { label: "Avg. Uptime", value: "99.9%" },
  { label: "Support", value: "24/7" },
];

export function Hero() {
  return (
    <section className="pt-40 md:pt-48 pb-24 px-6 md:px-8 max-w-[1400px] mx-auto flex flex-col items-center text-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#8a8f98] uppercase mb-10 bg-[#161718] border border-[#222324] px-4 py-1.5 rounded-full"
      >
        [ Trusted CTF Infrastructure ]
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-medium tracking-tight max-w-[900px] text-white"
      >
        Deploy a World-Class CTF.<br />
        <span className="text-[#8a8f98]">In Days, Not Months.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-[18px] md:text-[21px] leading-relaxed text-[#8a8f98] max-w-[700px]"
      >
        CyberCom provides end-to-end Capture The Flag hosting for colleges and organisations — from challenge deployment to live scoreboards, fully managed on battle-tested infrastructure.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 flex flex-col sm:flex-row gap-4"
      >
        <Button href="/contact" className="px-10 py-4 text-[15px] gap-2">
          Request a Demo <span className="text-[18px] leading-none">→</span>
        </Button>
        <Button variant="outline" href="/about#events" className="px-10 py-4 text-[15px]">
          View Past Events
        </Button>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-[#222324] pt-12"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="text-2xl md:text-3xl font-medium text-white">{stat.value}</span>
            <span className="text-[13px] text-[#8a8f98] uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
