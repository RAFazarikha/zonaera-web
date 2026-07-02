import * as React from "react";
import { Button } from "@/components/ui/button";
import { ZonaeraLogo } from "@/components/ui/zonaera-logo";

export function CTA() {
  return (
    <section className="bg-background py-32 md:py-40 border-t border-border/40">
      <div className="container mx-auto px-6 max-w-360 flex flex-col items-center text-center">
        {/* Logo Icon */}
        <div className="w-16 h-16 rounded-full bg-background text-foreground flex items-center justify-center font-bold font-serif text-4xl mb-10">
          <ZonaeraLogo />
        </div>

        <h2 className="font-serif text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] tracking-tight text-foreground max-w-3xl mb-6">
          Ready to Elevate Your Business?
        </h2>

        <p className="font-sans text-muted-foreground text-lg md:text-xl max-w-xl mb-12">
          Join the league of forward-thinking brands who chose ZONAERA for their digital evolution.
        </p>

        <Button
          size="lg"
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 uppercase text-sm font-bold tracking-[0.1em]"
        >
          Book A Consultation
        </Button>
      </div>
    </section>
  );
}