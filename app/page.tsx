import Image from "next/image";
import { ButtonLink, ButtonWhatsApp } from "@/components/button";
import { BibliotecaGrid } from "@/components/biblioteca-grid";
import { Container } from "@/components/container";
import { FeatureCard } from "@/components/cards";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LeadForm } from "@/components/lead-form";
import { Section, SectionHeading } from "@/components/section";
import { audiences } from "@/data/audiences";
import { courses, formatCoursePrice } from "@/data/courses";
import { acompanamientoInstitucional, disenoEspacio, packs, temasOrientacion } from "@/data/services";
import {
  filosofia,
  herramientasProfesionales,
  recursosDocentes,
  posts,
  recursosGratuitos,
} from "@/data/content";
import { escaleraCompra, plans } from "@/data/plans";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <AudienceSelector />
        <Familias />
        <Profesionales />
<Docentes />
      <Instituciones />
      <DisenoEspacio />
        <Biblioteca />
        <Cursos />
        <Club />
        <Gratis />
        <Filosofia />
        <Miradas />
        <Escalera />
        <CtaFinal />
      </main>

      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-sand-100 to-sand-50 py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-clay-600">
              Desarrollo infantil · Juego · Movimiento
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-balance text-ink-900 sm:text-5xl lg:text-6xl">
              Te ayudamos a mirar
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-700 sm:text-xl">
              No buscamos llenar a los niños de actividades. Te ayudamos a comprender qué necesita
              ese niño y cómo acompañarlo desde la vida cotidiana.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              Orientaciones individuales, cursos, biblioteca de recursos y acompañamiento para
              escuelas. Todo desde una mirada de disponibilidad corporal, regulación y juego.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#familias" variant="primary">
                Soy familia
              </ButtonLink>
              <ButtonLink href="#profesionales" variant="secondary">
                Soy profesional
              </ButtonLink>
            </div>

            <p className="mt-6 text-sm text-ink-500">
              ¿Preferís una consulta puntual?{" "}
              <ButtonWhatsApp
                mensaje="Hola, tengo una consulta puntual sobre el desarrollo de mi hijo"
                variant="ghost"
                className="px-0 py-0 text-clay-600 underline underline-offset-4"
              >
                Escribinos por WhatsApp
              </ButtonWhatsApp>
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="logo.svg"
              alt={`Logo de ${site.name}`}
              width={323}
              height={254}
              className="h-auto w-64 drop-shadow-sm sm:w-80 lg:w-96"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function AudienceSelector() {
  const surface: Record<string, string> = {
    sage: "bg-sage-50 ring-sage-200 hover:bg-sage-100",
    clay: "bg-clay-50 ring-clay-200 hover:bg-clay-100",
    sand: "bg-sand-100 ring-sand-300 hover:bg-sand-200",
  };

  return (
    <Section id="audiencias" tone="sand">
      <SectionHeading
        eyebrow="Punto de partida"
        titulo="¿Qué estás buscando?"
        bajada="Entrá por donde te deje. Cada recorrido está pensado para lo que vos venís a buscar."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {audiences.map((audience) => (
          <a
            key={audience.id}
            href={`#${audience.id}`}
            className={`group rounded-card p-7 ring-1 transition-colors ${surface[audience.color]}`}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-clay-600">
              {audience.label}
            </p>
            <h3 className="mt-2 font-serif text-xl leading-snug text-ink-900 text-balance">
              {audience.titulo}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{audience.descripcion}</p>
            <ul className="mt-5 space-y-1.5">
              {audience.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-ink-700">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-400" />
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-sage-700 group-hover:underline">
              Entrar →
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Familias() {
  return (
    <Section id="familias" tone="sage">
      <SectionHeading
        eyebrow="Para familias"
        titulo="Acompañar mejor, un paso a la vez"
        bajada="Consultas puntuales y procesos con seguimiento, más recursos para los días comunes."
      />

      <div id="orientaciones" className="mt-14">
        <h3 className="font-serif text-2xl text-ink-900">Temas de orientación</h3>
        <p className="mt-2 max-w-2xl text-ink-700">
          Contenas una duda concreta y la trabajamos juntos. 30 minutos, en video, con propuestas
          aplicables a la vida de tu casa.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {temasOrientacion.map((tema) => (
            <FeatureCard key={tema.titulo} titulo={tema.titulo} descripcion={tema.descripcion} />
          ))}
        </div>
      </div>

      <div id="packs" className="mt-16">
        <h3 className="font-serif text-2xl text-ink-900">Packs de encuentros</h3>
        <p className="mt-2 max-w-2xl text-ink-700">
          Cada pack empieza con una entrevista inicial, incluye análisis de videos del niño y
          termina en una devolución con propuestas para el hogar.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {packs.map((pack) => (
            <article
              key={pack.id}
              className={`flex flex-col rounded-card p-7 ${
                pack.destacado
                  ? "bg-sage-500 text-white shadow-lg"
                  : "bg-white text-ink-900 ring-1 ring-sage-200"
              }`}
            >
              {pack.destacado ? (
                <span className="mb-3 self-start rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Más elegido
                </span>
              ) : null}
              <h4 className="font-serif text-xl">{pack.nombre}</h4>
              <p
                className={`mt-1 text-sm font-semibold ${
                  pack.destacado ? "text-sage-100" : "text-clay-600"
                }`}
              >
                {pack.encuentros} {pack.encuentros === 1 ? "encuentro" : "encuentros"} de 30 min
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  pack.destacado ? "text-sage-50" : "text-ink-700"
                }`}
              >
                {pack.descripcion}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {pack.incluye.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-sm ${
                      pack.destacado ? "text-sage-50" : "text-ink-700"
                    }`}
                  >
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <ButtonWhatsApp
                  mensaje={`Hola, me interesa el ${pack.nombre} (${pack.encuentros} encuentros)`}
                  variant={pack.destacado ? "secondary" : "primary"}
                >
                  Consultar disponibilidad
                </ButtonWhatsApp>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Profesionales() {
  return (
    <Section id="profesionales" tone="white">
      <SectionHeading
        eyebrow="Para profesionales"
        titulo="Herramientas para tu práctica"
        bajada="Recursos listos para usar, casos para pensar y espacios para trabajar tu propio material clínico."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {herramientasProfesionales.map((item) => (
          <FeatureCard key={item.titulo} titulo={item.titulo} descripcion={item.descripcion} />
        ))}
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <article className="rounded-card bg-clay-50 p-7 ring-1 ring-clay-200 lg:col-span-2">
          <h3 className="font-serif text-xl text-ink-900">Caja de herramientas del profesional</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Evaluaciones, guías de observación, casos clínicos, protocolos y material para sesiones,
            organizados y listos para imprimir. Actualizado a medida que agregamos nuevas
            herramientas.
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {["TEA", "Psicomotricidad", "Terapia ocupacional", "Desarrollo infantil", "Juego simbólico", "Regulación", "Motricidad", "Autonomía"].map((tema) => (
              <li key={tema} className="flex items-center gap-2 text-sm text-ink-700">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                {tema}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="#biblioteca" variant="clay">
              Ver recursos
            </ButtonLink>
            <ButtonLink href="#club" variant="secondary">
              Ver Plan Profesional
            </ButtonLink>
          </div>
        </article>

        <article className="rounded-card bg-sand-100 p-7">
          <h3 className="font-serif text-xl text-ink-900">Supervisiones y seminarios</h3>
          <p className="mt-3 leading-relaxed text-ink-700">
            Encuentros grupales para trabajar casos propios, con colegas de distintos contextos.
          </p>
          <p className="mt-4 text-sm text-ink-700">
            Próximas fechas disponibles en el Club de profesionales.
          </p>
          <div className="mt-6">
            <ButtonWhatsApp
              mensaje="Hola, quiero consultar por supervisiones y seminarios"
              variant="primary"
            >
              Consultar
            </ButtonWhatsApp>
          </div>
        </article>
      </div>
    </Section>
  );
}

function Docentes() {
  return (
    <Section id="docentes" tone="sand">
      <SectionHeading
        eyebrow="Para docentes"
        titulo="Estrategias para el aula"
        bajada="Recursos para sostener la regulación en sala, el movimiento y la inclusión, sin agregar trabajo extra."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recursosDocentes.map((item) => (
          <FeatureCard key={item.titulo} titulo={item.titulo} descripcion={item.descripcion} />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <ButtonLink href="#cursos" variant="primary">
          Ver cursos
        </ButtonLink>
        <ButtonLink href="#club" variant="secondary">
          Ver Plan Escuela
        </ButtonLink>
      </div>
    </Section>
  );
}

function Instituciones() {
  return (
    <Section id="instituciones" tone="ink">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clay-300">
            Para escuelas y consultorios
          </p>
          <h2 className="font-serif text-3xl leading-tight text-balance text-sand-100 sm:text-4xl">
            {acompanamientoInstitucional.titulo}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-sand-300">
            {acompanamientoInstitucional.bajada}
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-clay-300">
            Precio institucional según alcance y cantidad de agentes
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonWhatsApp
              mensaje="Hola, quiero consultar por acompañamiento institucional para mi institución"
              variant="clay"
            >
              Consultar por mi institución
            </ButtonWhatsApp>
            <ButtonLink href="#diseno-espacio" variant="secondary">
              Diseñamos tu espacio
            </ButtonLink>
          </div>
        </div>

        <ul className="grid gap-2.5 sm:grid-cols-2">
          {acompanamientoInstitucional.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-xl bg-white/10 px-4 py-3 text-sm text-sand-200"
            >
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function DisenoEspacio() {
  return (
    <Section id="diseno-espacio" tone="clay">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clay-800">
            Servicio destacado
          </p>
          <h2 className="font-serif text-3xl leading-tight text-balance text-ink-900 sm:text-4xl">
            {disenoEspacio.titulo}
          </h2>
          <p className="mt-5 leading-relaxed text-pretty text-ink-700">{disenoEspacio.bajada}</p>
          <p className="mt-4 text-sm font-semibold text-clay-800">
            Para {disenoEspacio.para}
          </p>
        </div>

        <ol className="space-y-4">
          {disenoEspacio.pasos.map((paso, index) => (
            <li key={paso.titulo} className="flex gap-4 rounded-card bg-white/70 p-5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay-500 text-sm font-bold text-white"
              >
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-ink-900">{paso.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{paso.detalle}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 flex justify-center">
        <ButtonWhatsApp
          mensaje="Hola, quiero consultar por el servicio Diseñamos tu espacio"
          variant="clay"
        >
          Quiero consultar por mi espacio
        </ButtonWhatsApp>
      </div>
    </Section>
  );
}

function Biblioteca() {
  return (
    <Section id="biblioteca" tone="white">
      <SectionHeading
        eyebrow="Biblioteca digital"
        titulo="Recursos imprimibles y descargables"
        bajada="Materiales profesionales y para familias, listos para descargar y usar en el momento."
      />

      <div className="mt-14">
        <BibliotecaGrid />
      </div>
    </Section>
  );
}

function Cursos() {
  return (
    <Section id="cursos" tone="sage">
      <SectionHeading
        eyebrow="Mini cursos"
        titulo="Cursos cortos, muy prácticos"
        bajada="Pensados para familias y para quienes acompañan infancias. A ritmo propio y con acceso inmediato."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((curso) => (
          <article
            key={curso.slug}
            className="flex flex-col rounded-card bg-white p-6 ring-1 ring-sage-200"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-clay-600">
              {curso.edad}
            </p>
            <h3 className="mt-2 font-serif text-lg leading-snug text-ink-900">{curso.titulo}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{curso.descripcion}</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-ink-500">{curso.formato}</p>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-sand-200 pt-4">
              <span className="font-bold text-sage-700">{formatCoursePrice(curso.precio)}</span>
              <ButtonWhatsApp
                mensaje={`Hola, me interesa el curso "${curso.titulo}"`}
                variant="primary"
              >
                Inscribirme
              </ButtonWhatsApp>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Club() {
  const priceFormatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

  return (
    <Section id="club" tone="white">
      <SectionHeading
        eyebrow="Suscripción"
        titulo="Tiempo de Movimiento Club"
        bajada="Ingreso mensual que no depende de atender a un paciente más. Un contenido nuevo por mes, un encuentro y una biblioteca que crece."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`flex flex-col rounded-card p-7 ${
              plan.destacado
                ? "bg-sage-500 text-white shadow-lg"
                : "bg-sand-100 text-ink-900 ring-1 ring-sand-300"
            }`}
          >
            {plan.destacado ? (
              <span className="mb-3 self-start rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Para profesionales
              </span>
            ) : null}
            <h3 className="font-serif text-xl">{plan.nombre}</h3>
            <p
              className={`mt-1 text-sm ${
                plan.destacado ? "text-sage-100" : "text-clay-600"
              }`}
            >
              {plan.para}
            </p>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                plan.destacado ? "text-sage-50" : "text-ink-700"
              }`}
            >
              {plan.descripcion}
            </p>

            <p className="mt-5">
              <span className="text-3xl font-bold">
                {plan.precioMensual === 0 ? "A consultar" : priceFormatter.format(plan.precioMensual)}
              </span>
              {plan.precioMensual > 0 ? (
                <span className={plan.destacado ? "text-sage-100" : "text-ink-500"}>
                  {" "}
                  / mes
                </span>
              ) : null}
            </p>

            <ul className="mt-6 flex-1 space-y-2.5">
              {plan.beneficios.map((beneficio) => (
                <li
                  key={beneficio}
                  className={`flex items-start gap-2 text-sm ${
                    plan.destacado ? "text-sage-50" : "text-ink-700"
                  }`}
                >
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                  {beneficio}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <ButtonWhatsApp
                mensaje={`Hola, me interesa el ${plan.nombre} del Tiempo de Movimiento Club`}
                variant={plan.destacado ? "secondary" : "primary"}
              >
                {plan.cta}
              </ButtonWhatsApp>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Gratis() {
  return (
    <Section id="gratis" tone="sage">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clay-600">
            Recursos gratuitos
          </p>
          <h2 className="font-serif text-3xl leading-tight text-balance text-ink-900 sm:text-4xl">
            Empezá por acá, sin costo
          </h2>
          <p className="mt-5 leading-relaxed text-ink-700">
            Dejanos tu correo y recibís el material. Son herramientas concretas para usar esta
            semana, no una lista interminable de actividades.
          </p>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {recursosGratuitos.map((recurso) => (
              <li key={recurso.id} className="flex items-start gap-2 text-sm text-ink-700">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-500 text-xs text-white"
                >
                  ✓
                </span>
                <span>
                  <span className="font-medium text-ink-900">{recurso.titulo}</span> ·{" "}
                  {recurso.descripcion}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card bg-white p-8 ring-1 ring-sage-200">
          <h3 className="font-serif text-xl text-ink-900">Recibí los recursos</h3>
          <p className="mt-2 text-sm text-ink-700">
            También novedades de cursos y propuestas para tu práctica.
          </p>
          <div className="mt-6">
            <LeadForm
              titulo="listo."
              descripcion="Sin spam. Solo contenido útil, una vez por semana."
              boton="Quiero recibirlos"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Filosofia() {
  return (
    <Section id="filosofia" tone="ink">
      <SectionHeading
        eyebrow="Nuestra filosofía"
        titulo={filosofia.titulo}
        bajada="El diferencial de Tiempo de Movimiento no es la estimulación: es la mirada."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          {filosofia.parrafos.map((parrafo) => (
            <p key={parrafo} className="text-lg leading-relaxed text-pretty text-sand-200">
              {parrafo}
            </p>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filosofia.pilares.map((pilar) => (
            <div key={pilar.titulo} className="rounded-card bg-white/10 p-6">
              <h3 className="font-serif text-lg text-sand-100">{pilar.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand-300">{pilar.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Miradas() {
  return (
    <Section id="miradas" tone="white">
      <SectionHeading
        eyebrow="Miradas de Tiempo de Movimiento"
        titulo="Del blog"
        bajada="Ideas para pensar el desarrollo, el juego y el acompañamiento."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-card border border-sand-300 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-xs uppercase tracking-wider text-ink-500">
              {new Date(post.fecha).toLocaleDateString("es-AR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.tiempoLectura}
            </p>
            <h3 className="mt-3 font-serif text-lg leading-snug text-ink-900">{post.titulo}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{post.extracto}</p>
            <p className="mt-5 text-sm font-semibold text-sage-700">Leer más →</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Escalera() {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow="Cómo acompañar"
        titulo="Empezá donde estés"
        bajada="Cada nivel tiene sentido por sí mismo. Siempre hay un paso siguiente cuando lo necesites."
      />

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
        {escaleraCompra.map((escalon, index) => (
          <li
            key={escalon.id}
            className="relative flex flex-col rounded-card bg-white p-5 ring-1 ring-sand-300"
          >
            <span className="text-xs font-bold text-clay-600">{index + 1}</span>
            <span className="mt-1 font-serif text-base text-ink-900">{escalon.nombre}</span>
            <span className="mt-1.5 text-xs leading-relaxed text-ink-700">{escalon.descripcion}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function CtaFinal() {
  return (
    <Section tone="sage">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl leading-tight text-balance text-ink-900 sm:text-4xl">
          Contanos qué está pasando y vemos cómo acompañarlo
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-700">
          Si no sabés por dónde empezar, escribinos. Una primera orientación, sin compromiso.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonWhatsApp
            mensaje="Hola, quiero hacer una consulta inicial sobre Tiempo de Movimiento"
            variant="primary"
            className="px-8 py-4 text-base"
          >
            Escribir por WhatsApp
          </ButtonWhatsApp>
          <ButtonLink
            href={`mailto:${site.email}`}
            variant="secondary"
            className="px-8 py-4 text-base"
          >
            {site.email}
          </ButtonLink>
        </div>

        <p className="mt-8 text-sm text-ink-500">
          También podés{" "}
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-clay-600">
            seguirnos en Instagram
          </a>{" "}
          o ver{" "}
          <a href="#gratis" className="underline underline-offset-4 hover:text-clay-600">
            los recursos gratuitos
          </a>
          .
        </p>
      </div>
    </Section>
  );
}