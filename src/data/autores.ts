export interface Autor {
  id: string;
  nombre: string;
  tratamiento?: string;
  rolGremial: string;
  categoria: 'Fundadores & Honoríficos' | 'Mesa Directiva & Socios Activos' | 'Plumas Contemporáneas';
  generoPrincipal: 'Poesía' | 'Narrativa' | 'Ensayo' | 'Multidisciplinario';
  semblanza: string;
  obraRepresentativa: string;
  antologiasParticipadas: string[];
  destacado?: boolean;
}

export const PADRON_AUTORES: Autor[] = [
  {
    id: 'mario-de-lille',
    nombre: 'Mario de Lille Fuentes',
    tratamiento: 'Arq.',
    rolGremial: 'Socio Fundador · Expresidente LVT · Fundador Escuela Gorostiza',
    categoria: 'Fundadores & Honoríficos',
    generoPrincipal: 'Ensayo',
    semblanza: 'Arquitecto, catedrático y pilar intelectual de Tabasco. Fundador y primer director de la Escuela de Escritores «José Gorostiza» en 2001. Autor pionero de literatura infantil y arquitectura bioclimática.',
    obraRepresentativa: '«Nuestro mundo con Clau-dia»',
    antologiasParticipadas: ['Nuestro mundo con Clau-dia', 'Revista Letra Voz'],
    destacado: true
  },
  {
    id: 'vicente-gomez-montero',
    nombre: 'Vicente Gómez Montero',
    tratamiento: 'Mtro.',
    rolGremial: 'Socio Fundador · Dramaturgo y Narrador Emérito',
    categoria: 'Fundadores & Honoríficos',
    generoPrincipal: 'Narrativa',
    semblanza: 'Uno de los fundadores primordiales de la Sociedad de Escritores en 1987. Dramaturgo, cronista y narrador fundamental con amplia trayectoria escénica y editorial en el sureste mexicano.',
    obraRepresentativa: '«Las puertas del infierno»',
    antologiasParticipadas: ['Las puertas del infierno', 'Amarellus (Prólogo)', 'Primero la voz'],
    destacado: true
  },
  {
    id: 'ciprian-cabrera-jasso',
    nombre: 'Ciprián Cabrera Jasso',
    tratamiento: 'Mtro. (†)',
    rolGremial: 'Fundador Emérito · Compilador Histórico',
    categoria: 'Fundadores & Honoríficos',
    generoPrincipal: 'Poesía',
    semblanza: 'Poeta y compilador señero de la literatura tabasqueña contemporánea. Coordinó la emblemática antología de narrativa «Primero la voz» (1995) en coedición con la UJAT.',
    obraRepresentativa: '«Primero la voz» (Compilación)',
    antologiasParticipadas: ['Primero la voz', 'Antología de poesía contemporánea de Tabasco'],
    destacado: true
  },
  {
    id: 'juan-david-perez-cabrera',
    nombre: 'Juan David Pérez Cabrera',
    tratamiento: 'Lic.',
    rolGremial: 'Presidente LVT (2026–2029) · Compilador y Editor',
    categoria: 'Mesa Directiva & Socios Activos',
    generoPrincipal: 'Narrativa',
    semblanza: 'Físico, escritor y editor. Presidente constitucional de la Sociedad de Escritores «Letras y Voces de Tabasco», A.C. Compilador y diseñador editorial general de «Animalia Literaria» (2026).',
    obraRepresentativa: '«Animalia Literaria» (Compilación & Cuento)',
    antologiasParticipadas: ['Animalia Literaria', 'Memoria Narrativa y Fotográfica LVT'],
    destacado: true
  },
  {
    id: 'eva-guadalupe-pineda-cruz',
    nombre: 'Eva Guadalupe Pineda Cruz',
    tratamiento: 'Dra.',
    rolGremial: 'Secretaria General LVT (2026–2029) · Poeta y Docente',
    categoria: 'Mesa Directiva & Socios Activos',
    generoPrincipal: 'Poesía',
    semblanza: 'Doctora en Educación y docente con 28 años de trayectoria pedagógica. Poeta de honda delicadeza lírica, colaboradora constante en las antologías estatales y coeditora de memorias gremiales.',
    obraRepresentativa: '«La luna y el jaguar»',
    antologiasParticipadas: ['Animalia Literaria', 'Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI', 'La Navidad que anhelo'],
    destacado: true
  },
  {
    id: 'rebeca-diaz-suarez',
    nombre: 'Rebeca Díaz Suárez',
    tratamiento: 'Mtra.',
    rolGremial: 'Directora Académica Escuela Gorostiza · Expresidenta LVT · Catedrática',
    categoria: 'Mesa Directiva & Socios Activos',
    generoPrincipal: 'Poesía',
    semblanza: 'Destacada expresidenta de la Sociedad de Escritores Letras y Voces de Tabasco, A.C., Directora Académica de la Escuela de Escritores «José Gorostiza», catedrática y promotora lírica. Autora de «Mujer en 3D».',
    obraRepresentativa: '«Mujer en 3D»',
    antologiasParticipadas: ['La Mujer en el Siglo XXI', 'Memorias Líricas LVT', 'Animalia Literaria'],
    destacado: true
  },
  {
    id: 'maria-de-los-angeles-cervantes',
    nombre: 'María de los Ángeles Cervantes Rosas',
    tratamiento: 'Dra.',
    rolGremial: 'Socia Correspondiente LVT · Poeta y Pintora Plástica',
    categoria: 'Mesa Directiva & Socios Activos',
    generoPrincipal: 'Poesía',
    semblanza: 'Doctora en Ciencias Administrativas (SNI I) y catedrática investigadora. Autora del poemario «A corazón abierto» (2026, ISBN 978-607-29-8439-4), con cuyas pinturas al óleo ilustra sus propias publicaciones.',
    obraRepresentativa: '«A corazón abierto» (Poemario)',
    antologiasParticipadas: ['A corazón abierto', 'Animalia Literaria', 'La Mujer en el Siglo XXI'],
    destacado: true
  },
  {
    id: 'pragedis-hernandez-garcia',
    nombre: 'Pragedis Hernández García',
    tratamiento: 'Mtra.',
    rolGremial: 'Expresidenta LVT · Compiladora y Poeta Yokot’an',
    categoria: 'Mesa Directiva & Socios Activos',
    generoPrincipal: 'Multidisciplinario',
    semblanza: 'Originaria de Tamulté de las Sabanas. Maestra en Innovación Educativa, cuentacuentos y promotora cultural. Compiladora oficial de «Tardes Tabasqueñas» y «La Mujer en el Siglo XXI».',
    obraRepresentativa: '«Oda a la mujer en el siglo XXI»',
    antologiasParticipadas: ['Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI', 'Animalia Literaria', 'Escuela con sus plumas de ceiba'],
    destacado: true
  },
  {
    id: 'liliana-chuzeville-cordoba',
    nombre: 'Liliana Chuzeville Córdoba',
    tratamiento: 'Lic.',
    rolGremial: 'Comisión de Honor y Justicia LVT (2026–2029) · Directora General Escuela Gorostiza',
    categoria: 'Mesa Directiva & Socios Activos',
    generoPrincipal: 'Narrativa',
    semblanza: 'Licenciada en Criminología, Titular de la Comisión de Honor y Justicia de LVT y Directora General de la Escuela de Escritores «José Gorostiza». Distinguida con las «Palmas de Oro» y «México en tus manos».',
    obraRepresentativa: '«Viaje entre cuentos y canciones»',
    antologiasParticipadas: ['Animalia Literaria (Prólogo)', 'Amarellus', 'Tardes Tabasqueñas', 'La Mujer en el Siglo XXI'],
    destacado: true
  },
  {
    id: 'anais-guadalupe-arias-perez',
    nombre: 'Anaís Guadalupe Arias Pérez',
    tratamiento: 'Mtra.',
    rolGremial: 'Expresidenta LVT · Gestora Cultural y Autora',
    categoria: 'Mesa Directiva & Socios Activos',
    generoPrincipal: 'Poesía',
    semblanza: 'Expresidenta de LVT, destacada por consolidar certámenes literarios y proyectos de inclusión comunitaria. Revisa y participa activamente en antologías de la asociación.',
    obraRepresentativa: '«Mujer estrella»',
    antologiasParticipadas: ['La Mujer en el Siglo XXI', 'Tardes Tabasqueñas de Ópalos y Topacios'],
    destacado: false
  },
  {
    id: 'karla-ivonne-alejandro-gomez',
    nombre: 'Karla Ivonne Alejandro Gómez',
    tratamiento: 'Mtra.',
    rolGremial: 'Compiladora, Diseñadora Editorial y Poeta LVT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Compiladora de «Tardes Tabasqueñas de Ópalos y Topacios» y diseñadora gráfica de las portadas emblemáticas de «La Mujer en el Siglo XXI». Gestora cultural y escritora de verso sensible.',
    obraRepresentativa: '«Alejandro Gómez»',
    antologiasParticipadas: ['Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI'],
    destacado: false
  },
  {
    id: 'ana-laura-hernandez-jimenez',
    nombre: 'Ana Laura Hernández Jiménez',
    tratamiento: 'Mtra.',
    rolGremial: 'Compiladora y Ensayista LVT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Ensayo',
    semblanza: 'Compiladora y revisora técnica de la antología «Tardes Tabasqueñas de Ópalos y Topacios» (INDAUTOR 2025). Autora de agudas reflexiones sobre la identidad femenina.',
    obraRepresentativa: '«Nociones de feminidad»',
    antologiasParticipadas: ['Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI'],
    destacado: false
  },
  {
    id: 'eli-manuel-austria-hernandez',
    nombre: 'Elí Manuel Austria Hernández',
    tratamiento: 'Dr.',
    rolGremial: 'Compilador y Prologuista Oficial LVT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Prologuista de «Tardes Tabasqueñas de Ópalos y Topacios» y co-compilador de «La Mujer en el Siglo XXI». Cultivador de la narrativa fantástica y de ciencia ficción en «Amarellus».',
    obraRepresentativa: '«La búsqueda»',
    antologiasParticipadas: ['Amarellus', 'La Mujer en el Siglo XXI', 'Tardes Tabasqueñas (Prólogo)'],
    destacado: false
  },
  {
    id: 'juan-manuel-canepa-bertolini',
    nombre: 'Juan Manuel Canepa Bertolini',
    tratamiento: 'Mtro.',
    rolGremial: 'Escritor, Compositor y Promotor Cultural LVT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Compositor musical, conferencista y autor de tres libros de poesía y reflexiones. Participante activo en redes de lectura latinoamericanas y antologías de LVT.',
    obraRepresentativa: '«Playeros amantes»',
    antologiasParticipadas: ['Animalia Literaria', 'Tardes Tabasqueñas', 'La Mujer en el Siglo XXI'],
    destacado: false
  },
  {
    id: 'israel-mendoza-vazquez',
    nombre: 'Israel Mendoza Vázquez',
    tratamiento: 'Dr.',
    rolGremial: 'Doctor en Educación · Maestro de Haiku',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Especialista en poesía breve y haiku con casi cuarenta antologías publicadas a nivel nacional. Autor de los libros «Haikus del desierto» y «Haikus de Galeana».',
    obraRepresentativa: '«Coyote ancestral»',
    antologiasParticipadas: ['Animalia Literaria', 'Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI'],
    destacado: false
  },
  {
    id: 'ana-luisa-mosqueda-caraveo',
    nombre: 'Ana Luisa Mosqueda Caraveo',
    tratamiento: 'Dra.',
    rolGremial: 'Filósofa, Doctora en Educación y Poeta',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Licenciada en Filosofía por la UPCH y Doctora en Educación. Docente con 18 años de trayectoria en el Colegio de Bachilleres de Tabasco (COBATAB).',
    obraRepresentativa: '«Minino capuchino»',
    antologiasParticipadas: ['Animalia Literaria', 'Tardes Tabasqueñas de Ópalos y Topacios'],
    destacado: false
  },
  {
    id: 'natalia-morales-sosa',
    nombre: 'Natalia Morales Sosa',
    tratamiento: 'Mtra.',
    rolGremial: 'Catedrática UJAT y Narradora',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Licenciada en Idiomas (UJAT) y Maestra en Docencia. Articulista en «Perspectivas Docentes» y creadora de relatos entrañables sobre la infancia y la memoria cotidiana.',
    obraRepresentativa: '«Mi dulce Caramelo»',
    antologiasParticipadas: ['Animalia Literaria', 'Tardes Tabasqueñas de Ópalos y Topacios («El niño de cartón»)'],
    destacado: false
  },
  {
    id: 'flor-de-liz-marin-hernandez',
    nombre: 'Flor de Liz Marín Hernández',
    tratamiento: 'Mtra.',
    rolGremial: 'Poeta · Becaria FECAT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Formada en los talleres de la Casa de Artes de Tabasco. Autora de «Ofrendas para lo incierto» y del libro bilingüe infantil «La luna / Ni uj» (Secretaría de Cultura de Tabasco).',
    obraRepresentativa: '«Manatí»',
    antologiasParticipadas: ['Animalia Literaria', '¡Cuentos, joven! Muestra de autores tabasqueños'],
    destacado: false
  },
  {
    id: 'paulina-pineda',
    nombre: 'Paulina Pineda',
    tratamiento: 'Lic.',
    rolGremial: 'Escritora y Miembro Activo LVT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Escritora y miembro activo de la Sociedad de Escritores Letras y Voces de Tabasco, A.C., participante en lecturas líricas, talleres y proyectos editoriales colectivos del gremio.',
    obraRepresentativa: '«Voces del Agua»',
    antologiasParticipadas: ['Antologías y Muestras LVT'],
    destacado: false
  },
  {
    id: 'marlene-de-la-cruz-de-la-o',
    nombre: 'Marlene de la Cruz de la O',
    tratamiento: 'Lic.',
    rolGremial: 'Docente COBATAB y Narradora',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Originaria de Nacajuca, Tabasco. Licenciada en Idiomas y docente de Lengua y Comunicación en EMSaD 41 de COBATAB. Autora de relatos sobre leyendas acuáticas y fauna nativa.',
    obraRepresentativa: '«El eterno guardián» / «Oda a Judith»',
    antologiasParticipadas: ['Animalia Literaria'],
    destacado: false
  },
  {
    id: 'victor-manuel-ameca-mena',
    nombre: 'Víctor Manuel Ameca Mena',
    tratamiento: 'Ing.',
    rolGremial: 'Ingeniero Ambiental UJAT y Narrador',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Egresado de la UJAT, conjuga la ciencia ambiental con la creación plástica y literaria. Reinterpreta los mitos de la selva maya en su relato sobre el jaguar sagrado.',
    obraRepresentativa: '«El ascenso de Báalam»',
    antologiasParticipadas: ['Animalia Literaria'],
    destacado: false
  },
  {
    id: 'francis-vestali-romero',
    nombre: 'Francis Vestali Romero Alcántara',
    tratamiento: 'Ing.',
    rolGremial: 'Ingeniera UAG y Narradora',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Ingeniera por la Universidad Autónoma de Guadalajara. Convierte la disciplina y la experiencia deportiva en una prosa testimonial de profunda calidez afectiva y sensorial.',
    obraRepresentativa: '«Lecciones de un rescate»',
    antologiasParticipadas: ['Animalia Literaria'],
    destacado: false
  },
  {
    id: 'arlette-alana-perez-ruiz',
    nombre: 'Arlette Alana Pérez Ruiz',
    tratamiento: 'Lic.',
    rolGremial: 'Administradora, Mediadora Lectora y Narradora',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Diplomada en Mediación Lectora y fundadora de la comunidad cultural «En otras vidas». Une el pensamiento estratégico con una voz narrativa íntima y reflexiva.',
    obraRepresentativa: '«Huella»',
    antologiasParticipadas: ['Animalia Literaria'],
    destacado: false
  },
  {
    id: 'nadya-vanessa-ortiz-moya',
    nombre: 'Nadya Vanessa Ortiz Moya',
    tratamiento: 'Profra.',
    rolGremial: 'Catedrática DAEA-UJAT y Poeta',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Catedrática de idiomas en la División Académica de Educación y Artes de la UJAT. Cultiva la lírica de evocación paisajística y la técnica del haiku dedicada a Villahermosa.',
    obraRepresentativa: '«A una libélula» / «Haikus a Villahermosa»',
    antologiasParticipadas: ['Animalia Literaria'],
    destacado: false
  },
  {
    id: 'maria-de-los-angeles-munoz-sanchez',
    nombre: 'María de los Ángeles Muñoz Sánchez (Tita Muñoz)',
    tratamiento: 'Mtra.',
    rolGremial: 'Narradora Oral, Cuentacuentos y Poeta',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Originaria del Estado de México. Narradora oral y poeta con amplia participación en festivales nacionales y antologías internacionales de difusión comunitaria.',
    obraRepresentativa: '«Nipaki y Mimatini» / «Deja atrás»',
    antologiasParticipadas: ['Animalia Literaria', 'La Mujer en el Siglo XXI'],
    destacado: false
  },
  {
    id: 'alberto-garcia-mejia',
    nombre: 'Alberto García Mejía',
    tratamiento: 'Mtro.',
    rolGremial: 'Narrador y Ensayista LVT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Escritor de sólida prosa reflexiva y urbana, colaborador en las antologías «Amarellus» y «La Mujer en el Siglo XXI».',
    obraRepresentativa: '«Cupido a la puerta»',
    antologiasParticipadas: ['Amarellus', 'La Mujer en el Siglo XXI'],
    destacado: false
  },
  {
    id: 'laura-virginia-ocana-zurita',
    nombre: 'Laura Virginia Ocaña Zurita',
    tratamiento: 'Mtra.',
    rolGremial: 'Narradora y Coautora Antológica',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Narrativa',
    semblanza: 'Escritora de fina tesitura narrativa, coautora de «Proyecto Babel» y participante en «Amarellus», abordando problemáticas humanas con inventiva y calidez.',
    obraRepresentativa: '«Proyecto Babel»',
    antologiasParticipadas: ['Amarellus', 'Proyecto Babel'],
    destacado: false
  },
  {
    id: 'cristi-guadalupe-morales-osorio',
    nombre: 'Cristi Guadalupe Morales Osorio',
    tratamiento: 'Lic.',
    rolGremial: 'Poeta y Socia Activa LVT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Escritora tabasqueña con participación en las antologías «Tardes Tabasqueñas de Ópalos y Topacios» y «La Mujer en el Siglo XXI».',
    obraRepresentativa: '«Mujer realizada»',
    antologiasParticipadas: ['Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI'],
    destacado: false
  },
  {
    id: 'elena-guzman-ramon',
    nombre: 'Elena Guzmán Ramón',
    tratamiento: 'Mtra.',
    rolGremial: 'Poeta y Declamadora LVT',
    categoria: 'Plumas Contemporáneas',
    generoPrincipal: 'Poesía',
    semblanza: 'Poeta consagrada a los motivos florales y a la exaltación del paisaje tabasqueño en diversas publicaciones colegiadas de la asociación.',
    obraRepresentativa: '«La mujer, siempre primavera»',
    antologiasParticipadas: ['Tardes Tabasqueñas de Ópalos y Topacios', 'La Mujer en el Siglo XXI'],
    destacado: false
  }
];
