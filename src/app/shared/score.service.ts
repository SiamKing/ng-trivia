import { Injectable } from '@angular/core';

import { difficulties } from '../data.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  correctScore = 0;
  incorrectScore = 0;
  points = 0;
  difficulty: number;

  constructor() { }

  setScore(correct: boolean, count: number) {
    if (correct) {
      this.points += count * this.difficulty;
      ++this.correctScore;
    } else {
      ++this.incorrectScore;
    }
  }

  setDifficulty(difficulty: string) {
    this.difficulty = difficulties.indexOf(difficulty) + 1;
  }

  getScore() {
    return { correct: this.correctScore, incorrect: this.incorrectScore, points: this.points };
  }
}
