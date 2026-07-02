import * as React from "react";
import {
  Globe,
  Smartphone,
  PenTool,
  Cloud,
  BarChart,
  Shield
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES_DATA = [
  {
    id: "web",
    title: "Web Architecture",
    description: "Building robust, scalable frontend systems with lightning-fast modern stacks.",
    icon: Globe,
  },
  {
    id: "mobile",
    title: "iOS & Android",
    description: "Native and cross-platform mobile experiences that feel second nature to users.",
    icon: Smartphone,
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Intentional interfaces that prioritize user flow and brand storytelling.",
    icon: PenTool,
  },
  {
    id: "cloud",
    title: "Cloud Strategy",
    description: "Seamless migrations and serverless infrastructure for maximum uptime.",
    icon: Cloud,
  },
  {
    id: "data",
    title: "Data Analytics",
    description: "Transforming raw user data into actionable business intelligence.",
    icon: BarChart,
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    description: "Hardened protection for your intellectual property and user data.",
    icon: Shield,
  },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-6 max-w-360 scroll-mt-32">
      <div className="mb-16 md:mb-24">
        <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary mb-4">
          Our Expertise
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] font-medium leading-[1.1] tracking-tight text-foreground max-w-2xl">
          Full-Cycle Digital Evolution
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SERVICES_DATA.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.id}
              className="bg-card border-border/40 rounded-3xl shadow-[0_4px_20px_rgba(17,17,17,0.02)] hover:shadow-[0_8px_30px_rgba(17,17,17,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-8 md:p-10 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Icon strokeWidth={1.5} className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-medium mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}