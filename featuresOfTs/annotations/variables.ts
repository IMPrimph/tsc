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

// when to use any annotation
// 1) Function that returns the any type
// as the json values can be of any type, typescript cant predict them
// so it assigns a general type called "any" for json variables
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json)
console.log(coordinates)

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'blue', 'green']
let foundWord: boolean

for (let i = 0; i < words.length; i++){
    if(words[i] == 'green'){
        foundWord = true
    }
}

// 3) Variables whose type cant be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}
