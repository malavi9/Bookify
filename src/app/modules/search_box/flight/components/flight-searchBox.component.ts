import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {Data} from '@angular/router';
import {getType} from '@angular/core/src/errors';

@Component({
  selector: 'app-flight-search-box',
  templateUrl: './flight-searchBox.component.html',
  styleUrls: ['./flight-searchBox.component.scss']
})

export class FlightSearchBoxComponent {

  public airportData: any[] = [];
  public airportDepartureBool: boolean = false;
  public From;

  constructor(private httpClient: HttpClient) {
  }

  /**
   * set airport list
   * @param e
   */
  setData(e) {
    var from = e.target.value;

    var params = new HttpParams().set('from', from);
    if (e.target.value.length > 2) {
      this.httpClient.get('http://e-wallet-online.com/api/v1/airport/search', {params})
        .subscribe((data: any) => {
          if (data['output'] == null) {
            console.log('asd');
            this.airportDepartureBool = false;
            this.airportData = [];
          } else {
            this.airportData = data['output']['airports'];
            this.airportDepartureBool = true;
          }
        });
    }
  }

  /**
   * hidden Airport list
   * return void;
   */
  onBlur() {
    // this.airportDepartureBool = false;
  }

  setDepAirport(e) {
    // let target = e.source.selected._element.nativeElement;
    // console.log(target.getAttribute('code'));
    // console.log(e.data);
    // this.From=;
  }
}
