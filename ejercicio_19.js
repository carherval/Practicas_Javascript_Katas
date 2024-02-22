const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

const target = 'gato'

for (let i = toys.length - 1; i >= 0; i--) {
  if (toys[i].name.includes(target)) {
    toys.splice(i, 1)
  }
}

console.log(toys)
