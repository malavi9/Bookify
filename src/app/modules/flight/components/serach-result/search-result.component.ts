import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TicketMakerServiceService} from '../../../../services/flight/ticket-maker-service/ticket-maker-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent {

  public loadingEnabled: boolean = true;
  public ticketMaker: boolean = false;
  public flights: Array<string>;


  constructor(private httpClient: HttpClient, private ticketMakerService: TicketMakerServiceService) {

  }

  public loading(value: boolean = true) {
    this.loadingEnabled = value;
  }

  ngOnInit() {
    console.log('te');
    this.getData();
  }

  public getData() {
    const headers = new HttpHeaders({'content-type': 'application/json; charset=utf8'});
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


    this.httpClient.post('http://ebo.loc/api/v1/flight/search', body, {headers: headers})
      .subscribe((data: any) => {
        if (data['output']) {
          if (data['output']['count'] > 0) {
            this.chopFlights(data['output']['flights']);
          }
        }
      });

  }

  public chopFlights(flights: Array<string>) {
    this.ticketMaker = true;
    this.flights = flights;
    this.ticketMakerService.chopFlight(flights);
    this.loadingEnabled = false;
  }
}
