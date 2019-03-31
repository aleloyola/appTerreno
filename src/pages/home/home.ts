import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { tripService } from "../../services/trip";
import { AuthService } from "../../services/auth";
import { Storage } from '@ionic/storage';
import { TripPage } from "../trip-page/trip-page";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  trips: any;
  transportId: string;
  token: string;
  constructor(public navCtrl: NavController,
              public tripSrv: tripService,
              private storage: Storage,
              private authService: AuthService,
              private alertCtrl: AlertController,) {

  }

  ionViewDidEnter() {
    this.storage.get('token').then((token) => {
      //console.log('el token almacenado es:'+token);
      this.token = token;
    });
    this.storage.get('transportId').then((t) => {
      //console.log('el transportId almacenado es:'+t);
      this.transportId = t;
      this.actualizarToken();
      this.tripSrv.getTripsByTransport(this.transportId, this.token)
            .subscribe((data) => { this.trips = data },
                      (error) => { this.handleErrorObservable(error) });
    });

  }

  doRefresh(refresher) {
    setTimeout(() => {
      //console.log('Async operation has ended');
      this.actualizarToken();
      this.tripSrv.getTripsByTransport(this.transportId, this.token)
                  .subscribe((data) => { this.trips = data },
                          (error) => { this.handleErrorObservable(error) });
      refresher.complete();
    }, 2000);
  }

  onLoadTrip(trip: any, index: number) {
    this.navCtrl.push(TripPage, {trip: trip, index: index, token: this.token});
  }



  private actualizarToken(){
    if(this.estaPorVencerToken()){
      //se agrega rutina para actualizar token 20 dias despues del ultimo almacenado.
      this.authService.getRefreshToken(this.token).subscribe( dataAuth => {
                            console.log(dataAuth.token);
                            this.storage.set('token', dataAuth.token);
                          });
    }
  }

  private estaPorVencerToken(){
    this.storage.get('fechaUltimoToken').then((fecha) => {
      //console.log('la fecha anterior es:'+fecha);
      var eventStartTime = new Date(fecha);
      var eventEndTime = new Date().getTime();
      var duration = eventEndTime.valueOf() - eventStartTime.valueOf();
      //console.log("duration found: "+duration);

      return duration > 1728000000 ? true : false; //duration longer than 20 days (1728000000 milliseconds)
    });
  }


  private handleErrorObservable (error: Response | any) {
    console.log("In error handle with error:"+error.status);
    if (error.status === 401) {
      const alert = this.alertCtrl.create({
          title: 'Sesión expirada. Debe volver a ingresar a la aplicación!',
          message: error.message,
          buttons: ['Ok']
                });
      alert.present();
    }/*
    else if (error.status === 400) {
        return Observable.throw(new Error(error.status));
    }
    else if (error.status === 409) {
        return Observable.throw(new Error(error.status));
    }
    else if (error.status === 406) {
        return Observable.throw(new Error(error.status));
    }
    console.error(error.message || error);
    return error;*/
  }

}
