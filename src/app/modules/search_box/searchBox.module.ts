import {NgModule} from '@angular/core';
import {FlightSearchBoxComponent} from './flight/components/flight-searchBox.component';
import {SearchBoxComponent} from './searchBox.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    FlightSearchBoxComponent,
    SearchBoxComponent,

  ],
  imports: [
    BrowserModule,
    TypeaheadModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule {
}

