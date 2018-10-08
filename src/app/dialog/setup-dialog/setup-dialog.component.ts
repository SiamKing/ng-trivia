import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-setup-dialog',
  templateUrl: './setup-dialog.component.html',
  styleUrls: ['./setup-dialog.component.css']
})
export class SetupDialogComponent {


  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dataService: DataService,
              private router: Router) {
    dialogRef.disableClose = true
  }

  onNoClick(): void {
    this.onCancel();
  }

  onSubmit(form: NgForm) {
    this.dataService.setValues(form.value.category, form.value.difficulty);
    this.dialogRef.close();
    this.router.navigate(['/play']);
  }

  onCancel() {
    console.log('object');
    this.dialogRef.close();
    this.router.navigate(['/']);
  }

}
