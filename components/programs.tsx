"use client"

import { 
  Brain, 
  Code, 
  BarChart3, 
  Megaphone, 
  Network, 
  Monitor,
  Database,
  Shield,
  ArrowRight,
  Clock,
  Users,
  Award,
  CheckCircle,
  BookOpen
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const programs = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Master AI fundamentals, neural networks, deep learning, and practical applications with hands-on projects.",
    duration: "12 Weeks",
    level: "Intermediate to Advanced",
    certification: "AI Professional Certificate",
    overview: "This comprehensive AI program covers everything from fundamental concepts to advanced implementations. You'll learn to build intelligent systems that can perceive, reason, learn, and act autonomously.",
    modules: [
      "Introduction to AI & Machine Intelligence",
      "Neural Networks & Deep Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Reinforcement Learning",
      "AI Ethics & Responsible AI",
      "Generative AI & Large Language Models",
      "Capstone Project: Real-World AI Application"
    ],
    skills: ["TensorFlow", "PyTorch", "Python", "OpenAI API", "Hugging Face", "LangChain"],
    career: ["AI Engineer", "ML Researcher", "AI Solutions Architect", "Data Scientist"]
  },
  {
    icon: BarChart3,
    title: "Machine Learning",
    description: "Learn supervised, unsupervised, and reinforcement learning techniques with real-world datasets.",
    duration: "10 Weeks",
    level: "Beginner to Intermediate",
    certification: "Machine Learning Specialist Certificate",
    overview: "Dive deep into machine learning algorithms and techniques. This program provides hands-on experience with real-world datasets and prepares you to build predictive models and intelligent systems.",
    modules: [
      "ML Fundamentals & Mathematics",
      "Supervised Learning: Regression & Classification",
      "Unsupervised Learning: Clustering & Dimensionality Reduction",
      "Feature Engineering & Selection",
      "Model Evaluation & Hyperparameter Tuning",
      "Ensemble Methods & Boosting",
      "Time Series Analysis & Forecasting",
      "ML Pipeline & Deployment"
    ],
    skills: ["Scikit-learn", "Python", "Pandas", "NumPy", "Jupyter", "MLflow"],
    career: ["ML Engineer", "Data Scientist", "Predictive Analyst", "Research Scientist"]
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Comprehensive training in data analysis, visualization, statistical modeling, and big data tools.",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    certification: "Data Science Professional Certificate",
    overview: "Become a complete data scientist with expertise in collecting, analyzing, and interpreting large datasets. Learn to extract insights and drive data-driven decision making in organizations.",
    modules: [
      "Data Science Fundamentals & Statistics",
      "Data Wrangling & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization with Python & Tableau",
      "Statistical Modeling & Hypothesis Testing",
      "Big Data Technologies: Spark & Hadoop",
      "SQL & NoSQL Databases",
      "Business Intelligence & Reporting"
    ],
    skills: ["Python", "R", "SQL", "Tableau", "Power BI", "Apache Spark", "Excel"],
    career: ["Data Scientist", "Data Analyst", "Business Analyst", "BI Developer"]
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack development covering modern frameworks, APIs, databases, and deployment strategies.",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    certification: "Full Stack Web Developer Certificate",
    overview: "Master both frontend and backend development to become a complete full-stack developer. Build modern, responsive, and scalable web applications using the latest technologies and frameworks.",
    modules: [
      "HTML5, CSS3 & Modern JavaScript (ES6+)",
      "React.js & Next.js Frontend Development",
      "Node.js & Express Backend Development",
      "Database Design: MongoDB & PostgreSQL",
      "RESTful APIs & GraphQL",
      "Authentication & Authorization",
      "DevOps: Docker, CI/CD & Cloud Deployment",
      "Performance Optimization & Security"
    ],
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Git"],
    career: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Architect"]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, social media marketing, content strategy, analytics, and paid advertising expertise.",
    duration: "8 Weeks",
    level: "Beginner to Intermediate",
    certification: "Digital Marketing Professional Certificate",
    overview: "Learn to create and execute comprehensive digital marketing strategies. Master the art of reaching target audiences through multiple digital channels and measuring campaign effectiveness.",
    modules: [
      "Digital Marketing Fundamentals",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM) & PPC",
      "Social Media Marketing Strategy",
      "Content Marketing & Copywriting",
      "Email Marketing Automation",
      "Google Analytics & Data-Driven Marketing",
      "Marketing Campaign Planning & Execution"
    ],
    skills: ["Google Ads", "Meta Ads", "Google Analytics", "SEMrush", "Mailchimp", "Canva"],
    career: ["Digital Marketing Manager", "SEO Specialist", "Social Media Manager", "Content Strategist"]
  },
  {
    icon: Network,
    title: "Cisco Networking",
    description: "CCNA, CCNP certifications with routing, switching, security, and network automation.",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    certification: "CCNA / CCNP Certification Prep",
    overview: "Prepare for Cisco certifications and become an expert in designing, implementing, and managing enterprise networks. Learn networking fundamentals through advanced concepts with hands-on lab practice.",
    modules: [
      "Network Fundamentals & OSI Model",
      "IP Addressing & Subnetting",
      "Routing Protocols: OSPF, EIGRP, BGP",
      "Switching & VLANs",
      "Network Security & Access Control",
      "Wireless Networking",
      "Network Automation with Python",
      "Troubleshooting & Network Management"
    ],
    skills: ["Cisco IOS", "Packet Tracer", "GNS3", "Python", "Wireshark", "Network+"],
    career: ["Network Engineer", "Network Administrator", "Systems Engineer", "IT Infrastructure Specialist"]
  },
  {
    icon: Monitor,
    title: "Operating Systems",
    description: "Linux, Windows Server administration, virtualization, and cloud infrastructure management.",
    duration: "10 Weeks",
    level: "Beginner to Intermediate",
    certification: "System Administrator Certificate",
    overview: "Master operating system administration for enterprise environments. Learn to manage, secure, and optimize both Linux and Windows servers along with virtualization and cloud technologies.",
    modules: [
      "Linux Fundamentals & Command Line",
      "Linux System Administration",
      "Windows Server Administration",
      "Active Directory & Group Policy",
      "Shell Scripting & Automation",
      "Virtualization: VMware & Hyper-V",
      "Container Technologies: Docker & Kubernetes",
      "Cloud Infrastructure: AWS & Azure Basics"
    ],
    skills: ["Linux", "Windows Server", "Bash", "PowerShell", "Docker", "VMware", "AWS"],
    career: ["System Administrator", "Linux Engineer", "DevOps Engineer", "Cloud Administrator"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Ethical hacking, penetration testing, security audits, and compliance frameworks.",
    duration: "14 Weeks",
    level: "Intermediate to Advanced",
    certification: "Certified Ethical Hacker Prep",
    overview: "Become a cybersecurity professional capable of protecting organizations from cyber threats. Learn offensive and defensive security techniques, compliance frameworks, and incident response.",
    modules: [
      "Cybersecurity Fundamentals & Threat Landscape",
      "Network Security & Firewalls",
      "Ethical Hacking & Penetration Testing",
      "Vulnerability Assessment & Management",
      "Web Application Security (OWASP)",
      "Security Operations & SIEM",
      "Incident Response & Forensics",
      "Compliance: ISO 27001, GDPR, PCI-DSS"
    ],
    skills: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark", "Splunk"],
    career: ["Security Analyst", "Penetration Tester", "Security Engineer", "SOC Analyst"]
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
            What we offer
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our collection of tech services spans every stage of digital transformation.
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore how we help professionals and businesses transform through industry-leading training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Dialog key={program.title}>
              <DialogTrigger asChild>
                <Card 
                  className="bg-card border-border hover:border-accent/50 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                      <program.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight size={14} />
                    </span>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <program.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-foreground">
                        {program.title}
                      </DialogTitle>
                      <p className="text-muted-foreground text-sm mt-1">{program.certification}</p>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-secondary/50 rounded-lg p-4 text-center">
                      <Clock className="w-5 h-5 text-accent mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-medium text-foreground">{program.duration}</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4 text-center">
                      <Users className="w-5 h-5 text-accent mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">Level</p>
                      <p className="text-sm font-medium text-foreground">{program.level}</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4 text-center">
                      <Award className="w-5 h-5 text-accent mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">Certificate</p>
                      <p className="text-sm font-medium text-foreground">Included</p>
                    </div>
                  </div>

                  {/* Overview */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-accent" />
                      Course Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.overview}
                    </p>
                  </div>

                  {/* Curriculum */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Curriculum
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.modules.map((module, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Skills You&apos;ll Learn
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Career Paths */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Career Opportunities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.career.map((path) => (
                        <span 
                          key={path}
                          className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full"
                        >
                          {path}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                    <Button 
                      className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                      onClick={() => {
                        const message = `Hi! I'm interested in the ${program.title} course. Please share more details about enrollment, batch timings, and fees.`
                        const whatsappUrl = `https://wa.me/918699717089?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, '_blank')
                      }}
                    >
                      Enroll Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-border hover:bg-secondary"
                      onClick={() => {
                        const message = `Hi! I'd like to download the brochure for the ${program.title} course.`
                        const whatsappUrl = `https://wa.me/918699717089?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, '_blank')
                      }}
                    >
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
