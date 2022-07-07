import { delimiter } from "./config"

const fifth_question_tag = (): void => {
    [
        delimiter,
        "Quinto exercicio", 
        delimiter,
        "A soma de \"Active\" de todos os países em que \"Confirmed\" é maior o igual que 1.000.000.", 
        delimiter
    ].map(tag => console.log(tag))
}

export {
    fifth_question_tag
}