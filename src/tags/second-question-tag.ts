import { delimiter } from "./config"

const second_question_tag = (): void => {
    [
        delimiter,
        "Segundo exercicio", 
        delimiter,
        "Dentre os dez países com maiores valores de \"Active\", a soma dos \"Deaths\" dos cinco países com menores valres de \"Confirmed\".", 
        delimiter
    ].map(tag => console.log(tag))
}

export {
    second_question_tag
}