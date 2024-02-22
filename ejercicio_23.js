const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

let shortMovies = []
let mediumMovies = []
let longMovies = []
const firstLimit = 100
const secondLimit = 200

movies.forEach((movie) => {
  switch (true) {
    case movie.durationInMinutes <= firstLimit:
      shortMovies.push(movie)
      break
    case movie.durationInMinutes > firstLimit &&
      movie.durationInMinutes <= secondLimit:
      mediumMovies.push(movie)
      break
    case movie.durationInMinutes > secondLimit:
      longMovies.push(movie)
      break
    default:
      break
  }
})

console.log(shortMovies)
console.log(mediumMovies)
console.log(longMovies)

// Versión haciendo uso de filter
shortMovies = movies.filter((movie) => movie.durationInMinutes <= firstLimit)
mediumMovies = movies.filter(
  (movie) =>
    movie.durationInMinutes > firstLimit &&
    movie.durationInMinutes <= secondLimit
)
longMovies = movies.filter((movie) => movie.durationInMinutes > secondLimit)

console.log(shortMovies)
console.log(mediumMovies)
console.log(longMovies)
