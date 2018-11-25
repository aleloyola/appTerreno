import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import endpoints from '../data/endpoints';
import { Endpoint } from '../data/endpoints.interface';
/*
  Generated class for the RestapiService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class tripService {
  data: any;
  EP : Endpoint[];

  constructor(public http: Http){
    this.EP = endpoints;
  }

  getTripsByTransport(transporNumber: string) {
    return this.http.get(this.EP[0].tripByTransport+transporNumber)
                    .map(res => res.json());
  }

  getTripFinishedByTransport(transporNumber: string) {
    return this.http.get(this.EP[0].tripsFinished+transporNumber)
                    .map(res => res.json());
  }

  setTripDriverInTransit(tripId: string){
    return this.http.get(this.EP[0].tripStatusToDriverInTransit+tripId)
                    .map(res => res.json())
  }

  setTripInProgress(tripId: string){
    return this.http.get(this.EP[0].tripStatusInProgress+tripId)
                    .map(res => res.json())
  }

  setTripFinished(tripId: string){
    return this.http.get(this.EP[0].tripStatusToFinished+tripId)
                    .map(res => res.json())
  }
}
