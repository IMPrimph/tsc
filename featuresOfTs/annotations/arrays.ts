// an array of strings
// with annotation
const carMakers: string[] = ['ford', 'toyota', 'chevy']

// type inference
const carMakers2 = ['ford', 'toyota', 'chevy']

// multiple types of values in an array
// typescript automatically infers the type for this
// or we can state explicitly
const importantDates: (Date | string)[] = [new Date(), '2020-09-09']