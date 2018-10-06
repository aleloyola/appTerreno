import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  data: any;
  constructor(private http:Http){}

  signin(email: string, password: string): Observable<any> {
    console.log("email:"+email+" - pass:"+password);

    //agregar archivo properties con las URLs
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {username: email, password: password};
    return this.http.post('http://dev.oceanictp.cl:8100/api/token/', body, options)
                  .map(this.extractData)
                  .catch(this.handleErrorObservable);
  }

  logout() {
    console.log("deslogeando");
    return true;
  }

  getActiveUser() {
    console.log("el usuario activo es:");
    return true;
  }

  private extractData(res: Response) {
	let body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
}
