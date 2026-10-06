import type { ReactNode } from "react";
import { formatPrice, type Product } from "@/data/products";
import { ButtonWhatsApp } from "./button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col rounded-card border border-sand-300 bg-white p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-lg leading-snug text-ink-900">{product.titulo}</h3>
        {product.etiqueta ? (
          <span className="shrink-0 rounded-full bg-clay-100 px-3 py-1 text-xs font-semibold text-clay-800">
            {product.etiqueta}
          </span>
        ) : null}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{product.descripcion}</p>

      <p className="mt-3 text-xs uppercase tracking-wider text-ink-500">{product.formato}</p>

      <div className="mt-5 flex items-end justify-between gap-3 border-t border-sand-200 pt-4">
        <p className="text-lg font-bold text-sage-700">
          {product.precioAntes ? (
            <span className="mr-2 text-sm font-normal text-ink-500 line-through">
              {formatPrice(product.precioAntes)}
            </span>
          ) : null}
          {formatPrice(product.precio)}
        </p>
        <ButtonWhatsApp
          mensaje={`Hola, quiero el recurso "${product.titulo}" (${formatPrice(product.precio)})`}
          variant={product.precio === 0 ? "secondary" : "primary"}
        >
          {product.precio === 0 ? "Descargar gratis" : "Inscribirme"}
        </ButtonWhatsApp>
      </div>
    </article>
  );
}

export function FeatureCard({
  titulo,
  descripcion,
  children,
}: {
  titulo: string;
  descripcion: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-card border border-sand-300 bg-white p-6">
      <h3 className="font-serif text-lg text-ink-900">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{descripcion}</p>
      {children}
    </div>
  );
}