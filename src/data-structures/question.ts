import { Record } from "."

interface Question {
    tag(): void;
    answer(records: Record[]): string;
}

export { Question }