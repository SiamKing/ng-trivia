import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  instructions =['Select a Category and Difficulty level', 'Answer questions in the allotted time (10 seconds)', 'Points will be accrued by multiplying the difficulty of the question (1 - Easy, 2 - Medium, 3 - Hard) times the number of seconds left on the clock when answered', 'For example, if you are playing a round with a Difficulty of Medium (2) and you answer a question in 3 seconds, so there are 7 seconds left on the clock. The scoring will therefore be: 7 (seconds left on clock) x 2 (difficulty).', 'There a total of ten questions per round', 'Have fun!'];

  constructor() { }

  ngOnInit() {
  }

}
