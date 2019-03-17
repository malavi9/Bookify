import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-flight-loading',
  templateUrl: './flight-loading.component.html',
  styleUrls: ['./flight-loading.component.css']
})

export class FlightLoadingComponent implements OnInit {
  @Input() enabled: string;

  public loadingVisible: any;

  constructor() {

  }

  ngOnInit(): void {
    this.loadingVisible = this.enabled;
  }
}
