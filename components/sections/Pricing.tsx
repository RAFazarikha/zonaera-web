import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "$5,000",
    period: "/project",
    description: "Perfect for emerging brands needing a strong digital footprint.",
    features: [
      "5-Page Marketing Site",
      "Custom UI Design",
      "Mobile Optimization",
      "CMS Integration",
    ],
    isPopular: false,
    buttonText: "Select Plan",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$12,000",
    period: "/project",
    description: "Comprehensive digital products engineered for scale.",
    features: [
      "Full E-Commerce Engine",
      "Custom API Infrastructure",
      "Advanced SEO Strategy",
      "Monthly Maintenance",
    ],
    isPopular: true,
    buttonText: "Select Plan",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Bespoke architecture for complex business operations.",
    features: [
      "Solid Product Architecture",
      "Dedicated Team Access",
      "Legacy System Overhaul",
      "White-Label Solutions",
    ],
    isPopular: false,
    buttonText: "Contact Us",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-6 max-w-360 scroll-mt-32">
      <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
        <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary mb-4">
          Investment
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] font-medium leading-[1.1] tracking-tight text-foreground">
          Transparent Scaling Plans
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {PRICING_PLANS.map((plan) => (
          <Card
            key={plan.id}
            className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
              plan.isPopular
                ? "bg-[#111111] text-white shadow-2xl scale-100 md:scale-105 z-10 border-none"
                : "bg-card border-border/40 shadow-[0_4px_20px_rgba(17,17,17,0.02)]"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-b-lg">
                Most Popular
              </div>
            )}

            <CardContent className={`p-8 md:p-10 ${plan.isPopular ? "pt-12 md:pt-14" : ""}`}>
              <div className="mb-8 border-b border-current/10 pb-8">
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider mb-4 opacity-80">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-serif text-4xl md:text-5xl font-medium">
                    {plan.price}
                  </span>
                  <span className="font-sans text-sm opacity-60 font-medium">
                    {plan.period}
                  </span>
                </div>
                <p className="font-sans text-sm leading-relaxed opacity-70">
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.isPopular ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
                    }`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="font-sans text-sm font-medium opacity-80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? "default" : "outline"}
                className={`w-full rounded-full h-12 uppercase text-xs font-bold tracking-[0.1em] ${
                  plan.isPopular
                    ? "bg-primary hover:bg-primary/90 text-white border-none"
                    : "border-border text-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}