import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { TriviaResults } from 'src/app/shared/trivia-results.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaResultsService {
  // triviaResults = games;
  // triviaResults: Observable<TriviaResult>;
  triviaResultsChanged = new Subject<TriviaResults[]>();

  constructor(private db: AngularFirestore) { }

  fetchPastChallenges() {
    return games;
    // return this.db
    //   .collection('past-challenges')
      // .valueChanges().subscribe((results: TriviaResults[]) => { this.triviaResultsChanged.next(results) })

      // Other way with more values with the payload
    //   .snapshotChanges()
    //   .pipe(docArray => {
    //     return docArray.map(doc => {
    //       return {
    //       ...doc.payload.doc.data()
    //     };
    //   });
    // })
    // .subscribe((results: TriviaResults[]) => {
    //   this.triviaResults = results;
    //   this.triviaResultsChanged.next([...this.triviaResults]);
    // })
  }

  private addResultsToDatabase(triviaResults: TriviaResults) {
    this.db.collection('trivia-results').add(triviaResults);
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