import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestapiService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class tripService {
  data: any;
  apiUrl = 'http://dev.oceanictp.cl:8100/trip/transport/';
  constructor(public http: Http){  }

  getTripsByTransport(transporNumber: string) {
    return this.http.get(this.apiUrl+transporNumber)
                    .map(res => res.json());
  }
}
