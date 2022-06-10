const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age
    }
}

// if we want to use destructuring with objects
// we have to write the structure of the object that we want
const { age }: { age: number } = profile

// nasty way
const { coords: { lat, lng }}: { coords : { lat: number; lng: number }} = profile