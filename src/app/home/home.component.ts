import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SetupDialogComponent } from '../dialog/setup-dialog/setup-dialog.component';
import { categories } from '../data.model';
import { difficulties } from '../data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome = true;
  category: string;
  difficulty: string;
  categories = categories;
  difficulties = difficulties;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.welcome = false;
    const dialogRef = this.dialog.open(SetupDialogComponent, {
      // width: '250px',
      data: {
        categories: this.categories,
        difficulties: this.difficulties
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res == undefined) {
        this.welcome = true;
      } else {
        console.log(res);
      }
    })
  }

}
