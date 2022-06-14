"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const nums = new NumbersCollection([10, -3, -5, 1])
// const sorter = new Sorter(nums)
// sorter.sort()
// console.log(sorter.collection)
const charactersCollection = new CharactersCollection_1.CharactersCollection("xashjdhsf");
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
