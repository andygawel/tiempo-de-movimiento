import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { whatsappLink } from "@/data/site";

type Variant = "primary" | "secondary" | "ghost" | "clay";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-sage-500 text-white hover:bg-sage-600",
  secondary: "bg-white text-sage-700 ring-1 ring-sage-300 hover:bg-sage-50",
  ghost: "text-sage-700 hover:bg-sage-50",
  clay: "bg-clay-500 text-white hover:bg-clay-800",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  const isExternal = href.startsWith("http") || href.startsWith("https://api.");
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonWhatsApp({
  mensaje,
  variant = "primary",
  className = "",
  children,
}: CommonProps & { mensaje: string }) {
  return (
    <a
      href={whatsappLink(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}