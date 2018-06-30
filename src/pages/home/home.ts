import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiService } from '../../providers/restapi-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
userscustomers: any;
  constructor(public navCtrl: NavController, public restapiService: RestapiService) {
    this.getUserscustomers();
  }

  getUserscustomers() {
    this.restapiService.getUserscustomers()
    .then(data => {
      this.userscustomers = data;
      console.log(this.userscustomers);
    });
  }
}
