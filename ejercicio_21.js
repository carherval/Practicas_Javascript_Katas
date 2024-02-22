const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

let youngerMessage = 'Usuarios menores de edad:'
let adultMessage = 'Usuarios mayores de edad:'
const age = 18

users.forEach((user) => {
  if (user.years < age) {
    youngerMessage += ` ${user.name},`
  } else {
    adultMessage += ` ${user.name},`
  }
})

// Se elimina el último caracter (coma) del mensaje resultante
console.log(youngerMessage.slice(0, -1))
console.log(adultMessage.slice(0, -1))
