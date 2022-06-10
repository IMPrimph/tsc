const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}


// type annotations with tuple
const pepsi: [string, boolean, number] = ['brown', true, 40]

// idea of a typle
type Drink = [string, boolean, number]

// using the new idea of tuple syntax
const pepsi2: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];