export interface Libro {
  id: string;
  titulo: string;
  subtitulo?: string;
  anio: number;
  genero: 'Narrativa' | 'Poesía' | 'Ensayo' | 'Dramaturgia' | 'Literatura Infantil' | 'Multigénero' | 'Revista';
  autores: string;
  coeditores: string;
  paginas: number;
  isbn?: string;
  clasificacion?: string;
  sinopsis: string;
  fondo: 'Patrimonial Histórico' | 'Contemporáneo' | 'Formativo Gorostiza';
  disponibilidad: 'Consulta / Archivo' | 'Digitalización PDF' | 'Venta / Distribución';
  portadaColor: string;
  fragmentoMuestra: string;
}

export const CATALOGO_EDITORIAL: Libro[] = [
  {
    id: 'primero-la-voz',
    titulo: 'Primero la voz',
    subtitulo: 'Antología de narrativa contemporánea de Tabasco',
    anio: 1995,
    genero: 'Narrativa',
    autores: 'Ciprián Cabrera Jasso (Compilador) / Varios Autores',
    coeditores: 'Universidad Juárez Autónoma de Tabasco (UJAT) / SET Letras y Voces de Tabasco, A.C.',
    paginas: 240,
    sinopsis: 'Compilación monumental de la narrativa tabasqueña de finales del siglo XX. Reúne los relatos y cuentos de la generación que consolidó la transición literaria contemporánea en el sureste mexicano.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-amber-800 to-stone-900',
    fragmentoMuestra: 'El agua y la memoria discurren con la misma cadencia en los márgenes del Grijalva. Nombrar el trópico es reconstruir la estirpe de quienes aprendieron a contar el mundo antes de que cayera la noche sobre los playones.'
  },
  {
    id: 'antologia-poesia-contemporanea',
    titulo: 'Antología de poesía contemporánea de Tabasco',
    anio: 1995,
    genero: 'Poesía',
    autores: 'Varios Autores (Compilación Gremial LVT)',
    coeditores: 'UJAT / Sociedad de Escritores Tabasqueños Letras y Voces de Tabasco, A.C.',
    paginas: 487,
    sinopsis: 'Magna obra de 487 páginas que compendia la producción lírica en activo al cierre del siglo, recogiendo la herencia estilística de Carlos Pellicer, José Gorostiza y José Carlos Becerra.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Digitalización PDF',
    portadaColor: 'from-orange-900 to-neutral-900',
    fragmentoMuestra: 'En el verde absoluto la palabra no calla: se vuelve árbol, fango, relámpago contenido. Cantar en Tabasco es dialogar con la lluvia perpetua y con el cauce interminable de la lumbre.'
  },
  {
    id: 'la-pluma-en-el-blanco',
    titulo: 'La pluma en el blanco',
    anio: 1996,
    genero: 'Ensayo',
    autores: 'Gonzalo J. González Calzada',
    coeditores: 'Instituto de Cultura de Tabasco (ICT) / FECA / UJAT / SET LVT',
    paginas: 104,
    isbn: '968-889-272-6',
    sinopsis: 'Ensayo crítico publicado dentro de la prestigiosa serie Opera Prima. Análisis riguroso sobre la mecánica de la creación estética, la disciplina autoral y la poética regional.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-stone-800 to-stone-950',
    fragmentoMuestra: 'Escribir exige la precisión del arquero frente a la diana blanca: no basta con pulsar la cuerda, es imperativo que el pensamiento vuele sin titubeos hasta hendir el silencio.'
  },
  {
    id: 'las-puertas-del-infierno',
    titulo: 'Las puertas del infierno',
    anio: 1996,
    genero: 'Narrativa',
    autores: 'Vicente Gómez Montero',
    coeditores: 'Gobierno del Estado de Tabasco / SET Letras y Voces de Tabasco',
    paginas: 112,
    sinopsis: 'Volumen individual de relatos breves de corte fantástico y costumbrista por uno de los fundadores esenciales de la asociación y pilar de la dramaturgia local.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-red-950 to-stone-900',
    fragmentoMuestra: 'Las sombras en la provincia no se disipan al mediodía; se guarecen tras los postigos de madera, esperando el rumor de quien se atreva a cruzar el umbral sin persignarse.'
  },
  {
    id: 'puras-mentiras-y-algo-mas',
    titulo: 'Puras mentiras y algo más',
    anio: 1999,
    genero: 'Narrativa',
    autores: 'Varios Autores (Colectivo LVT)',
    coeditores: 'Sociedad de Escritores Letras y Voces de Tabasco, A.C.',
    paginas: 129,
    clasificacion: 'PQ7298.17',
    sinopsis: 'Colección de cuentos donde los socios exploran la ficción urbana, la ironía y los mitos contemporáneos del trópico tabasqueño.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-amber-950 to-neutral-900',
    fragmentoMuestra: 'La verdad es apenas una de las tantas formas que toma la mentira cuando se viste de domingo para salir al parque Juárez.'
  },
  {
    id: 'consumatum-est',
    titulo: 'Consumatum est',
    anio: 1999,
    genero: 'Dramaturgia',
    autores: 'María Eugenia Torres Arias ("Maru Lozano")',
    coeditores: 'FECA / UJAT / ICT / SET Letras y Voces de Tabasco',
    paginas: 64,
    sinopsis: 'Monólogo dramático de alta tensión psicológica producido en el marco de la red de talleres literarios universitarios y proyectos escénicos independientes.',
    fondo: 'Patrimonial Histórico',
    disponibilidad: 'Consulta / Archivo',
    portadaColor: 'from-zinc-900 to-black',
    fragmentoMuestra: 'Basta una sola palabra pronunciada a oscuras para desmoronar el castillo de cristal de nuestras certezas. Todo está consumado.'
  },
  {
    id: 'nuestro-mundo-con-claudia',
    titulo: 'Nuestro mundo con Clau-dia',
    anio: 2005,
    genero: 'Literatura Infantil',
    autores: 'Mario de Lille Fuentes (Texto) / Claudia García Silva (Ilustraciones)',
    coeditores: 'Gobierno del Estado de Tabasco / UJAT / SET LVT',
    paginas: 77,
    sinopsis: 'Cuentos infantiles ilustrados creados por el primer director de la Escuela Gorostiza para estimular el descubrimiento del lenguaje y la imaginación temprana.',
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-emerald-900 to-teal-950',
    fragmentoMuestra: 'Claudia descubrió que las ceibas no son árboles comunes: son escaleras secretas que los pájaros usan para pintar las nubes al amanecer.'
  },
  {
    id: 'proyecto-babel',
    titulo: 'Proyecto Babel: antología de cuentos',
    anio: 2014,
    genero: 'Narrativa',
    autores: 'Francisco Payró, Laura Ocaña y Varios Autores',
    coeditores: 'Instituto Estatal de Cultura de Tabasco (IEC) / SET LVT',
    paginas: 172,
    sinopsis: 'Antología colectiva de 172 páginas que reúne a voces contemporáneas en una polifonía de relatos urbanos y reflexiones existenciales.',
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-blue-950 to-slate-900',
    fragmentoMuestra: 'Construimos torres con vocablos rotos, esperando que alguien allá arriba descifre el dialecto de nuestras soledades compartidas.'
  },
  {
    id: 'la-mujer-del-siglo-xxi',
    titulo: 'La Mujer del Siglo XXI',
    anio: 2023,
    genero: 'Multigénero',
    autores: 'Anaís Arias Pérez (Coordinadora) / Varias Autoras',
    coeditores: 'Sociedad de Escritores "Letras y Voces de Tabasco", A.C.',
    paginas: 160,
    sinopsis: 'Antología poética y narrativa sobre los retos, ideales, costumbres y reivindicaciones de la mujer contemporánea en el sureste mexicano.',
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-purple-950 to-neutral-900',
    fragmentoMuestra: 'Nuestra voz no es un eco prestado: es la raíz que fractura el pavimento de los silencios impuestos por siglos.'
  },
  {
    id: 'escuela-con-sus-plumas-de-ceiba',
    titulo: 'Escuela con sus plumas de ceiba',
    subtitulo: 'Generación Guadalupe Azuara',
    anio: 2024,
    genero: 'Multigénero',
    autores: 'Egresados de la Escuela de Escritores "José Gorostiza"',
    coeditores: 'UJAT / Escuela de Escritores Gorostiza / SET LVT',
    paginas: 198,
    sinopsis: 'Compilación académica estructurada en cuatro secciones (Poesía, Cuento, Ensayo e Investigación) con las obras de titulación de los diplomados.',
    fondo: 'Formativo Gorostiza',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-amber-900 to-yellow-950',
    fragmentoMuestra: 'Bajo el follaje de la ceiba universitaria aprendimos que el oficio de escribir no es un pasatiempo, sino una profesión de fe y rigor formal.'
  },
  {
    id: 'revista-letra-voz',
    titulo: 'Revista Cultural "Letra Voz"',
    subtitulo: 'Órgano Periódico de Difusión Literaria',
    anio: 2026,
    genero: 'Revista',
    autores: 'Consejo Editorial LVT y Plumas Invitadas',
    coeditores: 'Sociedad de Escritores "Letras y Voces de Tabasco", A.C.',
    paginas: 48,
    sinopsis: 'Publicación periódica fundada en 2001. Difunde ensayos críticos, crónicas, poesía inédita, entrevistas y debates estéticos del gremio.',
    fondo: 'Contemporáneo',
    disponibilidad: 'Venta / Distribución',
    portadaColor: 'from-orange-950 to-stone-900',
    fragmentoMuestra: 'La letra es testimonio insobornable de la época; la voz, el instrumento que le devuelve su latido humano ante la comunidad.'
  }
];
