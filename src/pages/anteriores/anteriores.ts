import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the AnterioresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anteriores',
  templateUrl: 'anteriores.html',
})
export class AnterioresPage {

  title="anteriores"

  receipts = [
    {
      img: "https://i.imgur.com/EygIdZU.jpg",
      name: "Espaguete à Carbonara",
      ingredients: ["1 pound well-ground, fatty pork", "1 pound Napa cabbage", "1 tablespoon fresh grated ginger", "2 tablespoons water", "2 scallions"],
      preparation: ["If the pork is not finely ground, mince well with a knife. Place the pork in a large bowl and cover.", "Bring a large pot of water to boil over high heat. Add the cabbage; blanch until just wilted. Using a slotted spoon, remove cabbage to strainer set over a large bowl. Press down on cabbage to squeeze out all liquid. Transfer to cutting board; roughly dice.", "Meanwhile, place grated ginger in a small bowl; cover with water and let steep for a few minutes."],
      interessados: ["123", "321", "231"],
      description: "The broccoli is briefly cooked in boiling water to achieve a perfect tender-crisp texture.",
      video: "https://www.youtube.com/embed/M3zS2DYmq2g",
      status: "entregue"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnterioresPage');
  }

  detalhes(pedido){
    this.navCtrl.push(DetalhesPage, pedido);
  }

}
