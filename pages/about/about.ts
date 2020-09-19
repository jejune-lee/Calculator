import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ["about.css"]
})
export class AboutPage {

powerconsumption: number;
hoursofuse: number;
cost: number;

energyconsumed: number;
costperday: number;

  constructor(public navCtrl: NavController) {

  }
compute() {

  this.energyconsumed = (this.powerconsumption)*(this.hoursofuse/1000);
  this.costperday = (this.energyconsumed * this.cost);

  }

}
