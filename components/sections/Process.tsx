import * as React from "react";
import { Separator } from "@/components/ui/separator";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "System architecture and brand audit.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Defining project roadmaps & KPIs.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Wireframing and UI/UX flows.",
  },
  {
    num: "04",
    title: "Build",
    desc: "High-fidelity UI creation & coding.",
  },
  {
    num: "05",
    title: "Testing",
    desc: "QA and performance optimization.",
  },
  {
    num: "06",
    title: "Support",
    desc: "Launch monitoring & maintenance.",
  },
];

export function Process() {
  return (
    <section id="process" className="container mx-auto px-6 max-w-360 scroll-mt-32">
      <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
        <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary mb-4">
          Our Process
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] font-medium leading-[1.1] tracking-tight text-foreground">
          The Road to Digital Excellence
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative">
        {/* Garis penghubung background untuk desktop */}
        <div className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-border/50 -z-10" />

        {PROCESS_STEPS.map((step, index) => (
          <div key={index} className="flex flex-col gap-6 group">
            <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center font-sans text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
              {step.num}
            </div>

            <Separator className="lg:hidden" />

            <div>
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}