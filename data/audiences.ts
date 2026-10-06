export type AudienceId = "familias" | "profesionales" | "docentes" | "instituciones";

export type Audience = {
  id: AudienceId;
  label: string;
  titulo: string;
  descripcion: string;
  bullets: string[];
  color: "sage" | "clay" | "sand";
};

export const audiences: Audience[] = [
  {
    id: "familias",
    label: "Soy familia",
    titulo: "Quiero acompañar mejor el desarrollo de mi hijo o hija",
    descripcion:
      "Orientaciones virtuales individuales, packs de encuentros y recursos para la vida de todos los días.",
    bullets: ["Orientaciones individuales", "Packs de 1, 4 y 8 encuentros", "Biblioteca y cursos"],
    color: "sage",
  },
  {
    id: "profesionales",
    label: "Soy profesional",
    titulo: "Quiero herramientas para mi práctica",
    descripcion:
      "PDFs de evaluación y guía, casos clínicos, seminarios, supervisiones y caja de herramientas.",
    bullets: ["Recursos clínicos y guías", "Supervisiones y seminarios", "Caja de herramientas"],
    color: "clay",
  },
  {
    id: "docentes",
    label: "Soy docente",
    titulo: "Quiero estrategias para mi aula",
    descripcion:
      "Cursos y estrategias prácticas para acompañar la regulación en sala, el movimiento, el juego y la inclusión.",
    bullets: ["Estrategias para el aula", "Capacitaciones", "Inclusión y TEA"],
    color: "sand",
  },
  {
    id: "instituciones",
    label: "Soy una institución",
    titulo: "Quiero acompañamiento para mi equipo",
    descripcion:
      "Asesoramiento institucional, capacitación al equipo docente y diseño de espacios.",
    bullets: ["Asesoramiento institucional", "Capacitación docente", "Diseñamos tu espacio"],
    color: "sage",
  },
];