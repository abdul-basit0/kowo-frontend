import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';


@Component({
  selector: 'page-createRide',
  templateUrl: 'createRide.html'
})
export class createRidePage {
  public position: string;
  public homeAddress: string;
  public workAddress: string;
  public detourTime:any;
  public totalSeats:any;


  constructor(public navCtrl: NavController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    this.detourTime = 15;
    this.totalSeats = 1 ;
  }

  getCurrLocationHome() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.position = resp.coords.latitude + "|" + resp.coords.longitude;

      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
        .then((result: NativeGeocoderReverseResult) => {
          this.homeAddress = result.street + ", " + result.district + ", " + result.city + ", " + result.countryName;
          console.log("Result -> ", result);
          console.log('The address is ' + result.street + ' in ' + result.countryCode)
        }).catch((error: any) => console.log(error));


    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }


    IncDetour() {
      if (this.detourTime < 60) {
        console.log("detourTime is : ", this.detourTime);
        this.detourTime = this.detourTime + 5;
        console.log("detourTime is : ", this.detourTime);
      }
    }
  DecDetour() {
    if (this.detourTime > 15) {
      console.log("detourTime is : ", this.detourTime);
      this.detourTime = this.detourTime - 5;
      console.log("detourTime is : ", this.detourTime);
    }
  }

  IncSeats() {

    if (this.totalSeats < 7) {
      // console.log("totalSeats is : ",this.totalSeats);
      this.totalSeats = this.totalSeats + 1;
      // console.log("totalSeats is : ",this.totalSeats);
    }
  }
  DecSeats() {

    if (this.totalSeats > 1) {
      // console.log("totalSeats is : ",this.totalSeats);
      this.totalSeats = this.totalSeats - 1;
      // console.log("totalSeats is : ",this.totalSeats);
    }

  }

  getCurrLocationWork() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.position = resp.coords.latitude + "|" + resp.coords.longitude;

      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
        .then((result: NativeGeocoderReverseResult) => {
          this.workAddress = result.street + ", " + result.district + ", " + result.city + ", " + result.countryName;
          console.log("Result -> ", result);
          console.log('The address is ' + result.street + ' in ' + result.countryCode)
        }).catch((error: any) => console.log(error));


    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }



}
