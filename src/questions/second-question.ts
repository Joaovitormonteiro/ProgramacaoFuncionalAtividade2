import { Record, Question, SecondQuestionRecord } from "../data-structures"
import { second_question_tag } from "../tags"

const descending_by_active = (first: SecondQuestionRecord, second: SecondQuestionRecord): number => {
    return first.Active < second.Active ? 1 : first.Active > second.Active ? -1 : 0
}

const ascending_by_confirmed = (first: SecondQuestionRecord, second: SecondQuestionRecord): number => {
    return first.Confirmed > second.Confirmed ? 1 : first.Confirmed < second.Confirmed ? -1 : 0
}

const select_columns = (curr: Record): SecondQuestionRecord => (
    { Active: parseInt(curr.Active), Deaths: parseInt(curr.Deaths), Confirmed: parseInt(curr.Confirmed) }
)

const sum_of_deaths = (total: number, curr: SecondQuestionRecord): number => { return total + curr.Deaths}

const second_question_answer = (records: Array<Record>): string => { 
    const deaths = records
    .map(select_columns)
    .sort(descending_by_active)
    .splice(0, 10)
    .sort(ascending_by_confirmed)
    .splice(0, 5)
    .reduce(sum_of_deaths, 0)

    return `Deaths: ${deaths}\n`
}

const makeSecondQuestion = (): Question => {
    return {tag: second_question_tag, answer: second_question_answer}
}

export {
    makeSecondQuestion
}