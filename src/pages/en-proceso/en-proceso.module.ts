import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnProcesoPage } from './en-proceso';

@NgModule({
  declarations: [
    EnProcesoPage,
  ],
  imports: [
    IonicPageModule.forChild(EnProcesoPage),
  ],
})
export class EnProcesoModule {}
