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
    id: number;
}

export const categories = [
    { name: 'General Knowledge', id: 9 },
    { name: 'Entertainment: Books', id: 10 },
    { name: 'Entertainment: Films', id: 11 },
    { name: 'Entertainment: Music', id: 12 },
    { name: 'Entertainment: TV', id: 14 },
    { name: 'Science and Nature', id: 17 },
    { name: 'Computers', id: 18 },
    { name: 'Mathematics', id: 19 },
    { name: 'Mythology', id: 20 },
    { name: 'Sports', id: 21 },
    { name: 'Geography', id: 22 },
    { name: 'History', id: 23 },
    { name: 'Politics', id: 24 },
    { name: 'Art', id: 25 },
    { name: 'Celebrities', id: 26 },
    { name: 'Animals', id: 27 },
    { name: 'Vehicles', id: 28 },
    { name: 'Science: Gadgets', id: 30 }
]

export interface Difficulty {
    name: string;
}

export const difficulties = ['easy', 'medium', 'hard']