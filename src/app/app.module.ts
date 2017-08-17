import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
 import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InboxPage } from '../pages/inbox/inbox';
import { SignUpPage } from '../pages/signup/signup';
import { SignUpIPage } from '../pages/signupI/signupI';
import { SignUpIIPage } from '../pages/signupII/signupII';
import { SignUpIIIPage } from '../pages/signupIII/signupIII';
import { createRidePage } from '../pages/createRide/createRide';
import { RatingPage } from '../pages/rating/rating';
import { AuthPage } from '../pages/auth/login';
import { ProfilePage } from '../pages/profile/profile';
import { InboxDetailPage } from '../pages/inboxDetails/inboxDetails';
import { SendEvidencePage } from '../pages/sendEvidence/sendEvidence';
import { viewRidesPage } from '../pages/viewRides/viewRides';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { MapPage } from '../pages/map/map';

// import { Router } from '@angular/router';

import { NativeGeocoder} from '@ionic-native/native-geocoder';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonPullupModule } from 'ionic-pullup';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InboxPage,
    SignUpPage,
    SignUpIPage,
    SignUpIIPage,
    SignUpIIIPage,
    createRidePage,
    AuthPage,
    ProfilePage,
    InboxDetailPage,
    SendEvidencePage,
    viewRidesPage,
    RatingPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: '' },
        { component: InboxPage, name: 'Inbox', segment: 'inbox' , defaultHistory:[HomePage]}
      ]
    }),
    IonPullupModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InboxPage,
    SignUpPage,
    SignUpIPage,
    SignUpIIPage,
    SignUpIIIPage,
    createRidePage,
    AuthPage,
    ProfilePage,
    InboxDetailPage,
    SendEvidencePage,
    viewRidesPage,
    RatingPage,
    MapPage
  ],
  providers: [
  LaunchNavigator,
  CallNumber,
  EmailComposer,
  StatusBar,
  SplashScreen,
  Geolocation,
  NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
