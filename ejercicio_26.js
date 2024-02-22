// const goodProducts = []
let goodProducts = []
// const badProducts = []
let badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

const sales = 20

products.forEach((product) => {
  if (product.sellCount > sales) {
    goodProducts.push(product)
  } else {
    badProducts.push(product)
  }
})

console.log(goodProducts)
console.log(badProducts)

// Versión haciendo uso de filter
goodProducts = products.filter((product) => product.sellCount > sales)
badProducts = products.filter((product) => product.sellCount <= sales)

console.log(goodProducts)
console.log(badProducts)
