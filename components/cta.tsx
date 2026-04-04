import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,200,200,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
            Join us
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to transform your tech career?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re starting your journey or advancing your expertise, 
            PixelCraft Infotech has the programs and support to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 text-base px-8"
            >
              Browse All Programs
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border text-foreground hover:bg-secondary text-base px-8"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
