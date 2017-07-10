import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-profile',
  providers: [Camera],
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public base64Image: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private camera:Camera) {

  }

  openImageLoader() {
    let alert = this.alertCtrl.create({
      title: 'Choose One',
      buttons: [
        {
          text: "Choose From Gallery",
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              targetWidth: 1000,
              targetHeight: 1000
            }).then((imageData) => {
              // imageData is a base64 encoded string
              this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
              console.log(err);
            });
          }
        },
        {
          text: 'From Camera',
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              targetWidth: 1000,
              targetHeight: 1000
            }).then((imageData) => {
              // imageData is a base64 encoded string
              this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
              console.log(err);
            });
          }
        }
      ]
    });
    alert.present();
  }


}
