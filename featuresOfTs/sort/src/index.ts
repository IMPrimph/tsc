import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"

const nums = new NumbersCollection([10, -3, -5, 1])

const sorter = new Sorter(nums)
sorter.sort()
console.log(sorter.collection)