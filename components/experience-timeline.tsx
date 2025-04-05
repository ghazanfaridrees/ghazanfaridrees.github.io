import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Director of Product Studio",
      company: "Devsinc",
      period: "March 2024 - Present",
      location: "Lahore",
      description: "Leading the product studio to help companies build products that retain and grow users.",
      achievements: [],
    },
    {
      title: "Head of Product",
      company: "PakWheels.com",
      period: "February 2023 - March 2024",
      location: "Lahore, Punjab, Pakistan",
      description:
        "Managed a team of product managers, designers, and SEO experts. Engaged in strategic experiments to meet growth targets, emphasizing collaboration with stakeholders at all levels.",
      achievements: [],
    },
    {
      title: "Head of Product",
      company: "Fitcy Health",
      period: "August 2022 - February 2023",
      location: "Lahore",
      description:
        "Led a team to develop new features and improve the user experience for the online mental health care platform.",
      achievements: [
        "Implemented product optimizations resulting in 20% increase in user engagement",
        "Boosted conversion rate by 15% through UX improvements",
      ],
    },
    {
      title: "Head of Product",
      company: "oladoc.com",
      period: "February 2021 - May 2022",
      location: "Lahore, Punjab, Pakistan",
      description:
        "Led product strategy for Pakistan's biggest healthcare platform with 25,000+ doctors serving millions of users.",
      achievements: [
        "Achieved 10x organic growth in user acquisition",
        "Improved conversion rate by more than 50%",
        "Improved user retention by 30%",
        "Steered product strategy, roadmap, priorities, plans, and execution",
      ],
    },
    {
      title: "Product Manager",
      company: "oladoc.com",
      period: "February 2019 - January 2021",
      location: "Lahore, Pakistan",
      description: "Managed product development for healthcare platform connecting patients with doctors.",
      achievements: [],
    },
    {
      title: "Technical Product Manager",
      company: "CareMed Specialty Pharmacy",
      period: "September 2013 - January 2019",
      location: "USA",
      description: "Developed SaaS solutions for the US healthcare sector.",
      achievements: [
        "Created Salesdoor (a SaaS healthcare CRM solution)",
        "Developed GoRx.org for drug price comparison",
        "Built automated pre-certification tools",
        "Reduced data entry time by 80% with automation tools",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:border-l-secondary group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle className="group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <span className="font-medium">{exp.company}</span>
                  <span className="text-xs">•</span>
                  <span>{exp.period}</span>
                </CardDescription>
              </div>
              <Badge
                variant="outline"
                className="w-fit border-primary/20 group-hover:border-primary/50 transition-colors"
              >
                {exp.location}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <p>{exp.description}</p>
            {exp.achievements.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
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
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

