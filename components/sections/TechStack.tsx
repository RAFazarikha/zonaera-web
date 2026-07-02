import * as React from "react";
import { Badge } from "@/components/ui/badge";

const TECH_CATEGORIES = [
  {
    category: "Frontend & UI",
    items: ["Next.js 15", "React 19", "Tailwind CSS", "Figma", "TypeScript"],
  },
  {
    category: "Backend & Core",
    items: ["Node.js", "Laravel", "REST APIs", "Prisma ORM"],
  },
  {
    category: "Data & Storage",
    items: ["MySQL", "Supabase", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Nginx", "Oracle Cloud", "GitHub Actions"],
  },
];

export function TechStack() {
  return (
    <section className="container mx-auto px-6 max-w-360">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/3">
          <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary mb-4">
            Infrastructure
          </span>
          <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground mb-6">
            Engineered for <br className="hidden lg:block" /> Scale.
          </h2>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Built on a foundation of 4 years of rigorous full-stack engineering, our technology choices prioritize performance, security, and long-term maintainability.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {TECH_CATEGORIES.map((group, idx) => (
            <div key={idx}>
              <h3 className="font-serif text-xl font-medium mb-6 text-foreground border-b border-border/50 pb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-sans font-normal text-xs px-3 py-1 bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}