import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    id: "aura",
    title: "Aura Fashion House",
    category: "E-commerce & Branding",
    year: "2025",
    imageClass: "bg-zinc-800",
  },
  {
    id: "linear",
    title: "Linear Arch",
    category: "Digital Experience",
    year: "2024",
    imageClass: "bg-zinc-800",
  },
  {
    id: "solari",
    title: "Solari Grid",
    category: "Web Application",
    year: "2025",
    imageClass: "bg-zinc-800",
  },
  {
    id: "echon",
    title: "Echon Health",
    category: "Mobile Product",
    year: "2026",
    imageClass: "bg-zinc-800",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#111111] text-white py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-360">

        {/* Header Portfolio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 border-b border-white/10 pb-12">
          <div>
            <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase text-primary mb-4">
              Our Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] tracking-tight">
              Recent Ventures
            </h2>
          </div>

          <a
            href="#portfolio-all"
            className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors group"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-16' : ''}`}>
              {/* Thumbnail */}
              <div className={`w-full aspect-4/3 rounded-2xl overflow-hidden mb-6 relative ${project.imageClass}`}>
                <div className="absolute inset-0 flex items-center justify-center text-white/30 font-sans text-sm">
                  [Portfolio Image: {project.title}]
                </div>
                {/* Hover overlay halus */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Meta data */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-3xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-white/60 text-sm">
                    {project.category}
                  </p>
                </div>

                <Badge variant="outline" className="border-white/20 text-white/60 rounded-full font-sans text-xs px-3 font-normal">
                  {project.year}
                </Badge>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}