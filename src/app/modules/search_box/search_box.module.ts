import {NgModule} from '@angular/core';
import {FlightSearchBoxComponent} from './flight/components/flight-search-box.component';
import {SearchBoxComponent} from './search-box.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {HttpClientModule} from '@angular/common/http';
import {RouterLink} from '@angular/router';

@NgModule({
  declarations: [
    FlightSearchBoxComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    TypeaheadModule.forRoot(),
    HttpClientModule,
    FormsModule,
    // RouterLink
  ],
  exports: [SearchBoxComponent]
})
export class Search_boxModule {
}

