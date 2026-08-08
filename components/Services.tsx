import Reveal from "@/components/Reveal";
import { waLink, messages } from "@/lib/whatsapp";

const services = [
  {
    title: "Flyer Printing",
    description:
      "Eye-catching flyers for promotions, menus and events — printed fast at factory prices.",
    message: messages.flyer,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Business Card Printing",
    description:
      "Premium business cards that make a strong first impression for your brand.",
    message: messages.businessCard,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 10h6M6 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Banner & Marketing Materials",
    description:
      "Banners, posters and marketing prints for shops, events and grand openings.",
    message: messages.banner,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M4 5h16v6H4V5z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 11v8M17 11v8M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description:
      "Clean, professional designs for print and digital — ready for your business.",
    message: messages.graphicDesign,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Branding",
    description:
      "Logo, brand colours and identity kits so your business looks consistent everywhere.",
    message: messages.branding,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Social media creatives and digital assets that help you promote and sell.",
    message: messages.digitalMarketing,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 15l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI Video Editing",
    description:
      "Short, polished videos for social media and promotions — edited with AI speed.",
    message: messages.aiVideo,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17 10l4-2v8l-4-2v-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Everything Your Business Needs To Look Professional
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              From printing to design and branding — one place for Malaysian
              SMEs to get it done.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-cream/60 p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/30 hover:bg-white hover:shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {service.description}
                </p>
                <a
                  href={waLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:gap-2.5 hover:text-accent-bright"
                >
                  Enquire on WhatsApp
                  <span aria-hidden>→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
