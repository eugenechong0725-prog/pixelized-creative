import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Image
            src="/images/logo-cyan.png"
            alt="Pixelized Creative"
            width={180}
            height={50}
            unoptimized
            className="h-9 w-auto"
          />
          <p className="text-sm text-navy-400">
            Crafting Your Digital Identity
          </p>
        </div>
        <p className="text-xs text-navy-500">
          Sample landing page · © {new Date().getFullYear()} Pixelized Creative
        </p>
      </div>
    </footer>
  );
}
