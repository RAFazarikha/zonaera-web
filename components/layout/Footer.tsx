import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ZonaeraNama } from "@/components/ui/zonaera-nama";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground rounded-t-[2.5rem] md:rounded-t-[4rem] pt-20 overflow-hidden relative border-t border-border/40">
      <div className="container mx-auto px-6 max-w-360">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-10 md:mb-22">

          {/* Main Intro (Col 1-5) */}
          <div className="md:col-span-5 pr-0 md:pr-12">
            <h2 className="font-serif text-xl md:text-3xl lg:text-5xl leading-[1.1] font-medium mb-6 max-w-md text-muted">
            Let&apos;s Build Something Exceptional Together.
            </h2>
            <p className="font-sans text-muted-foreground text-sm md:text-base max-w-sm leading-relaxed">
              Whether you&apos;re launching a new business, scaling your digital presence, or transforming an idea into reality, ZONAERA is here to create impactful websites and applications that drive your growth. Get in touch to discuss your next project.
            </p>
          </div>

          {/* Explore Links (Col 6-7) */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl md:text-2xl mb-6 text-muted">Explore</h3>
            <ul className="flex flex-col gap-4">
              {['Services', 'Portfolio', 'Process', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="font-sans text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact (Col 8-9) */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl md:text-2xl mb-6 text-muted">Say hello!</h3>
            <ul className="flex flex-col gap-4">
              {['Instagram', 'Github', 'Linkedin', 'Email'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-sans text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA (Col 10-12) */}
          <div className="md:col-span-3">
            <h3 className="font-serif text-xl md:text-2xl mb-6 text-muted">Got an idea?</h3>
            <Link
              href="#contact"
              className="group flex items-center gap-3 font-sans text-muted-foreground hover:text-primary transition-colors text-sm md:text-base w-fit"
            >
              Let&apos;s work together
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background group-hover:bg-primary transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

        </div>
      </div>

      {/* Massive Brand Name Bottom */}
      <div className="w-full flex justify-center items-end mt-auto px-4">
        <div className="font-sans font-black text-[25vw] leading-[0.7] tracking-tighter text-muted text-center w-full flex justify-center">
          <ZonaeraNama className="w-full h-auto max-w-360" />
        </div>
      </div>
    </footer>
  );
}