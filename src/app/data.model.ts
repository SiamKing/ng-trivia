export class Result {
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Category {
    name: string;
}

export const categories = [
    { 'General Knowledge': 9 },
    { 'Entertainment: Books': 10 },
    { 'Entertainment: Films': 11 },
    { 'Entertainment: Music': 12 },
    { 'Entertainment: TV': 14 },
    { 'Science and Nature': 17 },
    { 'Computers': 18 },
    { 'Mathematics': 19 },
    { 'Mythology': 20 },
    { 'Sports': 21 },
    { 'Geography': 22 },
    { 'History': 23 },
    { 'Politics': 24 },
    { 'Art': 25 },
    { 'Celebrities': 26 },
    { 'Animals': 27 },
    { 'Vehicles': 28 },
    { 'Science: Gadgets': 30 }
]

export interface Difficulty {
    name: string;
}

export const difficulties = ['Easy', 'Medium', 'Hard']