import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InboxPage } from '../pages/inbox/inbox';
import { SignUpPage } from '../pages/signup/signup';
import { SignUpIPage } from '../pages/signupI/signupI';
import { SignUpIIPage } from '../pages/signupII/signupII';
import { SignUpIIIPage } from '../pages/signupIII/signupIII';
import { createRidePage } from '../pages/createRide/createRide';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  isVisible = false;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  pages: Array<{title: string, component: any, image: string, child: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Create A Ride', component: HomePage , image : 'icon-driver', child: ''},
      { title: 'My Settings', component: '' , image :'icon-settings', child: ['My Profile','Manage Rating','Contact Us']},
      { title: 'All my rides', component: '', image : 'icon-my-rides',child: ''},
      { title: 'My Inbox', component: InboxPage, image : 'icon-inbox' ,child: ''},
      { title: 'Send Evidence', component: '', image :'icon-send-evidence',child: ''},
      { title: 'Log Out', component: '', image : 'icon-logout',child: ''},
      { title: 'Sign Up', component: SignUpPage, image : 'icon-logout',child: ''},
      { title: 'Sign Up I', component: SignUpIPage, image : 'icon-logout',child: ''},
      { title: 'Sign Up II', component: SignUpIIPage, image : 'icon-logout',child: ''},
      { title: 'Sign Up III', component: SignUpIIIPage, image : 'icon-logout',child: ''},
      { title: 'Create Ride', component: createRidePage, image : 'icon-logout',child: ''}



    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  showChildren() {
    this.isVisible = !this.isVisible;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
