// src/data/escuela.ts - Datos Maestros Oficiales de la Escuela de Escritores «José Gorostiza» (EEJG)
// Actualización aprobada por la Dirección Académica y General (2026)

export interface ModuloPeriodismo {
  numero: number;
  nombre: string;
}

export interface Diplomado {
  id: string;
  nombre: string;
  duracion: string;
  modalidad: string;
  enfoque: string;
  modulosCount: number;
  dirigidoA: string;
  perfilEgresado: string;
  materiasClave: string[];
  modulosDetallados?: ModuloPeriodismo[];
}

export interface CursoContinuo {
  id: string;
  nombre: string;
  duracion: string;
  modalidad: string;
  enfoque: string;
  descripcion: string;
  ejes: string[];
}

export interface ReferenteHistorico {
  nombre: string;
  rol: string;
  trayectoria: string;
  legado: string;
}

export interface DirectivoActual {
  nombre: string;
  cargo: string;
  trayectoria: string;
  materias: string;
  contacto: string;
}

export const IDENTIDAD_ESCUELA = {
  nombreOficial: "Escuela de Escritores «José Gorostiza»",
  siglaOficial: "EEJG",
  filialDe: "Sociedad de Escritores «Letras y Voces de Tabasco», A.C.",
  lema: "Creada por escritores, para escritores",
  filosofia: "Atención personalizada e integradora: no eres un número, sino un amigo y compañero de letras.",
  mision: "Fomentar, impartir y generar conocimientos literarios y periodísticos entre la población, proyectando los valores universales de la literatura y el periodismo como bienes culturales inalienables y promoviendo la conservación de la identidad regional.",
  fechaFundacion: "Septiembre de 2001 (Bienio 2001–2003 de LVT)",
  primerDirector: "Arq. Mario de Lille Fuentes",
  pionerosHistoricos: [
    { nombre: "Arq. Mario de Lille Fuentes (†)", periodo: "Director Fundador (2001) y Pilar Tutelar de LVT" },
    { nombre: "Mtra. Guadalupe Azuara Forcelledo", periodo: "Directora Histórica e Investigadora" },
    { nombre: "Lic. Margarito Palacios Maldonado", periodo: "Pionero Fundador de la Escuela de Escritores" }
  ],
  direccionActual: [
    { 
      nombre: "Mtra. Liliana Chuzeville Córdoba", 
      cargo: "Directora General",
      jerarquia: 1,
      telefono: "99 32 64 75 02",
      telefonoClean: "529932647502",
      email: "egorosiglo21@gmail.com"
    },
    { 
      nombre: "Mtra. Rebeca Díaz Suárez", 
      cargo: "Directora Académica",
      jerarquia: 2,
      telefono: "99 31 46 73 90",
      telefonoClean: "529931467390",
      email: "egorosiglo21@gmail.com"
    }
  ],
  alianzaUjat: {
    vigencia: "+24 años ininterrumpidos",
    rectorFirmante: "Lic. Guillermo Narváez Osorio",
    directoraFirmante: "Mtra. Liliana Chuzeville Córdoba",
    beneficios: [
      "Aval académico formal y curricular en todos los diplomados.",
      "Descuento preferencial del 25% al 30% para estudiantes, docentes y trabajadores UJAT.",
      "Programa televisivo «Emergiendo desde las Palabras» coproducido y transmitido por TV UJAT como práctica profesional.",
      "Presencia activa en la Feria Internacional del Libro (FIL UJAT) y festejos de aniversario."
    ]
  },
  reglasAcreditacion: {
    asistenciaMinima: "90% de asistencias comprobables",
    calificacionMinima: "8.0 (ocho punto cero)"
  },
  antologiaEgresadosReciente: {
    titulo: "Escuela con sus plumas de ceiba",
    generacion: "Generación Guadalupe Azuara Forcelledo 2022–2023",
    anioPublicacion: 2024,
    isbn: "978-607-606-668-3",
    secciones: ["Poesía", "Narrativa", "Investigación", "Ensayo"]
  },
  contactoDirecto: {
    telefonos: ["99 32 64 75 02", "99 31 46 73 90"],
    telefonosClean: ["529932647502", "529931467390"],
    email: "egorosiglo21@gmail.com",
    facebook: "Diplomados \"José Gorostiza\"",
    facebookUrl: "https://www.facebook.com/search/top?q=Diplomados%20Jos%C3%A9%20Gorostiza",
    modalidad: "Presencial y En Línea (50% Teoría / 50% Práctica)"
  },
  ubicacion: {
    sede: "Interior de la Antigua Escuela de Derecho / Antigua División Académica de Ciencias Sociales y Humanidades (DACSyH - UJAT)",
    direccion: "Calle Centenario Instituto Juárez s/n, Colonia Reforma, C.P. 86080, Villahermosa, Centro, Tabasco (detrás de la Secretaría de Finanzas, vuelta del edificio Fundación UJAT).",
    horarios: "Martes a viernes de 17:00 a 20:00 hrs. / Sábados de 9:00 a 14:00 hrs."
  },
  diferenciacionInstitucional: {
    escuelaGorostiza: "Asociación académica civil filial de Letras y Voces de Tabasco, A.C., enfocada en diplomados profesionales de creación literaria, redacción y periodismo cultural respaldados por la UJAT.",
    casaArtesGorostiza: "Recinto cultural gubernamental fundado en 1982 y administrado por la Secretaría de Cultura del Gobierno del Estado de Tabasco, dedicado a talleres de iniciación artística infantil y juvenil en música, danza, pintura y teatro."
  }
};

