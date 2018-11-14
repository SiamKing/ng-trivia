import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { resolve } from 'url';
import { reject } from 'q';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.authSuccess(result);
        console.log(result);
        // this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch(new UI.StopLoading());
      })
      .catch(error => {
        // this.uiService.showSnackBar(error.message, null, 3000);
      })
  }
  
  loginUser(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.authSuccess(result);
        console.log(result)
      })
      .catch(err => {
        console.log(err);
      })
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/']);
  }

  getUser() {
    return { ...this.user }; // this makes a copy so the user object can't be changed outside of this component
  }

  isAuth() {
    return this.user != null;
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        })
    })
  }

  doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  private authSuccess(result) {
    this.user = result.user;
    this.authChange.next(true);
    this.router.navigate(['/user']);
  }

}
