"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { ZonaeraLogo } from "@/components/ui/zonaera-logo";
import { ZonaeraNama } from "@/components/ui/zonaera-nama";

const NAV_LINKS = [
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "PROCESS", href: "#process" },
  { label: "PRICING", href: "#pricing" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-360">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 rounded-full bg-background text-foreground flex items-center justify-center font-bold font-serif text-xl">
            <ZonaeraLogo />
          </div>
          <span className="w-24 bg-background text-foreground flex items-center justify-center font-bold font-serif text-xl">
            <ZonaeraNama />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-bold font-sans tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions (Theme & CTA) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 uppercase text-xs font-bold tracking-wider">
            Start Project
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            }>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 flex flex-col pt-16">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold font-sans tracking-[0.1em] text-foreground transition-colors uppercase border-b border-border pb-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-xs font-bold tracking-wider w-full">
                  Start Project
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}