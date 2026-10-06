export type Product = {
  slug: string;
  titulo: string;
  descripcion: string;
  precio: number;
  precioAntes?: number;
  etiqueta?: string;
  formato: string;
};

export const products: Product[] = [
  {
    slug: "fichas-preescritura-grafomotricidad-3-6",
    titulo: "Fichas de preescritura: grafomotricidad de 3 a 6 años",
    descripcion:
      "Más de 70 fichas versátiles para trabajar habilidades de preescritura con masas, fibras, crayones, lápices y pinceles. En plano horizontal o vertical.",
    precio: 7200,
    formato: "PDF descargable",
    etiqueta: "Imprimible",
  },
  {
    slug: "evaluacion-inicial-adolescentes-y-adultos",
    titulo: "Evaluación inicial ocupacional: adolescentes y adultos",
    descripcion:
      "Reúne la información para elaborar un perfil ocupacional completo. Estructura la evaluación y facilita la planificación de objetivos centrados en la persona y su contexto.",
    precio: 22000,
    formato: "PDF descargable",
    etiqueta: "Profesional",
  },
  {
    slug: "evaluacion-pediatrica-inicial",
    titulo: "Evaluación pediátrica inicial para profesionales",
    descripcion:
      "Facilita la recopilación de información esencial sobre el niño, su entorno y la escuela para elaborar informes detallados y planificar intervenciones integrales.",
    precio: 22000,
    formato: "PDF descargable",
    etiqueta: "Profesional",
  },
  {
    slug: "kit-clinico-rehabilitacion-miembro-superior",
    titulo: "Kit clínico integral de rehabilitación del miembro superior",
    descripcion:
      "Evaluación funcional, programas de intervención, reentrenamiento sensorial y protocolos terapéuticos orientados a optimizar la recuperación funcional.",
    precio: 32000,
    formato: "Kit de PDFs",
    etiqueta: "Profesional",
  },
  {
    slug: "guia-hitos-del-desarrollo-0-6",
    titulo: "Guía de observación de hitos del desarrollo de 0 a 6 años",
    descripcion:
      "Objetivos por edad y área: cognitivo, social, motor, del lenguaje y autocuidado, con pautas de seguimiento e intervención.",
    precio: 24000,
    formato: "PDF descargable",
  },
  {
    slug: "guia-acompanar-desarrollo-bebe-0-24",
    titulo: "Guía práctica para acompañar el desarrollo del bebé de 0 a 24 meses",
    descripcion:
      "Hitos del desarrollo, señales de alarma, estrategias de estimulación y actividades basadas en Piaget, Vygotsky y Montessori.",
    precio: 24000,
    formato: "PDF descargable",
  },
  {
    slug: "cuadernillos-estimulacion-cognitiva",
    titulo: "Cuadernillos de estimulación cognitiva",
    descripcion:
      "Más de 600 páginas de ejercicios para memoria, atención, lenguaje, razonamiento y funciones ejecutivas, en tres niveles de complejidad.",
    precio: 26900,
    precioAntes: 50000,
    formato: "PDF descargable",
    etiqueta: "Oferta",
  },
  {
    slug: "control-de-esfinteres",
    titulo: "Guía integral y práctica para el control de esfínteres",
    descripcion:
      "Estrategias, recursos y orientaciones claras para el acompañamiento de este hito del desarrollo infantil, con un enfoque respetuoso.",
    precio: 17000,
    formato: "PDF descargable",
  },
  {
    slug: "evaluacion-observacional-escritura",
    titulo: "Evaluación observacional de la escritura en la infancia",
    descripcion:
      "Instrumento semi-estructurado para docentes y profesionales que analiza la escritura desde componentes motores, perceptuales y gráficos.",
    precio: 14000,
    formato: "PDF descargable",
    etiqueta: "Profesional",
  },
  {
    slug: "evaluacion-actividades-vida-diaria-0-12",
    titulo: "Evaluación de actividades de la vida diaria de 0 a 12 años",
    descripcion:
      "Guía de observación para evaluar autonomía por edad, identificar fortalezas y dificultades y orientar objetivos de intervención.",
    precio: 14500,
    formato: "PDF descargable",
  },
  {
    slug: "abanico-de-regulacion-sensorial",
    titulo: "Abanico de regulación sensorial",
    descripcion:
      "Recurso visual y práctico para identificar niveles de activación del sistema nervioso y elegir estrategias sensoriales reguladoras.",
    precio: 12000,
    formato: "PDF descargable",
  },
  {
    slug: "lectoescritura-numeracion-rutinas-visuales",
    titulo: "Cuadernillo de lectoescritura, numeración y rutinas visuales",
    descripcion:
      "E-book imprimible para acompañar el inicio de la lectoescritura y la numeración, con más de 30 pictogramas para favorecer la autonomía.",
    precio: 0,
    formato: "PDF descargable",
    etiqueta: "Gratis",
  },
];

const precioFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function formatPrice(precio: number) {
  return precio === 0 ? "Gratis" : precioFormatter.format(precio);
}