import {Component} from '@angular/core';
import {TicketMakerServiceService} from '../../../../services/flight/ticket-maker-service/ticket-maker-service.service';
import {HttpService} from '../../../../services/flight/http/http.service';
import {environment} from '../../../../../environments/environment';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent {

  public isCollapsed: boolean = true;
  public loadingEnabled: boolean = true;
  public ticketMaker: boolean = false;
  public flights: Array<string>;
  public flightResponse: string;

  constructor(private HttpService: HttpService, private ticketMakerService: TicketMakerServiceService) {

  }

  public loading(value: boolean = true) {
    this.loadingEnabled = value;
  }

  ngOnInit() {
    this.getData();
  }

  public getData() {

    let body = JSON.stringify({
      request_id: '',
      params: {
        from: 'LHR',
        to: 'DXB',
        date: {
          from: '2019-04-24'
        }
      }
    });
    this.HttpService.post(environment.api.flight.search , body)
      .subscribe((data: object) => {
        // console.log(data);
        if (data.output) {
          if (data.output.count > 0) {
            this.chopFlights(data.output.flights);
          }
        }
      });
    // this.flightResponse = this.HttpService.post('http://ebo.loc/api/v1/flight/search', body);
    // console.log(this.flightResponse);
    // if (this.flightResponse.output) {
    //   console.log('te');
    // if (this.flightResponse['output']['count'] > 0) {
    //   this.chopFlights(this.flightResponse['output']['flights']);
    // }
    // }


  }

  public chopFlights(flights: Array<string>) {
    this.ticketMaker = true;
    this.flights = flights;
    this.ticketMakerService.chopFlight(flights);
    this.loadingEnabled = false;
  }
}
