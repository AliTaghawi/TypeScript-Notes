// readOnly 
interface IBlog {
  readonly title: string // just will get value in the creating 
  body: string
}

type Blog2 = {
  readonly title: string
  body: string
}