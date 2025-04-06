"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, FileText, Heart, BarChart, ShoppingCart, Brain, DollarSign } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "How I Helped a Telehealth Platform Increase User Retention by 30% in 90 Days",
      description: "A strategic approach to improving patient engagement and reducing churn in a telehealth platform.",
      industry: "HealthTech",
      icon: <Heart className="h-5 w-5" />,
      image: "/images/healthcare-dashboard.jpg",
      tags: ["User Retention", "Patient Engagement", "Telehealth"],
      challenge:
        "A healthcare company in Pakistan was struggling with high user churn rates. After initial consultations, patients weren't returning to the platform for follow-ups, resulting in poor health outcomes and lost revenue.",
      approach:
        "I implemented a comprehensive retention strategy focused on patient engagement loops, personalized follow-ups, and simplified user journeys.",
      implementation: [
        "Redesigned the post-consultation experience with personalized care plans",
        "Implemented behavioral triggers for follow-up reminders",
        "Created a health progress dashboard to visualize patient improvements",
        "Simplified the booking process from 7 steps to 3 steps",
      ],
      results: [
        "30% increase in 30-day user retention",
        "45% improvement in follow-up appointment bookings",
        "22% increase in patient satisfaction scores",
        "15% growth in recurring revenue",
      ],
      testimonial: {
        quote:
          "Ghazanfar's strategic approach transformed our user retention metrics. His focus on the entire patient journey, not just the core consultation experience, was exactly what we needed.",
        author: "Sarah J.",
        title: "CPO, Healthcare Platform in Pakistan",
      },
    },
    {
      title: "Transforming a B2B SaaS Conversion Funnel: A 50% Improvement Story",
      description: "Redesigning the trial-to-paid conversion journey for a B2B SaaS platform.",
      industry: "SaaS",
      icon: <BarChart className="h-5 w-5" />,
      image: "/images/saas-dashboard.jpg",
      tags: ["Conversion Optimization", "B2B SaaS", "User Onboarding"],
      challenge:
        "A SaaS company in the UAE had a robust product but was converting only 4% of free trial users to paid plans. The complex onboarding process and unclear value proposition were causing high abandonment rates.",
      approach:
        "I developed a value-first onboarding approach that demonstrated ROI within the first 10 minutes of product use.",
      implementation: [
        "Redesigned the onboarding flow to focus on key value moments",
        "Created interactive product tours tailored to user roles",
        "Implemented progressive feature revelation to reduce complexity",
        "Developed an ROI calculator to quantify product benefits",
      ],
      results: [
        "50% improvement in trial-to-paid conversion rate",
        "35% reduction in time-to-first-value",
        "42% increase in feature adoption during trials",
        "28% higher average contract value",
      ],
      testimonial: {
        quote:
          "The conversion improvements Ghazanfar delivered exceeded our expectations. His methodical approach to understanding user psychology and creating value-focused experiences transformed our business economics.",
        author: "Michael C.",
        title: "CEO, B2B SaaS Platform in UAE",
      },
    },
    {
      title: "Building Trust Through Product: How a Fintech Achieved 10X Growth",
      description: "Creating a trust-building product experience for a new fintech platform.",
      industry: "FinTech",
      icon: <DollarSign className="h-5 w-5" />,
      image: "/images/fintech-app.jpg",
      tags: ["Trust Building", "FinTech", "User Acquisition"],
      challenge:
        "A fintech startup in Singapore was struggling to acquire users in a competitive market. As a new entrant, they faced significant trust barriers that prevented users from linking their financial accounts.",
      approach:
        "I developed a trust-building product strategy that gradually established credibility through transparency, education, and progressive disclosure.",
      implementation: [
        "Created a transparent security center explaining data practices",
        "Implemented a staged onboarding that built trust before requesting sensitive information",
        "Developed social proof integration at key decision points",
        "Designed a financial insights dashboard that delivered value before requiring account linking",
      ],
      results: [
        "10X growth in user acquisition over 6 months",
        "65% increase in account linking completion",
        "40% reduction in security concern support tickets",
        "75% improvement in user trust metrics",
      ],
      testimonial: {
        quote:
          "Ghazanfar understood that in fintech, trust isn't just a marketing issue—it's a product design challenge. His approach transformed how users perceived our platform from the first interaction.",
        author: "Fatima Z.",
        title: "Product Director, Fintech Startup in Singapore",
      },
    },
    {
      title: "Optimizing the Purchase Journey: An E-commerce Path to 40% Higher AOV",
      description: "Redesigning the e-commerce experience to increase average order value and conversion rates.",
      industry: "E-commerce",
      icon: <ShoppingCart className="h-5 w-5" />,
      image: "/images/ecommerce-store.jpg",
      tags: ["E-commerce", "Conversion Rate", "Average Order Value"],
      challenge:
        "An e-commerce retailer in Saudi Arabia was experiencing high cart abandonment rates (78%) and low average order values, despite having competitive pricing and quality products.",
      approach:
        "I implemented a comprehensive purchase journey optimization focusing on reducing friction, enhancing product discovery, and implementing strategic upsell opportunities.",
      implementation: [
        "Streamlined checkout process from 5 pages to a single-page experience",
        "Redesigned product pages with social proof and enhanced visuals",
        "Implemented personalized product recommendations based on browsing behavior",
        "Created bundle offers with clear value propositions",
      ],
      results: [
        "40% increase in average order value",
        "32% reduction in cart abandonment rate",
        "28% improvement in conversion rate",
        "53% of customers now add recommended products to cart",
      ],
      testimonial: {
        quote:
          "The improvements to our purchase journey completely transformed our business economics. Ghazanfar's data-driven approach identified opportunities we hadn't seen and delivered results beyond our expectations.",
        author: "Ahmed K.",
        title: "E-commerce Director, Retail Company in Saudi Arabia",
      },
    },
    {
      title: "Making AI Valuable: How an AI Company Turned Technology into User Value",
      description: "Transforming a complex AI product into an intuitive, value-driven experience.",
      industry: "AI Products",
      icon: <Brain className="h-5 w-5" />,
      image: "/images/ai-product-interface.jpg",
      tags: ["AI Products", "User Experience", "Product Adoption"],
      challenge:
        "An AI technology company in India had developed sophisticated AI technology, but users found it difficult to understand and integrate into their workflows, resulting in low adoption and high churn.",
      approach:
        "I developed a user-centered approach that focused on translating AI capabilities into tangible user benefits and intuitive interactions.",
      implementation: [
        "Created use-case specific onboarding flows that demonstrated immediate value",
        "Redesigned the interface to hide complexity while maintaining power",
        "Implemented progressive AI assistance that grew with user expertise",
        "Developed clear before/after comparisons to demonstrate AI impact",
      ],
      results: [
        "65% improvement in feature adoption",
        "45% reduction in time-to-value for new users",
        "38% increase in daily active usage",
        "52% decrease in support tickets related to confusion",
      ],
      testimonial: {
        quote:
          "Ghazanfar bridged the gap between our technical capabilities and user needs. He transformed our product from a powerful but complex tool into an intuitive solution that users love and recommend.",
        author: "Priya S.",
        title: "Head of Product, AI Technology Company in India",
      },
    },
  ]

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null)

  return (
    <div className="space-y-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Card
            key={index}
            className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group h-full flex flex-col"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10">
                <Image
                  src={study.image || "/placeholder.svg?height=300&width=600"}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <div className="absolute top-4 left-4 z-20">
                <Badge className="bg-white text-primary border-none">
                  <div className="flex items-center gap-1">
                    {study.icon}
                    <span>{study.industry}</span>
                  </div>
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">{study.title}</CardTitle>
              <CardDescription className="line-clamp-2">{study.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-primary/10 hover:bg-primary/20 text-primary border-none transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium">Challenge:</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
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
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                    onClick={() => setSelectedCaseStudy(index)}
                  >
                    Read Case Study <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  {selectedCaseStudy !== null && (
                    <>
                      <DialogHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-primary/10 text-primary border-none">
                            <div className="flex items-center gap-1">
                              {caseStudies[selectedCaseStudy].icon}
                              <span>{caseStudies[selectedCaseStudy].industry}</span>
                            </div>
                          </Badge>
                          {caseStudies[selectedCaseStudy].tags.map((tag, i) => (
                            <Badge key={i} variant="outline" className="border-primary/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <DialogTitle className="text-2xl font-bold tracking-tight">
                          {caseStudies[selectedCaseStudy].title}
                        </DialogTitle>
                        <DialogDescription>{caseStudies[selectedCaseStudy].description}</DialogDescription>
                      </DialogHeader>
                      <div className="relative h-64 w-full overflow-hidden rounded-lg my-6">
                        <div className="relative w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10">
                          <Image
                            src={caseStudies[selectedCaseStudy].image || "/placeholder.svg?height=600&width=1200"}
                            alt={caseStudies[selectedCaseStudy].title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 800px"
                            unoptimized
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            Challenge
                          </h3>
                          <p>{caseStudies[selectedCaseStudy].challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            Approach
                          </h3>
                          <p>{caseStudies[selectedCaseStudy].approach}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            Implementation
                          </h3>
                          <ul className="space-y-2 mt-4">
                            {caseStudies[selectedCaseStudy].implementation.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
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
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            Results
                          </h3>
                          <ul className="space-y-2 mt-4">
                            {caseStudies[selectedCaseStudy].results.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-1 mt-1 shrink-0">
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
                                    className="text-white"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            Client Testimonial
                          </h3>
                          <blockquote className="italic text-muted-foreground">
                            "{caseStudies[selectedCaseStudy].testimonial.quote}"
                          </blockquote>
                          <div className="mt-4">
                            <p className="font-semibold">{caseStudies[selectedCaseStudy].testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {caseStudies[selectedCaseStudy].testimonial.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center pt-4">
                          <Button
                            asChild
                            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                          >
                            <Link href="#contact">
                              Work With Me <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
          <Link href="#contact">
            Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

