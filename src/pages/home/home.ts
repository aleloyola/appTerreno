import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { tripService } from "../../services/trip";
import { Storage } from '@ionic/storage';
import { TripPage } from "../trip-page/trip-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  trips: any;
  transportId: string;
  token: string;
  constructor(public navCtrl: NavController, public tripSrv: tripService, private storage: Storage) {

  }

  ionViewDidEnter() {
    this.storage.get('token').then((token) => {
      console.log('el token almacenado es:'+token);
      this.token = token;
    });
    this.storage.get('transportId').then((t) => {
      console.log('el transportId almacenado es:'+t);
      this.transportId = t;
      this.tripSrv.getTripsByTransport(this.transportId, this.token)
            .subscribe(data => this.trips = data);
    });

  }

  doRefresh(refresher) {
    setTimeout(() => {
      console.log('Async operation has ended');
      this.tripSrv.getTripsByTransport(this.transportId, this.token)
            .subscribe(data => this.trips = data);
      refresher.complete();
    }, 2000);
  }

  onLoadTrip(trip: any, index: number) {
    this.navCtrl.push(TripPage, {trip: trip, index: index, token: this.token});
  }

}
