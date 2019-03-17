import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SearchResultComponent} from './components/serach-result/search-result.component';
import {RouterModule, Routes} from '@angular/router';
import {FlightLoadingComponent} from './components/serach-result/flight-loading/flight-loading.component';
import { TicketMakerComponent } from './components/serach-result/ticket-maker/ticket-maker.component';


const appRoute: Routes = [
  {path: 'flight/search', component: SearchResultComponent, data: {animation: 'FilterPage'}}
];


@NgModule({
  declarations: [
    SearchResultComponent, FlightLoadingComponent, TicketMakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    SearchResultComponent
  ]
})

export class FlightModule {

}
