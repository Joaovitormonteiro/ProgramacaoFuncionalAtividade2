import { Record, Question, FourthQuestionRecord } from "../data-structures"
import { fourth_question_tag } from "../tags"

const select_columns = (curr: Record): FourthQuestionRecord => (
    { Combined_Key: curr.Combined_Key, Deaths: parseInt(curr.Deaths), Lat: parseInt(curr.Lat) }
)

const positive_lat = (curr: FourthQuestionRecord): boolean => curr.Lat > 0
const highest_deaths = (record: FourthQuestionRecord, curr: FourthQuestionRecord): FourthQuestionRecord => record.Deaths > curr.Deaths ? record : curr

const fourth_question_answer = (records: Array<Record>): string => { 
    const record = records
    .map(select_columns)
    .filter(positive_lat)
    .reduce(highest_deaths)

    return `${record.Combined_Key}: ${record.Deaths}\n`
}

const makeFourthQuestion = (): Question => {
    return {tag: fourth_question_tag, answer: fourth_question_answer}
}

export {
    makeFourthQuestion
}