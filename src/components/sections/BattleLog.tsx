"use client";

import { SectionLabel, SectionHeading } from "../SectionTypography";

const allEvents = [
  { id: "01", name: "Inertia CTF", org: "Modern Institute of Tech", players: "450+", date: "Feb 2025" },
  { id: "02", name: "Cyber Siege", org: "Alpha Corp (Internal)", players: "120+", date: "Jan 2025" },
  { id: "03", name: "HackTheGrid", org: "State University", players: "800+", date: "Nov 2024" },
  { id: "04", name: "Defend-0", org: "Global FinTech Ltd.", players: "250+", date: "Oct 2024" },
  { id: "05", name: "Junior CTF", org: "St. Mary's School", players: "150+", date: "Sep 2024" },
];

export function BattleLog({ limit, id }: { limit?: number; id?: string }) {
  const events = limit ? allEvents.slice(0, limit) : allEvents;

  return (
    <section id={id} className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
      <SectionLabel>{"// BATTLE LOG"}</SectionLabel>
      <SectionHeading>Events We&apos;ve Powered</SectionHeading>
      <p className="text-[18px] text-[#8a8f98] mb-12">Real CTFs. Real players. Real results.</p>

      <div className="w-full bg-[#0d0e0f] border border-[#222324] rounded-xl overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="h-10 bg-[#161718] border-b border-[#222324] flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="text-[11px] text-[#8a8f98] ml-4">root@cybercom: ~/events</span>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] md:text-[14px]">
            <thead className="bg-[#161718]/50 border-b border-[#222324]">
              <tr className="text-[#8a8f98] uppercase tracking-wider">
                <th className="py-4 px-6 font-medium">#</th>
                <th className="py-4 px-6 font-medium">Event Name</th>
                <th className="py-4 px-6 font-medium">Organisation</th>
                <th className="py-4 px-6 font-medium">Players</th>
                <th className="py-4 px-6 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222324]">
              {events.map((event) => (
                <tr key={event.id} className="text-white hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-[#8a8f98]">{event.id}</td>
                  <td className="py-4 px-6 font-medium">{event.name}</td>
                  <td className="py-4 px-6 text-[#8a8f98]">{event.org}</td>
                  <td className="py-4 px-6">{event.players}</td>
                  <td className="py-4 px-6 text-[#8a8f98]">{event.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
