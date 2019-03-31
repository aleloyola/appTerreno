
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { tripService } from "../../services/trip";
import { UtilsService } from "../../services/utils";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  selector: 'trip-page',
  templateUrl: 'trip-page.html'
})
export class TripPage implements OnInit {
  trip: any;
  index: number;
  token: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private utilsService: UtilsService,
               private launchNavigator: LaunchNavigator,
              public tripSrv: tripService,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.trip = this.navParams.get('trip');
    this.index = this.navParams.get('index');
    this.token = this.navParams.get('token');
  }

  setTripDriverInTransit() {
    this.tripSrv.setTripDriverInTransit(this.utilsService.getIdFromURL(this.trip.url), this.token)
                  .catch((error) => { this.handleErrorObservable(error) });

    this.navCtrl.popToRoot();
  }
  setTripDriverWaiting(){
    this.tripSrv.setTripDriverWaiting(this.utilsService.getIdFromURL(this.trip.url), this.token)
                  .catch((error) => { this.handleErrorObservable(error) });
    this.navCtrl.popToRoot();
  }
  setTripInProgress() {
    this.tripSrv.setTripInProgress(this.utilsService.getIdFromURL(this.trip.url), this.token)
                  .catch((error) => { this.handleErrorObservable(error) });
    this.navCtrl.popToRoot();
  }

  setTripFinished() {
    this.tripSrv.setTripFinished(this.utilsService.getIdFromURL(this.trip.url), this.token)
                  .catch((error) => { this.handleErrorObservable(error) });
    this.navCtrl.popToRoot();
  }

  lauchNav(address: string){
    let options: LaunchNavigatorOptions = {
     //start: this.start
    };

     this.launchNavigator.navigate(address, options)
         .then(
             success => alert('Launched navigator'),
             error => alert('Error launching navigator: ' + error)
     );

  }
  private handleErrorObservable (error: Response | any) {
    console.log("In error handle with error:"+error.status);

      const alert = this.alertCtrl.create({
          title: 'Error al actualizar, vuelva a intentar!',
          message: error.message,
          buttons: ['Ok']
                });
      alert.present();
    /*
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
