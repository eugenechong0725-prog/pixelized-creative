import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "The flyers came out clean and colourful. Easy to order on WhatsApp and delivery was on time for our cafe promo.",
    name: "Aina Rahman",
    role: "Cafe Owner, Selangor",
  },
  {
    quote:
      "We needed business cards and a simple brand refresh. Pixelized Creative kept it straightforward and the price was fair.",
    name: "Jason Lim",
    role: "SME Owner, Kuala Lumpur",
  },
  {
    quote:
      "Good quality banners for our property viewing. Communication was clear and the turnaround worked for our launch.",
    name: "Priya Nair",
    role: "Real Estate Agent, Penang",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              What Clients Say
            </h2>
            <p className="mt-3 text-sm text-navy-500">
              Placeholder reviews for this sample — replace with real client
              feedback later.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
                <div className="mb-4 flex gap-1 text-accent" aria-hidden>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-navy-700">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-navy-100 pt-4">
                  <p className="font-display text-sm font-bold text-navy-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-navy-500">{item.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
