import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/login';
import { InboxPage } from '../pages/inbox/inbox';
import { SignUpPage } from '../pages/signup/signup';
import { SignUpIPage } from '../pages/signupI/signupI';
import { SignUpIIPage } from '../pages/signupII/signupII';
import { SignUpIIIPage } from '../pages/signupIII/signupIII';
import { createRidePage } from '../pages/createRide/createRide';

import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  isVisible = false;
  @ViewChild(Nav) nav: Nav;

 rootPage: any = HomePage;


 pages: Array<{ title: string, component: any, image: string, child: [{ name: string, link: any }] }>;

 constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();


   // used for an example of ngFor and navigation
    this.pages = [
      {
        title: 'Create A Ride', component: HomePage, image: 'icon-driver', child: [{
          name: '',
          link: ''
        }]
      },
      {
        title: 'My Settings', component: '', image: 'icon-settings', child: [{
          name: 'My Profile',
          link: ProfilePage
        },
          {
            name: 'Manage Rating',
            link: ''
          },
          {
            name: 'Contact Us',
            link: ''
          }]
      },
      {
        title: 'All my rides', component: '', image: 'icon-my-rides', child: [{
          name: '',
          link: ''
        }]
      },
      {
        title: 'My Inbox', component: InboxPage, image: 'icon-inbox', child: [{
          name: '',
          link: ''
        }]
      },

      {

        title: 'Sign Up', component: SignUpPage, image: 'icon-inbox', child: [{
          name: '',
          link: ''
        }]
      },
      {

        title: 'Sign Up I', component: SignUpIPage, image: 'icon-inbox', child: [{
          name: '',
          link: ''
        }]
      },
      {
        title: 'Sign Up II', component: SignUpIIPage, image: 'icon-inbox', child: [{
          name: '',
          link: ''
        }]
      },
      {
        title: 'Sign Up III', component: SignUpIIIPage, image: 'icon-inbox', child: [{
          name: '',
          link: ''
        }]
      },
      {
        title: 'Create Ride', component: createRidePage, image: 'icon-inbox', child: [{
          name: '',
          link: ''
        }]
      },
      {
        title: 'Send Evidence', component: '', image: 'icon-send-evidence', child: [{
          name: '',
          link: ''
        }]
      },
      {
        title: 'Log Out', component: '', image: 'icon-logout', child: [{
          name: '',
          link: ''
        }]
      }
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
    console.log(page);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openChild(child) {

 console.log(child);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(child.link);
  }
}
