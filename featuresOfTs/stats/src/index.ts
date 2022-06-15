import fs from 'fs'
import { CSVFileReader } from './CSVFileReader'

const reader = new CSVFileReader('football.csv')

const matches = reader.read()


// use enums when we know all possible outcomes
enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D"
}

let manUnitedWins = 0

for (let match of reader.data) {
    if (match[1] == 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United won ${manUnitedWins} games!`)