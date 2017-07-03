import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    console.log('Begin async operation', new Date(refresher._lastCheck));


    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
