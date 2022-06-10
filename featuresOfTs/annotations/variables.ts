let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// array
let colors: string[] = ['red', 'blue', 'green']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false, true]

// classes
class Car {

}

// telling that car is an object of class type Car
let car: Car = new Car()

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 10
}

// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}