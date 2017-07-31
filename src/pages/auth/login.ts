import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class AuthPage {

  languages: Array<{ value: string, language: string }>;
  selectedLang: string;
  homepage = HomePage;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {


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
      title: 'Forgot Your Password?',
      cssClass:'forgotPopup',
      inputs: [
        {
          name: 'email',
          placeholder: 'Please enter your email'
        }
      ],
      buttons: [
        {
          text: "Reset Password",
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }


}
