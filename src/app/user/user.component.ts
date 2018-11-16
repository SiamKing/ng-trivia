import { Component, OnInit } from '@angular/core';
import { TriviaResult } from '../shared/trivia-result.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSource = games;
  triviaColumns = ['date', 'category', 'difficulty', 'correctAnswers', 'score'];

  constructor() { }

  ngOnInit() {
  }

}

const games: TriviaResult[] = [
  {
    date: "11/21/18",
    category: "TV",
    difficulty: "easy",
    correctAnswers: 9,
    score: 380
  },
  {
    date: "11/22/18",
    category: "politics",
    difficulty: "medium",
    correctAnswers: 7,
    score: 460
  }
]