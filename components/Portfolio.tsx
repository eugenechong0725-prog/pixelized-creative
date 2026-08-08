import Image from "next/image";
import Reveal from "@/components/Reveal";

const items = [
  {
    category: "Business Cards",
    title: "Cameron Valley Tea Name Card",
    image: "/images/portfolio-business-card.png",
    alt: "Cameron Valley Tea business card design by Pixelized Creative",
    fit: "contain" as const,
  },
  {
    category: "Branding",
    title: "Bharat Group Logo Design",
    image: "/images/portfolio-bharat-group.png",
    alt: "Bharat Group logo design by Pixelized Creative",
    fit: "contain" as const,
  },
  {
    category: "Flyers",
    title: "A4 Landscape Flyer Design",
    image: "/images/portfolio-flyer.png",
    href: "/images/flyer-design.pdf",
    alt: "A4 landscape flyer design sample",
    fit: "cover" as const,
  },
  {
    category: "Posters",
    title: "Retail Promo Poster",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    alt: "Colourful graphic design and poster artwork on a studio desk",
    fit: "cover" as const,
  },
  {
    category: "Social Media Designs",
    title: "Social Feed Creatives",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80",
    alt: "Social media content design mockup on a smartphone",
    fit: "cover" as const,
  },
  {
    category: "Marketing Materials",
    title: "Store & Event Materials",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    alt: "Marketing team reviewing printed campaign materials",
    fit: "cover" as const,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              Real client samples plus professional print and creative project
              visuals — replace stock shots with more of your own work anytime.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-cream shadow-soft transition hover:shadow-card">
                <div className="relative min-h-[220px] flex-1 overflow-hidden bg-navy-50">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block h-full min-h-[220px]"
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute bottom-3 right-3 rounded-full bg-brand-cyan px-3 py-1 text-xs font-semibold text-white shadow-soft">
                        Open PDF
                      </span>
                    </a>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className={`transition duration-500 group-hover:scale-[1.04] ${
                        item.fit === "contain"
                          ? "object-contain p-4"
                          : "object-cover"
                      }`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="border-t border-navy-100 bg-white px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-cyan">
                    {item.category}
                  </p>
                  <h3 className="mt-0.5 font-display text-sm font-bold text-navy-900">
                    {item.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
