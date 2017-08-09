import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  // @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {

  }


  ionViewDidLoad() {

    this.loadMap();
    this.startNavigating();

  }

  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,

    }
    // var marker = new google.maps.Marker({
    //   position: latLng,
    //   map: this.map,
    //   icon : {
    //     url: 'assets/image/logo.png'
    //   }
    // });

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // marker.setMap(this.map);

  }

startNavigating() {
  // var startMarker = new google.maps.Marker({
  //   position:new google.maps.LatLng(37.77,-122.447),
  //   map: this.map,
  //   icon: {
  //     url:'assets/image/logo.png',
  //      size: new google.maps.Size(22, 32)
  //   }
  // });
  // var stopMarker = new google.maps.Marker({
  //   position: new google.maps.LatLng (37.768,-122.511),
  //     map: this.map,
  //   icon: {
  //     url:'assets/image/logo.png',
  //      size: new google.maps.Size(22, 32)
  //   }
  // });
  var image = 'assets/image/car.png';
       var startMarker = new google.maps.Marker({
         position: {lat: 37.77, lng:-122.447},

         map: this.map,
         icon: {
           url: image
         }
       });
       var stopMarker = new google.maps.Marker({
         position: {lat: 37.768, lng: -122.511},
         map: this.map,
         icon: {
           url: image
         }
       });

  console.log("Start:",startMarker);




    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);
    directionsDisplay.setOptions( { suppressMarkers: true } );
    // directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
      origin: {lat: 37.77, lng: -122.447},
      destination: {lat: 37.768, lng: -122.511},
      travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(res);
      } else {
        console.warn(status);
      }

    });

  }


}
