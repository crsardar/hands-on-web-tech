
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.parent.html',
  styleUrls: ['./app.component.css']
})
export class AppParentComponent {
  title = 'angular-custom-event';

  numberOfClick: number;

  //myAppCustomObject: AppCustomObject;

  constructor() {
    this.numberOfClick  = 0;
  }

  // Here 'myEvent' can be any name
  myEventListenerMethod(myEvent: number) {

    this.numberOfClick += myEvent;
  }
/*
  myCustomObjectEventListener(eventObject: AppCustomObject) {

    this.myAppCustomObject = eventObject;
  }
  */
}
/*
export class AppCustomObject {
  id: number;
  name: string;
  occupation: string;
}
*/