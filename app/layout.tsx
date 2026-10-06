import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/data/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  // TODO: reemplazar por el dominio real antes de publicar
  metadataBase: new URL("https://tiempodemovimiento.com.ar"),
  title: {
    default: "Tiempo de Movimiento | Acompañar mejor, sin saturar",
    template: "%s | Tiempo de Movimiento",
  },
  description:
    "Orientaciones virtuales, biblioteca digital, cursos y asesoramiento para familias, profesionales, docentes e instituciones. Te ayudamos a comprender qué necesita cada niño y cómo acompañarlo desde la vida cotidiana.",
  keywords: [
    "desarrollo infantil",
    "desarrollo motor",
    "psicomotricidad",
    "terapia ocupacional infantil",
    "orientación a familias",
    "capacitaciones docentes",
    "espacios de juego",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: site.name,
    title: "Tiempo de Movimiento | Acompañar mejor, sin saturar",
    description:
      "No buscamos llenar a los niños de actividades. Te ayudamos a comprender qué necesita ese niño y cómo acompañarlo desde la vida cotidiana.",
    images: [{ url: "/logo-og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiempo de Movimiento | Acompañar mejor, sin saturar",
    description:
      "Te ayudamos a comprender qué necesita ese niño y cómo acompañarlo desde la vida cotidiana.",
    images: ["/logo-og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${site.url}/#organizacion`,
      name: site.name,
      description: site.description,
      url: site.url,
      logo: `${site.url}/logo.svg`,
      email: site.email,
      telephone: site.telefono,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.direccion,
        addressCountry: "AR",
      },
      sameAs: [site.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#sitio`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organizacion` },
      inLanguage: "es-AR",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}