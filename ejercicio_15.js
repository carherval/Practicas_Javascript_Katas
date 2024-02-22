const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

const target = 'Camiseta'

products.forEach((product) => {
  if (product.includes(target)) {
    console.log(product)
  }
})
