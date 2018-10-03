import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
    this.breakpoint = (window.innerWidth <= 600 ? 1 : 2);
  }

  onResize(event) {
    this.breakpoint = (window.innerWidth <= 600 ? 1 : 2);
  }

  onNoClick(): void {
    console.log('fat');
    this.dialogRef.close();
  }

  onAnswer(answer: string) {
    this.answered = true;
    if (answer === this.data.correctAnswer) {
      this.correctAnswer = answer;
    } else {
      this.correctAnswer = this.data.correctAnswer;
      this.incorrectAnswer = answer;
    }
    setTimeout(() => {
      this.dialogRef.close();
    }, 5000)
  }

  getColor(answer: string) {
   
  }

}
