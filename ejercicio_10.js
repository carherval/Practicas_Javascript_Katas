const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(param) {
  return param.reduce((sum, number) => sum + number) / param.length
}

console.log(average(numbers))
