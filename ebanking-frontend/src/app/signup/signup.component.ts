import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

user: User | undefined;
signInForm: any ;
username: any;
email: any;
password: any;
isSuccessful: boolean = false;

constructor (private formBuilder: FormBuilder,
             private auth: AuthenticationService,
             private router: Router) {

              this.OnInitSignUpForm();

             }


  OnInitSignUpForm() {
      this.signInForm=this.formBuilder.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });  }

  ngOnInit() {
    if(this.auth.isUserLoggedIn){
      this.router.navigate(['/']);
    }
  }


  onSubmitSignUpForm() {
    this.auth.signup(this.signInForm.value.getUsername, this.signInForm.value.getEmail, this.signInForm.value.getPassword);
  }

  }

