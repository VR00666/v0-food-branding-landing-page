import Image from "next/image"

const processes = [
  {
    step: "01",
    title: "Discovery",
    description: "We immerse ourselves in your culinary world, understanding your vision, values, and the flavors that define you."
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a comprehensive brand strategy that positions you uniquely in the market and resonates with your target audience."
  },
  {
    step: "03",
    title: "Design",
    description: "Our creative team brings your brand to life through visual identity, packaging, and touchpoint design."
  },
  {
    step: "04",
    title: "Launch",
    description: "We support you through launch and beyond, ensuring your brand makes the impact it deserves."
  }
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6 text-balance max-w-3xl mx-auto">
            A refined approach to food branding
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We follow a proven methodology that transforms raw ingredients of ideas into fully realized brand experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/process-food.jpg"
              alt="Fresh ingredients"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid gap-8">
            {processes.map((process) => (
              <div 
                key={process.step} 
                className="group flex gap-6 p-6 bg-background rounded-sm border border-transparent hover:border-accent transition-all"
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-3xl font-light text-accent">
                    {process.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
