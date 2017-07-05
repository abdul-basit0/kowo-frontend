import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class AuthPage {

  languages: Array<{value: string, language: string}>;
  selectedLang: string;

  constructor(public navCtrl: NavController) {

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

}
