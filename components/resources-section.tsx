"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function ResourcesSection() {
  const resources = [
    {
      title: "The Product Retention Playbook",
      description: "15 Strategies That Increased User Retention by 30%",
      icon: <FileText className="h-8 w-8 text-white" />,
      details:
        "Learn the exact strategies I've used to help companies dramatically improve their user retention metrics. This playbook includes actionable tactics, measurement frameworks, and implementation guides.",
      pages: 24,
      format: "PDF",
    },
    {
      title: "Data-Driven Growth",
      description: "A Framework for Product Decisions That Drive Business Outcomes",
      icon: <FileText className="h-8 w-8 text-white" />,
      details:
        "Discover how to build a data infrastructure that informs product decisions and drives measurable business growth. Includes templates for tracking key metrics and making data-informed decisions.",
      pages: 32,
      format: "PDF",
    },
    {
      title: "The SaaS Conversion Checklist",
      description: "50 Optimizations That Improved Conversion by 50%",
      icon: <FileText className="h-8 w-8 text-white" />,
      details:
        "A comprehensive checklist of conversion optimizations for SaaS products. Each item includes implementation guidance and expected impact, based on real-world results.",
      pages: 18,
      format: "PDF",
    },
    {
      title: "Product-Market Fit Validation",
      description: "10 Experiments to Run Before Building Features",
      icon: <FileText className="h-8 w-8 text-white" />,
      details:
        "Learn how to validate product ideas before investing in development. This guide includes 10 practical experiments that help you confirm market demand and refine your value proposition.",
      pages: 15,
      format: "PDF",
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
        const newAnimatedItems = resources.reduce(
          (acc, resource, index) => {
            acc[resource.title] = true
            return acc
          },
          {} as { [key: string]: boolean },
        )
        setAnimatedItems(newAnimatedItems)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [inView, resources])

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-2">
      {resources.map((resource, index) => (
        <Card
          key={resource.title}
          className={`overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg group ${
            animatedItems[resource.title] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-3 group-hover:shadow-lg transition-all">
                {resource.icon}
              </div>
              <div>
                <CardTitle className="group-hover:text-primary transition-colors">{resource.title}</CardTitle>
                <CardDescription className="mt-1">{resource.description}</CardDescription>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{resource.details}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>{resource.pages} pages</span>
              </div>
              <div className="px-2 py-1 bg-primary/10 rounded text-primary font-medium">{resource.format}</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Download className="mr-2 h-4 w-4" /> Download Free Resource
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

