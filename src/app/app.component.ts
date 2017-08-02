import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/login';
import { InboxPage } from '../pages/inbox/inbox';
import { SignUpPage } from '../pages/signup/signup';
import { SignUpIPage } from '../pages/signupI/signupI';
import { SignUpIIPage } from '../pages/signupII/signupII';
import { SignUpIIIPage } from '../pages/signupIII/signupIII';
import { createRidePage } from '../pages/createRide/createRide';
import { InboxDetailPage } from '../pages/inboxDetails/inboxDetails';
import { SendEvidencePage } from '../pages/sendEvidence/sendEvidence';
import { viewRidesPage } from '../pages/viewRides/viewRides';

import { RatingPage } from '../pages/rating/rating';

import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  isVisible = false;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  pages: Array<{ title: string, component: any, image: string, child: [{ name: string, link: any }] }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private alertCtrl: AlertController, private callNumber: CallNumber, private emailComposer: EmailComposer, private menuCtrl :MenuController) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      {
        title: 'Create A Ride', component: AuthPage, image: 'icon-driver', child: [{
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
            link: RatingPage
          },
          {
            name: 'Contact Us',
            link: SendEvidencePage
          }]
      },
      {
        title: 'All my rides', component: viewRidesPage, image: 'icon-my-rides', child: [{
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
        title: 'Send Evidence', component: SendEvidencePage, image: 'icon-send-evidence', child: [{
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

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.menuCtrl.close();
  }
  openChild(child) {
    if (child.name == "Contact Us") {
      let alert = this.alertCtrl.create({
        title: '<h3>A Question About Kowo</h3>',
        message: '<span>If your question is not in our FAQ, feel free to contact us.</span>',
        cssClass: 'contactPopup',
        buttons: [
          {
            text: 'Call info line',
            role: 'cancel',
            handler: () => {
              this.callNumber.callNumber("18001010101", true)
                .then(() => console.log('Launched dialer!'))
                .catch(() => console.log('Error launching dialer'));
            }
          },
          {
            text: 'Send an email',
            handler: () => {
              let email = {
                to: 'test@kowo.com'
              };

              // Send a text message using default options
              this.emailComposer.open(email);
            }
          }
        ]
      });
      alert.present();
    } else {
      this.nav.setRoot(child.link);
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

  }
}
