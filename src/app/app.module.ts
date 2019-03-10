import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {SearchBoxModule} from './modules/search_box/searchBox.module';
import {FlightModule} from './modules/flight/flight.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/layouts/home/home.component';
import {HeaderComponent} from './components/layouts/header/header.component';
import {FooterComponent} from './components/layouts/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';


const appRoute: Routes = [
  {path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchBoxModule,
    FlightModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
