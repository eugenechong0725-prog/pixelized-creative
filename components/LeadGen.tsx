"use client";

import Reveal from "@/components/Reveal";
import { serviceMessage, waLink } from "@/lib/whatsapp";

const quickServices = [
  "Flyers",
  "Business Cards",
  "Banner",
  "Graphic Design",
  "Branding",
  "Other",
];

const serviceLabelMap: Record<string, string> = {
  Flyers: "Flyer Printing",
  "Business Cards": "Business Card Printing",
  Banner: "Banner Printing",
  "Graphic Design": "Graphic Design",
  Branding: "Branding",
  Other: "Other services",
};

export default function LeadGen() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cyan via-[#0090b8] to-navy-900 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need Printing or Design for Your Business?
          </h2>
          <p className="mt-4 text-base text-blue-100 sm:text-lg">
            Tell us what you need and get a quotation directly through WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {quickServices.map((service) => (
              <a
                key={service}
                href={waLink(serviceMessage(serviceLabelMap[service]))}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-accent"
              >
                {service}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-sm text-blue-100/80">
            Tap a service above — WhatsApp opens with your request ready.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
