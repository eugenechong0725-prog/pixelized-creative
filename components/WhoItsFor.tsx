import Reveal from "@/components/Reveal";

const audiences = [
  {
    title: "Restaurants & Cafes",
    desc: "Menus, flyers, stickers & promo prints",
    accent: "from-orange-400 to-rose-500",
  },
  {
    title: "Property & Real Estate",
    desc: "Name cards, banners & listing flyers",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    title: "Retail Businesses",
    desc: "In-store posters, tags & packaging",
    accent: "from-accent-light to-accent",
  },
  {
    title: "Corporate & SMEs",
    desc: "Brand kits, stationery & marketing",
    accent: "from-navy-600 to-navy-800",
  },
  {
    title: "Events & Grand Openings",
    desc: "Banners, invitations & promo packs",
    accent: "from-violet-500 to-indigo-600",
  },
  {
    title: "Product & Service Businesses",
    desc: "Catalogues, brochures & social creatives",
    accent: "from-cyan-400 to-blue-600",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Who It&apos;s For
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Built For Malaysian Businesses Like Yours
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              Whether you&apos;re launching, promoting or refreshing your brand —
              we help you look professional on a practical budget.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-navy-600">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
