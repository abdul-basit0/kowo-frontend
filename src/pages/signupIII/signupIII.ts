import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-signupIII',
  templateUrl: 'signupIII.html'
})
export class SignUpIIIPage {
  showCarProperties;
  carPreference;

  constructor(public navCtrl: NavController) {
    this.showCarProperties = false;
  }

  checkPref() {
    if (this.carPreference == "myOwnCar") {
      this.showCarProperties = true;

    } else if (this.carPreference == "companyCar") {
      this.showCarProperties = true;

    } else if (this.carPreference == "noCar") {
      this.showCarProperties = false;
    }
  }

}
