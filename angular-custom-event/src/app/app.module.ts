import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppParentComponent} from './app.parent.component';
import {AppChildComponent} from './app.child.component';
import {AppObjectEmitterComponent} from './app.object.emitter.component';

@NgModule({
  declarations: [
    AppParentComponent,
    AppChildComponent,
    AppObjectEmitterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppParentComponent]
})
export class AppModule {}
