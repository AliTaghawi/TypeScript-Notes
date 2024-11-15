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

type userEvents = Events & { // extend - inherit
  userId: ID
}

const userEvent1: userEvents = {
  name: "name",
  dateCreated: new Date,
  type: EventType.FRIENDLY,
  userId: 1
}