import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';


@Component({
  selector: 'page-createRide',
  templateUrl: 'createRide.html'
})
export class createRidePage {
  public position:string;
  public address:string;
  constructor(public navCtrl: NavController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {

}

getCurrLocation(){
this.geolocation.getCurrentPosition().then((resp) => {
 console.log(resp.coords.latitude);
 console.log(resp.coords.longitude);
 this.position = resp.coords.latitude + "|" + resp.coords.longitude;


}).catch((error) => {
  console.log('Error getting location', error);
});



}

getAddress()
{
this.nativeGeocoder.reverseGeocode(33.5857793,73.0877285)
  .then((result: NativeGeocoderReverseResult) => {
  this.address = result.street;
  console.log('The address is ' + result.street + ' in ' + result.countryCode)
  }).catch((error: any) => console.log(error));



}

}
