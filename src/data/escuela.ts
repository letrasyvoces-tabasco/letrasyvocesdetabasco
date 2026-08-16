export interface Diplomado {
  id: string;
  nombre: string;
  duracion: string;
  modulos: number;
  dirigidoA: string;
  objetivo: string;
  materiasClave: string[];
}

export const DIPLOMADOS_GOROSTIZA: Diplomado[] = [
  {
    id: 'creacion-literaria',
    nombre: 'Diplomado en Creación Literaria',
    duracion: '1 Año Académico (180 hrs)',
    modulos: 6,
    dirigidoA: 'Escritores emergentes, poetas, narradores y creadores con vocación de autor.',
    objetivo: 'Desarrollo de competencias técnicas, formales y estéticas en los géneros literarios mayores.',
    materiasClave: ['Técnicas de Poesía Moderna', 'Estructura de Novela y Cuento', 'Dramaturgia y Guionismo', 'Ensayo Literario', 'Taller de Corrección Colectiva']
  },
  {
    id: 'formacion-literaria',
    nombre: 'Diplomado en Formación Literaria para la Docencia',
    duracion: '120 hrs Académicas',
    modulos: 4,
    dirigidoA: 'Docentes de educación media y superior en Español, Literatura y Humanidades.',
    objetivo: 'Capacitar a profesores en metodologías activas para el fomento de la lectura y el análisis estético en las aulas.',
    materiasClave: ['Didáctica de las Letras', 'Historia de la Literatura del Sureste', 'Análisis de Textos Clásicos', 'Estrategias de Animación Lectora']
  },
  {
    id: 'periodismo-cultural',
    nombre: 'Diplomado en Periodismo Cultural y Crítica de Arte',
    duracion: '325 hrs Curriculares',
    modulos: 11,
    dirigidoA: 'Periodistas, comunicadores, cronistas, redactores y gestores culturales.',
    objetivo: 'Especialización integral en la cobertura periodística, entrevista de fondo, reseña crítica, ética y plataformas digitales.',
    materiasClave: ['Géneros Periodísticos de Opinión', 'Reseña y Crítica de Espectáculos', 'Ética y Deontología Periodística', 'Periodismo Digital y Redes Culturales', 'Crónica Urbana y Regional']
  },
  {
    id: 'redaccion-profesional',
    nombre: 'Diplomado en Redacción Profesional y Corrección de Estilo',
    duracion: '100 hrs Prácticas',
    modulos: 4,
    dirigidoA: 'Servidores públicos, abogados, editores y estudiantes que requieran dominio escrito absoluto.',
    objetivo: 'Perfeccionamiento ortotipográfico, gramatical y sintáctico con apego estricto a las normas de la Real Academia Española.',
    materiasClave: ['Ortografía y Acentuación Avanzada', 'Sintaxis y Puntuación Lógica', 'Técnicas de Corrección de Manuscritos', 'Redacción Institucional y Jurídica']
  }
];

export const CUERPO_DOCENTE_HISTORICO = [
  { nombre: 'Mario de Lille Fuentes', cargo: 'Director Fundador (2001)', semblanza: 'Destacado narrador, dramaturgo y poeta radicado en Tabasco, forjador del modelo pedagógico inicial.' },
  { nombre: 'Fernando Nieto Cadena', cargo: 'Catedrático de Poesía', semblanza: 'Poeta y crítico de renombre nacional, formador de múltiples generaciones líricas.' },
  { nombre: 'Rodrigo Arteaga Portillo', cargo: 'Instructor de Narrativa', semblanza: 'Especialista en cuento y técnicas narrativas contemporáneas.' },
  { nombre: 'Ana Livia Salinas', cargo: 'Especialista en Crónica', semblanza: 'Docente e investigadora en géneros periodísticos y memoria urbana.' },
  { nombre: 'Rebeca Díaz Suárez', cargo: 'Catedrática de Creación Literaria', semblanza: 'Poeta, gestora cultural y expresidenta de la Mesa Directiva LVT.' }
];
