import './styles/main.scss'

// Global Scope DATA
const POLYHEDRONS_PRODUCTS = [
   {
      name: 'Cube',
      img: './assets/polyhedrons/cube.svg',
      seller: 'Plato',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 240
   },
   {
      name: 'Tetrahedron',
      img: './assets/polyhedrons/tetrahedron.svg',
      seller: 'Plato',
      description:
         'Now the form of the solid which has the smallest number of bases, being the simplest and most mobile of the four, was assigned to fire.',
      price: 120
   },
   {
      name: 'Octahedron',
      img: './assets/polyhedrons/octahedron.svg',
      seller: 'Plato',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 240
   },
   {
      name: 'Dodecahedron',
      img: './assets/polyhedrons/dodecahedron.svg',
      seller: 'Plato',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 600
   },
   {
      name: 'Icosahedron',
      img: './assets/polyhedrons/icosahedron.svg',
      seller: 'Plato',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 600
   },
   {
      name: 'Cuboctahedron',
      img: './assets/polyhedrons/cuboctahedron.svg',
      seller: 'Archimedes',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 120
   },
   {
      name: 'Snub Cube',
      img: './assets/polyhedrons/snub-cube.svg',
      seller: 'Archimedes',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 320
   },
   {
      name: 'Rhombicosido',
      img: './assets/polyhedrons/rhombicosidodecahedron.svg',
      seller: 'Archimedes',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 380
   },
   {
      name: 'Rhombicuboctahedron',
      img: 'assets/polyhedrons/rhombicuboctahedron.svg',
      seller: 'Archimedes',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 690
   },
   {
      name: 'Snub Dodecahedron',
      img: './assets/polyhedrons/snub-dodecahedron.svg',
      seller: 'Archimedes',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 530
   },
   {
      name: 'Stellated Dodecahedron',
      img: './assets/polyhedrons/stellated-dodecahedron.svg',
      seller: 'Kepler',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 350
   },
   {
      name: 'Urchin',
      img: './assets/polyhedrons/urchin.svg',
      seller: 'Kepler',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 600
   },
   {
      name: 'Great Dodecahedron',
      img: './assets/polyhedrons/great-dodecahedron.svg',
      seller: 'Kepler',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 512
   },
   {
      name: 'Great Icosahedron',
      img: './assets/polyhedrons/great-icosahedron.svg',
      seller: 'Kepler',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 520
   },
   {
      name: 'Cube Octahedron',
      img: './assets/polyhedrons/cube-octahedron.svg',
      seller: 'Escher',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 480
   },
   {
      name: 'Escher Solid',
      img: './assets/polyhedrons/escher-solid.svg',
      seller: 'Escher',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 590
   },
   {
      name: 'Cube 3',
      img: './assets/polyhedrons/cube-3.svg',
      seller: 'Escher',
      description:
         "Enigmatic shapes unveil cosmic truths, patterns echoing the universe's heartbeat.",
      price: 666
   },
   {
      name: "Chameleon's Cage",
      img: './assets/polyhedrons/chameleon-cage.svg',
      seller: 'Escher',
      description:
         'The mathematical orderliness of polyhedra depicts the stability and timeless quality of the heavens',
      price: 888
   }
]

const PRODUCTS_ARRAY_BY_PRICE = POLYHEDRONS_PRODUCTS.slice().sort(
   (a, b) => a.price - b.price
)

// Mutable global scope arrays to manage State
let productsArrayFilteredByPrice = PRODUCTS_ARRAY_BY_PRICE.slice()
let productsArrayFilteredBySeller = PRODUCTS_ARRAY_BY_PRICE.slice()
let productsArrayDisplayed = PRODUCTS_ARRAY_BY_PRICE.slice()

// Used html elements in the app
const productsContainer = document.querySelector('.products-container')
const priceSlider = document.querySelector('#price-slider')
const priceDisplayInput = document.querySelector('.display-price')
const sellerOptionsSelect = document.querySelector('.sellers--select')
let productSellerLinks

console.log(productSellerLinks)

// -- FUNCTIONS --
// functions app start
const addSellersToSelectOptions = (sellersArray) => {
   sellerOptionsSelect.innerHTML =
      '<option value="all"> -- All sellers --</option>'

   sellersArray.forEach((seller) => {
      sellerOptionsSelect.innerHTML += `
          <option value="${seller}">${seller}</option>
        `
   })
}

