import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Bodoni_Moda, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ZONAERA | Premium Digital Agency",
  description: "Redefining the digital landscape through luxury design and architectural precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${manrope.variable} ${bodoni.variable} ${jetbrains.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}