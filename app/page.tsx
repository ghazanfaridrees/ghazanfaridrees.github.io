import { ArrowRight, ChevronDown, ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillsSection from "@/components/skills-section"
import TestimonialSlider from "@/components/testimonial-slider"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "@/components/animated-counter"
import AnimatedBackground from "@/components/animated-background"
import ScrollReveal from "@/components/scroll-reveal"
import Logo from "@/components/logo"
import CaseStudies from "@/components/case-studies"
import ServicesSection from "@/components/services-section"
import IndustryFocus from "@/components/industry-focus"
import CalendlyIframe from "@/components/calendly-iframe"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            {["About", "Services", "Case Studies", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            <Link href="#contact">
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          <AnimatedBackground />
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
            <div className="space-y-4 mb-8">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-primary/10 text-primary animate-fade-in">
                Product-Led Growth Strategist
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient">
                Ghazanfar Idrees
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up">
                I Help Companies Build Products That Retain & Grow Users
              </p>
            </div>

            <p className="max-w-[700px] text-muted-foreground md:text-xl mb-8 animate-fade-in-up animation-delay-300">
              Specialized in conversion optimization, user retention, and growth strategies that deliver measurable
              business outcomes with 12+ years of experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto animate-fade-in-up animation-delay-500">
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Link href="#services">
                  See How I Can Help <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-primary/20 hover:border-primary/50 transition-colors"
              >
                <Link href="#contact">
                  Get in Touch <ChevronDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-in-up animation-delay-700">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="h-4 w-4" />
                <span>Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>ghazanfar.idrees@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>03336699003</span>
              </div>
            </div>
          </div>

          {/* Stats Counter */}
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-colors">
                <AnimatedCounter value={12} suffix="+" className="text-3xl md:text-4xl font-bold text-primary" />
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-colors">
                <AnimatedCounter value={50} suffix="+" className="text-3xl md:text-4xl font-bold text-primary" />
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-colors">
                <AnimatedCounter value={30} suffix="%" className="text-3xl md:text-4xl font-bold text-primary" />
                <p className="text-muted-foreground">Avg. Retention Increase</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-colors">
                <AnimatedCounter value={40} suffix="%" className="text-3xl md:text-4xl font-bold text-primary" />
                <p className="text-muted-foreground">Avg. Conversion Boost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Moved up for better lead generation */}
        <section id="services" className="py-20 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  My Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                  How I Can Help Your Business Grow
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Specialized services designed to deliver measurable improvements to your product metrics and business
                  outcomes.
                </p>
              </div>
              <ServicesSection />
              <div className="flex justify-center mt-12">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <Link href="#contact">
                    Discuss Your Project Needs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/50 to-background"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 relative">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-xl translate-x-4 translate-y-4"></div>
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-lg border border-primary/10">
                    <Image
                      src="./images/profile.png"
                      alt="Ghazanfar Idrees"
                      width={600}
                      height={600}
                      className="w-full h-auto"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    About Me
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Product Strategy Expert
                  </h2>
                  <p className="text-muted-foreground">
                    Most product teams focus on features. I focus on growth, retention, and impact. I've spent 12+ years
                    building, scaling, and optimizing digital products that drive real business results.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">What I Do:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-2 mt-1 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Help companies design sticky, high-retention products</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-2 mt-1 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Create data-driven growth strategies that work</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-2 mt-1 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Connect SEO, CRO, and user experience for sustainable growth</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-2 mt-1 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <span>Build scalable product frameworks that deliver long-term success</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    >
                      <Link href="#contact">
                        Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Industry Focus Section */}
        <section id="industry-focus" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  Industry Focus
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                  Specialized Experience
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  I bring deep expertise to these industries, with proven strategies tailored to their unique
                  challenges.
                </p>
              </div>
              <IndustryFocus />
              <div className="flex justify-center mt-12">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <Link href="#contact">
                    Work With an Industry Expert <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  Case Studies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                  Real Results for Real Clients
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Detailed case studies showcasing how my approach delivers measurable business outcomes.
                </p>
              </div>
              <CaseStudies />
            </ScrollReveal>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  My Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                  Professional Experience
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Over 12 years of experience building, scaling, and optimizing digital products that drive real
                  business results.
                </p>
              </div>
              <ExperienceTimeline />
            </ScrollReveal>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  My Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                  Skills & Expertise
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  My specialized skill set combines product strategy, growth tactics, and technical knowledge to create
                  products that users love.
                </p>
              </div>
              <SkillsSection />
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                  What People Say
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Feedback from clients and colleagues about my work and approach.
                </p>
              </div>
              <TestimonialSlider />
              <div className="flex justify-center mt-12">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <Link href="#contact">
                    Ready to Get Similar Results? <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section - Enhanced for lead generation */}
        <section id="contact" className="py-20 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    Get In Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Let's Grow Your Business Together
                  </h2>
                  <p className="text-muted-foreground">
                    Ready to improve your product metrics and drive business growth? I'm available for consulting,
                    advisory roles, and project-based work. Let's discuss how I can help you achieve your goals.
                  </p>
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-2">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">ghazanfar.idrees@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-2">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">03336699003</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-2">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Website</p>
                        <Link
                          href="https://ghazanfaridrees.com"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          ghazanfaridrees.com
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg mt-8">
                    <h3 className="font-semibold text-lg mb-2">Why Work With Me?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
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
                        <span className="text-sm">Data-driven approach with measurable results</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                        <span className="text-sm">12+ years of experience across multiple industries</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                        <span className="text-sm">Proven track record of increasing retention and conversion</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                        <span className="text-sm">Tailored strategies specific to your business needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-primary/5">

                  <h3 className="text-xl font-semibold py-4 text-center bg-gradient-to-r from-primary/5 to-secondary/5">

                    Schedule a Free Consultation

                  </h3>

                  <CalendlyIframe />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left relative z-10">
          <div className="flex items-center">
            <Logo className="text-base" />
            <span className="ml-2 text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/ghazanfaridrees"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:ghazanfar.idrees@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="tel:03336699003"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

