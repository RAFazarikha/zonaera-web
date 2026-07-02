import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "ZONAERA transformed our complex legacy system into a seamless, high-converting digital platform. Their attention to detail is unrivaled.",
    name: "Sarah Meyer",
    role: "CTO, Nexus Global",
    initials: "SM",
  },
  {
    id: 2,
    quote: "Their design philosophy is light-years ahead. Our user engagement tripled within the first three months of the new launch.",
    name: "Marcus Torres",
    role: "Creative Director, Aura",
    initials: "MT",
  },
  {
    id: 3,
    quote: "The most professional development partner we've worked with. Transparent communication and impeccable code quality.",
    name: "Elena Rostova",
    role: "Founder, Echon Health",
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto px-6 max-w-360">
      <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
        <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary mb-4">
          Testimonials
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] font-medium leading-[1.1] tracking-tight text-foreground">
          Trusted by Market Leaders
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {TESTIMONIALS.map((item) => (
          <Card
            key={item.id}
            className="bg-card border-border/40 rounded-3xl shadow-[0_4px_20px_rgba(17,17,17,0.02)]"
          >
            <CardContent className="p-8 md:p-10 flex flex-col justify-between h-full gap-8">
              <div>
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-border/40 pt-6">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt={item.name} />
                  <AvatarFallback className="font-sans text-xs font-bold bg-muted text-muted-foreground">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-sans text-sm font-bold text-foreground">
                    {item.name}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    {item.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}