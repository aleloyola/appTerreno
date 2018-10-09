import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripPage } from './trip-page';

@NgModule({
  declarations: [
    TripPage,
  ],
  imports: [
    IonicPageModule.forChild(TripPage),
  ],
})
export class TripPageModule {}
