export const site = {
  name: "Tiempo de Movimiento",
  // TODO: reemplazar por el dominio real
  url: "https://tiempodemovimiento.com.ar",
  description:
    "Acompañamos el desarrollo de niñas y niños desde la vida cotidiana, con una mirada de disponibilidad corporal, juego y regulación.",
  // TODO: reemplazar todos los datos de contacto
  whatsapp: "5491100000000",
  whatsappVisible: "+54 9 11 0000-0000",
  email: "hola@tiempodemovimiento.com.ar",
  instagram: "https://www.instagram.com/tiempodemovimiento",
  telefono: "+54 9 11 0000-0000",
  direccion: "Ciudad Autónoma de Buenos Aires, Argentina",
} as const;

export function whatsappLink(mensaje: string) {
  return `https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(mensaje)}`;
}