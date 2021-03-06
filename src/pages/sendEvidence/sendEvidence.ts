import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';
 import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-sendEvidence',
  providers:[Camera],
  templateUrl: 'sendEvidence.html'
})
export class SendEvidencePage {
    public base64Image: string;

  constructor(public navCtrl: NavController, private camera: Camera) {

  }
  openCamera() {
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

  openGallery() {
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


}
