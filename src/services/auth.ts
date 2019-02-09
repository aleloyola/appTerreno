import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Storage } from '@ionic/storage';
import endpoints from '../data/endpoints';
import { Endpoint } from '../data/endpoints.interface';

@Injectable()
export class AuthService {
  data: any;
  EP : Endpoint[];
  private isLogin: boolean = false;
  constructor(private http:Http){
    this.EP = endpoints;
  }

  signin(username: string, password: string): Observable<any> {
    console.log("username:"+username+" - pass:"+password);

    //agregar archivo properties con las URLs
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {username: username, password: password};
    return this.http.post(this.EP[0].tokenAuth, body, options)
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
  }

  logout() {
    console.log("deslogeando");
    return true;
  }

  getActiveUser(username: string, token: string): Observable<any> {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    return this.http.get(this.EP[0].transportSearch+username+'/', {headers: headers})
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
  }

  isUserLogin(){
    return this.isLogin;
  }

  private extractData(res: Response) {
	   let body = res.json();
     this.data = body;
     return body || {};
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
