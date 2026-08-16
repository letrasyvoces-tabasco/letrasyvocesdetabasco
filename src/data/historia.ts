export interface GestionHistorica {
  periodo: string;
  liderazgo: string;
  descripcion: string;
  hitos: string[];
}

export const CRONOLOGIA_DIRECTIVA: GestionHistorica[] = [
  {
    periodo: '1987 – 1994',
    liderazgo: 'Mesa Directiva Fundacional (Teodosio García Ruiz, Carmen Luna Pérez, Jorge Priego Martínez, Vicente Gómez Montero, Jesús de Dios)',
    descripcion: 'Constitución legal de la asociación civil en Villahermosa, formalizando el espacio autónomo para el gremio y estructurando la red estatal de talleres.',
    hitos: [
      'Constitución legal de la A.C. en 1987 ante notario público.',
      'Estructuración de talleres literarios municipales autónomos.',
      'Primeras gestiones de coedición con la Universidad Juárez Autónoma de Tabasco (UJAT) y el ICT.'
    ]
  },
  {
    periodo: '1994 – 2000',
    liderazgo: 'Presidencia de Guadalupe Azuara Forcelledo',
    descripcion: 'Consolidación de la presencia institucional en los comités de planeación cultural del estado y edición de antologías fundacionales.',
    hitos: [
      'Publicación de "Primero la voz" (1995) y "Antología de poesía contemporánea de Tabasco" (487 págs.).',
      'Integración formal al Consejo Editorial del ICT y al FECA.',
      'Publicación de obras clave en la serie Opera Prima ("La pluma en el blanco", 1996).'
    ]
  },
  {
    periodo: '2001 – 2003',
    liderazgo: 'Presidencia de la Mesa Directiva (Bienio Fundador de la Filial)',
    descripcion: 'Hito histórico con la creación del brazo formativo académico y del órgano de difusión periodística de la asociación.',
    hitos: [
      'Fundación de la Escuela de Escritores "José Gorostiza" (Septiembre de 2001) dirigida por Mario de Lille Fuentes.',
      'Lanzamiento y circulación de la Revista Cultural "Letra Voz".',
      'Firma de convenios académicos de validez curricular con la UJAT.'
    ]
  },
  {
    periodo: '2003 – 2012',
    liderazgo: 'Gestiones Directivas e inclusión de liderazgos como María Eugenia Torres Arias ("Maru Lozano")',
    descripcion: 'Proyección interinstitucional a nivel nacional, producción de radio cultural y articulación de diplomados especializados.',
    hitos: [
      'Diplomados con el auspicio conjunto de ICT, SOGEM y UJAT.',
      'Fomento a la dramaturgia y monólogos independientes ("Consumatum est").',
      'Publicación de literatura infantil de fomento a la lectura ("Nuestro mundo con Clau-dia", 2005).'
    ]
  },
  {
    periodo: '2013 – 2016',
    liderazgo: 'Presidencia de Rebeca Díaz Suárez',
    descripcion: 'Descentralización cultural hacia los municipios y magnos encuentros conmemorativos de alcance estatal.',
    hitos: [
      'XXVIII Encuentro de Escritores "Así Habla Mi Ciudad" en homenaje póstumo a Gabriela Gutiérrez Lomasto.',
      'Extensión de actividades y talleres de crónica a 7 municipios (Centro, Centla, Cárdenas, Tacotalpa, Jalpa de Méndez, Paraíso, Nacajuca).',
      'Edición del libro colectivo "Proyecto Babel" (2014) con el Instituto Estatal de Cultura (IEC).'
    ]
  },
  {
    periodo: '2017 – Presente',
    liderazgo: 'Mesas Directivas Contemporáneas (Representaciones de Anaís Arias Pérez, Rebeca Díaz Suárez y Mesa Directiva 2026-2029)',
    descripcion: 'Enfoque en equidad de género, rescate de lenguas originarias y transformación digital integral.',
    hitos: [
      'Celebración del 32º Aniversario (2019) en la Sala Antonio Ocampo (Homenaje a Mario de Lille y conferencia magistral de Daniel Baruc Espinal).',
      'Celebración del 36º Aniversario (2023) en Galería Jaguar Despertado con "La Mujer del Siglo XXI" y mesas sobre lenguas maternas.',
      'Certamen Estatal permanente "Un Soneto por Sor Juana".',
      'Publicación de la antología de egresados "Escuela con sus plumas de ceiba" (2024).'
    ]
  }
];

export const CUADRO_FUNDADORES = [
  { nombre: 'Teodosio García Ruiz', rol: 'Miembro Fundador', detalle: 'Poeta y ensayista, autor de "Sin lugar a dudas", pilar formativo del taller literario.' },
  { nombre: 'María del Carmen Luna Pérez', rol: 'Miembro Fundadora', detalle: 'Escritora, docente e investigadora, impulsora de la proyección académica.' },
  { nombre: 'Jorge Priego Martínez', rol: 'Miembro Fundador', detalle: 'Historiador, cronista e intelectual fundamental de las tradiciones tabasqueñas.' },
  { nombre: 'Vicente Gómez Montero', rol: 'Miembro Fundador', detalle: 'Narrador, dramaturgo y ensayista, autor de "Las puertas del infierno".' },
  { nombre: 'Jesús de Dios ("Chucho de Dios")', rol: 'Miembro Fundador', detalle: 'Poeta y promotor cultural de entrañable memoria en el gremio literario.' },
  { nombre: 'Margarita Orrico', rol: 'Pionera Institucional', detalle: 'Promotora cultural y figura clave en la cohesión y vinculación inicial.' },
  { nombre: 'Juan Torres Calcáneo', rol: 'Pionero Institucional', detalle: 'Poeta y gestor de amplia trayectoria en la difusión de las letras estatales.' },
  { nombre: 'Norma Navarro & Norma Domínguez', rol: 'Pioneras Institucionales', detalle: 'Impulsoras de la difusión cultural, las artes plásticas y el periodismo.' },
  { nombre: 'Perla Estrada & Carlos González', rol: 'Pioneros Institucionales', detalle: 'Participantes activos en los primeros ciclos de lectura y talleres.' },
  { nombre: 'Eduardo Broca & Gonzalo Manzanilla', rol: 'Pioneros Institucionales', detalle: 'Coordinadores de los primeros proyectos de coedición con la UJAT.' },
  { nombre: 'Hermanas Rives Robles & Aurora Alday', rol: 'Pioneras Institucionales', detalle: 'Alma, Paloma y Xóchil Rives junto a Aurora Alday en la consolidación civil.' }
];
