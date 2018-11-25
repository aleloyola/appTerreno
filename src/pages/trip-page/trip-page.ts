
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { tripService } from "../../services/trip";

@Component({
  selector: 'trip-page',
  templateUrl: 'trip-page.html'
})
export class TripPage implements OnInit {
  trip: any;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tripSrv: tripService) {
  }

  ngOnInit() {
    this.trip = this.navParams.get('trip');
    this.index = this.navParams.get('index');
  }

  setTripDriverInTransit() {
    //this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }

  setTripInProgress() {
    //this.slService.addItems(this.recipe.ingredients);
  }

  setTripFinished() {
    //this.recipesService.removeRecipe(this.index);
    //this.navCtrl.popToRoot();
  }
}
