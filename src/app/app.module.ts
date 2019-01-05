import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { TripPage } from "../pages/trip-page/trip-page";
import { EnProcesoPage } from "../pages/en-proceso/en-proceso";
import { FinalizadoPage } from "../pages/finalizado/finalizado";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../services/auth';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { tripService } from "../services/trip";
import { UtilsService } from "../services/utils";

import { LaunchNavigator } from '@ionic-native/launch-navigator';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    EnProcesoPage,
    FinalizadoPage,
    Login,
    TripPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    EnProcesoPage,
    FinalizadoPage,
    Login,
    TripPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    tripService,
    UtilsService,
    LaunchNavigator
  ]
})
export class AppModule {}
