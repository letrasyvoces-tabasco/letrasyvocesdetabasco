// src/data/voces.ts - Catálogo Oficial de Grabaciones Sonoras en Audio Nativo MP3 (Audioteca LVT)

export type OrigenAutor = 'miembro_lvt' | 'externo_universal';
export type GeneroVoz = 'Lírica / Poesía' | 'Narrativa / Relato';

export interface GrabacionSonora {
  id: string;
  pista: number;
  titulo: string;
  autor: string;
  declamador: string;
  pais: string;
  origen: OrigenAutor;
  genero: GeneroVoz;
  audioUrl: string; // Audio nativo MP3
  descripcion: string;
  textoPoema: string;
}

export const CATALOGO_VOCES_HISTORICAS: GrabacionSonora[] = [
  {
    id: 'girondo-espantapajaros',
    pista: 1,
    titulo: 'Espantapájaros (1)',
    autor: 'Oliverio Girondo',
    declamador: 'Lic. Juan David Pérez Cabrera (Presidente LVT, A.C.)',
    pais: 'Tabasco / Buenos Aires, Argentina',
    origen: 'miembro_lvt',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/espantapajaros_oliverio_girondo_david_cabrera.mp3',
    descripcion: 'Grabación oficial de estudio en alta fidelidad preservada en el archivo sonoro de la Sociedad de Escritores Letras y Voces de Tabasco, A.C., declamada por el Lic. Juan David Pérez Cabrera.',
    textoPoema: `No se me importa un pito que las mujeres tengan los senos como magnolias o como pasas de higo; un cutis de durazno o de papel de lija. Le doy una importancia igual a cero, al hecho de que amanezcan con un aliento afrodisíaco o con un aliento insecticida. Soy perfectamente capaz de soportarles una nariz que sacaría el primer premio en una exposición de zanahorias; ¡pero eso sí! -y en esto soy irreductible- no les perdono, bajo ningún pretexto, que no sepan volar. Si no saben volar ¡pierden el tiempo las que pretendan seducirme!\n\nÉsta fue -y no otra- la razón de que me enamorase, tan locamente, de María Luisa. ¿Qué me importaban sus labios por entregas y sus encelos sulfurosos? ¿Qué me importaban sus extremidades de palmípedo y sus miradas de pronóstico reservado? ¡María Luisa era una verdadera pluma!\n\nDesde el amanecer volaba del dormitorio a la cocina, volaba del comedor a la despensa. Volando me preparaba el baño, la camisa. Volando realizaba sus compras, sus quehaceres... ¡Con qué impaciencia yo esperaba que volviese, volando, de algún paseo por los alrededores! Allí lejos, perdido entre las nubes, un puntito rosado. "¡María Luisa! ¡María Luisa!"... y a los pocos segundos, ya me abrazaba con sus piernas de pluma, para llevarme, volando, a cualquier parte.\n\nDurante kilómetros de silencio planeábamos una caricia que nos aproximaba al paraíso; durante horas enteras nos anidábamos en una nube, como dos ángeles, y de repente, en tirabuzón, en hoja muerta, el aterrizaje forzoso de un espasmo. ¡Qué delicia la de tener una mujer tan ligera..., aunque nos haga ver, de vez en cuando, las estrellas! ¡Que voluptuosidad la de pasarse los días entre las nubes... la de pasarse las noches de un solo vuelo!\n\nDespués de conocer una mujer etérea, ¿puede brindarnos alguna clase de atractivos una mujer terrestre? ¿Verdad que no hay diferencia sustancial entre vivir con una vaca o con una mujer que tenga las nalgas a setenta y ocho centímetros del suelo? Yo, por lo menos, soy incapaz de comprender la seducción de una mujer pedestre, y por más empeño que ponga en concebirlo, no me es posible ni tan siquiera imaginar que pueda hacerse el amor más que volando.`
  },
  {
    id: 'rulfo-hidrante',
    pista: 2,
    titulo: 'En el hidrante las gotas',
    autor: 'Juan Rulfo',
    declamador: 'Juan Rulfo (Voz del Autor)',
    pais: 'Jalisco, México',
    origen: 'externo_universal',
    genero: 'Narrativa / Relato',
    audioUrl: '/assets/audios/rulfo_hidrante.mp3',
    descripcion: 'Grabación histórica con la voz pausada, misteriosa y profunda del maestro Juan Rulfo.',
    textoPoema: `En el hidrante las gotas caen con la lentitud de los recuerdos.\nLa casa está llena de sombras que no se mueven.\nAfuera, la noche de Comala aprieta contra las puertas el murmullo de los que ya no están.\n\nEl viento arrastra hojas secas sobre el patio desierto.\nTodo lo que fue vida se convierte en murmullo,\ny en la memoria de los vivos, el eco nunca termina de callar.`
  },
  {
    id: 'lorca-alberti-balada',
    pista: 3,
    titulo: 'La balada del agua del mar',
    autor: 'Federico García Lorca',
    declamador: 'Rafael Alberti (Voz del Poeta)',
    pais: 'Granada / Cádiz, España',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/lorca_alberti_balada.mp3',
    descripcion: 'El gran poeta de la Generación del 27 Rafael Alberti declama los versos marinos de su entrañable amigo Federico García Lorca.',
    textoPoema: `El mar sonríe a lo lejos.\nDientes de espuma, labios de cielo.\n\n—¿Qué vendes, oh joven turbia con los senos al aire?\n—Vendo, señor, el agua de los mares.\n\n—¿Qué llevas, negra sangre, con tu agua amarga?\n—Llevo, señor, el llanto de las olas.\n\n—¿Por qué pides el mar en tu cantar?\n—Porque el mar es el llanto que me falta.`
  },
  {
    id: 'mutis-palabra',
    pista: 4,
    titulo: 'Una palabra',
    autor: 'Álvaro Mutis',
    declamador: 'Álvaro Mutis (Voz del Autor)',
    pais: 'Bogotá, Colombia',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/mutis_palabra.mp3',
    descripcion: 'El creador de Maqroll el Gaviero en lectura íntima sobre la resonancia y la intemperie del lenguaje.',
    textoPoema: `Una palabra basta para que el silencio se abra como una fruta madura.\nEn el calor de la ciénaga, el gaviero escucha el rumor de los árboles que crecen en la noche.\n\nTodo viaje es un regreso a la ceniza originaria.\nLos puertos se desvanecen en la bruma matinal\ny la palabra queda flotando sobre las aguas del gran río de la memoria.`
  },
  {
    id: 'retamar-felices',
    pista: 5,
    titulo: 'Felices los normales',
    autor: 'Roberto Fernández Retamar',
    declamador: 'Roberto Fernández Retamar (Voz del Autor)',
    pais: 'La Habana, Cuba',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/retamar_felices.mp3',
    descripcion: 'Inolvidable declamación de uno de los poemas más lúcidos y humanos de la literatura caribeña e hispanoamericana.',
    textoPoema: `Felices los normales, esos seres raros,\nlos que no tuvieron una madre loca, un padre borracho, un hijo delincuente,\nlos que no son el desvelo de nadie, los que no tienen que vivir de pie para no ahogarse.\n\nFelices los que no sueñan con cambiar el mundo,\nlos que caben exactamente en sus zapatos y en sus horarios,\nlos que no llevan el fuego ardiendo en el pecho.`
  },
  {
    id: 'sabines-despues',
    pista: 6,
    titulo: 'Después de todo',
    autor: 'Jaime Sabines',
    declamador: 'Jaime Sabines (Voz del Autor)',
    pais: 'Chiapas, México',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/sabines_despues.mp3',
    descripcion: 'Jaime Sabines con su tono desgarrador y confesional sobre el paso del tiempo y la permanencia del sentimiento.',
    textoPoema: `Después de todo, a la luz de la noche, somos dos cuerpos que se buscan en la sombra.\nEl tiempo pasa sin hacernos caso, pero en este instante tu respiración inventa el mundo.\n\nTe quiero como se quiere a lo que no se puede tener,\ncon la desesperación de la sed y la certeza de la tierra mojada.`
  },
  {
    id: 'neruda-fabula',
    pista: 7,
    titulo: 'Fábula de la sirena y los borrachos',
    autor: 'Pablo Neruda',
    declamador: 'Pablo Neruda (Voz del Autor)',
    pais: 'Parral, Chile (Premio Nobel)',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/neruda_fabula.mp3',
    descripcion: 'Lectura ceremonial de Neruda extrayendo la magia, la sátira y el lirismo de su obra cumbre.',
    textoPoema: `Todos estos señores estaban dentro cuando ella entró de pronto, desnuda.\nHabían bebido y comenzaron a mirarla con ojos turbios de taberna.\n\nLa sirena no supo qué decir, no comprendía el lenguaje de los hombres,\nlloró de pronto con lágrimas de sal marina\ny volvió a sumergirse en el océano infinito de la noche.`
  },
  {
    id: 'sabines-cuerpo',
    pista: 8,
    titulo: 'No es nada de tu cuerpo',
    autor: 'Jaime Sabines',
    declamador: 'Jaime Sabines (Voz del Autor)',
    pais: 'Chiapas, México',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/sabines_cuerpo.mp3',
    descripcion: 'Lectura conmovedora de Sabines explorando la dimensión espiritual y carnal del amor.',
    textoPoema: `No es nada de tu cuerpo, ni tu piel ni tus ojos,\nes algo más oscuro y más profundo:\nes tu manera de estar en el silencio,\nes cómo tu voz me despierta de la muerte cotidiana.\n\nEs esa presencia tuya que me llena las manos aun cuando estás ausente.`
  },
  {
    id: 'dario-gelman-metempsicosis',
    pista: 9,
    titulo: 'Metempsicosis',
    autor: 'Rubén Darío',
    declamador: 'Juan Gelman (Voz del Poeta)',
    pais: 'Nicaragua / Argentina',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/dario_gelman_metempsicosis.mp3',
    descripcion: 'El gran poeta argentino Juan Gelman presta su voz honda a los versos modernistas de Rubén Darío.',
    textoPoema: `Yo fui un dios en los bosques de la Hélade y tú fuiste una ninfa coronada de mirto.\nEn esta vida nueva te reconozco por el temblor de tu mirada y la música secreta de tus pasos.\n\nLas almas viajan a través de los siglos buscando la misma lumbre,\ny en cada reencuentro el amor vuelve a fundar el universo.`
  },
  {
    id: 'dario-gelman-fatal',
    pista: 10,
    titulo: 'Lo fatal',
    autor: 'Rubén Darío',
    declamador: 'Juan Gelman (Voz del Poeta)',
    pais: 'Nicaragua / Argentina',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/dario_gelman_fatal.mp3',
    descripcion: '«Dichoso el árbol que es apenas sensitivo...» interpretado con estremecedora gravedad por Juan Gelman.',
    textoPoema: `Dichoso el árbol, que es apenas sensitivo,\ny más la piedra dura porque esa ya no siente,\npues no hay dolor más grande que el dolor de ser vivo,\nni mayor pesadumbre que la vida consciente.\n\nSer, y no saber nada, y ser sin rumbo cierto,\ny el temor de haber sido y un futuro terror...\ny el espanto seguro de estar mañana muerto,\ny sufrir por la vida y por la sombra y por\n\nlo que no conocemos y apenas sospechamos,\ny la carne que tienta con sus frescos racimos,\ny la tumba que aguarda con sus fúnebres ramos,\n¡y no saber adónde vamos,\nni de dónde venimos!...`
  },
  {
    id: 'neruda-sabines-manos',
    pista: 11,
    titulo: 'Tus manos',
    autor: 'Pablo Neruda',
    declamador: 'Jaime Sabines (Homenaje a Neruda)',
    pais: 'Chile / México',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/neruda_sabines_manos.mp3',
    descripcion: 'Homenaje poético irrepetible: Jaime Sabines declamando la lírica amorosa de Pablo Neruda.',
    textoPoema: `Tus manos vuelan sobre mi pecho como dos palomas de fuego.\nCuando las abres amanece sobre mi piel,\ncuando las cierras cae la noche sobre la tierra.\n\nEn tus palmas guardas los secretos de todos los ríos y los bosques del sur.`
  },
  {
    id: 'cortazar-angeles',
    pista: 12,
    titulo: 'La verdadera cara de los ángeles',
    autor: 'Julio Cortázar',
    declamador: 'Julio Cortázar (Voz del Autor)',
    pais: 'Bruselas / Argentina',
    origen: 'externo_universal',
    genero: 'Narrativa / Relato',
    audioUrl: '/assets/audios/cortazar_angeles.mp3',
    descripcion: 'Cortázar con su inconfundible cadencia lúdica y poética inigualable.',
    textoPoema: `Los ángeles no tienen alas de pluma sino de cristal invisible.\nCaminan entre nosotros por los bulevares de París y nos rozan la nuca cuando pensamos en un amor imposible.\n\nSe sientan en los cafés a mirar la lluvia\ny sonríen con la melancolía de quien conoce el principio y el fin de todas las historias.`
  },
  {
    id: 'varela-escucharas',
    pista: 13,
    titulo: 'Si me escucharas',
    autor: 'Blanca Varela',
    declamador: 'Blanca Varela (Voz de la Autora)',
    pais: 'Lima, Perú',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/varela_escucharas.mp3',
    descripcion: 'La más lúcida e intensa poeta peruana en un registro sonoro de precisión quirúrgica y belleza despojada.',
    textoPoema: `Si me escucharas en esta orilla donde la arena calcina los nombres,\nsabrías que no hay palabra que no nazca herida por la luz de la verdad.\n\nEl silencio no es la ausencia del sonido,\nsino la plenitud de lo que ya no necesita ser nombrado.`
  },
  {
    id: 'roby-boston',
    pista: 14,
    titulo: 'Boston, tú y yo',
    autor: 'Isabel Carlota Roby',
    declamador: 'Isabel Carlota Roby (Voz de la Autora)',
    pais: 'Argentina / Estados Unidos',
    origen: 'externo_universal',
    genero: 'Lírica / Poesía',
    audioUrl: '/assets/audios/roby_boston.mp3',
    descripcion: 'Lectura poética evocativa con la delicadeza lírica y la atmósfera cosmopolita de la autora.',
    textoPoema: `En las calles de adoquín de Beacon Hill el invierno dibuja nuestra silueta sobre la nieve.\nBoston despierta con campanas lejanas y nosotros seguimos inventando la memoria.\n\nEl río Charles se congela lentamente mientras tu mano tibia me recuerda que la poesía siempre vence al frío.`
  }
];
