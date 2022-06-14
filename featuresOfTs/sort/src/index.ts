import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

// const nums = new NumbersCollection([10, -3, -5, 1])

// const sorter = new Sorter(nums)
// sorter.sort()
// console.log(sorter.collection)

// const charactersCollection = new CharactersCollection("xashjdhsf")

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

const sorter = new Sorter(linkedList)
sorter.sort()
linkedList.print()