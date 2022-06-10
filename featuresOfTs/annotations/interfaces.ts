interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}


// general usage of annotations with object
// const printVehicle = (car: { name: string; year: number; broken: boolean }): void => {

// using the interface as a type
// here we are using the Vehicle interface as a type
const printVehicle = (car: Vehicle): void => {
    console.log(`Name: ${car.name}`)
    console.log(`Year: ${car.year}`)
    console.log(`Broken: ${car.broken}`)
}

printVehicle(oldCivic)