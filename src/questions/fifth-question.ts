import { Record, Question, FifthQuestionRecord } from "../data-structures"
import { fifth_question_tag } from "../tags"

const select_columns = (curr: Record): FifthQuestionRecord => (
    { Active: parseInt(curr.Active), Confirmed: parseInt(curr.Confirmed) }
)

const confirmed_higher_than_a_million = (curr: FifthQuestionRecord): boolean => curr.Confirmed > 1000000
const sum_of_active = (total: number, curr: FifthQuestionRecord): number => total + curr.Active

const fifth_question_answer = (records: Array<Record>): string => { 
    const active = records
    .map(select_columns)
    .filter(confirmed_higher_than_a_million)
    .reduce(sum_of_active, 0)

    return `Active: ${active}\n`
}

const makeFifthQuestion = (): Question => {
    return {tag: fifth_question_tag, answer: fifth_question_answer}
}

export {
    makeFifthQuestion
}