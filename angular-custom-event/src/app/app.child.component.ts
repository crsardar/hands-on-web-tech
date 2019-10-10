
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child-component',
    template: `<div>
        <h3>This button is part of Clild Component</h3>
        <br/>
        <button (click)='myClick()'>Chick Here</button>
        <br/>
    </div>`,
    styleUrls: ['./app.component.css']
})
export class AppChildComponent {

    @Output() myEventEmitterOutput: EventEmitter<number> =  new EventEmitter();

    myClick() {

        this.myEventEmitterOutput.emit(1);
    }
}
