import { Record, Question, ThirdQuestionRecord } from "../data-structures"
import { third_question_tag } from "../tags"

const select_columns = (curr: Record): ThirdQuestionRecord => (
    { Combined_Key: curr.Combined_Key, Deaths: parseInt(curr.Deaths), Lat: parseInt(curr.Lat) }
)

const negative_lat = (curr: ThirdQuestionRecord): boolean => curr.Lat < 0
const highest_deaths = (record: ThirdQuestionRecord, curr: ThirdQuestionRecord): ThirdQuestionRecord => record.Deaths > curr.Deaths ? record : curr

const third_question_answer = (records: Array<Record>): string => { 
    const record = records
    .map(select_columns)
    .filter(negative_lat)
    .reduce(highest_deaths)

    return `${record.Combined_Key}: ${record.Deaths}\n`
}

const makeThirdQuestion = (): Question => {
    return {tag: third_question_tag, answer: third_question_answer}
}

export {
    makeThirdQuestion
}