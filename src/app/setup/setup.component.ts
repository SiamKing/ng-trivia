import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SetupDialogComponent } from '../dialog/setup-dialog/setup-dialog.component';
import { categories, difficulties } from '../data.model';
import { ScoreService } from '../shared/score.service';
import { UiService } from '../shared/ui.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  category: string;
  difficulty: string;
  categories = categories;
  difficulties = difficulties;

  constructor(public dialog: MatDialog,
              private scoreService: ScoreService,
              private uiService: UiService) { }

  ngOnInit() {
    this.uiService.navDisplayHide();
    this.scoreService.resetScore();
    setTimeout(() => {
      this.openDialog();
    }, 500)
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SetupDialogComponent, {
      width: '350px',
      data: {
        categories: this.categories,
        difficulties: this.difficulties
      }
    })

    dialogRef.afterClosed().subscribe(res => {
        console.log(res);
    });
  }

}
