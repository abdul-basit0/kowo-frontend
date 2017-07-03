import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {
  refreshTime;
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    // console.log('Begin async operation', new Date(refresher._lastCheck).getTime);
    this.refreshTime = new Date(refresher._lastCheck).toLocaleString();



    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