export const DIPLOMADOS_GOROSTIZA: Diplomado[] = [
  {
    id: 'redaccion-profesional',
    nombre: 'Diplomado en Redacción Profesional',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 4,
    dirigidoA: 'Profesionales, servidores públicos, abogados, académicos y estudiantes que requieran escribir con máxima precisión.',
    perfilEgresado: 'Dominio de la ortografía moderna, gramática, sintaxis lógica, corrección de estilo y redacción institucional/académica.',
    materiasClave: [
      'Ortografía y Acentuación RAE',
      'Sintaxis Lógica y Puntuación',
      'Corrección de Estilo y Textos Complejos',
      'Redacción Institucional, Jurídica y Ejecutiva'
    ]
  },
  {
    id: 'creacion-literaria',
    nombre: 'Diplomado en Formación y Creación Literaria',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 6,
    dirigidoA: 'Personas interesadas en el oficio literario, narradores, poetas, dramaturgos y creadores con vocación de autor.',
    perfilEgresado: 'Egresados con dominio de las técnicas mayores de la narrativa, la lírica y la dramaturgia, con un volumen de obra propia listo para publicación.',
    materiasClave: [
      'Cuento y Estructuras Narrativas',
      'Novela y Construcción de Personajes',
      'Poesía Clásica y Contemporánea',
      'Teatro y Dramaturgia Escénica',
      'Ensayo Literario y Estilo',
      'Proyecto Editorial de Titulación'
    ]
  },
  {
    id: 'periodismo-cultural',
    nombre: 'Diplomado en Periodismo Cultural',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 11,
    dirigidoA: 'Periodistas, comunicadores, cronistas, redactores, estudiantes y gestores culturales.',
    perfilEgresado: 'Competencias integrales para investigar, analizar y redactar textos de crítica y divulgación en prensa escrita, radio, TV e internet.',
    materiasClave: [
      'Ortografía y Redacción',
      'Periodismo como Expresión Cultural',
      'Apreciación de la Cultura',
      'Géneros Periodísticos',
      'Reseña Crítica y Ensayo',
      'Entrevista de Semblanza',
      'Crónica Literaria',
      'Corrección de Estilo',
      'Periodismo Digital',
      'Ética Profesional y Libertad de Expresión',
      'Guionismo de Radio y Televisión'
    ],
    modulosDetallados: [
      { numero: 1, nombre: 'Ortografía y Redacción' },
      { numero: 2, nombre: 'Periodismo como Expresión Cultural' },
      { numero: 3, nombre: 'Apreciación de la Cultura' },
      { numero: 4, nombre: 'Géneros Periodísticos' },
      { numero: 5, nombre: 'Reseña Crítica y Ensayo' },
      { numero: 6, nombre: 'Entrevista de Semblanza' },
      { numero: 7, nombre: 'Crónica Literaria' },
      { numero: 8, nombre: 'Corrección de Estilo' },
      { numero: 9, nombre: 'Periodismo Digital' },
      { numero: 10, nombre: 'Ética Profesional y Libertad de Expresión' },
      { numero: 11, nombre: 'Guionismo de Radio y Televisión' }
    ]
  },
  {
    id: 'gestion-promocion-cultural',
    nombre: 'Diplomado en Gestión y Promoción Cultural',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 4,
    dirigidoA: 'Promotores, directores de casas de cultura, gestores independientes, curadores y coordinadores de proyectos artísticos.',
    perfilEgresado: 'Capacidad para diseñar, presupuestar, gestionar fondos y ejecutar festivales, ferias del libro y programas culturales comunitarios.',
    materiasClave: [
      'Políticas Culturales y Legislación',
      'Diseño y Evaluación de Proyectos Culturales',
      'Procuración de Fondos y Patrocinios',
      'Marketing Cultural y Audiencias'
    ]
  },
  {
    id: 'guion-dramaturgia-tv-podcast',
    nombre: 'Diplomado en Guion: Dramaturgia, TV y Podcast',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 5,
    dirigidoA: 'Guionistas, dramaturgos, podcasters, creadores audiovisuales y narradores transmedia.',
    perfilEgresado: 'Habilidad para estructurar escaletas, diálogos, guiones dramáticos para teatro, series televisivas y narrativa sonora de podcast.',
    materiasClave: [
      'Estructura Dramática Clásica y Moderna',
      'Guion para Teatro y Escena',
      'Guion Audiovisual y Televisivo',
      'Narrativa Sonora y Producción de Podcast',
      'Pitching y Registro de Derechos de Autor'
    ]
  },
  {
    id: 'oratoria',
    nombre: 'Diplomado en Oratoria',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 4,
    dirigidoA: 'Abogados, servidores públicos, docentes, conferencistas, líderes comunitarios y estudiantes.',
    perfilEgresado: 'Elocuencia, manejo del lenguaje no verbal, estructura de discursos persuasivos y dominio del escenario y debate.',
    materiasClave: [
      'Técnicas de Respiración y Proyección Vocal',
      'Construcción y Retórica del Discurso',
      'Lenguaje Corporal y Presencia Escénica',
      'Debate, Argumentación y Manejo de Crisis'
    ]
  },
  {
    id: 'declamacion-poesia-coral',
    nombre: 'Diplomado en Declamación y Poesía Coral',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 4,
    dirigidoA: 'Docentes de educación básica y media, declamadores, actores, poetas y directores corales.',
    perfilEgresado: 'Capacidad de interpretación lírica individual y dirección de coros poéticos escolares y comunitarios.',
    materiasClave: [
      'Fonética, Ritmo y Métrica Lírica',
      'Expresión Corporal y Emotividad',
      'Montaje y Dirección de Poesía Coral',
      'Repertorio de Poetas Tabasqueños y Universales'
    ]
  },
  {
    id: 'produccion-editorial-diseno-grafico',
    nombre: 'Diplomado en Producción Editorial y Diseño Gráfico',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 4,
    dirigidoA: 'Editores independientes, diseñadores, autores autopublicados y correctores de estilo.',
    perfilEgresado: 'Dominio de la maquetación tipográfica, diseño de cubiertas, preparación de archivos de imprenta, formatos digitales ePub y trámites ISBN/INDAUTOR.',
    materiasClave: [
      'Tipografía y Composición Editorial',
      'Maquetación Profesional en InDesign y LaTeX',
      'Diseño de Portadas e Ilustración',
      'Procesos de Imprenta, Preprensa y ePub'
    ]
  },
  {
    id: 'copywriters-booktubers-contenidos',
    nombre: 'Diplomado en Copywriters, Booktubers y Contenidos',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 4,
    dirigidoA: 'Creadores digitales, redactores web, community managers, booktubers y divulgadores de literatura.',
    perfilEgresado: 'Creación de textos persuasivos para internet, reseñas en video, podcasts literarios, SEO de contenidos y marcas personales autorales.',
    materiasClave: [
      'Copywriting Persuasivo y Storytelling',
      'Guionismo para YouTube y Redes Sociales',
      'Reseña Crítica para Medios Digitales',
      'Estrategias de Divulgación Cultural Web'
    ]
  },
  {
    id: 'concepciones-sobre-la-lectura',
    nombre: 'Diplomado en Concepciones sobre la Lectura',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    modulosCount: 4,
    dirigidoA: 'Mediadores de lectura, bibliotecarios, docentes, pedagogos y promotores de salas de lectura.',
    perfilEgresado: 'Herramientas pedagógicas y sociológicas para fomentar el hábito lector, análisis de la comprensión crítica y dinamización de círculos literarios.',
    materiasClave: [
      'Historia y Sociología de la Lectura',
      'Estrategias de Mediación y Animación Lectora',
      'Literatura Infantil y Juvenil (LIJ)',
      'Diseño de Talleres y Clubes de Lectura'
    ]
  }
];

