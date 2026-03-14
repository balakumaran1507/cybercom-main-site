import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090a] text-[#f7f8f8] font-sans">

      <Navbar />

      {/* Hero Content */}
      <main className="pt-32 md:pt-[180px] px-6 md:px-8 max-w-[1400px] mx-auto flex flex-col">

        {/* Headline */}
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-medium tracking-tight max-w-[720px] text-white">
          The product development<br className="hidden md:block" /> system for teams and agents
        </h1>

        {/* Subheader flex row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full mt-10 md:mt-12">

          {/* Left Description */}
          <div className="text-[19px] leading-[1.6] text-[#8a8f98]">
            <p>Purpose-built for planning and building products.</p>
            <p>Designed for the AI era.</p>
          </div>

          {/* Right Badge */}
          <div className="mt-6 md:mt-0 flex items-center gap-3 text-[14px]">
            <span className="font-semibold text-white">New</span>
            <a href="#" className="text-[#8a8f98] hover:text-white transition-colors flex items-center gap-1 group">
              Cybercom Diffs (Beta)
              <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Partial App Mockup Container seen at the bottom */}
        <div className="mt-16 w-full h-[200px] border border-[#222324] rounded-t-xl bg-[#0f1011] overflow-hidden flex flex-col relative">

          {/* Mockup Header Bar */}
          <div className="h-10 border-b border-[#222324] flex items-center px-4 bg-[#161718]">

            {/* Tabs */}
            <div className="flex items-center gap-1 h-full">
              {/* Active Tab */}
              <div className="flex items-center gap-2 bg-[#1e1f20] border-x border-t border-[#222324] rounded-t-md px-3 h-full pt-1 -mb-[1px]">
                <div className="w-3 h-3 rounded-full border border-white/40 flex items-center justify-center overflow-hidden relative opacity-80">
                  <div className="absolute w-[150%] h-[1px] bg-white/40 transform -rotate-45" />
                  <div className="absolute w-[150%] h-[1px] bg-white/40 transform -rotate-45 translate-y-[-2px]" />
                  <div className="absolute w-[150%] h-[1px] bg-white/40 transform -rotate-45 translate-y-[2px]" />
                </div>
                <span className="text-[12px] text-white font-medium">Cybercom</span>
                <span className="text-[#8a8f98] text-[10px] ml-1">×</span>
              </div>

              {/* Inactive Tab */}
              <div className="flex items-center gap-2 px-3 h-full pt-1">
                <span className="text-[12px] text-[#8a8f98] font-medium">Inbox</span>
              </div>
            </div>

            {/* Mockup Search/Command Bar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[340px] h-6 bg-[#08090a] border border-[#222324] rounded px-3 flex items-center justify-between text-[11px] text-[#8a8f98]">
              <span>App freezes on splash screen...</span>
              <div className="flex gap-1">
                <span className="text-[9px]">⌘</span><span className="text-[9px]">K</span>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
