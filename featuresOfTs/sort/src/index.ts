import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"

// const nums = new NumbersCollection([10, -3, -5, 1])

// const sorter = new Sorter(nums)
// sorter.sort()
// console.log(sorter.collection)

const charactersCollection = new CharactersCollection("xashjdhsf")
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(sorter.collection)