import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { TriviaResults } from 'src/app/shared/trivia-results.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaResultsService implements OnInit {
  // triviaResults = games;
  triviaResults: TriviaResults[];
  triviaResultsChanged = new Subject<TriviaResults[]>();
  triviaSubs: Subscription[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.fetchPastChallenges();
  }

  fetchPastChallenges() {
    const userId = localStorage.getItem('userUID');
    return this.db.collection('users')
      .doc(userId)
      .collection<TriviaResults[]>('trivia-results')
      .valueChanges()
  }

  sendTriviaData(trivia: TriviaResults) {
    console.log("Sending trivia");
    this.addResultsToDatabase(trivia);
  }

  private addResultsToDatabase(triviaResults: TriviaResults) {
    const userId = localStorage.getItem('userUID');
    console.log(userId);
    this.db.collection('users').doc(userId).collection('trivia-results').add(triviaResults);
  }

}

const games: TriviaResults[] = [
  {
    date: "11/21/18",
    category: "TV",
    difficulty: "easy",
    correctAnswers: 9,
    score: 380,
    completed: "yes"
  },
  {
    date: "11/22/18",
    category: "politics",
    difficulty: "medium",
    correctAnswers: 7,
    score: 460,
    completed: 'yes'
  },
  {
    date: "11/23/18",
    category: "books",
    difficulty: "medium",
    correctAnswers: 6,
    score: 240,
    completed: 'no'
  }
]