const addPriceValuesToSlider = (productsPriceArray) => {
   let min = Number.POSITIVE_INFINITY
   let max = 0

   productsPriceArray.forEach((price) => {
      if (price > max) {
         max = price
      }
      if (price < min) {
         min = price
      }
   })

   priceSlider.min = min
   priceSlider.max = max
   priceSlider.value = max
   priceDisplayInput.value = max
}

// functions utility
const areArraysNotEqual = (arr1, arr2) => {
   return !(
      arr1.length === arr2.length &&
      arr1.every((value, index) => value === arr2[index])
   )
}

const isNameLarge = (name) => !/\s/.test(name) && name.length > 18

// functions display called by event listeners
const fillProductsContainer = (productsArray) => {
   productsArrayDisplayed = productsArray

   if (productsArray.length === 0) {
      productsContainer.innerHTML = `
        <h2 class="message-no-products">No polyhedrons found :(</h2>
      `
      return
   }

   productsContainer.innerHTML = ''

   productsArray.forEach((product) => {
      productsContainer.innerHTML += `
        <div class="product-card">
          <div class="product-card--img-container">
            <img
              class="product-card--img"
              src="${product.img}"
              alt="${product.name}"
            />
          </div>
          <${
             isNameLarge(product.name) ? 'h3' : 'h2'
          } class="product-card--title">
               ${product.name}
          </${isNameLarge(product.name) ? 'h3' : 'h2'}>
          <div class="product-card--seller">
            <span>Seller:</span>
            <a class="product-seller-link" href="#">${product.seller}</a>
          </div>
          <p class="product-card--description">
            <em
                >"${product.description}"</em
            >
          </p>
          <hr class="solid" />
          <div class="product-card--price">
            <span>${product.price}</span> <span id="currency">&#3065;</span>
          </div>
          <button class="product-card--buy-button">BUY NOW</button>
        </div>
      `
   })

   productSellerLinks = document.querySelectorAll('.product-seller-link')

   productSellerLinks.forEach((link) =>
      link.addEventListener('click', onSellerLinkClick)
   )
}

const onSellerLinkClick = (event) => {
   const seller = event.target.textContent
   const maxPrice = priceSlider.max
   sellerOptionsSelect.value = seller

   priceSlider.value = maxPrice
   priceDisplayInput.value = maxPrice

   productsArrayFilteredByPrice = PRODUCTS_ARRAY_BY_PRICE.slice()
   productsArrayFilteredBySeller = PRODUCTS_ARRAY_BY_PRICE.filter(
      (product) => product.seller === seller
   )

   fillProductsContainer(productsArrayFilteredBySeller)
}

const displayOnPriceInputChange = (event) => {
   let maxPrice = event.target.value

   let newFilteredProductsArray = productsArrayFilteredBySeller.filter(
      (product) => product.price <= maxPrice
   )

   productsArrayFilteredByPrice = PRODUCTS_ARRAY_BY_PRICE.filter(
      (product) => product.price <= maxPrice
   )

   if (areArraysNotEqual(newFilteredProductsArray, productsArrayDisplayed)) {
      fillProductsContainer(newFilteredProductsArray)
   }
}

// -- EVENT LISTENERS --
priceSlider.addEventListener('input', (event) => {
   priceDisplayInput.value = event.target.value
   displayOnPriceInputChange(event, priceDisplayInput)
})

priceDisplayInput.addEventListener('change', (event) => {
   priceDisplayInput.value = event.target.value
   displayOnPriceInputChange(event, priceSlider)
})

sellerOptionsSelect.addEventListener('change', (event) => {
   let seller = event.target.value
   let newFilteredProductsArray = productsArrayFilteredByPrice.filter(
      (product) => seller === 'all' || product.seller === seller
   )

   productsArrayFilteredBySeller = PRODUCTS_ARRAY_BY_PRICE.filter(
      (product) => seller === 'all' || product.seller === seller
   )

   if (areArraysNotEqual(newFilteredProductsArray, productsArrayDisplayed)) {
      fillProductsContainer(newFilteredProductsArray)
   }
})

// On Load

fillProductsContainer(PRODUCTS_ARRAY_BY_PRICE)
addPriceValuesToSlider(PRODUCTS_ARRAY_BY_PRICE.map((product) => product.price))
addSellersToSelectOptions([
   ...new Set(POLYHEDRONS_PRODUCTS.map((product) => product.seller))
])
