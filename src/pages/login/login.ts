
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController, NavController } from "ionic-angular";

import { AuthService } from "../../services/auth";
import { TabsPage } from "../tabs/tabs";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  errorMessage: String;
  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
            private navCtrl: NavController) {
  }

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });

    loading.present().then(()=>{

    this.authService.signin(form.value.email, form.value.password)
          .subscribe( data => {
                                console.log(data);
                                //loading.dismiss();
                                this.authService.getActiveUser(form.value.email)
                                      .subscribe( data => {
                                                              console.log(data);
                                                              loading.dismiss();
                                                              this.navCtrl.setRoot(TabsPage);
                                                          },
                                                error => {
                                                  if(loading) loading.dismiss();
                                                  const alert = this.alertCtrl.create({
                                                      title: 'User is not a driver!',
                                                      message: error.message,
                                                      buttons: ['Ok']
                                                            });
                                                  alert.present();
                                                  });

                                              });
                              },
                      error => {
                        if(loading) loading.dismiss();
                        const alert = this.alertCtrl.create({
                            title: 'User not defined!',
                            message: error.message,
                            buttons: ['Ok']
                                  });
                        alert.present();
                      }
                    );



  }
}
