import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Mail, Star, X } from "lucide-react";
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
  const [openService, setOpenService] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const services = [
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-repointing-UtFXzZuTDTVg8QTQ7dxLLE.webp",
      alt: "Before and after repointing",
      title: "Brick Repointing",
      desc: "Restore deteriorated mortar joints on your home with precision. We match original mortar specifications to maintain your property's character and durability.",
      detail: "Over time, weather and age cause mortar joints to crack, crumble and fall away, letting damp into the wall behind. We carefully rake out the old, failed mortar to a sound depth and repoint by hand using a mix matched to your property's age and original finish. The result is a weathertight wall that looks right and protects your brickwork for decades to come.",
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-chimney-4x5dqWBKtK7aaSFw7tqJpu.webp",
      alt: "Chimney repointing on rooftop",
      title: "Chimney Repointing",
      desc: "Expert chimney repointing and maintenance for domestic properties. We ensure your chimney is safe, weatherproof, and structurally sound.",
      detail: "Chimneys take the worst of the weather, so they're often the first part of a house to need attention. We repoint the brickwork and rebuild where needed, reseal around the flaunching and pots, and leave everything sound and watertight. Catching it early stops damp tracking down into the rooms below and avoids far costlier repairs later on.",
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-crack-stitch-LRN8YNXtvr9beUKJM3zpRb.png",
      alt: "Crack stitch repair installation",
      title: "Crack Stitch Repairs",
      desc: "Professional crack stitch repairs to stabilise and repair structural cracks in brickwork. Prevents further deterioration and restores wall integrity.",
      detail: "Cracks in brickwork are usually a sign of movement, and left alone they only get worse. We install stainless steel helical bars bedded into the mortar joints across the crack, knitting the wall back together and spreading the load. It's a discreet, permanent fix that restores strength without the upheaval and cost of major rebuilding.",
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-brick-replacement-BDSds2XjF64YwmGvzFUaC9.png",
      alt: "Professional brick replacement",
      title: "Brick Replacements",
      desc: "Expert brick replacement and matching services. We source period-appropriate bricks to seamlessly integrate with your existing brickwork.",
      detail: "Spalled, cracked or frost-damaged bricks don't just look poor — they let water into the wall. We cut out the damaged bricks and replace them with reclaimed or closely matched new ones, so the repair blends into the surrounding brickwork rather than standing out. Ideal for period and traditional homes where keeping the original character matters.",
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-waterproof-sealant-DjYPoKxfNfr9FVtwCjPL5o.png",
      alt: "Waterproof sealant application",
      title: "Waterproof Sealants",
      desc: "Premium waterproof sealant application to protect your brickwork from water ingress and weather damage. Long-lasting protection for your home.",
      detail: "For walls that are exposed or prone to damp, a breathable waterproofing treatment adds an extra layer of protection. It repels driving rain while still letting the wall breathe, helping keep interiors dry and reduce damp problems. We only apply it where it genuinely helps, and always once any pointing repairs are complete.",
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663744391217/XmXMrtkLjvbkwNo6exktzp/service-biocide-wash-aYMtZJ6naDEpeiTNhmkcLi.png",
      alt: "Before and after biocide wash",
      title: "Biocide Wash",
      desc: "Professional biocide cleaning to remove algae, moss, and lichen from brickwork. Restores appearance and prevents biological growth.",
      detail: "Algae, moss and lichen don't just make brickwork look tired — they hold moisture against the surface and speed up deterioration. Our biocide wash kills off the growth at the root and lifts years of green and black staining, leaving the brickwork clean and fresh. The perfect finishing touch after repointing, or a quick way to revive a property's appearance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center"><img src="/logo.svg" alt="Manchester Pointing Services" className="h-24 md:h-28 w-auto" /></a>
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
          <a href="#contact" className="hidden md:block"><Button className="bg-primary hover:bg-primary/90">Get Quote</Button></a>
        </div>
      </nav>

      {/* Hero Section - Offset Layout */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-32 relative">
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
                Professional brick pointing and repointing services for domestic properties across Bury, Manchester and the surrounding areas. We specialise in restoring and maintaining residential brickwork with meticulous attention to detail and traditional craftsmanship.
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
              Specialising in residential brick pointing, repointing, and masonry restoration across Bury and Greater Manchester.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {services.map((service, i) => (
              <Card key={i} className="p-8 bg-background hover:shadow-lg transition-shadow border-0">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-4">
                  {service.desc}
                </p>
                {openService === i && (
                  <p className="text-foreground/70 mb-4 border-t border-border pt-4">
                    {service.detail}
                  </p>
                )}
                <button
                  onClick={() => setOpenService(openService === i ? null : i)}
                  className="text-primary font-semibold hover:underline flex items-center gap-2"
                >
                  {openService === i ? "Show Less" : "Learn More"}
                  <ChevronRight className={`h-4 w-4 transition-transform ${openService === i ? "rotate-90" : ""}`} />
                </button>
              </Card>
            ))}
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
          <div className="hidden">
            {["all"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}>{tab}</button>
            ))}
          </div>

          {/* Uniform Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["job-1","job-2","job-3","job-4","job-5","job-6"].map((job, i) => {
              const alts = [
                "Natural stone barn conversion repointing",
                "Detached property repointing and brickwork",
                "Stone house repointing with scaffolding",
                "Apartment block brickwork restoration",
                "Semi-detached red brick repointing",
                "Garden wall brickwork and repointing",
              ];
              return (
                <div key={job} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={`/gallery/${job}.webp`}
                    alt={alts[i]}
                    loading="lazy"
                    onClick={() => setLightboxImg(`/gallery/${job}.webp`)}
                    className="w-full h-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              );
            })}
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
                With over 20 years of experience in domestic masonry restoration, Manchester Pointing has earned a reputation for exceptional quality and meticulous attention to detail. We specialise in residential brick pointing and repointing across Bury, Ramsbottom, Whitefield, Prestwich and the wider Greater Manchester area.
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
                Professional domestic brick pointing and repointing services across Bury and Greater Manchester.
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

      {/* Gallery Lightbox */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-5 right-5 text-white/90 hover:text-white"
            aria-label="Close image"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImg}
            alt="Completed project enlarged"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
          />
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/447376100510?text=Hi%2C%20I'm%20interested%20in%20getting%20a%20pointing%20quote%20for%20my%20property."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30" height="30">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
