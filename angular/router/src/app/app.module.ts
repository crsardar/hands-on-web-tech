import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitSearchComponent } from './git-search/git-search.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'search',
    component: GitSearchComponent,
    data: {
      title: 'Git Search'
    }
  },
  { path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
