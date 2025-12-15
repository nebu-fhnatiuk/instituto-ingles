"use client";

import { StructuredData } from "@/components/StructuredData";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Check, Star, Languages, GraduationCap, Headphones, Clock, ArrowRight, Users, Crown } from "lucide-react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { MessageSquare, Mic, Repeat, Target, Timer, PlayCircle } from "lucide-react";
import { MessageSquareText, Gamepad2, BookOpenCheck } from "lucide-react";

export default function LandingInstitutoIngles() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_30%_20%,rgba(255,220,180,0.2),transparent_70%)] from-background to-muted/30 text-foreground">
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "EducationalOrganization", "LocalBusiness"],
        "name": "Instituto de Inglés",
        "url": "https://www.PLACEHOLDER_DOMINIO.com",
        "logo": "https://www.PLACEHOLDER_DOMINIO.com/logo-512.png",
        "telephone": "+54 9 PLACEHOLDER_TELEFONO",
        "email": "hola@PLACEHOLDER_DOMINIO.com",
        "sameAs": [
          "https://www.facebook.com/PLACEHOLDER",
          "https://www.instagram.com/PLACEHOLDER",
          "https://www.linkedin.com/company/PLACEHOLDER"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "PLACEHOLDER_CALLE 123",
          "addressLocality": "PLACEHOLDER_CIUDAD",
          "addressRegion": "Córdoba",
          "addressCountry": "AR",
          "postalCode": "PLACEHOLDER_CP"
        },
        "openingHours": "Mo-Fr 09:00-21:00",
        "areaServed": "AR"
      }} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Instituto de Inglés",
        "url": "https://www.PLACEHOLDER_DOMINIO.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.PLACEHOLDER_DOMINIO.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Método Boot Up para aprender inglés hablando",
        "description": "Enfoque conversacional con ciclos breves de práctica, feedback accionable y metas SMART.",
        "totalTime": "P2H",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Speaking desde el día uno",
            "text": "Comenzá con role plays y prompts guiados para activar vocabulario útil.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Ciclos breves de práctica",
            "text": "Bloques de 10–12 minutos: input, práctica guiada y output para mantener el foco.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Feedback accionable",
            "text": "Correcciones en tiempo real y micro-objetivos por clase.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Metas SMART",
            "text": "Define objetivos medibles por semana (vocabulario, funciones y situaciones).",
            "position": 4
          }
        ],
        "tool": [
          { "@type": "HowToTool", "name": "Plataforma on-demand con audio y video" }
        ],
        "supply": [
          { "@type": "HowToSupply", "name": "Tarjetas de práctica (flashcards)" }
        ]
      }} />

      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo son las clases?",
            "acceptedAnswer": { "@type": "Answer", "text": "Participativas, con foco en speaking y feedback continuo. Presencial, online o híbrida." }
          },
          {
            "@type": "Question",
            "name": "¿Hacen nivelación?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí. Entrevista corta para ubicarte en tu nivel ideal. Gratis y sin compromiso." }
          },
          {
            "@type": "Question",
            "name": "¿Puedo cambiar de horario?",
            "acceptedAnswer": { "@type": "Answer", "text": "Claro. Bandas horarias amplias y recuperatorios disponibles." }
          }
        ]
      }} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "Inglés Inicial",
            "provider": { "@type": "EducationalOrganization", "name": "Instituto de Inglés" },
            "description": "Pronunciación base, vocabulario útil y rutinas de speaking.",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "800" }
          },
          {
            "@type": "Course",
            "name": "Inglés Intermedio",
            "provider": { "@type": "EducationalOrganization", "name": "Instituto de Inglés" },
            "description": "Fluidez conversacional, listening activo, grammar aplicada.",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "800" }
          },
          {
            "@type": "Course",
            "name": "Inglés Avanzado",
            "provider": { "@type": "EducationalOrganization", "name": "Instituto de Inglés" },
            "description": "Debates, presentaciones y preparación de exámenes.",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "800" }
          }
        ]
      }} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "name": "Planes de práctica de inglés",
        "itemListElement": [
          { "@type": "Offer", "name": "Small groups", "priceCurrency": "ARS", "price": "14000", "url": "https://www.PLACEHOLDER_DOMINIO.com/#cursos", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Private+", "priceCurrency": "ARS", "price": "32000", "url": "https://www.PLACEHOLDER_DOMINIO.com/#cursos", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Pro", "priceCurrency": "ARS", "price": "44000", "url": "https://www.PLACEHOLDER_DOMINIO.com/#cursos", "availability": "https://schema.org/InStock" }
        ]
      }} />

      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "name": "Planes de estudio",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Starter",
            "priceCurrency": "ARS",
            "price": "39000",
            "availability": "https://schema.org/InStock",
            "url": "https://www.PLACEHOLDER_DOMINIO.com/#planes"
          },
          {
            "@type": "Offer",
            "name": "Pro",
            "priceCurrency": "ARS",
            "price": "59000",
            "availability": "https://schema.org/InStock",
            "url": "https://www.PLACEHOLDER_DOMINIO.com/#planes"
          },
          {
            "@type": "Offer",
            "name": "Exams",
            "priceCurrency": "ARS",
            "price": "79000",
            "availability": "https://schema.org/InStock",
            "url": "https://www.PLACEHOLDER_DOMINIO.com/#planes"
          }
        ]
      }} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.PLACEHOLDER_DOMINIO.com/" },
          { "@type": "ListItem", "position": 2, "name": "Cursos", "item": "https://www.PLACEHOLDER_DOMINIO.com/#cursos" },
          { "@type": "ListItem", "position": 3, "name": "Planes", "item": "https://www.PLACEHOLDER_DOMINIO.com/#planes" }
        ]
      }} />

      <NavBar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 pt-20 pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* Imagen a la izquierda */}
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto md:max-w-sm md:mx-0">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-[#FFF3E0] via-white to-[#FFDAB5] shadow-[0_10px_40px_-15px_rgba(255,107,53,0.25)]">
                  <Image
                    src="/hero.jpg"
                    sizes="(min-width:1024px) 420px, (min-width:768px) 360px, 90vw"
                    alt="Clases de inglés dinámicas"
                    fill
                    className="object-cover object-top scale-100 md:scale-95 transition-transform duration-500 hover:scale-100"
                    priority
                  />
                </div>

                {/* badge flotante */}
                <div className="pointer-events-none absolute -bottom-4 left-4 hidden select-none md:flex">
                  <span className="rounded-full bg-background/90 px-4 py-2 text-sm shadow border text-muted-foreground">
                    +100 alumnos, 4.9/5 ⭐
                  </span>
                </div>
              </div>

              {/* badge flotante opcional */}
              <div className="pointer-events-none absolute -bottom-4 left-4 hidden select-none md:flex">
                <span className="rounded-full bg-background/80 px-4 py-2 text-sm shadow border">
                  +100 alumnos, 4.9/5 ⭐
                </span>
              </div>
            </div>

            {/* Texto a la derecha */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <Badge className="mb-4 text-sm" variant="secondary">
                Inscripciones 2026
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Desbloqueá tu inglés. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#FFB627]"> Desbloqueá tus oportunidades hoy</span>
              </h1>

              <p className="mt-5 text-lg text-muted-foreground">
                Aprendé a comunicarte con seguridad y fluidez para avanzar en tu carrera.
                Clases para adultos, metodología ágil y práctica desde el día uno.
              </p>

              <div className="mt-6 flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  4.9/5 por +100 alumnos
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT + MISSION */}
      <section id="about" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_280px_at_50%_-80px,rgba(255,214,170,0.22),transparent_60%)]" />

        <div className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-4xl space-y-8">

            {/* ABOUT */}
            <div className="rounded-2xl border bg-white/70 backdrop-blur-sm ring-1 ring-muted-foreground/10 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                About <span className="text-primary">Boot Up English</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                <strong>Boot Up English</strong> es un programa de inglés para <strong>adultos y profesionales</strong> que
                necesitan <strong>usar el idioma con confianza</strong> en contextos reales, laborales y académicos.
                Ofrecemos clases <strong>virtuales y sincrónicas</strong>, con enfoque comunicativo y acompañamiento docente constante.
              </p>
            </div>

            {/* MISSION */}
            <div className="rounded-2xl border bg-white/70 backdrop-blur-sm ring-1 ring-muted-foreground/10 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                Nuestra misión
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Nuestra misión es ayudar a nuestros alumnos a
                <strong> comunicarse con seguridad, claridad y propósito en inglés</strong>.
                Creemos que el idioma se aprende usándolo, que el error es parte del proceso
                y que la confianza se construye hablando.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MÉTODO BOOT UP */}
      <section id="metodo" className="relative">
        {/* halo cálido de fondo */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(850px_320px_at_50%_-80px,rgba(255,214,170,0.28),transparent_60%)]" />

        <div className="container mx-auto px-6 py-16">
          {/* título + lead */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              El método <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#FFB627]">Boot Up</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trabajamos con un <span className="font-medium text-foreground">enfoque comunicativo y funcional</span>,
              alineado al <span className="font-medium text-foreground">CEFR</span> y a estándares internacionales
              (Cambridge / IELTS). Usás el idioma desde la primera clase, con práctica oral constante y feedback continuo.
            </p>


          </div>

          {/* grid de pasos + panel lateral */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* pasos (2 columnas en desktop) */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              <MethodStep
                icon={<Mic className="h-5 w-5" />}
                title="Speaking desde el día uno"
                text="Arrancás hablando. Role plays y prompts guiados para activar vocabulario útil."
                badge="Paso 1"
              />
              <MethodStep
                icon={<Repeat className="h-5 w-5" />}
                title="Ciclos breves de práctica"
                text="Bloques de 10–12 min: input, práctica guiada y output. Ritmo que mantiene foco."
                badge="Paso 2"
              />
              <MethodStep
                icon={<MessageSquare className="h-5 w-5" />}
                title="Feedback accionable"
                text="Correcciones en tiempo real y micro-objetivos por clase. Nada de teoría abstracta."
                badge="Paso 3"
              />
              <MethodStep
                icon={<Target className="h-5 w-5" />}
                title="Metas SMART"
                text="Objetivos medibles por semana: vocabulario, funciones y situaciones reales."
                badge="Paso 4"
              />
            </div>

            {/* panel lateral con highlights */}
            <div className="md:col-span-1">
              <div className="h-full rounded-2xl border bg-white/70 backdrop-blur-sm ring-1 ring-muted-foreground/10 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Timer className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold leading-tight">Micro-aprendizaje efectivo</h3>
                      <p className="text-sm text-muted-foreground">Clases de 55–70 min con sprints orales y checkpoints.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PlayCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold leading-tight">Recursos on-demand</h3>
                      <p className="text-sm text-muted-foreground">Materiales digitales para seguir practicando.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border bg-gradient-to-br from-[#FFF3E0] to-white p-5">
                  <div className="text-3xl font-extrabold leading-none">4.9/5</div>
                  <p className="text-sm text-muted-foreground">promedio de satisfacción, +100 alumnos</p>
                  <a href="#planes" className="mt-4 inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm hover:bg-muted">
                    Conocé los planes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO – DETALLE DE Pilares */}
      <section id="metodo-detalle" className="relative overflow-hidden">
        {/* FONDO FULL-BLEED (mesh cálido + halo superior) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
          {/* halo superior */}
          <div className="absolute inset-0 bg-[radial-gradient(1400px_520px_at_50%_-140px,rgba(255,214,170,0.30),transparent_70%)]" />
          {/* mesh suave */}
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(120% 80% at 10% 10%,#FFF3E0 0%,transparent 60%), radial-gradient(90% 70% at 90% 90%,#FFDAB5 0%,transparent 60%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative mx-auto w-full max-w-md">
              {/* blob detrás */}
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[#FFF3E0] via-white to-[#FFDAB5] blur-[2px]" />

              {/* tarjeta */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-black/10 bg-white/70 backdrop-blur-sm">
                {/* conic glow sutil */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(from 220deg at 70% 20%, rgba(255,107,53,.08), transparent 30%, rgba(255,182,39,.08), transparent 70%)",
                  }}
                />

                {/* líneas topográficas */}
                <svg
                  aria-hidden
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 1200 1500"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#FFB627" />
                    </linearGradient>
                    <radialGradient id="fadeMask" cx="50%" cy="50%" r="70%">
                      <stop offset="65%" stopColor="#fff" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                    <mask id="softMask">
                      <rect width="100%" height="100%" fill="url(#fadeMask)" />
                    </mask>
                  </defs>

                  <g mask="url(#softMask)" stroke="url(#strokeGrad)" fill="none" strokeWidth="1.2" opacity="0.7">
                    {Array.from({ length: 22 }).map((_, i) => {
                      const y = 40 + i * 60;
                      const a = 60 + i * 3;
                      return (
                        <path
                          key={i}
                          d={`M -50 ${y} C 200 ${y - a}, 400 ${y + a}, 600 ${y} S 1000 ${y - a}, 1250 ${y}`}
                          style={{ opacity: 0.25 + i * 0.02 }}
                        />
                      );
                    })}
                  </g>

                  {/* puntitos discretos */}
                  <g mask="url(#softMask)" fill="#FF6B35" opacity="0.10">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <circle key={i} cx={(i * 197) % 1200} cy={(i * 311) % 1500} r="2.2" />
                    ))}
                  </g>
                </svg>

                {/* animación flotante muy sutil */}
                <div className="absolute inset-0 animate-floaty will-change-transform" />
              </div>

              {/* sombra inferior */}
              <div className="absolute -bottom-6 inset-x-12 h-8 rounded-full bg-black/5 blur-xl" aria-hidden />
            </div>

            {/* TEXTO / PILARES */}
            <div className="mx-auto w-full max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Cómo lo llevamos a clase
              </h3>
              <p className="mt-2 text-muted-foreground">
                Hacemos que el inglés se use de verdad: hablás, jugás, aplicás reglas en contextos reales. Sin vueltas.
              </p>

              <div className="mt-8 space-y-6">
                <Pillar
                  icon={<MessageSquareText className="h-5 w-5" />}
                  title="Conversaciones"
                  text="El corazón del aprendizaje. Hablás desde el primer día en situaciones reales, practicando vocabulario y pronunciación mientras recibís retroalimentación natural y contextual."
                />
                <Pillar
                  icon={<Gamepad2 className="h-5 w-5" />}
                  title="Juegos"
                  text="Actividades lúdicas y dinámicas que refuerzan el vocabulario, la comprensión y la memoria. Aprender es divertido y efectivo."
                />
                <Pillar
                  icon={<BookOpenCheck className="h-5 w-5" />}
                  title="Gramática"
                  text="Lo esencial, pero aplicado. Entendés las reglas usándolas en contextos reales, para que el inglés se integre de forma natural."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_300px_at_50%_-80px,rgba(255,214,170,0.25),transparent_60%)]" />
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Planes <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#FFB627]">Boot Up</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Elegí el plan según tu objetivo: base sólida, preparación de examen o performance premium.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <PlanCard
              badgeIcon={<Users className="h-4 w-4" />}
              badge="BOOT UP CORE"
              was="44000"
              price="39000"
              unit="/mes"
              title="Construcción sólida del idioma"
              blurb="Desarrollá una base lingüística fuerte y funcional para comunicarte con seguridad en contextos reales."
              bullets={[
                "Enfoque comunicativo",
                "Producción oral constante",
                "Gramática y vocabulario en contexto",
                "Feedback docente permanente",
                "Progresión por niveles CEFR",
              ]}
              cta="Quiero CORE"
            />

            <PlanCard
              featured
              color="amber"
              badgeIcon={<GraduationCap className="h-4 w-4" />}
              badge="BOOT UP PREP"
              was="69000"
              price="59000"
              unit="/mes"
              title="Preparación para exámenes internacionales"
              blurb="Puente entre el dominio del idioma y la instancia evaluativa: formato, estrategias y timing (Cambridge / IELTS)."
              bullets={[
                "Formato de examen + estrategias",
                "Trabajo por habilidades (L/R/W/S)",
                "Criterios oficiales de evaluación",
                "Práctica guiada tipo examen",
                "Correcciones con foco estratégico",
              ]}
              cta="Quiero PREP"
            />

            <PlanCard
              color="violet"
              badgeIcon={<Crown className="h-4 w-4" />}
              badge="BOOT UP CLINIC"
              was="99000"
              price="79000"
              unit="/mes"
              title="Entrenamiento avanzado – High Ticket"
              blurb="Servicio premium orientado a resultados: optimizá tu rendimiento para alcanzar un score específico (IELTS Academic/General)."
              bullets={[
                "Modalidad intensiva y personalizada",
                "Diagnóstico inicial por habilidad",
                "Speaking mock tests",
                "Writing con band score estimado",
                "Estrategias avanzadas + coaching 1:1",
              ]}
              cta="Quiero CLINIC"
            />
          </div>

          <div className="mt-10 text-center text-sm text-muted-foreground">
            Practicá. Hablá. Avanzá.
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="relative">
        {/* halo cálido para diferenciar la sección */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_300px_at_50%_-80px,rgba(255,214,170,0.25),transparent_60%)]" />
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Preguntas frecuentes</h2>
            <p className="text-muted-foreground mt-2">Lo clave, sin vueltas.</p>
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border bg-white/70 backdrop-blur-sm ring-1 ring-muted-foreground/10">
            <Accordion type="single" collapsible className="[&>div:not(:last-child)]:border-b">
              <AccordionItem value="1" className="px-4">
                <AccordionTrigger className="py-5 text-left">¿Cómo son las clases?</AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  Participativas, con foco en speaking y feedback continuo. Presencial, online o híbrida.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2" className="px-4">
                <AccordionTrigger className="py-5 text-left">¿Hacen nivelación?</AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  Sí. Entrevista corta para ubicarte en tu nivel ideal. Gratis y sin compromiso.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3" className="px-4">
                <AccordionTrigger className="py-5 text-left">¿Puedo cambiar de horario?</AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  Claro. Bandas horarias amplias y recuperatorios disponibles.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative">
        <div className="container mx-auto px-6 py-20">
          <Card className="mx-auto max-w-3xl overflow-hidden border-0 shadow-[0_20px_70px_-30px_rgba(255,107,53,0.35)]">
            {/* gradiente coral superior */}
            <div className="h-2 w-full bg-gradient-to-r from-[#FF6B35] via-[#FFB627] to-[#FF6B35]" />
            <CardContent className="p-8">
              <h3 className="text-center text-2xl md:text-3xl font-semibold">
                Sumate hoy!
              </h3>

              {/* input + botón integrados */}
              <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <div className="flex w-full overflow-hidden rounded-xl ring-1 ring-muted-foreground/20 focus-within:ring-2 focus-within:ring-primary">
                  <Input
                    placeholder="Tu email"
                    className="h-12 border-0 focus-visible:ring-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="h-12 rounded-none rounded-r-xl px-5">
                    Quiero mi clase
                  </Button>
                </div>
                {/* opción WhatsApp secundaria */}
                <Button asChild variant="outline" className="h-12 gap-2 sm:w-56">
                  <a href="https://wa.me/5491139055550?text=Hola!%20Quiero%20una%20clase%20de%20prueba%20de%20inglés" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> Chatear por WhatsApp
                  </a>
                </Button>
              </form>

              <p className="mt-2 text-center text-xs text-muted-foreground">
                Al enviar tus datos aceptás nuestra política de privacidad.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>


      <Footer />
    </main>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-semibold">
          <span>Boot Up</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#metodo" className="text-muted-foreground hover:text-foreground">Método</a>
          <a href="#planes" className="text-muted-foreground hover:text-foreground">Planes</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button>Empezá ahora</Button>
        </div>
      </div>
    </header>
  );
}
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <Card className="group relative overflow-hidden border-muted-foreground/10 transition hover:border-primary/40 hover:shadow-lg">
      {/* glow cálido en hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 
        bg-[radial-gradient(120px_80px_at_20%_0%,rgba(255,182,39,.12),transparent_60%),radial-gradient(160px_120px_at_80%_120%,rgba(255,107,53,.12),transparent_60%)]" />
      <CardContent className="relative p-6 h-full">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center ring-1 ring-primary/15">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold leading-tight">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MethodStep({
  icon, title, text, badge,
}: { icon: React.ReactNode; title: string; text: string; badge: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white/70 p-5 ring-1 ring-muted-foreground/10 transition hover:shadow-lg">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      bg-[radial-gradient(160px_120px_at_20%_0%,rgba(255,182,39,.1),transparent_60%),radial-gradient(220px_160px_at_100%_120%,rgba(255,107,53,.08),transparent_60%)]" />
      <div className="relative flex items-start gap-4">
        <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{badge}</div>
          <h3 className="font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Pillar({
  icon, title, text,
}: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white/75 p-5 ring-1 ring-muted-foreground/10 transition hover:shadow-lg">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      bg-[radial-gradient(160px_120px_at_10%_0%,rgba(255,182,39,.10),transparent_60%),radial-gradient(220px_160px_at_100%_120%,rgba(255,107,53,.08),transparent_60%)]" />
      <div className="relative flex items-start gap-4">
        <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold leading-tight">{title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

function PlanCard({
  featured,
  color = "slate",
  badgeIcon,
  badge,
  was,
  price,
  unit,
  title,
  bullets,
  blurb,
  cta,
}: {
  featured?: boolean;
  color?: "violet" | "amber" | "slate";
  badgeIcon: React.ReactNode;
  badge: string;
  was: string;     // números sin separadores, ej. "20000"
  price: string;   // números sin separadores, ej. "14000"
  unit: string;
  title: string;
  bullets: string[];
  blurb: string;
  cta: string;
}) {
  const colorMap = {
    violet: "bg-violet-100 text-violet-800 ring-violet-200",
    amber: "bg-amber-100 text-amber-900 ring-amber-200",
    slate: "bg-slate-200 text-slate-900 ring-slate-300",
  } as const;

  const badgeClasses = colorMap[color];

  return (
    <Card
      className={[
        "relative overflow-hidden rounded-2xl border bg-white/90 backdrop-blur",
        featured
          ? "border-primary/40 shadow-[0_18px_60px_-30px_rgba(255,107,53,0.45)]"
          : "border-muted-foreground/10"
      ].join(" ")}
    >
      {featured && (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#FFB627] to-[#FF6B35]" />
      )}

      <CardHeader className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-[11px] font-semibold ring-1 select-none"
          role="note" aria-label={badge}
        >
          <span className={`inline-flex items-center gap-1 ${badgeClasses}`}>
            {badgeIcon}
            {badge}
          </span>
        </div>

        <div className="text-xs text-muted-foreground">A partir de</div>
        <div className="text-muted-foreground">
          <span className="line-through decoration-2 decoration-muted-foreground/50">
            {formatARS(was)}{unit}
          </span>
        </div>

        <div className="mt-1 flex items-end gap-2">
          <div className="text-5xl font-extrabold tracking-tight">{formatARS(price)}</div>
          <div className="mb-2 text-muted-foreground">{unit}</div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <h3 className="sr-only">{title}</h3>
        <p className="text-sm text-muted-foreground">{blurb}</p>

        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm">
              <span className="mt-1 h-4 w-4 rounded-full bg-primary/10 text-primary ring-1 ring-primary/15 flex items-center justify-center">
                <span className="block h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full h-11 text-base" variant={featured ? "default" : "secondary"}>
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}

function formatARS(value: string) {
  try {
    return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 })
      .format(Number(value));
  } catch {
    return `$${value}`;
  }
}

function Footer() {
  return (
    <footer className="border-t py-10 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="text-muted-foreground">© {new Date().getFullYear()} Instituto de Inglés. Todos los derechos reservados.</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground">Privacidad</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Términos</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
