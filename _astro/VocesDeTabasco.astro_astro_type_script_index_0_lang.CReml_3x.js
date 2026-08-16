const p={pellicer:{title:"Carlos Pellicer — «Horas de Junio»",origin:"Villahermosa, Tabasco (1897 – 1977) · El Poeta de América",poem:`Cada vez que me acuerdo de Tabasco,
las aguas se me suben a la boca,
y me lleno de pájaros y sauces,
y me pongo a cantar junto a la orilla.

Tierra mía, de sol y de pantano,
donde la flor del loto se derrama,
y el río Grijalva como un sueño pasa,
llevándose los ojos de los hombres.

En medio de la noche tropical,
la soledad es un relámpago verde,
y el corazón navega en la canoa
de un verso que no muere.`},gorostiza:{title:"José Gorostiza — «Muerte sin fin» (Fragmento Inaugural)",origin:"San Juan Bautista, Tabasco (1901 – 1973) · Contemporáneos",poem:`Lleno de mí, sitiado en mi epidermis
por un dios inasible que me ahoga,
mentido mono informe
que me acecha en el agua de mi sangre,
que me embiste en la sombra de mis párpados.

El vaso no es la forma,
sino el agua que adquiere la figura del vaso;
y la muerte no es más que este milagro
de una forma que busca su materia.`},becerra:{title:"José Carlos Becerra — «El tacto de la noche»",origin:"Villahermosa, Tabasco (1936 – 1970) · Generación Poética LVT",poem:`La noche no es la oscuridad que cae,
sino la piel de todo lo que espera.
Tocamos la memoria de las casas,
el rumor de los ríos que se alejan,
y somos otra vez el animal
que contempla su sombra en el espejo.`},sabines:{title:"Jaime Sabines — «Los Amorosos»",origin:"Chiapas, México (1926 – 1999) · Poeta Mayor del Sureste",poem:`Los amorosos callan.
El amor es el silencio más fino,
el más tembloroso, el más insoportable.
Los amorosos buscan,
los amorosos son los que abandonan,
son los que cambian, los que olvidan.

Su corazón les dice que nunca han de encontrar,
no encuentran, buscan.
Los amorosos andan como locos
porque están solos, solos, solos,
entregándose a ciegas a la lumbre.`},neruda:{title:"Pablo Neruda — «Poema 20»",origin:"Parral, Chile (1904 – 1973) · Premio Nobel de Literatura",poem:`Puedo escribir los versos más tristes esta noche.
Escribir, por ejemplo: «La noche está estrellada,
y tiritan, azules, los astros, a lo lejos.»

El viento de la noche gira en el cielo y canta.
Puedo escribir los versos más tristes esta noche.
Yo la quise, y a veces ella también me quiso.`},benedetti:{title:"Mario Benedetti — «Táctica y Estrategia»",origin:"Paso de los Toros, Uruguay (1920 – 2009)",poem:`Mi táctica es mirarte
aprender como sos
quererte como sos
mi táctica es hablarte
y escucharte
construir con palabras
un puente indestructible.

Mi estrategia es en cambio
más profunda y más simple
mi estrategia es que un día cualquiera
no sé cómo ni sé con qué pretexto
por fin me necesites.`},borges:{title:"Jorge Luis Borges — «El Poema de los Dones»",origin:"Buenos Aires, Argentina (1899 – 1986)",poem:`Nadie rebaje a lágrima o reproche
esta declaración de la maestría
de Dios, que con magnífica ironía
me dio a la vez los libros y la noche.

De esta ciudad de libros hizo dueños
a unos ojos sin luz, que sólo pueden
leer en las bibliotecas de los sueños
los insensatos párrafos que ceden.`}},r=document.querySelectorAll(".poet-pill"),c=document.getElementById("poet-display-title"),d=document.getElementById("poet-origin-tag"),l=document.getElementById("poet-display-body"),u=document.getElementById("search-poet-input");r.forEach(o=>{o.addEventListener("click",()=>{r.forEach(n=>{n.classList.remove("bg-[#EF7B38]","text-white","shadow-sm"),n.classList.add("bg-[#1A1A1A]","text-stone-300")}),o.classList.remove("bg-[#1A1A1A]","text-stone-300"),o.classList.add("bg-[#EF7B38]","text-white","shadow-sm");const e=o.getAttribute("data-id")||"pellicer",a=p[e];a&&c&&d&&l&&(c.textContent=a.title,d.textContent=a.origin,l.textContent=a.poem)})});u&&u.addEventListener("input",o=>{const e=o.target.value.toLowerCase();r.forEach(a=>{const n=a.getAttribute("data-id")||"",i=p[n];i&&(i.title.toLowerCase().includes(e)||i.poem.toLowerCase().includes(e)||i.origin.toLowerCase().includes(e))?a.style.display="inline-block":a.style.display="none"})});let t=!1;const m=document.getElementById("btn-voice-synthesizer"),s=document.getElementById("btn-voice-label");m&&"speechSynthesis"in window&&m.addEventListener("click",()=>{if(t){window.speechSynthesis.cancel(),t=!1,s&&(s.textContent="Escuchar Lectura Asistida");return}const o=l?.textContent||"",e=new SpeechSynthesisUtterance(o);e.lang="es-MX",e.rate=.88,e.onend=()=>{t=!1,s&&(s.textContent="Escuchar Lectura Asistida")},e.onerror=()=>{t=!1,s&&(s.textContent="Escuchar Lectura Asistida")},window.speechSynthesis.speak(e),t=!0,s&&(s.textContent="Detener Lectura")});
