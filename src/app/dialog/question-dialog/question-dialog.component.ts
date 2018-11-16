import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBarConfig, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';

import { UiService } from '../../shared/ui.service';
import { correctMessages } from '../../data.model';
import { incorrectMessages } from '../../data.model';
import { ScoreService } from '../../shared/score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit {
  answered = false;
  correctAnswer;
  incorrectAnswer;
  breakpoint: number;
  rowHeight: string;
  config = new MatSnackBarConfig();
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  duration = 3000;
  countDown = 100;
  timer: number;
  correctAnswers = 0;
  incorrectAnswers = 0;

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private uiService: UiService,
              private scoreService: ScoreService,
              private router: Router) {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 570 ? 1 : 2);
    this.rowHeight = (window.innerWidth <= 570 ? '12:1' : '4:1');
    this.config.verticalPosition = this.verticalPosition;
    this.config.horizontalPosition = this.horizontalPosition;
    this.config.duration = this.duration;
    this.startTimer();
  }

  startTimer() {
    // this.timer = setInterval(() => {
    //   this.countDown -= 10;
    //   if (this.countDown === 0) {
    //     this.onAnswer(null)
    //   }
    // }, 1000)
  }

  onQuit() {
    console.log("quit");
    this.uiService.quitGame();
    this.dialogRef.close();
  }

  onResize(event) {
    this.breakpoint = (window.innerWidth <= 570 ? 1 : 2);
    this.rowHeight = (window.innerWidth <= 570 ? '12:1' : '4:1');
  }

  onNoClick(): void {
    // this.dialogRef.close();
    // this.evaluateAnswer(null, false, 'incorrectScore');
  }

  onAnswer(answer: string) {
    clearInterval(this.timer);
    this.answered = true;
    if (answer === this.data.correctAnswer) {
      this.evaluateAnswer(answer, true, 'correctScore');
    } else {
      this.evaluateAnswer(answer, false, 'incorrectScore');
    }
    setTimeout(() => {
      this.dialogRef.close();
    }, 4000)
  }

  evaluateAnswer(answer: string, correct: boolean, score: string) {
    this.correctAnswer = correct ? answer : this.data.correctAnswer;
    this.incorrectAnswer = correct ? null : answer;
    if (correct) {
      this.uiService.showSnackBar(correctMessages[Math.floor(Math.random() * 6)], null, this.config);
      this.scoreService.setScore(true, this.countDown);
    } else {
      this.uiService.showSnackBar(incorrectMessages[Math.floor(Math.random() * 6)] + `   The correct answer is ${this.correctAnswer}!`, null, this.config);
      this.scoreService.setScore(false, null);
    }
  }


}
