"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CheckCircle2, Circle, Clock, GitCommitHorizontal, MessageSquare, Plus, FileCode2, Play } from "lucide-react";

export function InteractiveDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let mounted = true;
    const runSequence = async () => {
      // Step 0: Initial state (Todo)
      await new Promise((r) => setTimeout(r, 2000));
      if (!mounted) return;
      
      // Step 1: AI assigned (In Progress)
      setStep(1);
      await new Promise((r) => setTimeout(r, 4000));
      if (!mounted) return;
      
      // Step 2: Code committed (Review)
      setStep(2);
      await new Promise((r) => setTimeout(r, 2000));
      if (!mounted) return;
      
      // Step 3: Done
      setStep(3);
      await new Promise((r) => setTimeout(r, 4000));
      if (!mounted) return;
      
      // Reset
      setStep(0);
    };

    if (step === 0) {
      runSequence();
    }
    return () => { mounted = false; };
  }, [step]);

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[#0d0e10] shadow-[0_0_100px_rgba(255,255,255,0.02)] overflow-hidden flex flex-col font-sans h-[600px] relative">
      
      {/* Top Window Bar */}
      <div className="h-12 border-b border-[var(--color-border-subtle)] flex items-center px-4 bg-[#08090a]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-xs text-[var(--color-secondary-text)] font-medium">
          <Terminal size={14} />
          <span>ENG-2703</span>
        </div>
      </div>

      {/* Main Grid Interface */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-64 border-r border-[var(--color-border-subtle)] bg-[#08090a]/50 p-4 hidden md:flex flex-col gap-6 text-sm">
          <div>
            <div className="text-[11px] font-bold text-[var(--color-secondary-text)] mb-3 tracking-wider uppercase">Your Views</div>
            <div className="flex flex-col gap-2 text-[var(--color-primary-text)] opacity-80">
              <div className="flex items-center gap-2 bg-white/5 px-2 py-1.5 rounded-md cursor-pointer"><Circle size={14} className="text-yellow-500" /> Active Issues</div>
              <div className="flex items-center gap-2 hover:bg-white/5 px-2 py-1.5 rounded-md cursor-pointer transition"><CheckCircle2 size={14} className="text-gray-500" /> Completed</div>
              <div className="flex items-center gap-2 hover:bg-white/5 px-2 py-1.5 rounded-md cursor-pointer transition"><MessageSquare size={14} className="text-blue-500" /> Mentions</div>
            </div>
          </div>
        </div>

        {/* Issue Content Area */}
        <div className="flex-1 p-8 flex flex-col overflow-y-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2.5 py-1 bg-white/5 border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-secondary-text)] font-mono">
              ENG-2703
            </span>
            {step === 0 && <span className="text-xs text-[var(--color-secondary-text)] flex items-center gap-1"><Circle size={12}/> Todo</span>}
            {step === 1 && <span className="text-xs text-yellow-500 flex items-center gap-1"><Clock size={12}/> In Progress</span>}
            {step >= 2 && <span className="text-xs text-green-500 flex items-center gap-1"><CheckCircle2 size={12}/> Done</span>}
          </div>

          <h2 className="text-3xl font-heading mb-4 text-[var(--color-primary-text)]">Faster app launch rendering sync</h2>
          <p className="text-[var(--color-secondary-text)] text-[15px] leading-relaxed max-w-2xl mb-8">
            The iOS application currently drops frames immediately after cold start because the initial React tree renders before the vehicle_state has fully synchronized from the local SQLite cache. We need to introduce a suspense boundary to safely defer the primary paint until data is available.
          </p>

          <div className="border border-[var(--color-border-subtle)] rounded-xl bg-[#08090a]/80 p-5 mt-auto">
            <h3 className="text-sm font-medium mb-4 text-[var(--color-primary-text)] flex items-center gap-2">
              <Terminal size={16} /> Activity Feed
            </h3>
            
            <div className="relative pl-6 border-l border-[var(--color-border-subtle)] flex flex-col gap-6">
              
              {/* Event 1 */}
              <div className="relative">
                <div className="absolute -left-[29px] top-1 rounded-full bg-[#0d0e10] p-0.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="text-sm text-[var(--color-primary-text)]">
                  <span className="font-semibold">jori</span> created this issue
                  <span className="text-[var(--color-secondary-text)] ml-2 inline-block">just now</span>
                </div>
              </div>

              {/* Event 2 (Animated in) */}
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                  >
                    <div className="absolute -left-[30px] top-0 rounded-full bg-[#0d0e10] p-1 border border-[var(--color-border-subtle)]">
                      <Play size={10} className="text-yellow-500" />
                    </div>
                    <div className="text-sm text-[var(--color-primary-text)] mb-3">
                      <span className="font-semibold">@Cursor</span> started working on <span className="font-mono text-xs bg-white/5 py-0.5 px-1 rounded text-purple-400">cursor/ENG-2703</span>
                    </div>
                    
                    {step === 1 && (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="bg-black/40 border border-[var(--color-border-subtle)] rounded-md p-3 font-mono text-xs text-[var(--color-secondary-text)]"
                      >
                        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                          Analyzing codebase... <br/>
                          Found 3 files matching `vehicle_state` patterns.<br/>
                          Writing suspense boundary implementation.
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Event 3 (Animated in) */}
              <AnimatePresence>
                {step >= 2 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[31px] top-0 rounded-full bg-[#0d0e10] p-1 border border-green-500/30 text-green-500">
                      <GitCommitHorizontal size={12} />
                    </div>
                    <div className="text-sm text-[var(--color-primary-text)] bg-green-500/5 border border-green-500/20 p-3 rounded-md">
                      <div className="flex items-center gap-2 mb-2 font-medium">
                        <CheckCircle2 size={14} className="text-green-500"/> Pull Request Merged Seamlessly
                      </div>
                      <div className="text-[var(--color-secondary-text)]">
                        Added `VehicleStateSuspense` boundary in Next layout root. Performance metrics confirm 0 dropped frames on launch.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
