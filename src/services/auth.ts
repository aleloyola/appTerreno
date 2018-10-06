import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService {
  data: any;
  private isLogin: boolean = false;
  constructor(private http:Http, private storage: Storage){}

  signin(username: string, password: string): Observable<any> {
    console.log("username:"+username+" - pass:"+password);
    this.storage.set('username', username);
    //agregar archivo properties con las URLs
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {username: username, password: password};
    return this.http.post('http://dev.oceanictp.cl:8100/api/token/', body, options)
                    .map(this.extractData)
                    //.catch(this.handleErrorObservable);
  }

  logout() {
    console.log("deslogeando");
    return true;
  }

  getActiveUser(username: string): Observable<any> {
    let data: any;
    this.storage.set('username', username);
    console.log("el usuario activo es: "+username);
    this.storage.get('username').then((username) => {
      console.log('el username almacenado es:'+username);
    });
    return this.http.get('http://dev.oceanictp.cl:8100/transportSearch/'+username+'/')
                    .map(this.extractDataDriver)
                    //.catch(this.handleErrorObservable);
  }

  isUserLogin(){
    return this.isLogin;
  }

  private extractData(res: Response) {
	   let body = res.json();
     this.data = body;
     return body || {};
  }

  private extractDataDriver(res: Response) {
	   let body = res.json();
     this.isLogin = true;
     console.log("login!!!");
     return body || {};
  }

  private handleErrorObservable (error: Response | any) {
    /*console.error(error.message || error);
    return Observable.throw(error.message || error);*/
    return error;
  }
}
