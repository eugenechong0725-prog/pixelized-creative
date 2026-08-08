import Image from "next/image";
import { waLink, messages } from "@/lib/whatsapp";

const trustPoints = [
  "Professional Quality",
  "Fast Turnaround",
  "Malaysia Delivery",
  "SME Friendly",
];

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px] lg:max-w-none">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-cyan/10 via-brand-magenta/5 to-brand-orange/10" />
      <div className="absolute -right-4 top-8 h-24 w-24 rounded-full bg-brand-cyan/25 blur-2xl" />
      <div className="absolute bottom-10 left-0 h-32 w-32 rounded-full bg-brand-magenta/15 blur-3xl" />

      {/* Real flyer preview */}
      <div className="absolute left-[6%] top-[8%] z-20 w-[46%] -rotate-6 animate-float overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100">
        <div className="relative h-36 bg-navy-50 sm:h-40">
          <Image
            src="/images/portfolio-flyer.png"
            alt="Flyer design sample"
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
        <p className="py-2 text-center text-[10px] font-semibold uppercase tracking-wider text-navy-400">
          Flyer Design
        </p>
      </div>

      {/* Real business card */}
      <div className="absolute right-[4%] top-[18%] z-30 w-[52%] rotate-6 animate-float-delayed overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy-100">
        <div className="relative aspect-[1.7/1] bg-white p-2">
          <Image
            src="/images/portfolio-business-card.png"
            alt="Business card sample"
            fill
            unoptimized
            className="object-contain"
            sizes="240px"
          />
        </div>
        <p className="border-t border-navy-50 py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-navy-400">
          Business Card
        </p>
      </div>

      {/* Real branding logo */}
      <div className="absolute bottom-[12%] left-[10%] z-10 w-[72%] rotate-[-2deg] overflow-hidden rounded-xl bg-white p-3 shadow-card ring-1 ring-navy-100">
        <div className="relative mx-auto h-20 w-full max-w-[220px]">
          <Image
            src="/images/portfolio-bharat-group.png"
            alt="Branding logo sample"
            fill
            unoptimized
            className="object-contain"
            sizes="220px"
          />
        </div>
        <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-wider text-navy-400">
          Branding
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-magenta/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(15,28,48,0.06) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="animate-fade-up">
          <Image
            src="/images/logo-black.png"
            alt="Pixelized Creative"
            width={280}
            height={80}
            priority
            unoptimized
            className="mb-6 h-12 w-auto sm:h-14 lg:h-16"
          />

          <h1 className="font-display text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Printing, Design & Branding That Helps Your Business Stand Out.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
            Professional creative and printing solutions for SMEs, businesses
            and brands across Malaysia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-brand-cyan px-7 text-base font-semibold text-white shadow-glow transition hover:bg-brand-cyan-dark hover:scale-[1.02]"
            >
              Get A Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-navy-200 bg-white px-7 text-base font-semibold text-navy-800 transition hover:border-brand-cyan hover:text-brand-cyan"
            >
              View Our Services
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-navy-700"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3 w-3"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
