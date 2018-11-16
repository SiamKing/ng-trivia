import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {
  isAuth = false;

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => {
      console.log(authStatus);
      this.isAuth = authStatus;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
