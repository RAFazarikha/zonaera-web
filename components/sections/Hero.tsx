import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-360">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Kiri: Tipografi dan Copywriting */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="font-sans text-[40px] leading-[1.1] md:text-[64px] lg:text-[80px] font-semibold text-foreground tracking-tight mb-6">
              Build Digital <br className="hidden md:block" />
              Products That <br className="hidden md:block" />
              <span className="text-primary italic font-light font-serif">Grow</span> Your Business.
            </h1>

            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              A premium digital agency specializing in bespoke software architecture,
              pixel-perfect design, and growth-focused strategies for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 uppercase text-xs font-bold tracking-[0.1em]"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-foreground/20 text-foreground hover:bg-foreground/5 h-14 px-8 uppercase text-xs font-bold tracking-[0.1em] group"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Kanan: Visual Mockup (Placeholder untuk Image) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-150 aspect-4/3 rounded-3xl overflow-hidden bg-muted/20 border border-border/50 shadow-2xl">
              {/* Tempat untuk menaruh Image ilustrasi Hero dari assets Anda */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-sans">
                [Hero Mockup Image Placeholder]
              </div>
            </div>

            {/* Dekorasi Floating Card (Opsional, meniru gambar referensi) */}
            <div className="absolute -top-6 -left-6 md:top-10 md:left-0 bg-background rounded-xl p-4 shadow-[0_4px_20px_rgba(17,17,17,0.08)] border border-border/50 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ArrowRight className="h-5 w-5 -rotate-45" />
                </div>
                <div>
                  <p className="font-serif font-bold text-xl">124%</p>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Growth Rate</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}