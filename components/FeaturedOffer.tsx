import Reveal from "@/components/Reveal";
import { waLink, messages } from "@/lib/whatsapp";

const includes = [
  "Full Colour Printing",
  "100g Art Paper",
  "1 Side Print",
  "Free Delivery subject to terms",
];

export default function FeaturedOffer() {
  return (
    <section id="printing" className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-cyan/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-brand-cyan/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
              Featured Offer
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A5 Flyer Printing
            </h2>
            <p className="mt-3 text-base text-navy-200">
              Popular promo package for businesses that need quality flyers
              without high costs.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-card sm:p-8">
              <div className="absolute right-5 top-5 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                SAVE RM20
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Best Value
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy-900">
                1000pcs A5 Flyers
              </h3>
              <p className="mt-1 text-navy-600">1 Side Print</p>

              <div className="mt-5 flex items-end gap-3">
                <span className="font-display text-5xl font-extrabold tracking-tight text-navy-900">
                  RM145
                </span>
                <span className="mb-2 text-lg text-navy-400 line-through">
                  RM165
                </span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-navy-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-700">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                3–4 Working Days Turnaround
              </p>

              <a
                href={waLink(messages.offer)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex min-h-[52px] w-full items-center justify-center rounded-full bg-brand-cyan text-base font-semibold text-white shadow-glow transition hover:bg-brand-cyan-dark"
              >
                Get This Offer
              </a>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent-cyan">
                  Also Available
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  1000pcs A5 Flyers
                </h3>
                <p className="mt-1 text-navy-300">2 Sides Print</p>
                <p className="mt-5 font-display text-5xl font-extrabold tracking-tight text-white">
                  RM245
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy-300">
                  Full colour, double-sided printing on 100g art paper. Ideal
                  when you need more information on both sides.
                </p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                  3–4 Working Days Turnaround
                </p>
              </div>

              <a
                href={waLink(
                  "Hi Pixelized Creative, I'm interested in the 1000pcs A5 Flyers 2 Sides (RM245) promotion. Can I get more details?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex min-h-[52px] w-full items-center justify-center rounded-full border-2 border-white/30 bg-transparent text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Get This Offer
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
