
import {Component, Output, EventEmitter} from '@angular/core';

import {MyCustomObject} from './app.parent.component';

@Component({
    selector: 'app-custom-object-emitter',
    template: `<div>
        <h3>This button from Custom Object Emitter</h3>
        <br/>
        <button (click)='myCustomObjectEmitter()'>Chick Here</button>
        <br/>
    </div>`,
    styleUrls: ['./app.component.css']
})
export class AppObjectEmitterComponent {

    @Output()
    myCustomObjectEmitterOutput: EventEmitter<MyCustomObject> = new EventEmitter();

    id = 0;

    myCustomObjectEmitter() {

        const myCustomObject: MyCustomObject = new MyCustomObject();
        myCustomObject.id = this.id;
        myCustomObject.name = 'Name of ' + this.id;

        this.myCustomObjectEmitterOutput.emit(myCustomObject);
        this.id++;
    }
}
