// function overloading
// 1731705849569
// 2024-11-15T21:25:14.942Z

const makeDateByTimestamps = (timestamps: number) : Date => {
  return new Date(timestamps)
}

const makeDateByYMD = (Y: number, M: number, D: number) : Date => {
  return new Date(Y, M, D)
}

const makeDateByDate = (date: string): Date => {
  return new Date(date)
}

// چون همشون دارن یه چیزی برمیگردونن بهتره مثل زیر نوشته شه 

function makeDate(timestamps: number): Date;
function makeDate(date: string): Date;
function makeDate(Year: number, Month: number, Day: number): Date;
function makeDate(TDY: number | string, Month?: number, Day?: number): Date {
  if(typeof TDY === "number" && Month && Day) {
    return new Date(TDY, Month, Day)
  } else {
    return new Date(TDY)
  }
}

console.log(makeDate(1731705849569))
console.log(makeDate("2024-11-15T21:25:14.942Z"))
console.log(makeDate(2024, 9, 15))


// <<<<<<<< یا  >>>>>>>>

