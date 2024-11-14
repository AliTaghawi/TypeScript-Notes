let user: [name: string, age: number]; // will only get 2 argument
let scores: [name: string, ...score: number[]]; // first argument will be string and other will be number
let personScore: [name: string, ...scores: [first: number, second: number, third: number]]; // will get only 4 argument, first string and others number