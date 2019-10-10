
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.parent.html',
  styleUrls: ['./app.component.css']
})
export class AppParentComponent {
  title = 'angular-custom-event';

  numberOfClick: number;
  myCustomObject: MyCustomObject;

  constructor() {
    this.numberOfClick  = 0;
  }

  // Here 'myEvent' can be any name
  myEventListenerMethod(myEvent: number) {

    this.numberOfClick += myEvent;
  }

  myCustomObjectEventListenerMethod(pCustomObject: MyCustomObject) {

    this.myCustomObject = pCustomObject;
  }
}

export class MyCustomObject {

  id: number;
  name: string;
}
