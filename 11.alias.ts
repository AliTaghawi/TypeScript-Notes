// alias
type ID = number | string | null // declaring type "union"
type User = { // declaring type
  name: string,
  lastName: string
  age:number | string;
  id: ID
  basket: {
    products: ID[]
    discount?: string
  }
}


// ---------- extend | inherit ----------
enum EventType {
  SPORT = "sport",
  FRIENDLY = "friendly",
}

type Events = {
  name: string,
  dateCreated: Date,
  type: EventType,
}

type userEvents_1 = Events & { // extend - inherit => can extend from both interface and types
  userId: ID
}

interface userEvents_2 extends Events {// extend - inherit => can extend from both interface and types
  userId: ID
}

const userEvent: userEvents_2 = {
  name: "name",
  dateCreated: new Date,
  type: EventType.FRIENDLY,
  userId: 1
}