import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-profile',
  providers: [Camera],
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public base64Image: string;
  autocompleteDestination;
  autocompleteHome;
  autocomplete;
  public position: string;
  public homeAddress: string;
  public workAddress: string;
  service = new google.maps.places.AutocompleteService();

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private camera: Camera, private zone: NgZone, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    this.autocompleteHome = [];
    this.autocompleteDestination = [];
    this.autocomplete = {
      home: '',
      destination: ''
    };
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
  updateSearch() {
    let me = this;
    if (this.autocomplete.destination != '') {

      this.service.getPlacePredictions({ input: this.autocomplete.destination }, function(predictions, status) {
        me.autocompleteDestination = [];
        // me.autocompleteHome = [];
        console.log("->", predictions);
        me.zone.run(function() {

          if (predictions == null) {
            me.autocompleteDestination.push("Not Found");
          } else {
            predictions.forEach(function(prediction) {
              me.autocompleteDestination.push(prediction.description);
            });
          }

        });
      });
    } else if (this.autocomplete.home != '') {

      this.service.getPlacePredictions({ input: this.autocomplete.home }, function(predictions, status) {
        me.autocompleteHome = [];
        // me.autocompleteDestination = [];
        console.log("->", predictions);
        me.zone.run(function() {

          if (predictions == null) {
            me.autocompleteHome.push("Not Found");
          } else {
            predictions.forEach(function(prediction) {
              me.autocompleteHome.push(prediction.description);
            });
          }

        });
      });
    }

    if (this.autocomplete.home == '') {

      me.autocompleteHome = [];
      me.autocompleteHome.length = 0;
      console.log(me.autocompleteHome);
    }
    if (this.autocomplete.destination == '') {

      me.autocompleteDestination = [];
      me.autocompleteDestination.length = 0;
      console.log(me.autocompleteDestination);
    }


  }

  updateHomeAddress() {
    let me = this;
    if (this.autocomplete.home == '') {
      this.autocompleteDestination = [];
      me.autocompleteDestination.length = 0;
      return;
    }
    me.autocompleteDestination.length = 0;
    this.service.getPlacePredictions({ input: this.autocomplete.home }, function(predictions, status) {
      me.autocompleteHome = [];
      // me.autocompleteHome = [];
      console.log("->", predictions);
      me.zone.run(function() {

        if (predictions == null) {
          me.autocompleteHome.push("Not Found");
          me.autocompleteHome = [];
          me.autocompleteHome.length = 0;
        } else {
          predictions.forEach(function(prediction) {
            me.autocompleteHome.push(prediction.description);
          });
        }

      });
    });

  }

  updateDestinationAddress() {
    let me = this;
    if (this.autocomplete.destination == '') {
      this.autocompleteDestination = [];
      me.autocompleteHome.length = 0;
      return;
    }
    me.autocompleteHome.length = 0;
    this.service.getPlacePredictions({ input: this.autocomplete.destination }, function(predictions, status) {
      me.autocompleteDestination = [];
      // me.autocompleteHome = [];
      console.log("->", predictions);
      me.zone.run(function() {

        if (predictions == null) {
          me.autocompleteDestination.push("Not Found");
          me.autocompleteDestination = [];
          me.autocompleteDestination.length = 0;
        } else {
          predictions.forEach(function(prediction) {
            me.autocompleteDestination.push(prediction.description);
          });
        }

      });
    });
  }

  chooseHomeAddress(item: any) {
    this.autocomplete.home = item;
    this.autocompleteHome = [];
    this.autocompleteHome.length = 0;
  }
  chooseDestinationAddress(item: any) {
    this.autocomplete.destination = item;
    this.autocompleteDestination = [];
    this.autocompleteDestination.length = 0;
  }
  getCurrLocationHome() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.position = resp.coords.latitude + "|" + resp.coords.longitude;

      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
        .then((result: NativeGeocoderReverseResult) => {
          this.autocomplete.home = result.street + ", " + result.district + ", " + result.city + ", " + result.countryName;
          console.log("Result -> ", result);
          console.log('The address is ' + result.street + ' in ' + result.countryCode)
        }).catch((error: any) => console.log(error));


    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }


  getCurrLocationWork() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.position = resp.coords.latitude + "|" + resp.coords.longitude;

      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
        .then((result: NativeGeocoderReverseResult) => {
          this.autocomplete.destination = result.street + ", " + result.district + ", " + result.city + ", " + result.countryName;
          console.log("Result -> ", result);
          console.log('The address is ' + result.street + ' in ' + result.countryCode)
        }).catch((error: any) => console.log(error));


    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }


}
