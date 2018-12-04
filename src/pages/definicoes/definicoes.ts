import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CozinhePage } from '../cozinhe/cozinhe';

/**
 * Generated class for the DefinicoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-definicoes',
  templateUrl: 'definicoes.html',
})
export class DefinicoesPage {

  data_possivel: any;
  primeira_data: any = null;
  datas: Array<any> = [];
  date = "21 de Outubro de 2018";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinicoesPage');
  }

  confirm(){
    this.navCtrl.push(CozinhePage);
  }


}
