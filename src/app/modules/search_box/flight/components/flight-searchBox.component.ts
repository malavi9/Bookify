import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-flight-search-box',
  templateUrl: './flight-searchBox.component.html',
  styleUrls: ['./flight-searchBox.component.scss']
})

export class FlightSearchBoxComponent {

  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  constructor(private httpClient: HttpClient) {
  }

  setData(e) {
    var depLenght = e.target.value.length;
    var params = {
      username: 'a.amini',
      password: '123456'
    };
    let formData = new FormData();
    formData.append('username', 'a.amini');
    formData.append('password', '123456');

    if (depLenght >= 3) {
      this.httpClient.post('http://e-wallet-online.com/api/v1/auth/get-token', formData);
        // .subscribe((data: any )=>);
    }
  }
}
