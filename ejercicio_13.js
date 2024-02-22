const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

// function finderName(param) {
function finderName(names, target) {
  // Flag que indica si el elemento target no ha sido encontrado
  let found = false

  for (let i = 0; i < names.length; i++) {
    // Si se encuentra el elemento target, se almacena un flag indicando que ha sido encontrado y su posición en el array
    if (target === names[i]) {
      found = [true, i]
      break
    }
  }

  return found
}

// Versión haciendo uso de find
function finderName2(names, target) {
  // Flag que indica si el elemento target no ha sido encontrado
  let found = false

  const foundName = names.find((name) => name === target)
  if (foundName !== undefined) {
    found = [true, names.indexOf(target)]
  }

  return found
}

console.log(finderName(nameFinder, 'Logan'))
console.log(finderName(nameFinder, 'Lobezno'))

console.log(finderName2(nameFinder, 'Logan'))
console.log(finderName2(nameFinder, 'Lobezno'))
