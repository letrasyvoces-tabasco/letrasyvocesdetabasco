const a=document.getElementById("reading-modal"),i=document.getElementById("close-reading-modal"),e=document.getElementById("reader-content-box"),l=document.getElementById("modal-book-title"),s=document.getElementById("modal-book-author"),r=document.getElementById("modal-book-text"),d=document.getElementById("modal-wa-btn"),c=document.getElementById("font-decrease"),m=document.getElementById("font-increase"),u=document.getElementById("theme-pergamino"),p=document.getElementById("theme-marfil"),f=document.getElementById("theme-noche");let o=18;const b={animalia:{title:"Animalia Literaria",author:"Antología Colectiva · 16 Escritores · 131 Páginas",waText:"Hola Mesa Directiva de LVT, leí la muestra de Animalia Literaria y deseo información sobre su adquisición.",contentHtml:`
        <p class="italic text-center mb-6 font-serif text-ink-muted">
          «En el trópico húmedo la palabra no se escribe: brota como mangle y canta como agua viva.»
        </p>
        <p class="drop-cap">
          En los meandros del Grijalva y la espesura de la chontalpa, los animales no son meras criaturas del paisaje; son custodios silenciosos de nuestra mitología. En esta obra conmemorativa, dieciséis plumas tabasqueñas entrelazan versos y relatos donde el quelonio, el jaguar y la garza morena dialogan con el alma del navegante.
        </p>
        <p class="font-serif leading-relaxed">
          Cada página es un testimonio de la biodiversidad que palpita en el Sureste de México, uniendo el rigor formal de la métrica con la libertad del cuento moderno. Una edición cuidadosamente diagramada en 131 páginas que constituye ya una pieza clave en el acervo bibliográfico de nuestra entidad.
        </p>
        <div class="my-6 p-4 rounded-2xl bg-paper-warm border-l-4 border-cacao italic text-sm text-ink-muted font-serif">
          «Bajo la sombra del guayacán florecido,<br>
          el ojo del reptil vigila el río:<br>
          no hay tiempo en el pantano, solo canto.»
        </div>
      `},corazon:{title:"A corazón abierto",author:"María de los Ángeles Cervantes Rosas",waText:"Hola Mesa Directiva de LVT, leí la muestra de A corazón abierto de María Cervantes y deseo adquirir un ejemplar.",contentHtml:`
        <p class="italic text-center mb-6 font-serif text-ink-muted">
          «Abrir el pecho a la memoria es dejar que el río lave las heridas de la tarde.»
        </p>
        <p class="drop-cap">
          Hay libros que se leen y libros que se sienten en la piel. «A corazón abierto» es un viaje de redención lírica donde María de los Ángeles Cervantes Rosas explora los laberintos de la ausencia, la ternura y la reconciliación con el destino.
        </p>
        <p class="font-serif leading-relaxed">
          Presentada en el emblemático recinto de la Casa Universitaria Cacao y Chocolate de Villahermosa, esta obra se consolida como una de las voces más honestas y emotivas de la literatura contemporánea en Tabasco.
        </p>
      `},tardes:{title:"Tardes Tabasqueñas de Ópalos y Topacios",author:"Compilación Oficial LVT (INDAUTOR 2025)",waText:"Hola Mesa Directiva de LVT, deseo adquirir un ejemplar de Tardes Tabasqueñas de Ópalos y Topacios.",contentHtml:`
        <p class="italic text-center mb-6 font-serif text-ink-muted">
          «La tarde en Villahermosa no cae: se derrama en oro sobre las aguas del río.»
        </p>
        <p class="drop-cap">
          Monumental compilación que reúne la producción lírica y ensayística de los miembros de la Sociedad de Escritores Letras y Voces de Tabasco, A.C. Registrada formalmente ante el INDAUTOR en 2025, esta antología representa el pulso vivo de las letras tabasqueñas.
        </p>
      `}};function y(n){const t=b[n]||b.animalia;l&&(l.innerText=t.title),s&&(s.innerText=t.author),r&&(r.innerHTML=t.contentHtml),d&&(d.href=`https://wa.me/522205889391?text=${encodeURIComponent(t.waText)}`),a&&(a.classList.remove("hidden"),document.body.style.overflow="hidden")}function g(){a&&(a.classList.add("hidden"),document.body.style.overflow="")}i&&i.addEventListener("click",g);a&&a.addEventListener("click",n=>{n.target===a&&g()});m&&e&&m.addEventListener("click",()=>{o<24&&(o+=2,e.style.fontSize=`${o}px`)});c&&e&&c.addEventListener("click",()=>{o>14&&(o-=2,e.style.fontSize=`${o}px`)});u&&e&&u.addEventListener("click",()=>{e.className="p-5 sm:p-10 overflow-y-auto flex-1 reader-pergamino transition-colors duration-200"});p&&e&&p.addEventListener("click",()=>{e.className="p-5 sm:p-10 overflow-y-auto flex-1 reader-marfil transition-colors duration-200"});f&&e&&f.addEventListener("click",()=>{e.className="p-5 sm:p-10 overflow-y-auto flex-1 reader-noche transition-colors duration-200"});window.openReadingModal=y;
