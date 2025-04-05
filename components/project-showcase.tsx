"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, ChevronRight } from "lucide-react"

export default function ProjectShowcase() {
  const projects = [
    {
      title: "PakWheels Growth Initiative",
      description:
        "Led a comprehensive growth strategy for Pakistan's largest automotive marketplace, focusing on user acquisition and retention.",
      image: "./images/pakwheels.png",
      tags: ["Product Strategy", "Growth", "User Retention"],
      results: [
        "Increased organic traffic by 35%",
        "Improved conversion rate by 25%",
        "Enhanced user engagement metrics by 40%",
      ],
    },
    {
      title: "oladoc Healthcare Platform",
      description:
        "Spearheaded product development for Pakistan's biggest healthcare platform, connecting patients with 25,000+ doctors.",
      image: "./images/oladoc.png",
      tags: ["Healthcare Tech", "UX Design", "SEO"],
      results: ["Achieved 10x organic growth", "Improved conversion rate by 50%", "Boosted user retention by 30%"],
    },
    {
      title: "Fitcy Health Mental Wellness",
      description: "Developed new features and improved user experience for an online mental health care platform.",
      image: "./images/fitcy-health.png",
      tags: ["Mental Health", "User Experience", "Product Optimization"],
      results: ["20% increase in user engagement", "15% boost in conversion rate", "Improved session duration by 25%"],
    },
  ]

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="flex flex-col h-full overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="relative h-48 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
            <div className="relative w-full h-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <Link href="#contact" className="text-white font-medium flex items-center hover:underline">
                View Project <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-primary/10 hover:bg-primary/20 text-primary border-none transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Key Results:</h4>
              <ul className="space-y-1 text-sm">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-1 mt-0.5 shrink-0">
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
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="#contact" className="text-sm font-medium text-primary flex items-center hover:underline">
              Learn more about this project <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

