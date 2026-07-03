"use client";

import * as React from "react";
import Link from "next/link";
import {
  Layers,
  Grid2X2,
  Waypoints,
  CreditCard,
  Mail,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ZonaeraLogo } from "@/components/ui/zonaera-logo";
import { ZonaeraNama } from "@/components/ui/zonaera-nama";

// Menambahkan ikon untuk masing-masing menu
const NAV_LINKS = [
  { label: "SERVICES", href: "#services", icon: Layers },
  { label: "PORTFOLIO", href: "#portfolio", icon: Grid2X2 },
  { label: "PROCESS", href: "#process", icon: Waypoints },
  { label: "PRICING", href: "#pricing", icon: CreditCard },
  { label: "CONTACT", href: "#contact", icon: Mail },
];

export function Navbar() {
  return (
    <header
      className="fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300
                 bottom-6 md:bottom-auto md:top-6
                 w-[92%] sm:w-100 md:w-auto
                 bg-background/80 backdrop-blur-xl border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                 dark:shadow-[0_8px_32px_rgba(255,255,255,0.04)] rounded-full px-4 py-3 md:py-2
                 flex items-center justify-between md:justify-center gap-2 md:gap-8"
    >
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2 shrink-0 group">
        <div className="w-8 h-8 rounded-full bg-background text-foreground flex items-center justify-center font-bold font-serif text-xl group-hover:scale-105 transition-transform">
          <ZonaeraLogo />
        </div>
        {/* Nama brand hanya muncul di desktop (lg) */}
        <span className="hidden lg:flex w-24 bg-none text-foreground items-center justify-center font-bold font-serif text-xl">
          <ZonaeraNama />
        </span>
      </Link>

      {/* Links Section */}
      <nav className="flex items-center justify-center gap-1 sm:gap-2">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              className="group relative p-2 md:px-4 md:py-2 rounded-full hover:bg-foreground/5 transition-colors flex items-center justify-center"
              aria-label={link.label}
            >
              {/* Tampilan Mobile & Tablet: Ikon */}
              <Icon className="w-5 h-5 lg:hidden text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={2} />

              {/* Tampilan Desktop: Teks */}
              <span className="hidden lg:block text-xs font-bold font-sans tracking-[0.1em] text-muted-foreground group-hover:text-foreground transition-colors uppercase">
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Actions (Theme & CTA) */}
      <div className="flex items-center gap-2 shrink-0">
        <ThemeToggle />

        {/* CTA Button disembunyikan di mobile, tampil di tablet (ikon/teks) dan desktop */}
        <Button className="hidden md:flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 lg:px-6 h-9 lg:h-10">
          <span className="hidden lg:block uppercase text-xs font-bold tracking-wider">
            Start Project
          </span>
          {/* Di tablet hanya menampilkan panah agar pill tidak terlalu panjang */}
          <ArrowRight className="lg:hidden w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}