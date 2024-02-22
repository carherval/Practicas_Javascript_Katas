const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  // Va almacenando la suma
  let sum = 0

  for (const number of param) {
    sum += number
  }

  return sum
}

console.log(sumAll(numbers))
