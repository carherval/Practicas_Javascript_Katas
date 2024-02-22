const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(param) {
  // Va almacenando la longitud máxima
  let maxLong = 0
  // Va almacenando la palabra más larga
  let longestWord

  for (const word of param) {
    if (word.length > maxLong) {
      maxLong = word.length
      longestWord = word
    }
  }

  return longestWord
}

console.log(findLongestWord(avengers))
