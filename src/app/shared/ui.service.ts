import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private snackbar: MatSnackBar) { }

  showSnackBar(message, action, config) {
    this.snackbar.open(message, action, config);
  }
}
