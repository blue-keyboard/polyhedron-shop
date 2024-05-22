(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&t(p)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();const y=[{name:"Cube",img:"./assets/polyhedrons/cube.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:240},{name:"Tetrahedron",img:"./assets/polyhedrons/tetrahedron.svg",seller:"Plato",description:"Now the form of the solid which has the smallest number of bases, being the simplest and most mobile of the four, was assigned to fire.",price:120},{name:"Octahedron",img:"./assets/polyhedrons/octahedron.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:240},{name:"Dodecahedron",img:"./assets/polyhedrons/dodecahedron.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:600},{name:"Icosahedron",img:"./assets/polyhedrons/icosahedron.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:600},{name:"Cuboctahedron",img:"./assets/polyhedrons/cuboctahedron.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:120},{name:"Snub Cube",img:"./assets/polyhedrons/snub-cube.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:320},{name:"Rhombicosido",img:"./assets/polyhedrons/rhombicosidodecahedron.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:380},{name:"Rhombicuboctahedron",img:"assets/polyhedrons/rhombicuboctahedron.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:690},{name:"Snub Dodecahedron",img:"./assets/polyhedrons/snub-dodecahedron.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:530},{name:"Stellated Dodecahedron",img:"./assets/polyhedrons/stellated-dodecahedron.svg",seller:"Kepler",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:350},{name:"Urchin",img:"./assets/polyhedrons/urchin.svg",seller:"Kepler",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:600},{name:"Great Dodecahedron",img:"./assets/polyhedrons/great-dodecahedron.svg",seller:"Kepler",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:512},{name:"Great Icosahedron",img:"./assets/polyhedrons/great-icosahedron.svg",seller:"Kepler",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:520},{name:"Cube Octahedron",img:"./assets/polyhedrons/cube-octahedron.svg",seller:"Escher",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:480},{name:"Escher Solid",img:"./assets/polyhedrons/escher-solid.svg",seller:"Escher",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:590},{name:"Cube 3",img:"./assets/polyhedrons/cube-3.svg",seller:"Escher",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:666},{name:"Chameleon's Cage",img:"./assets/polyhedrons/chameleon-cage.svg",seller:"Escher",description:"The mathematical orderliness of polyhedra depicts the stability and timeless quality of the heavens",price:888}],o=y.slice().sort((s,e)=>s.price-e.price);let g=o.slice(),l=o.slice(),v=o.slice();const u=document.querySelector(".products-container"),c=document.querySelector("#price-slider"),a=document.querySelector(".display-price"),h=document.querySelector(".sellers--select");let m;console.log(m);const S=s=>{h.innerHTML='<option value="all"> -- All sellers --</option>',s.forEach(e=>{h.innerHTML+=`
          <option value="${e}">${e}</option>
        `})},P=s=>{let e=Number.POSITIVE_INFINITY,r=0;s.forEach(t=>{t>r&&(r=t),t<e&&(e=t)}),c.min=e,c.max=r,c.value=r,a.value=r},b=(s,e)=>!(s.length===e.length&&s.every((r,t)=>r===e[t])),f=s=>!/\s/.test(s)&&s.length>18,d=s=>{if(v=s,s.length===0){u.innerHTML=`
        <h2 class="message-no-products">No polyhedrons found :(</h2>
      `;return}u.innerHTML="",s.forEach(e=>{u.innerHTML+=`
        <div class="product-card">
          <div class="product-card--img-container">
            <img
              class="product-card--img"
              src="${e.img}"
              alt="${e.name}"
            />
          </div>
          <${f(e.name)?"h3":"h2"} class="product-card--title">
               ${e.name}
          </${f(e.name)?"h3":"h2"}>
          <div class="product-card--seller">
            <span>Seller:</span>
            <a class="product-seller-link" href="#">${e.seller}</a>
          </div>
          <p class="product-card--description">
            <em
                >"${e.description}"</em
            >
          </p>
          <hr class="solid" />
          <div class="product-card--price">
            <span>${e.price}</span> <span id="currency">&#3065;</span>
          </div>
          <button class="product-card--buy-button">BUY NOW</button>
        </div>
      `}),m=document.querySelectorAll(".product-seller-link"),m.forEach(e=>e.addEventListener("click",L))},L=s=>{const e=s.target.textContent,r=c.max;h.value=e,c.value=r,a.value=r,g=o.slice(),l=o.filter(t=>t.seller===e),d(l)},E=s=>{let e=s.target.value,r=l.filter(t=>t.price<=e);g=o.filter(t=>t.price<=e),b(r,v)&&d(r)};c.addEventListener("input",s=>{a.value=s.target.value,E(s)});a.addEventListener("change",s=>{a.value=s.target.value,E(s)});h.addEventListener("change",s=>{let e=s.target.value,r=g.filter(t=>e==="all"||t.seller===e);l=o.filter(t=>e==="all"||t.seller===e),b(r,v)&&d(r)});d(o);P(o.map(s=>s.price));S([...new Set(y.map(s=>s.seller))]);