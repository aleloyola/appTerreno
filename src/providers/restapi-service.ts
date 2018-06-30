import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestapiService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiService {
  data: any;
  apiUrl = 'http://127.0.0.1:8000';

  constructor(public http: Http) {
    console.log('Hello RestapiService Provider');
  }

  getUserscustomers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/userscustomers')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  saveUserscustomers(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/userscustomers', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
