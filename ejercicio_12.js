const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

// Versión con bucle while
// Se usa un bucle while para evitar errores durante el recorrido del array y perder la referencia del índice al cambiar éste de dimensión al eliminar los duplicados, si es el caso
// Al ir eliminando los elementos duplicados en cada iteración, cada elemento debe ser comparado con los siguientes del array, no es necesario compararlo con todo el array resultante después de cada elemento duplicado eliminado
function removeDuplicates(param) {
  // Se hace una copia del array original para evitar modificarlo
  const copy = param.slice()

  // El bucle while externo sólo llega hasta el penúltimo elemento porque éste será comparado con el siguiente (último elemento del array) en el bucle while interno
  let i = 0
  while (i < copy.length - 1) {
    let j = i + 1
    while (j < copy.length) {
      // Se elimina el elemento duplicado
      if (copy[j] === copy[i]) {
        copy.splice(j, 1)
      }
      j++
    }
    i++
  }

  return copy
}

// Versión con bucle for
// Una manera de evitar el error explicado en el bucle while es usar un bucle for en orden inverso, así nunca se perderá la referencia del índice (siempre y cuando se elimine, si es el caso, un elemento duplicado en cada iteración)
function removeDuplicates2(param) {
  // Se hace una copia del array original para evitar modificarlo
  const copy = param.slice()

  // Se optimiza la función al hacer uso de indexOf y al no tener un bucle interno anidado
  for (let i = copy.length - 1; i >= 0; i--) {
    // Se elimina el elemento duplicado (en orden inverso, dejando siempre el primero del array que sea único)
    if (copy.indexOf(copy[i]) !== i) {
      copy.splice(i, 1)
    }
  }

  return copy
}

console.log(removeDuplicates(duplicates))
console.log(removeDuplicates2(duplicates))
