"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Zap, TrendingUp, LineChart, Search, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function ServicesSection() {
  const services = [
    {
      title: "Conversion Rate Optimization",
      description: "Transform your funnel to convert more visitors into paying customers",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      details: [
        "Comprehensive funnel analysis and optimization",
        "A/B testing program development",
        "User journey mapping and friction point removal",
        "Checkout and signup flow optimization",
      ],
      outcome: "30-50% improvement in conversion rates",
    },
    {
      title: "User Retention Strategy",
      description: "Keep users engaged and reduce churn with data-driven retention tactics",
      icon: <Zap className="h-8 w-8 text-white" />,
      details: [
        "Churn analysis and prevention strategy",
        "Engagement loop design and implementation",
        "Personalized user journey optimization",
        "Retention metrics framework development",
      ],
      outcome: "20-30% improvement in user retention",
    },
    {
      title: "Product Growth Audit",
      description: "Identify growth opportunities and optimize your product metrics",
      icon: <BarChart className="h-8 w-8 text-white" />,
      details: [
        "Comprehensive analysis of current product metrics",
        "Identification of growth bottlenecks",
        "Prioritized roadmap for improvement",
        "Competitive analysis and benchmarking",
      ],
      outcome: "Clear path to 30%+ improvement in key metrics",
    },
    {
      title: "SEO & Organic Growth",
      description: "Drive sustainable traffic and user acquisition through SEO",
      icon: <Search className="h-8 w-8 text-white" />,
      details: [
        "Technical SEO audit and optimization",
        "Content strategy development",
        "Keyword research and implementation",
        "SEO-driven product feature planning",
      ],
      outcome: "35-50% increase in organic traffic and acquisition",
    },
    {
      title: "Product Analytics Implementation",
      description: "Build a data infrastructure that drives product decisions",
      icon: <LineChart className="h-8 w-8 text-white" />,
      details: [
        "Analytics strategy and implementation",
        "Custom dashboard development",
        "Key metrics definition and tracking",
        "Data-driven decision making framework",
      ],
      outcome: "Complete visibility into user behavior and product performance",
    },
    {
      title: "Product Strategy Consulting",
      description: "Strategic guidance to align your product with business goals",
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      details: [
        "Product vision and roadmap development",
        "Feature prioritization framework",
        "Go-to-market strategy",
        "Product-market fit validation",
      ],
      outcome: "Focused product direction that drives business growth",
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
        const newAnimatedItems = services.reduce(
          (acc, service, index) => {
            acc[service.title] = true
            return acc
          },
          {} as { [key: string]: boolean },
        )
        setAnimatedItems(newAnimatedItems)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [inView, services])

  return (
    <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Card
          key={service.title}
          className={`overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg group h-full flex flex-col ${
            animatedItems[service.title] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-3 group-hover:shadow-lg transition-all">
                {service.icon}
              </div>
              <div>
                <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="mt-1">{service.description}</CardDescription>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <div>
              <h4 className="text-sm font-medium mb-2">What's Included:</h4>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 shrink-0">
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
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Expected Outcome:</h4>
              <p className="text-sm font-medium text-primary">{service.outcome}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <Link href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

