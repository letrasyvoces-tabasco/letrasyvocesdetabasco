// src/data/voces.ts - Catálogo Oficial de Grabaciones Sonoras y Declamaciones Históricas

export interface GrabacionSonora {
  id: string;
  titulo: string;
  autor: string;
  declamador: string;
  pais: string;
  tipo: 'estudio_local' | 'archivo_historico';
  audioUrl?: string; // Para audios locales
  youtubeId?: string; // Para grabaciones históricas
  descripcion: string;
  textoPoema?: string;
}

export const CATALOGO_VOCES_HISTORICAS: GrabacionSonora[] = [
  {
    id: 'girondo-espantapajaros',
    titulo: 'Espantapájaros (1)',
    autor: 'Oliverio Girondo',
    declamador: 'Lic. Juan David Pérez Cabrera (Letras y Voces de Tabasco, A.C.)',
    pais: 'Buenos Aires, Argentina / Tabasco',
    tipo: 'estudio_local',
    audioUrl: '/letrasyvocesdetabasco/assets/audios/espantapajaros_oliverio_girondo_david_cabrera.mp3',
    descripcion: 'Grabación oficial de estudio preservada en el archivo sonoro de la Sociedad de Escritores Letras y Voces de Tabasco, A.C.',
    textoPoema: `No se me importa un pito que las mujeres tengan los senos como magnolias o como pasas de higo; un cutis de durazno o de papel de lija. Le doy una importancia igual a cero, al hecho de que amanezcan con un aliento afrodisíaco o con un aliento insecticida. Soy perfectamente capaz de soportarles una nariz que sacaría el primer premio en una exposición de zanahorias; ¡pero eso sí! -y en esto soy irreductible- no les perdono, bajo ningún pretexto, que no sepan volar.`
  },
  {
    id: 'rulfo-hidrante',
    titulo: 'En el hidrante las gotas',
    autor: 'Juan Rulfo',
    declamador: 'Juan Rulfo (Voz del Autor)',
    pais: 'Jalisco, México',
    tipo: 'archivo_historico',
    youtubeId: 'A8PMbJBfn60',
    descripcion: 'Grabación histórica con la voz pausada, misteriosa y profunda del maestro Juan Rulfo.'
  },
  {
    id: 'lorca-alberti-balada',
    titulo: 'La balada del agua del mar',
    autor: 'Federico García Lorca',
    declamador: 'Rafael Alberti',
    pais: 'Granada / Cádiz, España',
    tipo: 'archivo_historico',
    youtubeId: '2g5htFWI93M',
    descripcion: 'El gran poeta de la Generación del 27 Rafael Alberti declama los versos marinos de su entrañable amigo Federico García Lorca.'
  },
  {
    id: 'mutis-palabra',
    titulo: 'Una palabra',
    autor: 'Álvaro Mutis',
    declamador: 'Álvaro Mutis (Voz del Autor)',
    pais: 'Bogotá, Colombia',
    tipo: 'archivo_historico',
    youtubeId: 'HeRZdX6dlFM',
    descripcion: 'El creador de Maqroll el Gaviero en lectura íntima sobre la resonancia y la intemperie del lenguaje.'
  },
  {
    id: 'retamar-felices',
    titulo: 'Felices los normales',
    autor: 'Roberto Fernández Retamar',
    declamador: 'Roberto Fernández Retamar (Voz del Autor)',
    pais: 'La Habana, Cuba',
    tipo: 'archivo_historico',
    youtubeId: 'oZZkFZIHvS0',
    descripcion: 'Inolvidable declamación de uno de los poemas más lúcidos y humanos de la literatura caribeña e hispanoamericana.'
  },
  {
    id: 'sabines-despues',
    titulo: 'Después de todo',
    autor: 'Jaime Sabines',
    declamador: 'Jaime Sabines (Voz del Autor)',
    pais: 'Chiapas, México',
    tipo: 'archivo_historico',
    youtubeId: 'Xr1ZAO6dCKo',
    descripcion: 'Jaime Sabines con su tono desgarrador y confesional sobre el paso del tiempo y la permanencia del sentimiento.'
  },
  {
    id: 'neruda-fabula',
    titulo: 'Fábula de la sirena y los borrachos',
    autor: 'Pablo Neruda',
    declamador: 'Pablo Neruda (Voz del Autor)',
    pais: 'Parral, Chile (Premio Nobel)',
    tipo: 'archivo_historico',
    youtubeId: 'k58RbmbR8ts',
    descripcion: 'Lectura ceremonial de Neruda extrayendo la magia, la sátira y el lirismo de su obra cumbre.'
  },
  {
    id: 'sabines-cuerpo',
    titulo: 'No es nada de tu cuerpo',
    autor: 'Jaime Sabines',
    declamador: 'Jaime Sabines (Voz del Autor)',
    pais: 'Chiapas, México',
    tipo: 'archivo_historico',
    youtubeId: 'F3xOMkL3SlQ',
    descripcion: 'Lectura conmovedora de Sabines explorando la dimensión espiritual y carnal del amor.'
  },
  {
    id: 'dario-gelman-metempsicosis',
    titulo: 'Metempsicosis',
    autor: 'Rubén Darío',
    declamador: 'Juan Gelman',
    pais: 'Nicaragua / Argentina',
    tipo: 'archivo_historico',
    youtubeId: '71iE-TRMf1k',
    descripcion: 'El gran poeta argentino Juan Gelman presta su voz honda a los versos modernistas de Rubén Darío.'
  },
  {
    id: 'dario-gelman-fatal',
    titulo: 'Lo fatal',
    autor: 'Rubén Darío',
    declamador: 'Juan Gelman',
    pais: 'Nicaragua / Argentina',
    tipo: 'archivo_historico',
    youtubeId: 'DpT2_s3bBkQ',
    descripcion: '«Dichoso el árbol que es apenas sensitivo...» interpretado con estremecedora gravedad por Juan Gelman.'
  },
  {
    id: 'neruda-sabines-manos',
    titulo: 'Tus manos',
    autor: 'Pablo Neruda',
    declamador: 'Jaime Sabines',
    pais: 'Chile / México',
    tipo: 'archivo_historico',
    youtubeId: 'IjamPDrZSGs',
    descripcion: 'Homenaje poético irrepetible: Jaime Sabines declamando la lírica amorosa de Pablo Neruda.'
  },
  {
    id: 'cortazar-angeles',
    titulo: 'La verdadera cara de los ángeles',
    autor: 'Julio Cortázar',
    declamador: 'Julio Cortázar (Voz del Autor)',
    pais: 'Bruselas / Argentina',
    tipo: 'archivo_historico',
    youtubeId: 'qlHGoqv7X90',
    descripcion: 'Cortázar con su inconfundible «r» afrancesada y su cadencia lúdica y poética inigualable.'
  },
  {
    id: 'varela-escucharas',
    titulo: 'Si me escucharas',
    autor: 'Blanca Varela',
    declamador: 'Blanca Varela (Voz de la Autora)',
    pais: 'Lima, Perú',
    tipo: 'archivo_historico',
    youtubeId: '56urWZP4sR8',
    descripcion: 'La más lúcida e intensa poeta peruana en un registro sonoro de precisión quirúrgica y belleza despojada.'
  },
  {
    id: 'roby-boston',
    titulo: 'Boston, tú y yo',
    autor: 'Isabel Carlota Roby',
    declamador: 'Isabel Carlota Roby (Voz de la Autora)',
    pais: 'Argentina / Estados Unidos',
    tipo: 'archivo_historico',
    youtubeId: 'cfo9pieXtP4',
    descripcion: 'Lectura poética evocativa con la delicadeza lírica y la atmósfera cosmopolita de la autora.'
  }
];
