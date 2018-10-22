import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinicoesPage');
  }

  addDate() {

    let already_exists = false;
    this.datas.forEach(element => {
      if (element == this.data_possivel){
        already_exists = true;
      }
    });


    if (!already_exists) {
      this.primeira_data = this.data_possivel;
      this.datas.push(this.data_possivel);

      console.log(this.datas);
    }

    this.data_possivel = null;
  }

  removeDate(item) {

    this.datas = this.datas.filter(d => d !== item);


  }

}
