
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'trip-page',
  templateUrl: 'trip-page.html'
})
export class TripPage implements OnInit {
  trip: any;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit() {
    this.trip = this.navParams.get('trip');
    this.index = this.navParams.get('index');
  }

  onEditRecipe() {
    //this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }

  onAddIngredients() {
    //this.slService.addItems(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    //this.recipesService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }
}
