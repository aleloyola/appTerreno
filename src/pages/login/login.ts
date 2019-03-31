
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController, NavController } from "ionic-angular";

import { AuthService } from "../../services/auth";
import { TabsPage } from "../tabs/tabs";
import { Storage } from '@ionic/storage';
import { UtilsService } from "../../services/utils";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  errorMessage: String;
  constructor(private authService: AuthService,
              private storage: Storage,
              private utilsService: UtilsService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
            private navCtrl: NavController) {
  }

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Ingresando a Oceanic...'
    });

    loading.present().then(()=>{

    this.authService.signin(form.value.username, form.value.password)
          .subscribe( dataAuth => {
                                //console.log(dataAuth.token);
                                this.storage.set('token', dataAuth.token);
                                this.storage.set('fechaUltimoToken', new Date().getTime());
                                //loading.dismiss();
                                this.authService.getActiveUser(form.value.username, dataAuth.token)
                                      .subscribe( data => {
                                                              //console.log(data);
                                                              //console.log(data[0].url);
                                                              //var transportId = this.utils.getIdFromURL(body[0].url);
                                                              //let len = data[0].url.length;
                                                              //var transportId = data[0].url.substring(len-2, len-1);
                                                              //console.log("TransportID: " + this.utilsService.getIdFromURL(data[0].url));
                                                              this.storage.set('username', form.value.username);
                                                              this.storage.set('transportId', this.utilsService.getIdFromURL(data[0].url));
                                                              loading.dismiss();
                                                              this.navCtrl.setRoot(TabsPage);
                                                          },
                                                error => {
                                                  if(loading) loading.dismiss();
                                                  const alert = this.alertCtrl.create({
                                                      title: 'Usuario ingresado no es un conductor!',
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
                            title: 'Error en los datos entregados!',
                            message: error.message,
                            buttons: ['Ok']
                                  });
                        alert.present();
                      }
                    );



  }
}
