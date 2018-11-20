import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { resolve } from 'url';
import { reject } from 'q';
import { Router } from '@angular/router';
import {  AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();
  authUser = new Subject<any>();
  private isAuthenticated = false;

  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFirestore) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log(user);
        this.user = user;
        this.authUser.next(user)
        localStorage.setItem('userUID', user.uid);
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/user']);
      } else {
        this.user = null;
        this.authUser.next(null)
        localStorage.removeItem('userUID');
        this.authChange.next(false);
        this.isAuthenticated = false;
        this.router.navigate(['/']);
      }
    });
  }

  registerUser(authData: AuthData, displayName: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result)
        // this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch(new UI.StopLoading());
      })
      .catch(error => {
        // this.uiService.showSnackBar(error.message, null, 3000);
      })

    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log(user);
        this.user.updateProfile({
          displayName: displayName,
          photoURL: ''
        })
        .then(() => {
           console.log('Display name changed', this.user)
        })
        .catch(() => console.log('Error with display name'));
        this.db.collection('users').doc(this.user.uid).set({username: displayName, email: authData.email })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
    });
  }
  
  loginUser(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        
      })
      .catch(err => {
        console.log(err);
      })
  }

  logout() {
    this.afAuth.auth.signOut();
    this.user = null;
    this.authUser.next(null);
    localStorage.removeItem('userUID');
  }

  getUser() {
    return this.afAuth.user;
  }

  isAuth() {
    return this.isAuthenticated;
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

}
