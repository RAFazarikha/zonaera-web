"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Menggunakan queueMicrotask untuk menghindari warning "synchronous setState"
    // sekaligus memastikan transisi UI tetap instan setelah render klien pertama.
    queueMicrotask(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    // Skeleton loader untuk mencegah layout shift
    return <div className="w-11 h-6 bg-muted rounded-full opacity-50 animate-pulse" />;
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-muted-foreground transition-colors hover:text-foreground" />
      <Switch
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <Moon className="h-4 w-4 text-muted-foreground transition-colors hover:text-foreground" />
    </div>
  );
}