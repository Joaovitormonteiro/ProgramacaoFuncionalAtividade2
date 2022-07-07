import { delimiter } from "./config"

const fourth_question_tag = (): void => {
    [
        delimiter,
        "Quarto exercicio", 
        delimiter,
        "O maior valor de \"Deaths\" entre os países do hemisfério norte.", 
        delimiter
    ].map(tag => console.log(tag))
}

export {
    fourth_question_tag
}