import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SearchResultComponent} from './components/serachResult/searchResult.component';
import {RouterModule, Routes} from '@angular/router';


const appRoute: Routes = [
  {path: 'flight/search', component: SearchResultComponent, data: {animation: 'FilterPage'}}
];


@NgModule({
  declarations: [
    SearchResultComponent
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