export const CURSOS_CONTINUOS_GOROSTIZA: CursoContinuo[] = [
  {
    id: 'curso-redaccion',
    nombre: 'Curso de Redacción',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    descripcion: 'Estructuración clara de párrafos, conectores lógicos, coherencia y adecuación de textos para el ámbito laboral y académico.',
    ejes: ['Claridad y concisión', 'Estructura textual', 'Eliminación de vicios del lenguaje']
  },
  {
    id: 'curso-ortografia',
    nombre: 'Curso de Ortografía',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    descripcion: 'Actualización sobre normas de la RAE, reglas de acentuación diacrítica, grafías dudosas y signos de puntuación.',
    ejes: ['Acentuación gráfica', 'Puntuación expresiva', 'Novedades normativas RAE']
  },
  {
    id: 'curso-lectura',
    nombre: 'Curso de Lectura Comprensiva y Crítica',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    descripcion: 'Desarrollo de habilidades de análisis textual, decodificación de niveles de significado y pensamiento crítico.',
    ejes: ['Lectura analítica', 'Inferencias textuales', 'Apreciación estilística']
  },
  {
    id: 'curso-cuento',
    nombre: 'Curso de Cuento',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    descripcion: 'Taller de escritura de relato breve y minificción: conflicto, tensión narrativa, atmósfera y finales sorpresivos.',
    ejes: ['Tensión narrativa', 'Creación de personajes', 'Minificción y microcuento']
  },
  {
    id: 'curso-poesia',
    nombre: 'Curso de Poesía',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    descripcion: 'Exploración del ritmo, imágenes líricas, metáforas, métrica clásica y verso libre con ejercicios semanales de taller.',
    ejes: ['El ritmo y la imagen', 'Verso libre y métrica', 'Voz poética propia']
  },
  {
    id: 'curso-novela',
    nombre: 'Curso de Novela',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    descripcion: 'Planificación de obras de largo aliento: argumento, tramas paralelas, psicología de personajes y arcos dramáticos.',
    ejes: ['Estructura de la novela', 'Arco de transformación', 'Atmósferas y ritmo']
  },
  {
    id: 'curso-teatro',
    nombre: 'Curso de Teatro y Dramaturgia',
    duracion: '120 Horas',
    modalidad: 'Presencial y En Línea',
    enfoque: '50% Teoría / 50% Práctica',
    descripcion: 'Escritura dramática para la escena viva: acotaciones, diálogos, conflicto escénico y construcción de monólogos.',
    ejes: ['Acción dramática', 'Diálogo escénico', 'Monólogos y puestas en escena']
  }
];

