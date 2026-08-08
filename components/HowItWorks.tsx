import Reveal from "@/components/Reveal";

const steps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    copy: "Share your product, quantity, size and deadline on WhatsApp.",
  },
  {
    step: "02",
    title: "Get Your Quotation",
    copy: "Receive a clear quotation so you know the price upfront.",
  },
  {
    step: "03",
    title: "Confirm Design & Printing",
    copy: "Approve the artwork and printing details before we start.",
  },
  {
    step: "04",
    title: "We Print & Deliver",
    copy: "We produce your order and deliver it across Malaysia.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Simple Process. Fast Quotation.
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              No complicated forms. Just message us and we&apos;ll guide you.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />
          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className="relative text-center lg:text-left">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 font-display text-lg font-bold text-white shadow-soft lg:mx-0">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
