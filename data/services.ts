export type Temas = {
  titulo: string;
  descripcion: string;
};

export const temasOrientacion: Temas[] = [
  {
    titulo: "¿Esto que hace mi hijo es esperable?",
    descripcion: "Consulta puntual, con respuesta clara y próximos pasos.",
  },
  {
    titulo: "Juego y desarrollo",
    descripcion: "Cómo el juego sostiene el desarrollo motor, cognitivo y social.",
  },
  {
    titulo: "Motricidad y autonomía",
    descripcion: "Movimiento libre, desplazamientos y habilidades de la vida diaria.",
  },
  {
    titulo: "Alimentación y selectividad",
    descripcion: "Acompañar la hora de comer con respeto y sin pelear.",
  },
  {
    titulo: "Sueño y rutinas",
    descripcion: "Construir un ritmo predecible que sostenga el desarrollo.",
  },
  {
    titulo: "Pantallas",
    descripcion: "Manejar pantallas sin culpa y con criterio.",
  },
  {
    titulo: "Regulación emocional",
    descripcion: "Acompañar la rabieta desde el cuerpo, no desde el castigo.",
  },
  {
    titulo: "Espacios y juguetes",
    descripcion: "Preparar el ambiente para que invite al movimiento y la exploración.",
  },
];

export type Pack = {
  id: string;
  nombre: string;
  encuentros: number;
  descripcion: string;
  incluye: string[];
  destacado?: boolean;
};

export const packs: Pack[] = [
  {
    id: "pack-1",
    nombre: "Consulta puntual",
    encuentros: 1,
    descripcion:
      "Para una pregunta específica: ¿esto que hace mi hijo es esperable a esta edad?",
    incluye: [
      "Entrevista inicial de 30 minutos",
      "Análisis de videos del niño",
      "Devolución con orientaciones para el hogar",
    ],
  },
  {
    id: "pack-4",
    nombre: "Pack Acompañamiento",
    encuentros: 4,
    descripcion: "Un proceso para observar, entender y ajustar el acompañamiento.",
    incluye: [
      "4 encuentros virtuales de 30 minutos",
      "Análisis de videos entre encuentros",
      "Propuestas ajustadas en cada devolución",
      "Seguimiento por WhatsApp durante el proceso",
    ],
    destacado: true,
  },
  {
    id: "pack-8",
    nombre: "Pack Proceso completo",
    encuentros: 8,
    descripcion:
      "Para acompañar una etapa completa: del primer mes a los tres años, o un cambio de etapa.",
    incluye: [
      "8 encuentros virtuales de 30 minutos",
      "Análisis de videos y devoluciones por etapa",
      "Guía de objetivos por etapa",
      "Seguimiento por WhatsApp durante todo el proceso",
    ],
  },
];

export const disenoEspacio = {
  titulo: "Diseñamos tu espacio",
  bajada:
    "Mandanos fotos o videos de tu ambiente y te devolvemos una propuesta concreta: distribución, zonas de juego, materiales, mobiliario, circulación, propuestas de movimiento, estímulos visuales, accesibilidad y recomendaciones según la edad.",
  para: "Familias, jardines y consultorios",
  pasos: [
    { titulo: "Nos contás", detalle: "Describís el espacio y qué te gustaría cambiar." },
    { titulo: "Mandás fotos", detalle: "Compartís imágenes del ambiente y de cómo se usa." },
    { titulo: "Devolvemos", detalle: "Recibís un informe visual con propuestas priorizadas." },
  ],
};

export const acompanamientoInstitucional = {
  titulo: "Acompañamiento a instituciones",
  bajada:
    "Un trabajo con el equipo completo, no una charla aislada. Observamos, comprendemos la lógica de cada sala y proponemos junto a quienes sostienen la jornada todos los días.",
  items: [
    "Asesoramiento institucional",
    "Capacitaciones al equipo docente",
    "Observación de sala",
    "Orientación sobre casos concretos",
    "Diseño de estrategias y adaptaciones",
    "Adaptación de espacios",
    "Proyecto de inclusión",
    "Acompañamiento sostenido a docentes",
  ],
};