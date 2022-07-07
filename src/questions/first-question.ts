import { Record, FirstQuestionRecord, Question } from "../data-structures"
import { first_question_tag } from "../tags/first-question-tag"

const descending_by_confirmed = (first: FirstQuestionRecord, second: FirstQuestionRecord): number => {
    return first.Confirmed < second.Confirmed ? 1 : first.Confirmed > second.Confirmed ? -1 : 0
}

const select_columns = (curr: Record): FirstQuestionRecord => ({ Confirmed: parseInt(curr.Confirmed), Combined_Key: curr.Combined_Key })
const alphabetical_order = (a: FirstQuestionRecord, b: FirstQuestionRecord): number => a.Combined_Key > b.Combined_Key ? 1 : a.Combined_Key < b.Combined_Key ? -1 : 0
const prettify = (str: string, curr: FirstQuestionRecord): string => `${str}${curr.Combined_Key}: ${curr.Confirmed}\n`

const first_question_answer = (records: Array<Record>): string => { 
    return records
    .map(select_columns)
    .sort(descending_by_confirmed)
    .splice(0, 3)
    .sort(alphabetical_order)
    .reduce(prettify, "")
}

const makeFirstQuestion = (): Question => {
    return {tag: first_question_tag, answer: first_question_answer}
}

export {
    makeFirstQuestion
}