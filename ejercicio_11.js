const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  // Va almacenando la suma
  let sum = 0

  for (const element of param) {
    // Se presupone que el array está formado sólo por números y cadenas
    if (typeof element === 'number') {
      sum += element
    } else {
      sum += element.length
    }
  }

  return sum / param.length
}

console.log(averageWord(mixedElements))
