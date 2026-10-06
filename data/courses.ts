export type Course = {
  slug: string;
  titulo: string;
  edad: string;
  descripcion: string;
  precio: number;
  precioAntes?: number;
  formato: string;
};

export const courses: Course[] = [
  {
    slug: "bebe-0-a-3-meses",
    titulo: "Mi bebé de 0 a 3 meses",
    edad: "0 a 3 meses",
    descripcion:
      "Cómo acompañar su desarrollo en los primeros meses: contacto, mirada, movimiento pasivo y batas de que se sienta sostenido.",
    precio: 24000,
    formato: "Curso online a ritmo propio",
  },
  {
    slug: "3-a-6-meses-movimiento-y-juego",
    titulo: "3 a 6 meses: movimiento, juego y exploración",
    edad: "3 a 6 meses",
    descripcion:
      "Cómo acompañar el alcance, la prensión y el interés por explorar, sin llenar el espacio de estímulos.",
    precio: 24000,
    formato: "Curso online a ritmo propio",
  },
  {
    slug: "6-a-12-meses-suelo-y-desplazamientos",
    titulo: "6 a 12 meses: suelo, desplazamientos y autonomía",
    edad: "6 a 12 meses",
    descripcion:
      "Qué esperar en esta etapa, cómo habilitar el movimiento libre y qué habilidades de la vida diaria ya pueden acompañarse.",
    precio: 26000,
    formato: "Curso online a ritmo propio",
  },
  {
    slug: "1-a-2-anos-jugar-para-desarrollar",
    titulo: "1 a 2 años: jugar para desarrollar",
    edad: "1 a 2 años",
    descripcion:
      "El juego pasa a ser el motor del desarrollo. Cuál proponer, cuáles sostener y cuándo dejarle hacer sola.",
    precio: 26000,
    formato: "Curso online a ritmo propio",
  },
  {
    slug: "2-a-3-anos-autonomia-y-regulacion",
    titulo: "2 a 3 años: autonomía, juego y regulación",
    edad: "2 a 3 años",
    descripcion:
      "Acompañar la conducta, la frustración y los límites sin perder la disponibilidad. El juego vuelve a ser la herramienta.",
    precio: 26000,
    formato: "Curso online a ritmo propio",
  },
  {
    slug: "jugar-sin-llenar-de-juguetes",
    titulo: "Cómo jugar con mi bebé sin llenarlo de juguetes",
    edad: "Todas las edades",
    descripcion:
      "Qué necesita realmente un niño para jugar, y por qué la cantidad de objetos no es lo que sostiene el juego.",
    precio: 18000,
    formato: "Curso online a ritmo propio",
  },
  {
    slug: "preparar-espacio-de-juego",
    titulo: "Cómo preparar un espacio de juego",
    edad: "Todas las edades",
    descripcion:
      "Distribuir, ordenar y priorizar un ambiente que invite al movimiento, la exploración y la autonomía.",
    precio: 18000,
    formato: "Curso online a ritmo propio",
  },
  {
    slug: "pantallas-y-primera-infancia",
    titulo: "Pantallas y primera infancia",
    edad: "0 a 6 años",
    descripcion:
      "Qué dicen las evidencias y qué funciona en la vida real, sin culpa y con criterio.",
    precio: 19000,
    formato: "Curso online a ritmo propio",
  },
  {
    slug: "acompanar-rabietas-desde-el-cuerpo",
    titulo: "Cómo acompañar las rabietas desde el cuerpo",
    edad: "1 a 5 años",
    descripcion:
      "Regulación emocional, neurociencia del estrés y qué hacer en el momento en que ocurre.",
    precio: 22000,
    formato: "Curso online a ritmo propio",
  },
];

const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function formatCoursePrice(precio: number) {
  return formatter.format(precio);
}