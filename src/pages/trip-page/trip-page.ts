
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { tripService } from "../../services/trip";
import { UtilsService } from "../../services/utils";

@Component({
  selector: 'trip-page',
  templateUrl: 'trip-page.html'
})
export class TripPage implements OnInit {
  trip: any;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private utilsService: UtilsService,
              public tripSrv: tripService) {
  }

  ngOnInit() {
    this.trip = this.navParams.get('trip');
    this.index = this.navParams.get('index');
  }

  setTripDriverInTransit() {
    this.tripSrv.setTripDriverInTransit(this.utilsService.getIdFromURL(this.trip.url));
    this.navCtrl.popToRoot();
  }

  setTripInProgress() {
    this.tripSrv.setTripInProgress(this.utilsService.getIdFromURL(this.trip.url));
    this.navCtrl.popToRoot();
  }

  setTripFinished() {
    this.tripSrv.setTripFinished(this.utilsService.getIdFromURL(this.trip.url));
    this.navCtrl.popToRoot();
  }
}
