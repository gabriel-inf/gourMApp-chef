import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

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

  receipe_url: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private domSanitizer: DomSanitizer) {
    
    this.receipt = navParams.data;
    this.receipe_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.receipt.video);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
