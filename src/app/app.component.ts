import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
//import { AuthService } from "../services/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  Login = Login;

  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform,
              private menuCtrl: MenuController) {

        this.isAuthenticated = false;
        this.rootPage = Login;
    }
}
