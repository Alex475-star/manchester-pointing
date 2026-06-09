import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Mail, Star } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Rugged Craftsman
 * - Warm cream (#F7F3EE) background, deep slate (#2C3E35) text
 * - Terracotta (#C1622F) accents for CTAs and highlights
 * - Playfair Display for headlines, Lato for body text
 * - Asymmetric layouts with generous whitespace
 * - Organic dividers and subtle textures
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">Manchester Pointing Services</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <a href="#contact"><Button className="bg-primary hover:bg-primary/90">Get Quote</Button></a>
        </div>
      </nav>

      {/* Hero Section - Offset Layout */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-block border-l-4 border-primary pl-4">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Domestic Pointing Specialists
                </p>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Expert Domestic Pointing for Your Home
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                Professional brick pointing and repointing services for domestic properties across Manchester. We specialise in restoring and maintaining residential brickwork with meticulous attention to detail and traditional craftsmanship.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Request Free Survey
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#gallery">
                  <Button size="lg" variant="outline">
                    View Our Work
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Hero Image - Bleeds off edge */}
            <div className="relative h-96 md:h-full -mr-12 md:-mr-24">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/hero-pointing-524vBeyARNw8xPE3NtDt8b.webp"
                alt="Skilled mason applying mortar to brick wall"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Organic Divider */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-secondary"
        >
          <path d="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z" />
        </svg>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-secondary py-20">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="inline-block border-l-4 border-primary pl-4 mb-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Services
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Domestic Pointing Excellence
            </h2>
            <p className="text-lg text-foreground/70">
              Specialising in residential brick pointing, repointing, and masonry restoration across Manchester.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="p-8 bg-background hover:shadow-lg transition-shadow border-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-repointing-UtFXzZuTDTVg8QTQ7dxLLE.webp"
                alt="Before and after repointing"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">Brick Repointing</h3>
              <p className="text-foreground/70 mb-4">
                Restore deteriorated mortar joints on your home with precision. We match original mortar specifications to maintain your property's character and durability.
              </p>
              <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </Card>

            {/* Service Card 2 */}
            <Card className="p-8 bg-background hover:shadow-lg transition-shadow border-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-chimney-4x5dqWBKtK7aaSFw7tqJpu.webp"
                alt="Chimney repointing on rooftop"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">Chimney Repointing</h3>
              <p className="text-foreground/70 mb-4">
                Expert chimney repointing and maintenance for domestic properties. We ensure your chimney is safe, weatherproof, and structurally sound.
              </p>
              <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </Card>

            {/* Service Card 3 */}
            <Card className="p-8 bg-background hover:shadow-lg transition-shadow border-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-crack-stitch-LRN8YNXtvr9beUKJM3zpRb.png"
                alt="Crack stitch repair installation"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">Crack Stitch Repairs</h3>
              <p className="text-foreground/70 mb-4">
                Professional crack stitch repairs to stabilise and repair structural cracks in brickwork. Prevents further deterioration and restores wall integrity.
              </p>
              <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </Card>

            {/* Service Card 4 */}
            <Card className="p-8 bg-background hover:shadow-lg transition-shadow border-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-brick-replacement-BDSds2XjF64YwmGvzFUaC9.png"
                alt="Professional brick replacement"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">Brick Replacements</h3>
              <p className="text-foreground/70 mb-4">
                Expert brick replacement and matching services. We source period-appropriate bricks to seamlessly integrate with your existing brickwork.
              </p>
              <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </Card>

            {/* Service Card 5 */}
            <Card className="p-8 bg-background hover:shadow-lg transition-shadow border-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-waterproof-sealant-DjYPoKxfNfr9FVtwCjPL5o.png"
                alt="Waterproof sealant application"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">Waterproof Sealants</h3>
              <p className="text-foreground/70 mb-4">
                Premium waterproof sealant application to protect your brickwork from water ingress and weather damage. Long-lasting protection for your home.
              </p>
              <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </Card>

            {/* Service Card 6 */}
            <Card className="p-8 bg-background hover:shadow-lg transition-shadow border-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-biocide-wash-aYMtZJ6naDEpeiTNhmkcLi.png"
                alt="Before and after biocide wash"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">Biocide Wash</h3>
              <p className="text-foreground/70 mb-4">
                Professional biocide cleaning to remove algae, moss, and lichen from brickwork. Restores appearance and prevents biological growth.
              </p>
              <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="inline-block border-l-4 border-primary pl-4 mb-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Work
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent Domestic Projects
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-12 border-b border-border pb-4">
            {["all", "terraced", "detached", "period"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary -mb-4 pb-2"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/gallery-wall-73ukjQujTUUHg7CTyjnqWs.webp"
                alt="Completed brick wall repointing"
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            </div>
            <div className="break-inside-avoid">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/gallery-terraced-home-CKMAyhnb8AeDGwFYPkM7Uk.webp"
                alt="Victorian terraced house repointing"
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            </div>
            <div className="break-inside-avoid">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/gallery-detached-property-JtpYbTk5AWt8VRSKKNbWnc.webp"
                alt="Detached home brick repointing"
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            </div>
            <div className="break-inside-avoid">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/gallery-period-property-N2Zz5PRYwCEn5iiCSHwF9K.webp"
                alt="Period property heritage brick pointing"
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/about-team-HgFCtQimmT6tds7tiq9qYy.webp"
                alt="Professional masonry team"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block border-l-4 border-primary pl-4">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                  About Manchester Pointing
                </p>
              </div>
              <h2 className="text-4xl font-bold">
                Trusted Domestic Pointing Experts
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                With over 20 years of experience in domestic masonry restoration, Manchester Pointing has earned a reputation for exceptional quality and meticulous attention to detail. We specialise in residential brick pointing and repointing across the Manchester area.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fully qualified and insured professionals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Specialise in domestic properties</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Free surveys and detailed quotations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Warranty on all work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block border-l-4 border-primary pl-4 mb-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Client Feedback
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Homeowner, Didsbury",
                text: "Manchester Pointing transformed our Victorian terrace. The repointing work is immaculate and they were professional throughout. Highly recommended!",
                rating: 5,
              },
              {
                name: "James Robertson",
                role: "Homeowner, Stockport",
                text: "Excellent work on our 1930s semi. They matched the original mortar perfectly and the attention to detail was outstanding.",
                rating: 5,
              },
              {
                name: "Emma Davies",
                role: "Homeowner, Altrincham",
                text: "Professional, reliable, and they completed the work on time and within budget. Our brickwork looks like new again!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 bg-secondary border-0">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Pointing Survey
            </h2>
            <p className="text-lg opacity-90">
              Contact us today for a free, no-obligation assessment of your domestic pointing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 opacity-80" />
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:07376100510" className="opacity-90 hover:opacity-100 underline">07376 100 510</a>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 opacity-80" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="opacity-90">info@manchesterpointing.co.uk</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 opacity-80" />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="opacity-90">Manchester & Surrounding Areas</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/meewkkqe"
            method="POST"
            className="max-w-2xl mx-auto bg-background text-foreground p-8 rounded-lg space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input type="hidden" name="_subject" value="New enquiry from Manchester Pointing website" />
            <input type="hidden" name="_next" value="https://manchesterpointing.co.uk" />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Request Free Survey
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Manchester Pointing</h3>
              <p className="text-background/80 text-sm">
                Professional domestic brick pointing and repointing services across Manchester.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background">Brick Repointing</a></li>
                <li><a href="#" className="hover:text-background">Chimney Repointing</a></li>
                <li><a href="#" className="hover:text-background">Brick Repair</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background">About Us</a></li>
                <li><a href="#" className="hover:text-background">Our Work</a></li>
                <li><a href="#" className="hover:text-background">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2026 Manchester Pointing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
