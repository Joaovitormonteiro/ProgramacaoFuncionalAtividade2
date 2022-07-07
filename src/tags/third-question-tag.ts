import { delimiter } from "./config"

const third_question_tag = (): void => {
    [
        delimiter,
        "Terceiro exercicio", 
        delimiter,
        "O maior valor de \"Deaths\" entre os países do hemisfério sul", 
        delimiter
    ].map(tag => console.log(tag))
}

export {
    third_question_tag
}