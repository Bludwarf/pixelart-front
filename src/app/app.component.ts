import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { TokenStorageService } from './core/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pixelart-front';

  // 2nd solution
  isLoggedIn = false;
  username?: string; //alias for us

  constructor(private authService: AuthService) { }
  logout(): void {
    this.authService.signout();
    window.location.reload();
  }

  ngOnInit(): void {
      this.isLoggedIn = !!this.authService.getToken();
      if (this.isLoggedIn) {
        const user = this.authService.getSignedinUser();
        this.username = user;
      }
    }
  // 1st solution
  // private roles: string[] = [];
  // isLoggedIn = false;
  // // showAdminBoard = false;
  // // showModeratorBoard = false;
  // username?: string;
  
  // 1st exemple
  // constructor(private tokenStorageService: TokenStorageService) { }
  // ngOnInit(): void {
  //   this.isLoggedIn = !!this.tokenStorageService.getToken();
  //   if (this.isLoggedIn) {
  //     const user = this.tokenStorageService.getUser();
  //     // this.roles = user.roles;
  //     // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
  //     // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
  //     this.username = user.username;
  //   }
  // }
  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // }
}

