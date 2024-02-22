const end = 10

// 6.1
for (let i = 0; i < end; i++) {
  console.log(i)
}

// 6.2
for (let i = 0; i < end; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// 6.3
for (let i = 0; i < end; i++) {
  if (i === end - 1) {
    console.log('Dormido!')
  } else {
    console.log('Intentando dormir 🐑')
  }
}
