import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-viewRides',
  templateUrl: 'viewRides.html'
})
export class viewRidesPage {
  shownGroup;


  constructor(public navCtrl: NavController) {
    this.shownGroup = null;
  }
  rides = [
    { time: "12/02/2017", description: "You will be picked up at 12:30", id: "01276378456387456" },
    { time: "12/01/2017", description: "You will be picked up at 11:30", id: "01276374455454545" }
  ];
  toggleGroup(group) {
    console.log("toggle group",group);
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
      console.log("shown",group);
    return this.shownGroup === group;
  };

}
