import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  isPassword: boolean;
  isError: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {

    this.initSignInForm()
  }
  initSignInForm() {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    });
  }
  togglePassword() {
    this.isPassword = !this.isPassword;
  }

  signIn() {
    this.router.navigate(['/dashboard']);
  }
}

