"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          required
          className="border-primary/20 focus:border-primary/50 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your email address"
          required
          className="border-primary/20 focus:border-primary/50 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          placeholder="Your company name"
          className="border-primary/20 focus:border-primary/50 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">I'm interested in</Label>
        <Select>
          <SelectTrigger className="border-primary/20 focus:border-primary/50 transition-colors">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="conversion">Conversion Rate Optimization</SelectItem>
            <SelectItem value="retention">User Retention Strategy</SelectItem>
            <SelectItem value="growth">Product Growth Audit</SelectItem>
            <SelectItem value="seo">SEO & Organic Growth</SelectItem>
            <SelectItem value="analytics">Product Analytics Implementation</SelectItem>
            <SelectItem value="strategy">Product Strategy Consulting</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Tell me about your project</Label>
        <Textarea
          id="message"
          placeholder="What challenges are you facing? What are your goals?"
          className="min-h-[120px] border-primary/20 focus:border-primary/50 transition-colors"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </div>
        ) : (
          "Request Free Consultation"
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        I'll respond within 24 hours to schedule a free 30-minute consultation.
      </p>
    </form>
  )
}

