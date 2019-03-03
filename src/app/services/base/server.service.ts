import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {

  }

  storeServer(server: any[]) {
    this.http.post('http://e-wallet-online.com/api/v1/auth/get-token', server);
  }
}