import {Component, Input} from '@angular/core';

@Component({
    selector: 'child-componet',
    template: `
    <div>
    Name: {{person}}
    <br/>
    Occupation: {{job}}
    </div>
    `, 
    styles:[`
    div{
        margin: 10px;
        padding: 15px;
        border: 3px solid blue;
    }
    `]
})
export class DataReceiver{
    
    @Input('name') person: string;
    @Input('occupation') job: string;
    
    constructor(){
        this.person = 'Chittaranjan';
        this.job = 'Engineer';
    }
}