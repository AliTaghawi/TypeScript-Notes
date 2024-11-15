const user = {
  fullName: "seyed ali taghawi",
  age: 33,
  email: "example@email.com"
} as const; // as const will make properties unChangeable

// user.fullName = "heydar" //gives error
console.log(user.fullName)

const numbers = [1, 3, 5 , 7] as const // as const will make properties unChangeable
// numbers[0] = 9 // gives error
// numbers.push(4) // gives error

console.log(numbers[0])