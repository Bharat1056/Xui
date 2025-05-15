"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    content:
      "Xui has completely transformed how we build our interfaces. The components are beautiful, accessible, and incredibly easy to customize.",
    author: "Sarah Johnson",
    role: "Frontend Developer at TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "I've tried many UI libraries, but Xui stands out with its attention to detail and developer experience. It's become our go-to for all new projects.",
    author: "Michael Chen",
    role: "CTO at StartupX",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "The documentation is excellent, and the component API is intuitive. Xui has saved us countless hours of development time.",
    author: "Emily Rodriguez",
    role: "UI Designer at DesignStudio",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Developers and designers love using Xui to build beautiful interfaces.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6 md:p-8">
                        <Quote className="h-8 w-8 text-emerald-500 mb-4" />
                        <p className="text-lg md:text-xl mb-6">{testimonial.content}</p>
                        <div className="flex items-center">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="rounded-full mr-4"
                          />
                          <div>
                            <h4 className="font-medium">{testimonial.author}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-lg md:-translate-x-1/4"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-lg md:translate-x-1/4"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-emerald-500" : "bg-gray-600"}`}
                onClick={() => {
                  setActiveIndex(index)
                  setAutoplay(false)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
