import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { tripService } from "../../services/trip";
import { Storage } from '@ionic/storage';
import { TripPage } from "../trip-page/trip-page";
import { UtilsService } from "../../services/utils";

@Component({
  selector: 'page-finalizado',
  templateUrl: 'finalizado.html',
})
export class FinalizadoPage {
  transportId: string;
  trips: any;
  token: string;
  month: string;
  year: string;
  constructor(public navCtrl: NavController,
              public tripSrv: tripService,
              private storage: Storage,
              private utils: UtilsService) {
  }

  ionViewDidEnter() {
    this.storage.get('token').then((token) => {
      console.log('el token almacenado es:'+token);
      this.token = token;
    });
    this.storage.get('transportId').then((t) => {
      console.log('el transportId almacenado es:'+t);
      this.transportId = t;
      this.month = this.utils.getMonthFormated().toString();
      this.year = new Date().getFullYear().toString();
      this.tripSrv.getTripFinishedByTransportAndDate(this.transportId,this.year,this.month, this.token)
            .subscribe(data => this.trips = data);
          });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.tripSrv.getTripFinishedByTransportAndDate(this.transportId,this.year,this.month, this.token)
            .subscribe(data => this.trips = data);
      refresher.complete();
    }, 2000);
  }

  onLoadTrip(trip: any, index: number) {
    //25-11: Considerar otra TripPage para este punto de completación
    this.navCtrl.push(TripPage, {trip: trip, index: index, token: this.token});
  }

}
