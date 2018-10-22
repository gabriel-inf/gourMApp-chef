import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PedidosPage } from '../pedidos/pedidos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PedidosPage;
  tab3Root = AboutPage;
  

  constructor() {

  }
}
