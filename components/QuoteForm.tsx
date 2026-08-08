"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/whatsapp";

const services = [
  "Flyer Printing",
  "Business Card Printing",
  "Banner & Marketing Materials",
  "Graphic Design",
  "Branding",
  "Digital Marketing",
  "AI Video Editing",
  "Other",
];

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState("Flyer Printing");
  const [details, setDetails] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      "Hi Pixelized Creative, I would like to request a quotation.",
      "",
      `Name: ${name.trim() || "-"}`,
      `Phone / WhatsApp: ${phone.trim() || "-"}`,
      `Business: ${business.trim() || "-"}`,
      `Service: ${service}`,
      `Details: ${details.trim() || "-"}`,
    ];

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="quote" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
                Free Quotation
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Tell Us What You Need
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
                Fill in a few details and we&apos;ll open WhatsApp with your
                request ready — no complicated checkout, just a clear quotation.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-navy-700">
                {[
                  "Reply usually within office hours",
                  "Clear pricing before you confirm",
                  "Printing, design & branding in one place",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
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
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-sm font-semibold text-navy-800">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="min-h-[48px] w-full rounded-xl border border-navy-200 bg-cream/50 px-4 text-sm text-navy-900 outline-none transition placeholder:text-navy-400 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-brand-cyan/20"
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-sm font-semibold text-navy-800">
                    Phone / WhatsApp
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01X-XXX XXXX"
                    className="min-h-[48px] w-full rounded-xl border border-navy-200 bg-cream/50 px-4 text-sm text-navy-900 outline-none transition placeholder:text-navy-400 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-brand-cyan/20"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy-800">
                    Business / Company{" "}
                    <span className="font-normal text-navy-400">(optional)</span>
                  </span>
                  <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="e.g. Cafe, clinic, property agency"
                    className="min-h-[48px] w-full rounded-xl border border-navy-200 bg-cream/50 px-4 text-sm text-navy-900 outline-none transition placeholder:text-navy-400 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-brand-cyan/20"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy-800">
                    Service Needed
                  </span>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="min-h-[48px] w-full rounded-xl border border-navy-200 bg-cream/50 px-4 text-sm text-navy-900 outline-none transition focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-brand-cyan/20"
                  >
                    {services.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy-800">
                    Project Details
                  </span>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Quantity, size, deadline, or any special request..."
                    className="w-full resize-y rounded-xl border border-navy-200 bg-cream/50 px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-navy-400 focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-brand-cyan/20"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-base font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </button>

              <p className="mt-3 text-center text-xs text-navy-500">
                Submitting opens WhatsApp with your details — nothing is stored on
                this sample page.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
