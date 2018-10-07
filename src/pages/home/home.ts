import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiService } from '../../providers/restapi-service';
import { tripService } from "../../services/trip";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  trips: any;
  constructor(public navCtrl: NavController, public tripSrv: tripService) {
    this.tripSrv.getTripsByTransport('1')
          .subscribe(data => this.trips = data);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.tripSrv.getTripsByTransport('3')
            .subscribe(data => this.trips = data);
      refresher.complete();
    }, 2000);
  }

}
