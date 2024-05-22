(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const f=[{name:"Cube",img:"./cube.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:240},{name:"Tetrahedron",img:"./tetrahedron.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:120},{name:"Octahedron",img:"./octahedron.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:240},{name:"Dodecahedron",img:"./dodecahedron.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:600},{name:"Icosahedron",img:"./icosahedron.svg",seller:"Plato",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:600},{name:"Cuboctahedron",img:"./cuboctahedron.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:120},{name:"Snub Cube",img:"./snub-cube.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:320},{name:"Rhombicosido",img:"./rhombicosidodecahedron.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:380},{name:"Rhombicuboctahedron",img:"rhombicuboctahedron.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:690},{name:"Snub Dodecahedron",img:"./snub-dodecahedron.svg",seller:"Archimedes",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:530},{name:"Stellated Dodecahedron",img:"./stellated-dodecahedron.svg",seller:"Kepler",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:350},{name:"Urchin",img:"./urchin.svg",seller:"Kepler",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:600},{name:"Great Dodecahedron",img:"./great-dodecahedron.svg",seller:"Kepler",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:512},{name:"Great Icosahedron",img:"./great-icosahedron.svg",seller:"Kepler",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:520},{name:"Cube Octahedron",img:"./cube-octahedron.svg",seller:"Escher",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:480},{name:"Escher Solid",img:"./escher-solid.svg",seller:"Escher",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:590},{name:"Cube 3",img:"./cube-3.svg",seller:"Escher",description:"Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",price:666},{name:"Chameleon's Cage",img:"./chameleon-cage.svg",seller:"Escher",description:"The mathematical orderliness of polyhedra depicts the stability and timeless quality of the heavens",price:888}],c=f.slice().sort((t,e)=>t.price-e.price);let g=c.slice(),l=c.slice(),v=c.slice();const p=document.querySelector(".products-container"),a=document.querySelector("#price-slider"),o=document.querySelector(".display-price"),h=document.querySelector(".sellers--select");let m;console.log(m);const S=t=>{h.innerHTML='<option value="all"> -- All sellers --</option>',t.forEach(e=>{h.innerHTML+=`
          <option value="${e}">${e}</option>
        `})},P=t=>{let e=Number.POSITIVE_INFINITY,s=0;t.forEach(r=>{r>s&&(s=r),r<e&&(e=r)}),a.min=e,a.max=s,a.value=s,o.value=s},E=(t,e)=>!(t.length===e.length&&t.every((s,r)=>s===e[r])),b=t=>!/\s/.test(t)&&t.length>18,d=t=>{if(v=t,t.length===0){p.innerHTML=`
        <h2 class="message-no-products">No polyhedrons found :(</h2>
      `;return}p.innerHTML="",t.forEach(e=>{p.innerHTML+=`
        <div class="product-card">
          <div class="product-card--img-container">
            <img
              class="product-card--img"
              src="${e.img}"
              alt="${e.name}"
            />
          </div>
          <${b(e.name)?"h3":"h2"} class="product-card--title">
               ${e.name}
          </${b(e.name)?"h3":"h2"}>
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
      `}),m=document.querySelectorAll(".product-seller-link"),m.forEach(e=>e.addEventListener("click",L))},L=t=>{const e=t.target.textContent,s=a.max;h.value=e,a.value=s,o.value=s,g=c.slice(),l=c.filter(r=>r.seller===e),d(l)},y=t=>{let e=t.target.value,s=l.filter(r=>r.price<=e);g=c.filter(r=>r.price<=e),E(s,v)&&d(s)};a.addEventListener("input",t=>{o.value=t.target.value,y(t)});o.addEventListener("change",t=>{o.value=t.target.value,y(t)});h.addEventListener("change",t=>{let e=t.target.value,s=g.filter(r=>e==="all"||r.seller===e);l=c.filter(r=>e==="all"||r.seller===e),E(s,v)&&d(s)});d(c);P(c.map(t=>t.price));S([...new Set(f.map(t=>t.seller))]);
