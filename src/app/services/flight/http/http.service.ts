import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public data: any;


  constructor(private httpClient: HttpClient) {
  }

  const;
  headers = new HttpHeaders({'content-type': 'application/json; charset=utf8'});


  public post(url: string, body: string): any {
    return this.httpClient.post(url, body, {headers: this.headers});
  }
}
