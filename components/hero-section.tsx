import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-food.jpg"
          alt="Artisan food ingredients"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-primary-foreground/80 text-sm uppercase tracking-[0.2em] mb-6">
            Food Branding Studio
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-primary-foreground leading-tight text-balance mb-8">
            Crafting memorable culinary experiences through design
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mb-10">
            We transform food brands into unforgettable stories. From farm-to-table concepts to artisan bakeries, we create identities that resonate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 group"
            >
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Our Approach
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
