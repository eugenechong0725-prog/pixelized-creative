"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { waLink, messages } from "@/lib/whatsapp";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#printing", label: "Printing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#quote", label: "Quote" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#home" className="relative flex items-center">
          <Image
            src="/images/logo-black.png"
            alt="Pixelized Creative"
            width={200}
            height={56}
            priority
            unoptimized
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-600 transition hover:text-brand-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-cyan-dark hover:shadow-lg sm:inline-flex"
          >
            Get A Quote
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy-100 bg-white/80 text-navy-800 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded bg-current transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 rounded bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 rounded bg-current transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-navy-800 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-cyan px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get A Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
