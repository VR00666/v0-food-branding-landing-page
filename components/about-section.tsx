import Image from "next/image"

const stats = [
  { number: "150+", label: "Brands Crafted" },
  { number: "12", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
]

const values = [
  {
    number: "01",
    title: "Authenticity",
    description: "Every brand tells a genuine story rooted in the passion and craft of its creators."
  },
  {
    number: "02", 
    title: "Innovation",
    description: "We blend traditional culinary heritage with contemporary design thinking."
  },
  {
    number: "03",
    title: "Sustainability",
    description: "Our designs champion sustainable practices and mindful consumption."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6 text-balance">
              Where culinary passion meets creative vision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded in 2012, Artisan Food Co. has been at the forefront of food branding, helping restaurants, bakeries, and food artisans establish memorable identities that connect with their audiences on a deeper level.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We believe that every ingredient has a story, every dish tells a tale, and every brand deserves to be experienced, not just seen. Our team of designers, strategists, and food enthusiasts work collaboratively to create brands that taste as good as they look.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl lg:text-4xl font-medium text-foreground mb-1">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
              <Image
                src="/images/about-food.jpg"
                alt="Chef preparing food"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 lg:w-40 lg:h-40 bg-accent rounded-sm" />
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value) => (
              <div key={value.number} className="border border-border p-8 rounded-sm hover:border-accent transition-colors">
                <p className="font-serif text-5xl font-light text-accent/30 mb-4">
                  {value.number}
                </p>
                <h4 className="font-serif text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
