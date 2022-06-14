"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const nums = new NumbersCollection([10, -3, -5, 1])
// const sorter = new Sorter(nums)
// sorter.sort()
// console.log(sorter.collection)
// const charactersCollection = new CharactersCollection("xashjdhsf")
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
