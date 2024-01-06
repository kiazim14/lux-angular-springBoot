import { User } from './../model/user.model';

import { AuthenticationService } from './../services/authentication.service';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

  signInForm: any;
  email: any;
  password: any;
isLoggedIn: boolean = false;


constructor (private formBuilder: FormBuilder,
            private auth: AuthenticationService,
            private router: Router) {
              this.OnInitSignInForm();
            }

  ngOnInit() {
    if(this.auth.isUserLoggedIn){
      this.router.navigate(['/customers']);
    }
  }

  OnInitSignInForm(){
    this.signInForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
    }

    onSubmitSignInForm() {
    this.auth.signIn(this.signInForm.value.email,this.signInForm.value.password);
    }


}




