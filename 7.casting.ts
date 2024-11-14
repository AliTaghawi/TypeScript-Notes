// Assertion | Explicit 

let value1: any = "abcd"
let value2 = <number> value1 // will inherit prototype of type "in this case number"
// or
let value3 = value1 as number // will inherit prototype of type "in this case number"
console.log(typeof value2, value2)
console.log(typeof value3, value3)