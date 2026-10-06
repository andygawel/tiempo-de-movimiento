import type { ReactNode } from "react";
import { Container } from "./container";

type Tone = "sand" | "white" | "sage" | "clay" | "ink";

const tones: Record<Tone, string> = {
  sand: "bg-sand-50",
  white: "bg-white",
  sage: "bg-sage-50",
  clay: "bg-clay-50",
  ink: "bg-sage-900 text-sand-100",
};

export function Section({
  children,
  id,
  tone = "white",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  titulo,
  bajada,
  align = "center",
}: {
  eyebrow?: string;
  titulo: string;
  bajada?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clay-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-balance text-ink-900 sm:text-4xl">
        {titulo}
      </h2>
      {bajada ? (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-700">{bajada}</p>
      ) : null}
    </div>
  );
}