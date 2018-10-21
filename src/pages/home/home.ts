import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  title = "Sugestões"

  

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
      consumers: ["123", "321", "231"],
     // description: "The pork is not finely ground, mince well with a knife. Place the pork in a large bowl and cover.",
      video: "https://www.youtube.com/embed/T1YQicI16Fk"
    }/*,
    {
      img: "https://i.imgur.com/lVdWrve.jpg",
      name: "Chinese Spare Ribs",
      ingredients: ["1 pound well-ground, fatty pork", "1 pound Napa cabbage", "1 tablespoon fresh grated ginger", "2 tablespoons water", "2 scallions"],
      preparation: ["If the pork is not finely ground, mince well with a knife. Place the pork in a large bowl and cover.", "Bring a large pot of water to boil over high heat. Add the cabbage; blanch until just wilted. Using a slotted spoon, remove cabbage to strainer set over a large bowl. Press down on cabbage to squeeze out all liquid. Transfer to cutting board; roughly dice.", "Meanwhile, place grated ginger in a small bowl; cover with water and let steep for a few minutes."],
      interessados: ["123", "321", "231"],
      description: "Have you ever cooked something that actually tastes a lot better the next day? Well these Chinese restaurant takeout style spare ribs are a perfect case. ",
      video: "https://www.youtube.com/watch?v=PktLsYC6FG0"
    },
    {
      img: "https://i.imgur.com/EygIdZU.jpg",
      name: "Beef Broccoli",
      ingredients: ["1 pound well-ground, fatty pork", "1 pound Napa cabbage", "1 tablespoon fresh grated ginger", "2 tablespoons water", "2 scallions"],
      preparation: ["If the pork is not finely ground, mince well with a knife. Place the pork in a large bowl and cover.", "Bring a large pot of water to boil over high heat. Add the cabbage; blanch until just wilted. Using a slotted spoon, remove cabbage to strainer set over a large bowl. Press down on cabbage to squeeze out all liquid. Transfer to cutting board; roughly dice.", "Meanwhile, place grated ginger in a small bowl; cover with water and let steep for a few minutes."],
      interessados: ["123", "321", "231"],
      description: "The broccoli is briefly cooked in boiling water to achieve a perfect tender-crisp texture.",
      video: "https://www.youtube.com/watch?v=M3zS2DYmq2g"
    },*/

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  open(receipt){
    console.log(receipt);
    this.navCtrl.push(DetalhesPage, receipt);
  }

}
