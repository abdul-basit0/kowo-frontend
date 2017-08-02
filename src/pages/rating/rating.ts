import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html'
})
export class RatingPage {


  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  openUnblockPopUp() {
    let alert = this.alertCtrl.create({
      title: '<h3>Unblock User</h3>',
      message: '<span>Do you want to unblock Abdul Basit ?</span>',
      cssClass: 'contactPopup',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Ok',
          handler: () => {
          }
        }
      ]
    });
      alert.present();
  }

}
