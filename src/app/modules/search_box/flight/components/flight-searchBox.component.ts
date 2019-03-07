import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-flight-search-box',
  templateUrl: './flight-searchBox.component.html',
  styleUrls: ['./flight-searchBox.component.scss']
})

export class FlightSearchBoxComponent {

  public depAirportData: any[] = [];
  public arrAirportData: any[] = [];
  public airportDepartureBool: boolean = false;
  public airportArrivalBool: boolean = false;
  public From;
  public To;
  public departureLabel = '';
  public arrivalLabel = '';
  @ViewChild('depAirportList') deplist: ElementRef;


  constructor(private httpClient: HttpClient) {
  }

  /**
   * set airport list
   *
   * @param e
   */

  setData(e) {
    //TODO add service fo airport Search
    var from = e.target.value;
    var element: HTMLElement;
    var params = new HttpParams().set('from', from);
    if (e.target.value.length > 2) {
      this.httpClient.get('http://e-wallet-online.com/api/v1/airport/search', {params})
        .subscribe((data: any) => {
          if (data['output'] == null) {
            this.airportDepartureBool = false;
            this.depAirportData = [];
          } else {
            this.depAirportData = data['output']['airports'];
            this.airportDepartureBool = true;
          }
        });
    }


    //If press up and down move in airport list

    if (e.keyCode == 38) {
      // if (this.deplist.nativeElement.children[0].class === 'active') {
      this.deplist.nativeElement.style.color = 'red';
      console.log(typeof this.deplist.nativeElement.children[0]);
      // }
    } else if (e.keyCode == 40) {
      console.log('down');
    }
  }

  /**
   * hidden Airport list
   * return void;
   */
  onBlur() {
    // this.airportDepartureBool = false;
  }

  setDepAirport(e, t) {
    // Todo Get the code attribute in the best way
    this.From = e['path'][2]['dataset']['code'];
    this.departureLabel = e['path'][2]['innerText'];
    this.airportDepartureBool = false;

  }

  setArrAirport(e) {
    // Todo Get the code attribute in the best way
    this.To = e['path'][2]['dataset']['code'];
    this.arrivalLabel = e['path'][2]['innerText'];
    this.airportArrivalBool = false;
    console.log(this.To);
  }

  setArrivalAirport(e) {
    var to = e.target.value;
    console.log(to);
    var params = new HttpParams().set('from', this.From).set('to', to);
    if (e.target.value.length > 2) {
      this.httpClient.get('http://e-wallet-online.com/api/v1/airport/search', {params})
        .subscribe((data: any) => {
          console.log(data);
          if (data['output'] == null) {
            this.airportArrivalBool = false;
            this.arrAirportData = [];
          } else {
            this.arrAirportData = data['output']['airports'];
            this.airportArrivalBool = true;
          }
        });
    }
  }
}
