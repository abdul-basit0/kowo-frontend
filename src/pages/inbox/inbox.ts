import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {


  refreshTime;
constructor(public navCtrl: NavController, private launchNavigator: LaunchNavigator) {
  this.refreshTime = null;
  // console.log(this.launchNavigatorOptions);
  // if(this.refreshTime == null) {
  //   this.refreshTime = new Date();
  // }
}

  navigate() {
  //   var destination = [50.279306, -5.163158];
  //  var start = "50.342847, -4.749904";
  //  this.launchNavigator.navigate(destination, {
  //      start: start,
  //      enableDebug: true
  //  });
  // this.launchNavigator.TRANSPORT_MODE.DRIVING;
  //   this.launchNavigator.navigate("London, UK", {
  //     start: "Manchester, UK",
  //     transportMode : this.launchNavigator.TRANSPORT_MODE.DRIVING
  //   });
  //
  //   console.log(    this.launchNavigator.navigate("London, UK", {
  //         start: "Manchester, UK"
  //       }));
    const options: LaunchNavigatorOptions = {
      start: 'London, ON',
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };



    this.launchNavigator.navigate('Toronto, ON',options)
      .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
      );
  }
  // openNavigator() {
  //   var app;
  //       app = this.launchNavigator.APP.GOOGLE_MAPS;
  //       var directions = "50.279306,-5.163158";
  //        var start = "50.342847, -4.749904";
  //       // directions += rideDetails.arrivalAddress;
  //       this.launchNavigator.navigate(directions, {
  //         start: start,
  //         app: this.launchNavigator.APP.GOOGLE_MAPS
  //       });
  //
  // }


  doRefresh(refresher) {
    console.log('Started', refresher);
    // console.log('Begin async operation', new Date(refresher._lastCheck).getTime);
    this.refreshTime = new Date(refresher._lastCheck).toLocaleString();



    setTimeout(() => {
      console.log('Completed');
      refresher.complete();
    }, 2000);
  }
  goBack() {
    this.navCtrl.pop();
  }

}
