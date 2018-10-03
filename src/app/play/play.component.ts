import { Component, OnInit, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { Result } from '../data.model';
import { QuestionDialogComponent } from '../dialog/question-dialog/question-dialog.component';
import { shuffle } from '../shared/helper-functions';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, AfterViewInit {
  results: Result[];
  question: string;
  answers;
  correctAnswer: string;
  index = 0;
  category: string;

  constructor(private dataService: DataService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getQuestions().subscribe(res => {
      if (res['response_code'] == 1) {
        this.router.navigate(['/']);
      } else {
        this.results = res['results'];
        this.setQuestion();
      }
    })
  }

  ngAfterViewInit() {
    // this.openDialog();
  }



  setQuestion() {
    this.category = this.results[this.index].category;
    this.question = this.results[this.index].question;
    this.answers = this.results[this.index].incorrect_answers;
    this.correctAnswer = this.results[this.index].correct_answer;
    this.answers.push(this.correctAnswer)
    this.answers = shuffle([].concat.apply([], this.answers));
    ++this.index;
    console.log(this.results);
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      width: '60%',
      height: '90%',
      data: {
        category: this.category,
        question: this.question,
        answers: this.answers,
        correctAnswer: this.correctAnswer,
        index: this.index
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (this.index < 10) {
        this.setQuestion();
      }
    })
  }

}
