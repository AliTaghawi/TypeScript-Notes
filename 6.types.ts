// undefined, null , void
let undef: undefined = undefined
let voi: void = undefined 
let nul: null = null // type = object

// any, unknown, never
let value1: any;
value1 = "string"
value1 = 1
value1 = true,
value1 = null
value1 = undefined
value1 = []
value1 = {}

let value2: unknown;
value2 = "string"
value2 = 1
value2 = true,
value2 = null
value2 = undefined
value2 = []
value2 = {}

// const value10: any[] = value2 // will be error
// const value20: unknown[] = value1 // will be ok

// <<<<<<< never >>>>>>
// used when to throw error in func

function sendError(): never {
  throw {error: "message", code: 401, status: false}
}