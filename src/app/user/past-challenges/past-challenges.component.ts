import { Component, OnInit } from '@angular/core';
import { TriviaResult } from 'src/app/shared/trivia-result.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-past-challenges',
  templateUrl: './past-challenges.component.html',
  styleUrls: ['./past-challenges.component.css']
})
export class PastChallengesComponent implements OnInit {
  dataSource = games;
  // dataSource: Observable<any>;
  triviaColumns = ['date', 'category', 'difficulty', 'correctAnswers', 'score'];
  
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    // this.dataSource = this.db
    //   .collection('past-challenges')
    //   .snapshotChanges()
    //   .subscribe(res => console.log(res))
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