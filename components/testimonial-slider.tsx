"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialSlider() {
  const testimonials = [
    {
      quote:
        "Ghazanfar's strategic approach to product development transformed our user retention. His focus on data-driven decisions helped us increase our conversion rate by 35% in just three months.",
      author: "Sarah Johnson",
      title: "CEO, HealthTech Innovations",
    },
    {
      quote:
        "Working with Ghazanfar was a game-changer for our startup. His deep understanding of product-led growth strategies helped us scale our user base from 5,000 to 50,000 in under a year.",
      author: "Ahmed Khan",
      title: "Founder, TechStart",
    },
    {
      quote:
        "Ghazanfar has a unique ability to balance user needs with business objectives. His product optimizations increased our revenue by 40% while simultaneously improving our user satisfaction scores.",
      author: "Fatima Zaidi",
      title: "Product Director, E-commerce Solutions",
    },
    {
      quote:
        "I've worked with many product leaders, but Ghazanfar stands out for his analytical approach and growth mindset. He doesn't just build features; he builds sustainable growth engines.",
      author: "Michael Chen",
      title: "CTO, Global Tech Solutions",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
        <CardContent className="pt-10 pb-10 overflow-hidden">
          <div className="flex justify-center mb-8">
            <div className="rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-3">
              <Quote className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="relative h-[200px] md:h-[150px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <blockquote className="text-xl text-center italic mb-6">"{testimonial.quote}"</blockquote>
                <div className="text-center">
                  <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-colors"
          disabled={isAnimating}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-primary to-secondary w-6"
                  : "bg-muted hover:bg-primary/50"
              }`}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-colors"
          disabled={isAnimating}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

