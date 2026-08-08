import Reveal from "@/components/Reveal";

const reasons = [
  {
    title: "Premium Quality Printing",
    copy: "Sharp colours and clean finishes that make your materials look professional.",
  },
  {
    title: "Professional Design",
    copy: "Designs that are clear, on-brand and ready for print or digital use.",
  },
  {
    title: "Factory-Level Pricing",
    copy: "Affordable rates so SMEs can print more without stretching the budget.",
  },
  {
    title: "Fast Turnaround",
    copy: "Most standard jobs move quickly so you can promote on time.",
  },
  {
    title: "Delivery Across Malaysia",
    copy: "We deliver nationwide so businesses outside big cities stay covered.",
  },
  {
    title: "Friendly Professional Service",
    copy: "Easy communication, clear quotations and helpful support from start to finish.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Why Businesses Choose Pixelized Creative
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              Affordable professional creative and printing solutions for
              Malaysian SMEs — factory-price printing with professional design
              and service.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 50}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-cyan text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {reason.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
