import { audiences } from "@/data/audiences";
import { site } from "@/data/site";

const columnas = [
  {
    titulo: "Familias",
    links: [
      { label: "Orientaciones individuales", href: "#orientaciones" },
      { label: "Packs de encuentros", href: "#packs" },
      { label: "Mini cursos", href: "#cursos" },
      { label: "Diseñamos tu espacio", href: "#diseno-espacio" },
    ],
  },
  {
    titulo: "Profesionales",
    links: [
      { label: "PDFs y guías", href: "#biblioteca" },
      { label: "Casos clínicos", href: "#profesionales" },
      { label: "Supervisiones y seminarios", href: "#profesionales" },
      { label: "Caja de herramientas", href: "#profesionales" },
    ],
  },
  {
    titulo: "Docentes e instituciones",
    links: [
      { label: "Estrategias para el aula", href: "#docentes" },
      { label: "Capacitaciones", href: "#docentes" },
      { label: "Inclusión y TEA", href: "#docentes" },
      { label: "Asesoramiento institucional", href: "#instituciones" },
    ],
  },
  {
    titulo: "Tiempo de Movimiento",
    links: [
      { label: "Recursos gratuitos", href: "#gratis" },
      { label: "Club (suscripción)", href: "#club" },
      { label: "Miradas (blog)", href: "#miradas" },
      { label: "Te ayudamos a mirar", href: "#filosofia" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-sand-300 bg-sand-100">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-serif text-xl text-sage-800">Tiempo de Movimiento</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{site.description}</p>
          </div>

          {columnas.map((columna) => (
            <div key={columna.titulo}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-700">
                {columna.titulo}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {columna.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-700 transition-colors hover:text-clay-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-sand-300 pt-6 text-sm text-ink-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.direccion} · {site.telefono}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${site.email}`} className="hover:text-clay-600">
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-clay-600"
            >
              Instagram
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(
                "Hola, quiero consultar por Tiempo de Movimiento",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-clay-600"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-ink-500">
          Los materiales de esta web tienen fines educativos y no reemplazan una consulta
          profesional. Si tenés una duda sobre la salud o el desarrollo de tu hijo, consultá a un
          profesional de la salud.
        </p>
      </div>
    </footer>
  );
}

export function AudienceNav() {
  return (
    <nav aria-label="Audiencias" className="flex flex-wrap justify-center gap-2">
      {audiences.map((audience) => (
        <a
          key={audience.id}
          href={`#${audience.id}`}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-700 ring-1 ring-sand-300 transition-colors hover:bg-sage-50 hover:text-sage-700"
        >
          {audience.label}
        </a>
      ))}
    </nav>
  );
}