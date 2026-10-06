"use client";

import { useState } from "react";
import { products, type Product } from "@/data/products";
import { ProductCard } from "./cards";

const filtros = ["Todos", "Familias", "Profesionales", "Gratis"] as const;

type Filtro = (typeof filtros)[number];

function coincide(product: Product, filtro: Filtro) {
  if (filtro === "Todos") return true;
  if (filtro === "Gratis") return product.precio === 0;
  if (filtro === "Profesionales") return product.etiqueta === "Profesional";
  return product.etiqueta !== "Profesional" && product.precio > 0;
}

export function BibliotecaGrid() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const visibles = products.filter((product) => coincide(product, filtro));

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar recursos">
        {filtros.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFiltro(item)}
            aria-pressed={filtro === item}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filtro === item
                ? "bg-sage-500 text-white"
                : "bg-white text-ink-700 ring-1 ring-sand-300 hover:bg-sage-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        {visibles.length} recursos disponibles
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ink-500">
        {visibles.length} de {products.length} recursos
      </p>
    </div>
  );
}