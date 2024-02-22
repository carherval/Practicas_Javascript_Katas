const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
// const foodSchedule = [
//   { name: 'Heura', isVegan: true },
//   { name: 'Salmon', isVegan: false },
//   { name: 'Tofu', isVegan: true },
//   { name: 'Burger', isVegan: false },
//   { name: 'Rice', isVegan: true },
//   { name: 'Pasta', isVegan: true }
// ]
const foodSchedule = [
  { name: 'Chicken', isVegan: false },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Meatballs', isVegan: false }
]

for (const food of foodSchedule) {
  if (!food.isVegan) {
    // Se sustituye la comida no vegana por la primera fruta
    food.name = fruits[0]
    food.isVegan = true
    // Se elimina la primera fruta de su array para que la siguiente (no repetida) esté en la primera posición otra vez
    fruits.shift()
  }
}

console.log(foodSchedule)
