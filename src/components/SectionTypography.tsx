import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("font-mono text-[11px] font-bold tracking-[0.2em] text-[#8a8f98] uppercase mb-4", className)}>
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-8", className)}>
      {children}
    </h2>
  );
}
