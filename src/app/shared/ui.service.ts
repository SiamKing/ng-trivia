import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  quitter = new Subject<boolean>();
  navDisplay = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) { }

  showSnackBar(message, action, config) {
    this.snackbar.open(message, action, config);
  }

  quitGame() {
    this.quitter.next(true);
  }

  navDisplayShow() {
    this.navDisplay.next(true);
  }

  navDisplayHide() {
    this.navDisplay.next(false);
  }
}
