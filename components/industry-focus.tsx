"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, BarChart, ShoppingCart, Brain, DollarSign } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function IndustryFocus() {
  const industries = [
    {
      title: "HealthTech",
      description: "Improving patient outcomes through better digital experiences",
      icon: <Heart className="h-10 w-10 text-primary" />,
      expertise: [
        "Patient engagement & retention strategies",
        "Healthcare marketplace optimization",
        "Telehealth user experience design",
        "Medical data visualization",
      ],
    },
    {
      title: "SaaS",
      description: "Building sticky products that users can't live without",
      icon: <BarChart className="h-10 w-10 text-primary" />,
      expertise: [
        "User onboarding optimization",
        "Feature adoption frameworks",
        "Subscription conversion funnels",
        "Product analytics implementation",
      ],
    },
    {
      title: "E-commerce",
      description: "Turning browsers into buyers with seamless experiences",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      expertise: [
        "Purchase journey optimization",
        "Cart abandonment reduction",
        "Product discovery enhancement",
        "Personalization strategies",
      ],
    },
    {
      title: "FinTech",
      description: "Building trust and simplifying complex financial products",
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      expertise: [
        "Financial product simplification",
        "Trust-building UX patterns",
        "Compliance-friendly experiences",
        "Financial data visualization",
      ],
    },
    {
      title: "AI Products",
      description: "Making artificial intelligence valuable and accessible",
      icon: <Brain className="h-10 w-10 text-primary" />,
      expertise: [
        "AI feature adoption strategies",
        "Human-AI interaction design",
        "AI output quality perception",
        "Value demonstration frameworks",
      ],
    },
  ]

  const [animatedItems, setAnimatedItems] = useState<{ [key: string]: boolean }>({})
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const newAnimatedItems = industries.reduce(
          (acc, industry, index) => {
            acc[industry.title] = true
            return acc
          },
          {} as { [key: string]: boolean },
        )
        setAnimatedItems(newAnimatedItems)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [inView, industries])

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry, index) => (
        <Card
          key={industry.title}
          className={`overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg ${
            animatedItems[industry.title] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                {industry.icon}
              </div>
              <div>
                <CardTitle className="group-hover:text-primary transition-colors">{industry.title}</CardTitle>
                <CardDescription className="mt-1">{industry.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mt-4">
              {industry.expertise.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-1 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

