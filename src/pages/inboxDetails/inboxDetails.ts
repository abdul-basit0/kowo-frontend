import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-inboxDetails',
  templateUrl: 'inboxDetails.html'
})
export class InboxDetailPage {


  refreshTime;
  constructor(public navCtrl: NavController) {

  }


}
