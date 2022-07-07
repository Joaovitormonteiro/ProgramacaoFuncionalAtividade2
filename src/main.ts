import { parse } from "csv-parse"
import * as fs from "fs"

import { Record } from "./data-structures"
import { makeFirstQuestion, makeSecondQuestion, makeThirdQuestion, makeFourthQuestion, makeFifthQuestion } from "./questions"


let handle = (err: Error, records: Array<Record>): void => {
    if(err) { console.error(err) }
    [
        makeFirstQuestion(),
        makeSecondQuestion(),
        makeThirdQuestion(),
        makeFourthQuestion(),
        makeFifthQuestion()
    ]
    .forEach(answer => { 
        answer.tag(); 
        console.log(answer.answer(records)) 
    } )
}

const csv_file = fs.readFileSync("data.csv")
const opt = {columns: true}
parse(csv_file, opt, handle)