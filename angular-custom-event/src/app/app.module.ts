import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppParentComponent} from './app.parent.component';
import {AppChildComponent} from './app.child.component';

@NgModule({
  declarations: [
    AppParentComponent,
    AppChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppParentComponent]
})
export class AppModule {}
