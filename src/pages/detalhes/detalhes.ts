import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { DefinicoesPage } from '../definicoes/definicoes';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  receipt: any;

  show_ingredients = false;
  show_preparation = false;

  from_atuais = false;
  from_anteriores = false;
  from_home = false; 


  receipe_url: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private domSanitizer: DomSanitizer) {
    
    this.receipt = navParams.data;
    this.receipe_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.receipt.video);

  }

  ionViewDidLoad() {
    if(this.navCtrl.getPrevious().name === "AtuaisPage"){
      this.from_atuais = true;
    }else if (this.navCtrl.getPrevious().name === "AnterioresPage"){
      this.from_anteriores = true; 
    }else if (this.navCtrl.getPrevious().name === "HomePage"){
      this.from_home = true; 
    }
    console.log(this.navCtrl.getPrevious().name);
  }

  showIng(){
    this.show_ingredients = true;
  }

  hideIng(){
    this.show_ingredients = false;
  }


  showPrep(){
    this.show_preparation = true;
  }

  hidePrep(){
    this.show_preparation = false;
  }

  iCanDo(){
    this.navCtrl.push(DefinicoesPage, this.receipt)
  }





}
