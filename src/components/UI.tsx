"use client";

import { ReactNode, useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline" | "secondary";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({ children, variant = "primary", className, href, onClick, type = "button", disabled }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-5 py-2.5 rounded-md text-[14px] font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#f4f4f5] text-black hover:bg-white",
    ghost: "text-[#8a8f98] hover:text-white hover:bg-[#1a1b1e]",
    outline: "border border-[#222324] text-white hover:bg-[#1a1b1e]",
    secondary: "bg-[#161718] border border-[#222324] text-[#8a8f98] hover:text-white hover:bg-[#1f2022]",
  };

  const Component = href ? "a" : "button";

  return (
    <Component 
      href={href} 
      onClick={onClick}
      type={type as "button" | "submit" | "reset"}
      className={cn(baseStyles, variants[variant], className)}
      disabled={disabled}
    >
      {children}
    </Component>
  );
}

// Accordion (shadcn style)
export function Accordion({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}

export function AccordionItem({ children, title, className }: { children: ReactNode; title: string; className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn("border border-[#222324] rounded-lg overflow-hidden bg-[#0d0e0f]", className)}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left text-white hover:bg-[#161718] transition-colors"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 pt-0 text-[#8a8f98] text-[15px] leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Tabs
const TabsContext = createContext<{ activeTab: string; setActiveTab: (v: string) => void }>({ activeTab: "", setActiveTab: () => {} });

export function Tabs({ children, defaultValue, className }: { children: ReactNode; defaultValue: string; className?: string }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("space-y-6", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex gap-2 p-1 bg-[#0d0e0f] border border-[#222324] rounded-lg inline-flex", className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({ children, value }: { children: ReactNode; value: string }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;
  return (
    <button 
      onClick={() => setActiveTab(value)}
      className={cn(
        "px-4 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200",
        isActive ? "bg-[#1f2124] text-white shadow-sm" : "text-[#8a8f98] hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value }: { children: ReactNode; value: string }) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;
  return <div>{children}</div>;
}
