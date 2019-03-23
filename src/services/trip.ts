import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import endpoints from '../data/endpoints';
import { Endpoint } from '../data/endpoints.interface';
import { Observable } from "rxjs/Observable";
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

  getTripsByTransport(transporNumber: string, token: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    return this.http.get(this.EP[0].tripByTransport+transporNumber+'/', { headers: headers })
                    .map(res => res.json())
                    .catch(this.handleErrorObservable);
  }

  getTripInProgressByTransport(transporNumber: string, token: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    return this.http.get(this.EP[0].tripsInProgress+transporNumber+'/', { headers: headers })
                    .map(res => res.json())
                    .catch(this.handleErrorObservable);
  }

  getTripFinishedByTransport(transporNumber: string, token: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    return this.http.get(this.EP[0].tripsFinished+transporNumber+'/', { headers: headers })
                    .map(res => res.json());
  }

  getTripFinishedByTransportAndDate(transporNumber: string, year: string,month: string, token: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    return this.http.get(this.EP[0].tripsFinishedByDate+transporNumber+"/"+year+"/"+month+"/", { headers: headers })
                    .map(res => res.json());
  }

  setTripDriverInTransit(tripId: string, token: string){
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    let data = { pk: tripId };
    return new Promise((resolve, reject) => {
      this.http.patch(this.EP[0].tripStatusToDriverInTransit+tripId+'/', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  setTripDriverWaiting(tripId: string, token: string){
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    let data = { pk: tripId };
    return new Promise((resolve, reject) => {
      this.http.patch(this.EP[0].tripStatusWaiting+tripId+'/', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  setTripInProgress(tripId: string, token: string){
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    let data = { pk: tripId };
    return new Promise((resolve, reject) => {
      this.http.patch(this.EP[0].tripStatusInProgress+tripId+'/', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  setTripFinished(tripId: string, token: string){
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    let data = { pk: tripId };
    return new Promise((resolve, reject) => {
      this.http.patch(this.EP[0].tripStatusToFinished+tripId+'/', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  private handleErrorObservable (error: Response | any) {
    /*if (error.status === 500) {
        return Observable.throw(new Error(error.status));
    }
    else if (error.status === 400) {
        return Observable.throw(new Error(error.status));
    }
    else if (error.status === 409) {
        return Observable.throw(new Error(error.status));
    }
    else if (error.status === 406) {
        return Observable.throw(new Error(error.status));
    }*/
    console.error(error.message || error);
    return Observable.throw(error.message || error);
    /*return error;*/
  }

}
