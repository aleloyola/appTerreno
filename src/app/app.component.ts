import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { AuthService } from "../services/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  Login = Login;

  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform,
              private menuCtrl: MenuController,
              private authService: AuthService) {

      console.log(this.authService.isUserLogin());
      if (this.authService.isUserLogin()) {
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = Login;
      }

    }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(Login);
  }
}
