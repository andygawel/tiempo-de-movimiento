export type RecursoGratuito = {
  id: string;
  titulo: string;
  descripcion: string;
};

export const recursosGratuitos: RecursoGratuito[] = [
  {
    id: "checklist-hitos-0-12",
    titulo: "Checklist de hitos del desarrollo de 0 a 12 meses",
    descripcion: "Qué esperar en cada mes y en qué área mirarlo.",
  },
  {
    id: "10-juegos-bebe",
    titulo: "10 juegos para hacer con tu bebé",
    descripcion: "Juegos simples que no necesitan juguetes comprados.",
  },
  {
    id: "10-propuestas-movimiento-libre",
    titulo: "10 propuestas para favorecer el movimiento libre",
    descripcion: "Cómo habilitar la exploración del espacio y del cuerpo.",
  },
  {
    id: "cuando-consultar",
    titulo: "¿Cuándo consultar?",
    descripcion: "Señales de alerta y momentos que vale la pena mirar con un profesional.",
  },
  {
    id: "guia-juego-por-edad",
    titulo: "Guía de juego según la edad",
    descripcion: "Qué juego priorizar en cada etapa del desarrollo.",
  },
  {
    id: "5-ideas-regulacion",
    titulo: "5 ideas para acompañar la regulación",
    descripcion: "Estrategias para los momentos de mayor descarga.",
  },
  {
    id: "checklist-espacio-de-juego",
    titulo: "Checklist para preparar un espacio de juego",
    descripcion: "Qué mirar y priorizar antes de comprar nada.",
  },
];

export type Post = {
  slug: string;
  titulo: string;
  extracto: string;
  fecha: string;
  tiempoLectura: string;
};

export const posts: Post[] = [
  {
    slug: "hitos-no-es-carrera",
    titulo: "Los hitos no son una carrera",
    extracto:
      "Por qué comparar el desarrollo de tu hijo con el de otro puede hacer más daño que ayuda, y qué mirar en su lugar.",
    fecha: "2026-02-18",
    tiempoLectura: "6 min",
  },
  {
    slug: "mas-juegos-no-es-mejor",
    titulo: "Más juguetes no es mejor juego",
    extracto:
      "Qué necesita realmente un niño para jugar, y por qué la cantidad de objetos no es lo que sostiene el juego.",
    fecha: "2026-01-29",
    tiempoLectura: "5 min",
  },
  {
    slug: "rabietas-desde-el-cuerpo",
    titulo: "Acompañar una rabieta desde el cuerpo",
    extracto:
      "Qué pasa en el sistema nervioso durante una descarga, y qué ayuda a regular sin apelar al castigo.",
    fecha: "2026-01-12",
    tiempoLectura: "7 min",
  },
];

export type Item = {
  titulo: string;
  descripcion: string;
};

export const herramientasProfesionales: Item[] = [
  { titulo: "PDFs profesionales", descripcion: "Evaluaciones, guías de observación y protocolos." },
  { titulo: "Casos clínicos", descripcion: "Situaciones reales para pensar e implementar." },
  { titulo: "Seminarios", descripcion: "Encuentros focalizados sobre temas específicos." },
  { titulo: "Supervisiones", descripcion: "Grupales, para trabajar casos propios." },
  { titulo: "Material para sesiones", descripcion: "Listo para usar dentro de la consulta." },
  { titulo: "Recursos TEA", descripcion: "Estrategias y guías para el abordaje." },
  { titulo: "Motricidad fina y gruesa", descripcion: "Propuestas para ambas dimensiones." },
  { titulo: "Juego simbólico", descripcion: "Cómo habilitarlo y acompañarlo." },
];

export const recursosDocentes: Item[] = [
  { titulo: "Estrategias para el aula", descripcion: "Ideas aplicables mañana mismo." },
  { titulo: "Regulación en sala", descripcion: "Herramientas para los momentos de desborde." },
  { titulo: "Movimiento y aprendizaje", descripcion: "Cómo el cuerpo sostiene la cognición." },
  { titulo: "Inclusión y TEA", descripcion: "Adaptaciones que funcionan en la sala." },
  { titulo: "Organización de rutinas", descripcion: "Estructuras que liberan energía." },
  { titulo: "Juego en la escuela", descripcion: "Repensar el juego como metodología." },
];

export const filosofia = {
  titulo: "Te ayudamos a mirar",
  parrafos: [
    "No buscamos llenar a los niños de actividades. Te ayudamos a comprender qué necesita ese niño y cómo acompañarlo desde la vida cotidiana.",
    "Trabajamos desde una mirada de disponibilidad corporal, regulación, juego y familia. Porque el desarrollo no ocurre en la sesión: ocurre en la comida, en la vereda, en el baño, en ese rato de la tarde en que nadie los está mirando.",
    "Cada orientación, cada curso y cada material nace de esa misma idea: acompañar mejor es observar mejor.",
  ],
  pilares: [
    { titulo: "Mirada", detalle: "Observar antes de intervenir." },
    { titulo: "Disponibilidad", detalle: "Estar disponible sin invadir." },
    { titulo: "Regulación", detalle: "Sostener la calma para que el juego ocurra." },
    { titulo: "Vida cotidiana", detalle: "El contexto es parte del plan." },
  ],
};