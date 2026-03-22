import Link from "next/link"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#" },
    { label: "Careers", href: "#" }
  ],
  services: [
    { label: "Brand Strategy", href: "#" },
    { label: "Visual Identity", href: "#" },
    { label: "Packaging Design", href: "#" },
    { label: "Digital Experience", href: "#" }
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
              Artisan
            </Link>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed">
              Crafting memorable food brands since 2012. We believe in the power of authentic storytelling.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Social</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            {`© ${new Date().getFullYear()} Artisan Food Co. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
