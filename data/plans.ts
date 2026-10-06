export type Plan = {
  id: string;
  nombre: string;
  para: string;
  precioMensual: number;
  descripcion: string;
  beneficios: string[];
  destacado?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "plan-familia",
    nombre: "Plan Familia",
    para: "Para familias",
    precioMensual: 11900,
    descripcion:
      "Un puente constante entre los encuentros y la vida de todos los días.",
    beneficios: [
      "1 recurso nuevo por mes",
      "Actividad mensual para hacer juntos",
      "Video corto de observación",
      "Encuentro grupal mensual",
      "Biblioteca de recursos",
      "Descuentos en cursos y orientaciones",
    ],
    cta: "Quiero el Plan Familia",
  },
  {
    id: "plan-profesional",
    nombre: "Plan Profesional",
    para: "Para profesionales de salud y educación",
    precioMensual: 15900,
    descripcion:
      "Recursos, casos y supervisión para sostener tu práctica clínica.",
    beneficios: [
      "Recursos profesionales cada mes",
      "1 capacitación mensual",
      "Biblioteca completa de PDFs",
      "Casos prácticos comentados",
      "Encuentro de supervisión grupal",
      "Descuentos en cursos",
    ],
    destacado: true,
    cta: "Quiero el Plan Profesional",
  },
  {
    id: "plan-escuela",
    nombre: "Plan Escuela",
    para: "Para instituciones educativas",
    precioMensual: 0,
    descripcion:
      "Acompañamiento sostenido para el equipo docente, con precio institucional.",
    beneficios: [
      "Recursos para docentes",
      "Capacitación mensual",
      "Material descargable para la sala",
      "Orientaciones para situaciones frecuentes",
      "Observación de sala trimestral",
      "Precio institucional según cantidad de agentes",
    ],
    cta: "Quiero consultar por mi escuela",
  },
];

export type Escalon = {
  id: string;
  nombre: string;
  descripcion: string;
};

export const escaleraCompra: Escalon[] = [
  { id: "gratis", nombre: "Gratis", descripcion: "Recursos y newsletter" },
  { id: "pdf", nombre: "PDF", descripcion: "Biblioteca descargable" },
  { id: "curso", nombre: "Curso", descripcion: "Mini cursos a ritmo propio" },
  { id: "orientacion", nombre: "Orientación", descripcion: "Encuentro individual" },
  { id: "pack", nombre: "Pack 4 u 8", descripcion: "Proceso acompañado" },
  { id: "suscripcion", nombre: "Suscripción", descripcion: "Tiempo de Movimiento Club" },
  { id: "institucional", nombre: "Institucional", descripcion: "Escuelas y consultorios" },
];