import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { TriviaResultsService } from '../trivia-results.service';
import { TriviaResults } from 'src/app/shared/trivia-results.model';
import { Subscription } from 'rxjs';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-past-challenges',
  templateUrl: './past-challenges.component.html',
  styleUrls: ['./past-challenges.component.css']
})
export class PastChallengesComponent implements OnInit, OnDestroy {
  // dataSource = new MatTableDataSource<TriviaResults>();
  dataSource;
  totalScore
  triviaResultsSubscription: Subscription;
  triviaColumns = ['date', 'category', 'difficulty', 'correctAnswers', 'score', 'completed'];

  @ViewChild(MatPaginator) paginator: MatPaginator
  
  constructor(private tRService: TriviaResultsService, private db: AngularFirestore) { }

  ngOnInit() {
    const userId = localStorage.getItem('userUID');
    // 
    this.tRService.fetchPastChallenges()
      .subscribe(res => {
        this.dataSource = res
        this.totalScore = this.dataSource.reduce((sum, data) => sum + data.score )
        console.log(res)
      })
)
    // this.dataSource = new MatTableDataSource<TriviaResults>(this.tRService.fetchPastChallenges());
    // this.dataSource.paginator = this.paginator;
   }

   ngOnDestroy() {
    //  this.triviaResultsSubscription.unsubscribe();
   }

}
