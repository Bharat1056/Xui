import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import ComponentShowcase from "@/components/component-showcase"
import TestimonialCarousel from "@/components/testimonial-carousel"
import CommandClipboard from "@/components/command-clipboard"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center">
        <div className="container max-w-4xl space-y-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <span className="mr-1 rounded-full bg-emerald-500 px-1.5 py-0.5 text-xs text-black font-medium">NEW</span>
            <span className="text-muted-foreground">Version 1.0 just released</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl relative">
            <span className="animated-bg">Build beautiful</span> interfaces with{" "}
            <span className="text-emerald-500 relative">
              Xui
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500 overflow-visible"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 C30,12 70,-8 100,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
            <div className="absolute -bottom-1 left-1/4 w-1/2 pointer-events-none">
              <svg className="w-full h-6 text-emerald-500/30 overflow-visible" preserveAspectRatio="none">
                <path
                  d="M0,8 L100,0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M20,0 L80,12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            A modern, elegant UI library for React that helps you build beautiful interfaces faster. Open source,
            customizable, and accessible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black">
              <Link href="/docs" className="flex items-center">
                Getting Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="https://github.com/xui/xui" className="flex items-center">
                <Github className="mr-2 h-4 w-4" /> Star on GitHub
              </Link>
            </Button>
          </div>

          {/* Command Clipboard */}
          <div className="pt-8">
            <CommandClipboard />
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <ComponentShowcase />

      {/* Testimonials */}
      <TestimonialCarousel />
    </div>
  )
}
