import * as React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { ZonaeraNama } from "@/components/ui/zonaera-nama";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-360">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

          {/* Brand Info */}
          <div className="md:col-span-2">
            <span className="font-serif font-semibold text-2xl tracking-tight block mb-4">
              <ZonaeraNama />
            </span>
            <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed">
              Redefining the digital landscape through luxury design and architectural precision.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.1em] mb-6 text-foreground">
              Links
            </h4>
            <ul className="flex flex-col gap-4">
              {['Services', 'Portfolio', 'Process', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.1em] mb-6 text-foreground">
              Legal
            </h4>
            <ul className="flex flex-col gap-4">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/40">
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
              &copy; {new Date().getFullYear()} ZONAERA DIGITAL. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}