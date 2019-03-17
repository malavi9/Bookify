import {AfterViewInit, Component, OnInit} from '@angular/core';
import {load} from '@angular/core/src/render3';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent {
  public loadingEnabled: boolean = true;

  constructor() {

  }

  public loading(value: boolean = true) {
    this.loadingEnabled = value;
  }

  ngDoCheck() {

  }

  public server() {

  }
}
