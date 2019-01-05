import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { RequestOptions, Headers } from "@angular/http";
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

  getTripInProgressByTransport(transporNumber: string) {
    return this.http.get(this.EP[0].tripsInProgress+transporNumber)
                    .map(res => res.json());
  }

  getTripFinishedByTransport(transporNumber: string) {
    return this.http.get(this.EP[0].tripsFinished+transporNumber)
                    .map(res => res.json());
  }

  setTripDriverInTransit(tripId: string){
    let data = { pk: tripId };
    return new Promise((resolve, reject) => {
      this.http.patch(this.EP[0].tripStatusToDriverInTransit+tripId, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  setTripDriverWaiting(tripId: string){
    let data = { pk: tripId };
    return new Promise((resolve, reject) => {
      this.http.patch(this.EP[0].tripStatusWaiting+tripId, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  setTripInProgress(tripId: string){
    let data = { pk: tripId };
    return new Promise((resolve, reject) => {
      this.http.patch(this.EP[0].tripStatusInProgress+tripId, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  setTripFinished(tripId: string){
    let data = { pk: tripId };
    return new Promise((resolve, reject) => {
      this.http.patch(this.EP[0].tripStatusToFinished+tripId, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
