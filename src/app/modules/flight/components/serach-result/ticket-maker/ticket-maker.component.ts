import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ticket-maker',
  templateUrl: './ticket-maker.component.html',
  styleUrls: ['./ticket-maker.component.scss']
})
export class TicketMakerComponent implements OnInit {
  @Input() Flights: Array<string>;
  public flight: Array<string>;

  constructor() {
  }

  ngOnInit(): void {
    this.flight = this.Flights;
    console.log(this.Flights);
  }


}
