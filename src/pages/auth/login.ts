import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
// import {Camera} from '@ionic-native/camera';
import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-login',
  providers: [Camera],
  templateUrl: 'login.html'
})
export class AuthPage {

  public base64Image: string;
  languages: Array<{ value: string, language: string }>;
  selectedLang: string;
  homepage = HomePage;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private camera:Camera) {


    this.languages = [
      {
        "value": "en",
        "language": "English"
      },
      {
        "value": "fr",
        "language": "French"
      },
      {
        "value": "nl",
        "language": "Dutch"
      }
    ];

    this.selectedLang = "en";

  }

  // ok() {
  //
  // }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: "X",
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  takePicture() {
    let alert = this.alertCtrl.create({
      title: 'Choose One',
      buttons: [
        {
          text: "Choose From Gallery",
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType        : this.camera.PictureSourceType.PHOTOLIBRARY,
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
