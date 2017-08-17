import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonPullUpFooterState} from 'ionic-pullup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dashboardItems: Array<{title: string, image: string}>;
  footerState: IonPullUpFooterState;
  constructor(public navCtrl: NavController) {
  this.footerState = IonPullUpFooterState.Collapsed;
  this.dashboardItems = [
    { title: 'Driver', image : 'icon-driver'},
    { title: 'Passenger', image :'icon-passenger'},
    { title: 'Happy with either option.', image : 'icon-either'}
  ];
  }

  footerExpanded() {
    console.log('Footer expanded!');
  }

  footerCollapsed() {
    console.log('Footer collapsed!');
  }

  toggleFooter() {
    this.footerState = this.footerState == IonPullUpFooterState.Collapsed ? IonPullUpFooterState.Expanded : IonPullUpFooterState.Collapsed;
  }




}
