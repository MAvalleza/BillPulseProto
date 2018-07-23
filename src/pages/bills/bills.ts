import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BillInfoPage } from '../billinfo/billinfo';

@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html'
})
export class BillsPage {

  constructor(public navCtrl: NavController) {

  }
  items = [
  	'Children',
  	'Education',
  	'Health',
  	'Law',
  	'Transportation',
  ];
  
  itemSelected(event, item) {
    this.navCtrl.push(BillInfoPage, {
    	item: item
    })
  }

}
