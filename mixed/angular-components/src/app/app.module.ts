import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParentComponent } from './parent.component';
import {ChildComponet} from './clild.componet';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
