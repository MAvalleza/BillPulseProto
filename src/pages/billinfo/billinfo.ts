import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-billinfo',
  templateUrl: 'billinfo.html'
})
export class BillInfoPage {
	billName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.billName = navParams.get('data');
  }

}