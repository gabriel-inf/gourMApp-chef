import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the AtuaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atuais',
  templateUrl: 'atuais.html',
})
export class AtuaisPage {

  receipts = [
    {
      img: "https://img.itdg.com.br/tdg/images/recipes/000/049/802/297847/297847_original.jpg?mode=crop&width=600&height=450",
      name: "Bombom de Travessa",
      ingredients: [
        "250g de chocolate ao leite", 
        "250g de chocolate meio amargo", 
        "2 latas de leite condensado", 
        "2 latas de creme de leite", 
        "2 colheres de margarina", 
        "2 caixas de morango"
      ],
      preparation: [
        "Colocar as latas de leite condensado em uma panela com a manteiga e fazer uma massa como um brigadeiro mole",
        "Colocar em uma travessa, e por cima deste brigadeiro mole colocar os morangos cortados ao meio",
        "Reserve para fazer a cobertura",
        "Para fazer a cobertura, rale o chocolate ao leite e meio amargo e misture o creme de leite",
        "Misturar e colocar no microondas durante 1 minuto",
        "Retirar e mexer",
        "Colocar de novo no microondas por mais 1 minuto",
        "Despejar a cobertura por cima dos morangos e levar à geladeira, coberta por papel filme"
      ],
      consumers: ["123"],
     // description: "The pork is not finely ground, mince well with a knife. Place the pork in a large bowl and cover.",
      video: "https://www.youtube.com/embed/T1YQicI16Fk",
      status: "pendente"
    },
    {
      img: "https://i.imgur.com/lVdWrve.jpg",
      name: "Chinese Spare Ribs",
      ingredients: ["1 pound well-ground, fatty pork", "1 pound Napa cabbage", "1 tablespoon fresh grated ginger", "2 tablespoons water", "2 scallions"],
      preparation: ["If the pork is not finely ground, mince well with a knife. Place the pork in a large bowl and cover.", "Bring a large pot of water to boil over high heat. Add the cabbage; blanch until just wilted. Using a slotted spoon, remove cabbage to strainer set over a large bowl. Press down on cabbage to squeeze out all liquid. Transfer to cutting board; roughly dice.", "Meanwhile, place grated ginger in a small bowl; cover with water and let steep for a few minutes."],
      interessados: ["123", "321", "231"],
      description: "Have you ever cooked something that actually tastes a lot better the next day? Well these Chinese restaurant takeout style spare ribs are a perfect case. ",
      video: "https://www.youtube.com/embed/PktLsYC6FG0",
      status: "pendente"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtuaisPage');
  }

  detalhes(pedido){
    this.navCtrl.push(DetalhesPage, pedido);
  }

}
