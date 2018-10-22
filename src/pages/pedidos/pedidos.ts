import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the PedidosPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {

  anterioresRoot = 'AnterioresPage'
  atuaisRoot = 'AtuaisPage'


  constructor(public navCtrl: NavController) {}

}
