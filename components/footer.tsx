import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react"

const footerLinks = {
  programs: {
    title: "Programs",
    links: [
      { label: "Artificial Intelligence", href: "#" },
      { label: "Machine Learning", href: "#" },
      { label: "Data Science", href: "#" },
      { label: "Web Development", href: "#" },
      { label: "Digital Marketing", href: "#" },
      { label: "Cisco Networking", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Corporate Training", href: "#corporate" },
      { label: "Partners", href: "#partners" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "Help Center", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Student Portal", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="PixelCraft Infotech"
                width={100}
                height={100}
                className="w-18 h-18"
              />
              <span className="text-2xl font-bold text-foreground">
                <span className="text-primary">Pixel</span>Craft
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Transforming careers through expert-led technology training.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PixelCraft Infotech. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-muted-foreground">
            <span>D108D Phase-7, Industrial Area, Mohali</span>
            <span className="hidden md:inline">•</span>
            <span>+91 8699717089</span>
            <span className="hidden md:inline">•</span>
            <span>pixelcraftinfotech@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