export const TALLERES_LIBRES_ESCUELA = [
  'Taller de Poesía Contemporánea',
  'Taller de Cuento y Minificción',
  'Taller de Redacción y Ortografía Ejecutiva',
  'Taller de Oratoria y Elocuencia',
  'Taller de Corrección de Estilo y Edición',
  'Taller de Guionismo para Cine y Medios'
];

export const PIONEROS_Y_REFERENTES_EEJG: ReferenteHistorico[] = [
  {
    nombre: 'Arq. Mario de Lille Fuentes (†)',
    rol: 'Director Fundador & Rector Académico (2001)',
    trayectoria: 'Eminente arquitecto, novelista, dramaturgo y poeta; pilar fundador de LVT en 1987 y forjador del modelo pedagógico y planes de estudio de la Escuela.',
    legado: 'Referente Histórico Tutelar · Creador de los primeros diplomados en Creación Literaria.'
  },
  {
    nombre: 'Mtra. Guadalupe Azuara Forcelledo',
    rol: 'Directora Histórica e Investigadora',
    trayectoria: 'Investigadora literaria, escritora y expresidenta de LVT; impulsora de las grandes antologías en coedición UJAT/ICT y de generaciones de egresados.',
    legado: 'Referente Pedagógico · Nombre conmemorativo de generaciones de graduados.'
  },
  {
    nombre: 'Lic. Margarito Palacios Maldonado',
    rol: 'Pionero Fundador de la Escuela de Escritores',
    trayectoria: 'Intelectual y promotor cultural, partícipe indispensable en la gestación y primeros ciclos formativos de la Escuela de Escritores «José Gorostiza».',
    legado: 'Pionero Fundador · Baluarte del proyecto de profesionalización de las letras en Tabasco.'
  },
  {
    nombre: 'Fernando Nieto Cadena (†)',
    rol: 'Maestro y Referente Histórico de Periodismo y Literatura',
    trayectoria: 'Poeta y psicólogo; formador fundamental de la Escuela de Escritores en las cátedras de Periodismo Cultural y Taller de Ensayo.',
    legado: 'Maestro Emérito de la primera etapa formativa de la EEJG.'
  }
];

export const DIRECTIVAS_ACTUALES_EEJG: DirectivoActual[] = [
  {
    nombre: 'Mtra. Liliana Chuzeville Córdoba',
    cargo: 'Directora General Actual (EEJG) & Comisión de Honor y Justicia LVT',
    trayectoria: 'Licenciada en Criminología, titular de la Comisión de Honor y Justicia de LVT, distinguida con las «Palmas de Oro» y «México en tus manos». Coordinadora general de convenios interinstitucionales.',
    materias: 'Creación Literaria, Narrativa, Gestión y Coordinación Institucional.',
    contacto: '99 32 64 75 02'
  },
  {
    nombre: 'Mtra. Rebeca Díaz Suárez',
    cargo: 'Directora Académica Actual (EEJG) & Expresidenta LVT',
    trayectoria: 'Poeta, ensayista, expresidenta de LVT y formadora de generaciones literarias en el Sureste de México.',
    materias: 'Creación Poética, Apreciación Literaria, Métrica y Declamación.',
    contacto: '99 31 46 73 90'
  }
];