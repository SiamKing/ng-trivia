import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { Result } from '../data.model';
import { QuestionDialogComponent } from '../dialog/question-dialog/question-dialog.component';
import { shuffle } from '../shared/helper-functions';
import { ScoreService } from '../shared/score.service';
import { ScoreDialogComponent } from '../dialog/score-dialog/score-dialog.component';
import { UiService } from '../shared/ui.service';
import { AuthService } from '../auth/auth.service';
import { TriviaResultsService } from '../user/trivia-results.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  results: Result[];
  question: string;
  answers;
  correctAnswer: string;
  index = 0;
  category: string;
  difficulty: string;
  loading = true;
  quit = false;
  isAuth = false;

  constructor(private dataService: DataService,
              private scoreService: ScoreService,
              private router: Router,
              public dialog: MatDialog,
              private uiService: UiService,
              private authService: AuthService,
              private triviaResultsService: TriviaResultsService) { }

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => {
      console.log(authStatus);
      this.isAuth = authStatus;
    });
    this.uiService.quitter.subscribe(quitStatus => {
      this.quit = quitStatus;
    });
    this.dataService.getQuestions().subscribe(res => {
      console.log(res);
      this.results = res['results'];
      this.setQuestion();
      this.loading = false;
    });
  }


  setQuestion() {
    const res = this.results[this.index]
    this.scoreService.setDifficulty(res.difficulty);
    this.category = res.category;
    this.question = res.question;
    this.answers = res.incorrect_answers;
    this.correctAnswer = res.correct_answer;
    this.difficulty = res.difficulty;
    this.answers.push(this.correctAnswer)
    this.answers = shuffle([].concat.apply([], this.answers));
    ++this.index;
    this.openQuestionDialog()
  }

  openQuestionDialog(): void {
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      // maxWidth: '60vw',
      // height: '60%',
      disableClose: true,
      data: {
        category: this.category,
        question: this.question,
        answers: this.answers,
        correctAnswer: this.correctAnswer,
        index: this.index
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (this.index < 10 && !this.quit) {
        this.setQuestion();
      } else  {
        this.openScoreDialog();
      }
    })
  }

  openScoreDialog(): void {
    const score = this.scoreService.getScore();
    const dialogRef = this.dialog.open(ScoreDialogComponent, {
      disableClose: true,
      height: '310px',
      minHeight: '60%',
      data: {
        correct: score.correct,
        incorrect: score.incorrect,
        points: score.points
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(this.isAuth);

      if (this.isAuth) {
        console.log("this.authService.getUser()");
        this.triviaResultsService.sendTriviaData({
          date: new Date(),
          category: this.category,
          difficulty: this.difficulty,
          correctAnswers: score.correct,
          score: score.points,
          completed: 'yes'
        })
      }
      this.uiService.navDisplayShow();
      
    })
  }

}
