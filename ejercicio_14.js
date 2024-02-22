const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

// Devuelve el número de veces que aparece una palabra en el array
function counterWord(words, target) {
  // Va almacenando el número de veces que aparece una palabra en el array
  let counter = 0

  for (const word of words) {
    if (target === word) {
      counter++
    }
  }

  return counter
}

// Devuelve el número de veces que aparece una palabra en el array
// Versión haciendo uso de filter
function counterWord2(words, target) {
  const counter = words.filter((word) => word === target)
  return counter.length
}

function repeatCounter(param) {
  // Almacena el número de veces que aparece cada palabra del array
  const counterAll = []
  const counterAll2 = []

  for (const word of param) {
    counterAll.push(counterWord(param, word))
    counterAll2.push(counterWord2(param, word))
  }

  console.log(counterAll)
  console.log(counterAll2)
}

repeatCounter(counterWords)
