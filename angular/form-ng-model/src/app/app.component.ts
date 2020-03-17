import { Component } from '@angular/core';
import {PersonModel} from './model/person-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'form-ng-model';
  public personModel: PersonModel = new PersonModel('', '', '');
  // public modelKeys = Object.keys(this.personModel);

  public persons: PersonModel[] = [];

  onAdd() {
    if (this.personModel.firstName && this.personModel.lastName && this.personModel.country) {
      this.persons.push(this.personModel);
      // Refresh values
      this.personModel = new PersonModel('', '', '');
    } else {
      alert ('Please provide proper values!');
    }

    console.log(JSON.stringify(this.persons));
  }

}
