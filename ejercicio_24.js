const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let sum = 0

for (const product of products) {
  sum += product.sellCount
}

console.log(sum)

// Versión haciendo uso de reduce
console.log(products.reduce((sum, product) => sum + product.sellCount, 0))
