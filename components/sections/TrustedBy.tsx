import * as React from "react";
import { Hexagon, Triangle, Circle, Square, Box, Haze } from "lucide-react";

const LOGOS = [
  { id: 1, name: "Acme Corp", icon: Hexagon },
  { id: 2, name: "Quantum", icon: Triangle },
  { id: 3, name: "Echo", icon: Circle },
  { id: 4, name: "Nexus", icon: Square },
  { id: 5, name: "Vortex", icon: Box },
  { id: 6, name: "Zenith", icon: Haze },
];

export function TrustedBy() {
  return (
    <section className="container mx-auto px-6 max-w-360">
      <div className="flex flex-col items-center gap-8 border-y border-border/40 py-12">
        <p className="font-sans text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground">
          Trusted by Market Leaders
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          {LOGOS.map((logo) => {
            const Icon = logo.icon;
            return (
              <div
                key={logo.id}
                className="flex items-center gap-2 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-pointer"
              >
                <Icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                <span className="font-serif font-semibold text-xl hidden sm:block">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}