import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { tripService } from "../../services/trip";
import { Storage } from '@ionic/storage';
import { TripPage } from "../trip-page/trip-page";

@Component({
  selector: 'page-en-proceso',
  templateUrl: 'en-proceso.html',
})
export class EnProcesoPage {

  trips: any;
  constructor(public navCtrl: NavController, public tripSrv: tripService, private storage: Storage) {
    /*this.tripSrv.getTripInProgressByTransport('3')
          .subscribe(data => this.trips = data);*/
  }

  ionViewDidEnter() {
    this.tripSrv.getTripInProgressByTransport('3')
          .subscribe(data => this.trips = data);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.storage.get('transportId').then((t) => {
      console.log('el transportId almacenado es:'+t);
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      this.tripSrv.getTripInProgressByTransport('3')
            .subscribe(data => this.trips = data);
      refresher.complete();
    }, 2000);
  }

  onLoadTrip(trip: any, index: number) {
    //25-11: Considerar otra TripPage para este punto de completación
    this.navCtrl.push(TripPage, {trip: trip, index: index});
  }

}
