import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ADVANTAGES = [
  {
    id: "accuracy",
    title: "Pixel-Perfect Accuracy",
    description: "Every margin, every transition, and every shadow is measured to the millimeter for a truly premium feel.",
    // Menggunakan div dengan background warna/gradient sebagai placeholder gambar
    imageClass: "bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-900",
  },
  {
    id: "tech",
    title: "Modern Tech Stack",
    description: "We leverage Next.js, React, and cloud-native solutions to ensure your product is future-proof and fast.",
    imageClass: "bg-gradient-to-tr from-primary/10 to-stone-200 dark:from-primary/20 dark:to-stone-800",
  },
  {
    id: "strategy",
    title: "Bespoke Strategies",
    description: "No templates. No shortcuts. Every solution is hand-crafted to meet your specific business objectives.",
    imageClass: "bg-gradient-to-bl from-stone-300 to-stone-100 dark:from-stone-700 dark:to-stone-900",
  },
];

export function WhyUs() {
  return (
    <section id="process" className="container mx-auto px-6 max-w-360 scroll-mt-32">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
        <div className="max-w-2xl">
          <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary mb-4">
            The ZONAERA Advantage
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] font-medium leading-[1.1] tracking-tight text-foreground">
            Crafting digital experiences with surgical precision.
          </h2>z
        </div>

        <div className="max-w-md">
          <p className="font-sans text-muted-foreground leading-relaxed text-sm md:text-base border-l border-primary/30 pl-6">
            We don't just build websites. We architect high-performance engines designed to dominate your market vertical through superior design and code.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {ADVANTAGES.map((item) => (
          <Card
            key={item.id}
            className="bg-card border-border/40 rounded-3xl overflow-hidden shadow-none hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] transition-all duration-300 group"
          >
            <CardContent className="p-4 md:p-6 flex flex-col gap-6">
              {/* Image Wrapper */}
              <div className={`w-full aspect-square rounded-2xl overflow-hidden relative ${item.imageClass}`}>
                {/* Overlay interaktif saat hover */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-sans text-sm">
                  [Image: {item.title}]
                </div>
              </div>

              <div className="px-2">
                <h3 className="font-serif text-2xl font-medium mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}