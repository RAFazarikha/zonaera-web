import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is your typical project timeline?",
    answer: "A standard corporate website takes 4-6 weeks from discovery to launch. Complex web applications or custom e-commerce solutions typically require 8-12 weeks depending on the feature set and integration requirements.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes. Every project includes a 30-day bug-fix guarantee. We also offer ongoing retainer packages for continuous maintenance, security updates, and feature enhancements.",
  },
  {
    question: "How do you handle project communication?",
    answer: "We use a dedicated Slack channel for day-to-day communication and provide weekly progress reports via email. You will also have direct access to a dedicated project manager.",
  },
  {
    question: "Do you work with existing codebases?",
    answer: "We specialize in greenfield projects (starting from scratch) to ensure our quality standards. However, we do take on refactoring or migration projects if the stack aligns with our expertise (Next.js, React, Node.js).",
  },
];

export function FAQ() {
  return (
    <section className="container mx-auto px-6 max-w-200 scroll-mt-32">
      <div className="text-center mb-12 flex flex-col items-center">
        <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary mb-4">
          Insights
        </span>
        <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion defaultValue={["item-1"]} className="w-full">
        {FAQS.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
            <AccordionTrigger className="font-serif text-xl md:text-2xl text-left hover:text-primary transition-colors py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="font-sans text-muted-foreground text-base leading-relaxed pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}