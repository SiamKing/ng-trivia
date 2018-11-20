import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    }, form.value.displayName)
  }

  onFacebookSignup() {
    this.authService.doFacebookLogin()
  }

  onGoogleSignup() {
    this.authService.doGoogleLogin()
  }

  onTwitterSignup() {

  }

}
