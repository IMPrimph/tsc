const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b:number): number => {
    return a - b;
}

function divide(a: number, b: number): number{
    return a / b
}

const multiply = function(a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
}

// never means that we are never going to execute the function completely
// an error will be thrown, and the function will pop from the call stack
const throwError = (message: string): never => {
    throw new Error(message)
}



// annotations with destructuring
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}


// const logWeather = (forecast: { date: Date, weather: string}) : void => { - without destructuring
const logWeather = ({date, weather}: { date: Date, weather: string}) : void => {
    console.log(date)
    console.log(weather)
}
