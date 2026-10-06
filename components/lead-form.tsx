"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function LeadForm({
  titulo,
  descripcion,
  boton,
}: {
  titulo: string;
  descripcion: string;
  boton: string;
}) {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<"idle" | "ok">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: conectar con el backend o servicio de email marketing.
    // Los leads se deberían enviar a la lista de contactos de Tiempo de Movimiento Club.
    setEstado("ok");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg">
      <label htmlFor="lead-email" className="sr-only">
        Tu correo electrónico
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="lead-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tu@email.com"
          className="w-full rounded-full border border-sand-400 bg-white px-5 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-sage-500 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-800"
        >
          {boton}
        </button>
      </div>
      <p className="mt-3 text-sm text-ink-700">{descripcion}</p>
      {estado === "ok" ? (
        <p
          role="status"
          className="mt-3 rounded-2xl bg-sage-50 px-4 py-3 text-sm font-medium text-sage-700"
        >
          Listo, {titulo} Te mandamos el material a tu correo.
        </p>
      ) : null}
    </form>
  );
}