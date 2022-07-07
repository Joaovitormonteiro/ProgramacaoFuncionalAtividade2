import { delimiter } from "./config"

const first_question_tag = (): void => {
    [
        delimiter,
        "Primeiro exercicio",
        delimiter,
        "Os três países com os maiores valores de \"Confirmed\". Os nomes devem estar em ordem alfabética.", delimiter]
    .map(tag => console.log(tag))
}

export {
    first_question_tag
}