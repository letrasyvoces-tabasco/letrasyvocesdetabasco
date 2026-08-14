const e=document.getElementById("reading-modal"),r=document.getElementById("close-reading-modal"),i=document.getElementById("reader-content-box"),s=document.getElementById("modal-book-title"),d=document.getElementById("modal-book-author"),t=document.getElementById("modal-book-text"),c=document.getElementById("modal-wa-btn"),y={animalia:{title:"Animalia Literaria",author:"Antología Colectiva · 16 Escritores · 131 Páginas",waText:"Hola Mesa Directiva de LVT, leí la muestra de Animalia Literaria y deseo información sobre su adquisición y preventa.",contentHtml:`
        <p class="italic text-center text-gray-600 mb-6 font-serif">
          «En el trópico húmedo la palabra no se escribe: brota como mangle y canta como agua viva.»
        </p>
        <p class="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-terracota">
          En los meandros del Grijalva y la espesura de la chontalpa, los animales no son meras criaturas del paisaje; son custodios silenciosos de nuestra mitología. En esta obra conmemorativa, dieciséis plumas tabasqueñas entrelazan versos y relatos donde el quelonio, el jaguar y la garza morena dialogan con el alma del navegante.
        </p>
        <p class="font-serif leading-relaxed">
          Cada página es un testimonio de la biodiversidad que palpita en el Sureste de México, uniendo el rigor formal de la métrica con la libertad del cuento moderno. Una edición cuidadosamente diagramada en 131 páginas que constituye ya una pieza clave en el acervo bibliográfico de nuestra entidad.
        </p>
        <div class="my-6 p-4 rounded-xl bg-editorial border-l-4 border-dorado italic text-sm text-gray-700">
          «Bajo la sombra del guayacán florecido,<br>
          el ojo del reptil vigila el río:<br>
          no hay tiempo en el pantano, solo canto.»
        </div>
      `},corazon:{title:"A corazón abierto",author:"María de los Ángeles Cervantes Rosas",waText:"Hola Mesa Directiva de LVT, leí la muestra de A corazón abierto de María Cervantes y deseo adquirir un ejemplar.",contentHtml:`
        <p class="italic text-center text-gray-600 mb-6 font-serif">
          «Abrir el pecho a la memoria es dejar que el río lave las heridas de la tarde.»
        </p>
        <p class="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-terracota">
          Hay libros que se leen y libros que se sienten en la piel. «A corazón abierto» es un viaje de redención lírica donde María de los Ángeles Cervantes Rosas explora los laberintos de la ausencia, la ternura y la reconciliación con el destino.
        </p>
        <p class="font-serif leading-relaxed">
          Presentada el 30 de mayo de 2026 en el emblemático recinto de la Casa Universitaria Cacao y Chocolate de Villahermosa, esta obra se consolida como una de las voces más honestas y emotivas de la literatura contemporánea en Tabasco.
        </p>
        <div class="my-6 p-4 rounded-xl bg-editorial border-l-4 border-terracota italic text-sm text-gray-700">
          «No guardo rencor al viento que deshojó mi jardín;<br>
          en cada pétalo caído aprendí el nombre del agua<br>
          y en cada silencio hallé mi propia voz.»
        </div>
      `},tardes:{title:"Tardes Tabasqueñas de Ópalos y Topacios",author:"Antología Conmemorativa Histórica LVT",waText:"Hola Mesa Directiva de LVT, deseo adquirir un ejemplar de la antología conmemorativa Tardes Tabasqueñas de Ópalos y Topacios.",contentHtml:`
        <p class="italic text-center text-gray-600 mb-6 font-serif">
          «El atardecer en Villahermosa tiñe el río de ópalo y funde el cielo en topacio.»
        </p>
        <p class="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-terracota">
          Compilación histórica que reúne las plumas fundadoras y contemporáneas de Letras y Voces de Tabasco, rindiendo homenaje a la luz crepuscular, a la fertilidad de la tierra y a las costumbres que moldean la identidad del Edén mexicano.
        </p>
      `}};window.openReadingSample=function(o){const n=y[o];!n||!e||!s||!d||!t||!c||(s.innerText=n.title,d.innerText=n.author,t.innerHTML=n.contentHtml,c.setAttribute("href",`https://wa.me/522205889391?text=${encodeURIComponent(n.waText)}`),e.classList.remove("hidden"),document.body.style.overflow="hidden")};function b(){e&&(e.classList.add("hidden"),document.body.style.overflow="")}r&&r.addEventListener("click",b);e&&e.addEventListener("click",o=>{o.target===e&&b()});let a=18;const m=document.getElementById("font-increase"),u=document.getElementById("font-decrease");m&&t&&m.addEventListener("click",()=>{a<26&&(a+=2,t.style.fontSize=`${a}px`)});u&&t&&u.addEventListener("click",()=>{a>14&&(a-=2,t.style.fontSize=`${a}px`)});const f=document.getElementById("theme-pergamino"),p=document.getElementById("theme-marfil"),g=document.getElementById("theme-noche");function l(o){i&&(i.className=`p-8 sm:p-12 overflow-y-auto flex-1 transition-colors duration-200 ${o}`)}f&&f.addEventListener("click",()=>l("reader-pergamino"));p&&p.addEventListener("click",()=>l("reader-marfil"));g&&g.addEventListener("click",()=>l("reader-noche"));
