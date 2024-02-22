// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
let rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']

// 4.1
avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

console.log(avengers[0])

// 4.2
avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

avengers[0] = 'IRONMAN'

// 4.3
avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

console.log(avengers.length)

// 4.4
rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']

rickAndMortyCharacters.push('Morty')
rickAndMortyCharacters.push('Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

// 4.5
rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

// 4.6
rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)
