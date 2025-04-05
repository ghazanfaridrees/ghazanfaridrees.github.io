"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, LineChart, Search, TrendingUp, Users, Zap } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Product Management",
      description: "Building products that users love and businesses value",
      icon: <Zap className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Product Strategy", level: 95 },
        { name: "User Experience Design", level: 90 },
        { name: "Product Roadmapping", level: 92 },
        { name: "Agile Methodologies", level: 88 },
        { name: "Product Analytics", level: 85 },
      ],
    },
    {
      title: "Growth Hacking",
      description: "Data-driven strategies to acquire and retain users",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      skills: [
        { name: "User Acquisition", level: 90 },
        { name: "Conversion Rate Optimization", level: 92 },
        { name: "A/B Testing", level: 85 },
        { name: "Growth Modeling", level: 88 },
        { name: "Retention Strategies", level: 93 },
      ],
    },
    {
      title: "SEO & Marketing",
      description: "Driving organic traffic and visibility",
      icon: <Search className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Search Engine Optimization", level: 95 },
        { name: "Content Strategy", level: 88 },
        { name: "Technical SEO", level: 90 },
        { name: "Keyword Research", level: 92 },
        { name: "Analytics & Reporting", level: 87 },
      ],
    },
    {
      title: "Leadership & Management",
      description: "Building and leading high-performing teams",
      icon: <Users className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Stakeholder Management", level: 92 },
        { name: "Strategic Planning", level: 88 },
        { name: "Cross-functional Collaboration", level: 93 },
        { name: "Mentoring & Coaching", level: 85 },
      ],
    },
    {
      title: "Data & Analytics",
      description: "Turning data into actionable insights",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Data Analysis", level: 88 },
        { name: "KPI Definition & Tracking", level: 90 },
        { name: "User Behavior Analysis", level: 92 },
        { name: "Funnel Optimization", level: 87 },
        { name: "Reporting & Dashboards", level: 85 },
      ],
    },
    {
      title: "Technical Skills",
      description: "Technical knowledge to bridge product and development",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Software Development Lifecycle", level: 85 },
        { name: "API Design", level: 80 },
        { name: "Database Design", level: 75 },
        { name: "Web Technologies", level: 82 },
        { name: "Technical Documentation", level: 88 },
      ],
    },
  ]

  // Animation for skill bars
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: boolean }>({})

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedSkills(
          skillCategories.reduce(
            (acc, category) => {
              category.skills.forEach((skill) => {
                acc[`${category.title}-${skill.name}`] = true
              })
              return acc
            },
            {} as { [key: string]: boolean },
          ),
        )
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [inView, skillCategories])

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-primary/10 hover:border-primary/30"
        >
          <CardHeader className="pb-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                {category.icon}
              </div>
              <div>
                <CardTitle className="group-hover:text-primary transition-colors">{category.title}</CardTitle>
                <CardDescription className="mt-1">{category.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                      style={{
                        width: animatedSkills[`${category.title}-${skill.name}`] ? `${skill.level}%` : "0%",
                        transitionDelay: `${i * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

