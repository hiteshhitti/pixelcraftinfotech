import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,200,200,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
            Where deep tech meets human potential
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            <span className="text-balance">
              Master the skills that{" "}
              <span className="text-muted-foreground">shape tomorrow</span>
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            We are a collective of passionate technologists dedicated to transforming careers 
            through expert-led training in AI, Machine Learning, Data Science, and cutting-edge 
            technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 gap-2 text-base px-8"
            >
              Explore Programs
              <ArrowRight size={18} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border text-foreground hover:bg-secondary gap-2 text-base px-8"
            >
              Corporate Solutions
            </Button>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}
