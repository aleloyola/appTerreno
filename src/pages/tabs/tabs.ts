import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EnProcesoPage } from "../en-proceso/en-proceso";
import { FinalizadoPage } from "../finalizado/finalizado";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EnProcesoPage;
  tab3Root = FinalizadoPage;

  constructor() {

  }
}
