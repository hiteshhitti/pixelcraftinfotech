"use client"

import { useState } from "react"
import { CheckCircle, Users, Building2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const features = [
  "Customized curriculum tailored to your organization's needs",
  "Flexible scheduling - on-site, virtual, or hybrid delivery",
  "Industry-certified instructors with real-world experience",
  "Hands-on labs and practical projects",
  "Progress tracking and performance analytics",
  "Post-training support and resources",
]

const stats = [
  { icon: Users, value: "10,000+", label: "Professionals Trained" },
  { icon: Building2, value: "50+", label: "Corporate Clients" },
  { icon: Award, value: "95%", label: "Satisfaction Rate" },
]

const trainingOptions = [
  "AI & Machine Learning",
  "Data Science",
  "Web Development",
  "Digital Marketing",
  "Cisco Networking",
  "Operating Systems",
  "Cybersecurity",
  "Other",
]

export function Corporate() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    trainingType: "",
    teamSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `*New Corporate Training Inquiry*

*Name:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Training Program:* ${formData.trainingType}
*Team Size:* ${formData.teamSize}
*Message:* ${formData.message || "N/A"}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/918699717089?text=${encodedMessage}`
    
    window.open(whatsappUrl, "_blank")
    setOpen(false)
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      trainingType: "",
      teamSize: "",
      message: "",
    })
  }

  return (
    <section id="corporate" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              Corporate Training
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Empower your workforce with cutting-edge skills
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Partner with us to upskill your teams through customized corporate training programs. 
              We work with organizations of all sizes to deliver impactful learning experiences 
              that drive business results.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 text-base px-8"
                >
                  Request a Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-foreground text-xl">Request a Consultation</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Fill in your details and we&apos;ll get back to you within 24 hours.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary border-border text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">Company *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-secondary border-border text-foreground"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary border-border text-foreground"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-secondary border-border text-foreground"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="trainingType" className="text-foreground">Training Program *</Label>
                      <Select
                        required
                        value={formData.trainingType}
                        onValueChange={(value) => setFormData({ ...formData, trainingType: value })}
                      >
                        <SelectTrigger className="bg-secondary border-border text-foreground">
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {trainingOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-foreground">
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamSize" className="text-foreground">Team Size *</Label>
                      <Select
                        required
                        value={formData.teamSize}
                        onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                      >
                        <SelectTrigger className="bg-secondary border-border text-foreground">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="1-10" className="text-foreground">1-10</SelectItem>
                          <SelectItem value="11-50" className="text-foreground">11-50</SelectItem>
                          <SelectItem value="51-100" className="text-foreground">51-100</SelectItem>
                          <SelectItem value="100+" className="text-foreground">100+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Additional Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary border-border text-foreground min-h-[80px]"
                      placeholder="Tell us more about your training requirements..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    Send to WhatsApp
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="relative">
            <div className="bg-secondary rounded-2xl p-8 lg:p-12">
              <div className="grid gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-12 pt-8 border-t border-border">
                <blockquote className="text-foreground italic text-lg">
                  &ldquo;PixelCraft Infotech transformed our team&apos;s capabilities. Their AI and ML training 
                  program was exactly what we needed to stay competitive.&rdquo;
                </blockquote>
                <p className="mt-4 text-muted-foreground">
                  — Sarah Chen, CTO at Innovate Corp
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
