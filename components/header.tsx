import Image from "next/image";
import { site } from "@/data/site";

const navLinks = [
  { href: "#familias", label: "Familias" },
  { href: "#profesionales", label: "Profesionales" },
  { href: "#docentes", label: "Docentes" },
  { href: "#instituciones", label: "Instituciones" },
  { href: "#biblioteca", label: "Biblioteca" },
  { href: "#gratis", label: "Recursos gratuitos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand-300/60 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="logo.svg"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          />
          <span className="font-serif text-lg leading-tight text-sage-800 sm:text-xl">
            Tiempo
            <br className="hidden sm:block" /> de Movimiento
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-sage-50 hover:text-sage-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(
              "Hola, quiero consultar por los servicios de Tiempo de Movimiento",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-sage-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sage-600 sm:inline-flex"
          >
            Inscribirme
          </a>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full px-4 py-2 text-sm font-semibold text-sage-700 ring-1 ring-sage-300 transition-colors hover:bg-sage-50">
              Menú
            </summary>
            <nav
              className="absolute right-0 mt-2 w-56 rounded-2xl border border-sand-300 bg-white p-2 shadow-lg"
              aria-label="Menú móvil"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-700 hover:bg-sage-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}