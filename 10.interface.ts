interface InterfaceUser { // declaring custom type
  firsName: string,
  lastName: string;
  age: number
  username: string
  email: string;
  optional?: string
}

const user1: InterfaceUser = {
  firsName: "seyed ali",
  lastName: "taghawi",
  username: "ali.taghawi",
  age: 33,
  email: "example@email.com",
};
 
let users: Array<InterfaceUser>;

function createUser(user: InterfaceUser) {
  user.optional = user.optional ?? 'optional'
  return user
}

console.log(createUser({
  firsName: "ali",
  lastName: "taghawi",
  username: "abc",
  age: 33,
  email: "example@email.com"
}))

// ?? nullish operator (null or undefined)