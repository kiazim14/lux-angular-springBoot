
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserLoggedIn: AuthenticationService | undefined;
  isSuccessful: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient,
              private router: Router) { }


signIn(email: string, password: string) {
  this.http.post(`${environment.backendHost}/signin`,{email, password}).pipe(first())
  .subscribe(data => {
    this.isLoggedIn = true;
    this.router.navigate(['/']);
    console.log('vous etes logger')
    });
  }

  signup(username: string, email: string, password: string) {
    this.http.post(`${environment.backendHost}/signup`,{username, email, password}).pipe(first())
    .subscribe(data => {
      this.isSuccessful = true;
      this.router.navigate(['/']);
      console.log('vous etes logger')
      });
    }
}
