import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

console.log('OktaAuthStateService', OktaAuthStateService);
console.log('OktaAuth', OktaAuth);

@Component({
  selector: 'app-login-status',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  userFullName: string = '';

  constructor(
    private oktaAuthStateService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth
  ) {}

  ngOnInit(): void {
    console.log('this.oktaAuthStateService', this.oktaAuthStateService);

    this.oktaAuthStateService.authState$.subscribe((result) => {
      console.log('Auth State Emitted:', result);
      this.isAuthenticated = result.isAuthenticated ?? false;
      if (this.isAuthenticated) {
        this.getUserDetails();
      }
    });
  }

  getUserDetails() {
    if (this.isAuthenticated) {
      // Fetch the logged in user details (user's claims)
      //
      // user full name is exposed as a property name
      this.oktaAuth.getUser().then((res) => {
        console.log('getUserDetails res', res);
        this.userFullName = res.name as string;
      });
    }
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.
    this.oktaAuth.signOut();
  }
}
