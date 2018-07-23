import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BillInfoPage } from '../billinfo/billinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  item: string;
  constructor(public navCtrl: NavController) {

  }
  itemSelected(item){
  	this.item = item;
  	console.log(item);
  	this.navCtrl.push(BillInfoPage, {
  		data: item
  	});
  }

}
