import { Target, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We&apos;re committed to democratizing tech education and helping individuals achieve their career goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Our curriculum evolves with the industry, ensuring you learn the skills that matter most.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Join a thriving network of learners, mentors, and industry professionals.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              The tech artisans shaping the future of learning
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              PixelCraft Infotech was founded with a singular vision: to bridge the gap between 
              academic knowledge and industry demands. We are a collective of passionate 
              educators, technologists, and industry veterans dedicated to transforming how 
              people learn technology.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our approach combines deep technical expertise with a human-centric methodology, 
              ensuring that every learner not only gains skills but also the confidence to 
              apply them in real-world scenarios.
            </p>
          </div>

          <div className="space-y-6">
            {values.map((value) => (
              <div key={value.title} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: value.description.replace("&apos;", "'") }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
