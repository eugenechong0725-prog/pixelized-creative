import Reveal from "@/components/Reveal";
import { waLink, messages, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready To Grow Your Brand?
              </h2>
              <p className="mt-4 text-base text-navy-200 sm:text-lg">
                Get professional printing and creative solutions for your
                business today.
              </p>
              <a
                href={waLink(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#25D366] px-8 text-base font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                WhatsApp Us Now
              </a>
              <p className="mt-4 text-sm text-navy-400">
                Or message {WHATSAPP_DISPLAY}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
