// src/data/escuela.ts - Datos Maestros de la Escuela de Escritores «José Gorostiza» (Filial Académica Oficial de LVT)

export interface ModuloPeriodismo {
  numero: number;
  nombre: string;
}

export interface Diplomado {
  id: string;
  nombre: string;
  duracion: string;
  modulosCount: number;
  dirigidoA: string;
  perfilEgresado: string;
  materiasClave: string[];
  modulosDetallados?: ModuloPeriodismo[];
}

export interface Docente {
  nombre: string;
  cargo: string;
  trayectoria: string;
  materias: string;
}

export const IDENTIDAD_ESCUELA = {
  nombreOficial: "Escuela de Escritores «José Gorostiza»",
  filialDe: "Sociedad de Escritores «Letras y Voces de Tabasco», A.C.",
  lema: "Creada por escritores, para escritores",
  filosofia: "Atención personalizada e integradora: no eres un número, sino un amigo y compañero de letras.",
  mision: "Fomentar, impartir y generar conocimientos literarios y periodísticos entre la población, proyectando los valores universales de la literatura y el periodismo como bienes culturales inalienables y promoviendo la conservación de la identidad regional.",
  fechaFundacion: "Septiembre de 2001 (Bienio 2001–2003 de LVT)",
  primerDirector: "Arq. Mario de Lille Fuentes",
  direccionesDestacadas: [
    { nombre: "Arq. Mario de Lille Fuentes", periodo: "Director Fundador (2001)" },
    { nombre: "Mtra. Guadalupe Azuara Forcelledo", periodo: "Directora Académica e Investigadora" },
    { nombre: "Mtra. Liliana Chuzeville Córdoba", periodo: "Directora General Actual" }
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
  ubicacion: {
    sede: "Interior de la Antigua Escuela de Derecho / Antigua División Académica de Ciencias Sociales y Humanidades (DACSyH - UJAT)",
    direccion: "Calle Centenario Instituto Juárez s/n, Colonia Reforma, C.P. 86080, Villahermosa, Centro, Tabasco (detrás de la Secretaría de Finanzas, vuelta del edificio Fundación UJAT).",
    horarios: "Martes a viernes de 17:00 a 20:00 hrs. / Sábados de 9:00 a 14:00 hrs.",
    whatsappInformes: "+52 220 588 9391"
  },
  diferenciacionInstitucional: {
    escuelaGorostiza: "Asociación académica civil filial de Letras y Voces de Tabasco, A.C., enfocada en diplomados profesionales de creación literaria, redacción y periodismo cultural respaldados por la UJAT.",
    casaArtesGorostiza: "Recinto cultural gubernamental fundado en 1982 y administrado por la Secretaría de Cultura del Gobierno del Estado de Tabasco, dedicado a talleres de iniciación artística infantil y juvenil en música, danza, pintura y teatro."
  }
};

export const DIPLOMADOS_GOROSTIZA: Diplomado[] = [
  {
    id: 'creacion-literaria',
    nombre: 'Diplomado en Creación Literaria',
    duracion: '1 Año Académico',
    modulosCount: 6,
    dirigidoA: 'Personas interesadas en el oficio literario, narradores, poetas, dramaturgos y creadores con vocación de autor.',
    perfilEgresado: 'Egresados con dominio de las técnicas mayores y un volumen de obra propia listo para publicación editorial.',
    materiasClave: [
      'Cuento y Estructuras Narrativas',
      'Novela y Construcción de Personajes',
      'Poesía Clásica y Contemporánea',
      'Teatro y Dramaturgia Escénica',
      'Guionismo Audiovisual',
      'Ensayo Literario y Corrección de Estilo'
    ]
  },
  {
    id: 'periodismo-cultural',
    nombre: 'Diplomado en Periodismo Cultural',
    duracion: '325 Horas Curriculares (11 Módulos)',
    modulosCount: 11,
    dirigidoA: 'Periodistas, comunicadores, cronistas, redactores, estudiantes y gestores culturales.',
    perfilEgresado: 'Competencias para investigar, analizar y redactar textos de crítica y divulgación en prensa escrita, radio, TV e internet.',
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
    id: 'formacion-literaria',
    nombre: 'Diplomado en Formación Literaria',
    duracion: '120 Horas Curriculares',
    modulosCount: 4,
    dirigidoA: 'Docentes de español, literatura y ciencias sociales, traductores, guionistas y público general.',
    perfilEgresado: 'Dominio de herramientas metodológicas sobre teoría y apreciación literaria para aplicar en la docencia y en la creación escrita.',
    materiasClave: [
      'Teoría y Apreciación Literaria',
      'Didáctica de las Letras del Sureste',
      'Análisis de Textos Universales',
      'Estrategias de Animación a la Lectura'
    ]
  },
  {
    id: 'redaccion-profesional',
    nombre: 'Diplomado en Redacción Profesional',
    duracion: '100 Horas Prácticas',
    modulosCount: 4,
    dirigidoA: 'Profesionales, servidores públicos, abogados, académicos y estudiantes que requieran escribir con máxima precisión.',
    perfilEgresado: 'Dominio de la ortografía moderna, gramática, sintaxis, corrección de estilo y redacción institucional/académica.',
    materiasClave: [
      'Ortografía y Acentuación RAE',
      'Sintaxis Lógica y Puntuación',
      'Corrección de Estilo y Textos Complejos',
      'Redacción Institucional, Jurídica y Académica'
    ]
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

export const CLAUSTRO_DOCENTE_HISTORICO: Docente[] = [
  {
    nombre: 'Arq. Mario de Lille Fuentes',
    cargo: 'Director Fundador & Rector Académico (2001)',
    trayectoria: 'Eminente arquitecto, novelista, dramaturgo y poeta; pilar fundador de LVT en 1987 y forjador del modelo pedagógico de la Escuela.',
    materias: 'Narrativa Mayor, Novela, Dramaturgia y Estructura Literaria.'
  },
  {
    nombre: 'Fernando Nieto Cadena',
    cargo: 'Catedrático de Literatura y Periodismo (Desde 2002)',
    trayectoria: 'Poeta y psicólogo ecuatoriano-mexicano; formador fundamental en la estética literaria del Sureste.',
    materias: 'Taller de Redacción, Teoría Literaria, Ensayo, Movimientos Estéticos y Psicosociología del Periodismo Cultural.'
  },
  {
    nombre: 'Lic. Rodrigo Arteaga Portillo',
    cargo: 'Catedrático e Investigador UJAT (Desde 2002)',
    trayectoria: 'Licenciado en Lenguas y Literaturas Hispánicas y docente-investigador de la Universidad Juárez Autónoma de Tabasco.',
    materias: 'Ortografía, Sintaxis, Gramática Superior y Redacción.'
  },
  {
    nombre: 'Ana Livia Salinas («Ana Salinas»)',
    cargo: 'Especialista en Crónica y Gestión Administrativa',
    trayectoria: 'Instructora, editora y especialista en crónica literaria; coordinadora del taller «Género que respira y se mueve».',
    materias: 'Crónica Literaria, Reseña Periodística y Procesos de Edición.'
  },
  {
    nombre: 'Rebeca Díaz Suárez',
    cargo: 'Catedrática y Miembro del Cuerpo Directivo',
    trayectoria: 'Poeta, docente, promotora cultural y miembro del claustro académico colegiado de la institución.',
    materias: 'Creación Poética, Apreciación Literaria y Declamación.'
  }
];
