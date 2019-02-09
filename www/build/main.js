webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__en_proceso_en_proceso__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finalizado_finalizado__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__en_proceso_en_proceso__["a" /* EnProcesoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__finalizado_finalizado__["a" /* FinalizadoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Asignados" tabIcon="filing"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="En Proceso" tabIcon="car"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Finalizados" tabIcon="archive"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getIdFromURL = function (URL) {
        var str = URL;
        var len = str.length;
        var array = str.split("/");
        var res = array[array.length - 2];
        return res;
    };
    return UtilsService;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_endpoints__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLogin = false;
        this.EP = __WEBPACK_IMPORTED_MODULE_5__data_endpoints__["a" /* default */];
    }
    AuthService.prototype.signin = function (username, password) {
        console.log("username:" + username + " - pass:" + password);
        //agregar archivo properties con las URLs
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = { username: username, password: password };
        return this.http.post(this.EP[0].tokenAuth, body, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    AuthService.prototype.logout = function () {
        console.log("deslogeando");
        return true;
    };
    AuthService.prototype.getActiveUser = function (username, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + token);
        return this.http.get(this.EP[0].transportSearch + username + '/', { headers: headers })
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    AuthService.prototype.isUserLogin = function () {
        return this.isLogin;
    };
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        this.data = body;
        return body || {};
    };
    AuthService.prototype.handleErrorObservable = function (error) {
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
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.message || error);
        /*return error;*/
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_page_trip_page__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, tripSrv, storage) {
        this.navCtrl = navCtrl;
        this.tripSrv = tripSrv;
        this.storage = storage;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            console.log('el token almacenado es:' + token);
            _this.token = token;
        });
        this.storage.get('transportId').then(function (t) {
            console.log('el transportId almacenado es:' + t);
            _this.transportId = t;
            _this.tripSrv.getTripsByTransport(_this.transportId, _this.token)
                .subscribe(function (data) { return _this.trips = data; });
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.tripSrv.getTripsByTransport(_this.transportId, _this.token)
                .subscribe(function (data) { return _this.trips = data; });
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.onLoadTrip = function (trip, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trip_page_trip_page__["a" /* TripPage */], { trip: trip, index: index, token: this.token });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Trip List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n     pullingIcon="arrow-dropdown"\n     pullingText="Pull to refresh"\n     refreshingSpinner="circles"\n     refreshingText="Refreshing...">\n   </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf = "trips?.length == 0; else elsetag">\n    <ion-card>\n      <img style=" width:auto;\n              height:auto;\n              margin-left: auto;\n              margin-right: auto;\n              width: 80%;\n              "\n      src="../../assets/imgs/reload.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          No existen servicios asignados.\n          </ion-card-title>\n        <p>\n          Desplice hacia abajo para recargar o intentelo más tarde.\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ng-template #elsetag>\n    <ion-card *ngFor="let trip of trips; let i = index">\n      <img src="../../assets/imgs/advance-card-map-madison.png">\n      <ion-item>\n        <!--<ion-icon name="football" item-start large></ion-icon>-->\n        <h2>Origen: {{trip.pickup_address}}</h2>\n        <h2>Destino: {{trip.destination_address}}</h2>\n        <ion-note>{{ trip.passenger.first_name }}  {{trip.passenger.last_name}}</ion-note>\n        <ion-note>{{trip.mobile_phone}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <span item-start>{{trip.start_trip_dt}}</span>\n        <button ion-button icon-start clear item-end (click)="onLoadTrip(trip, i)">\n          <ion-icon name="navigate"></ion-icon>\n          Start\n        </button>\n      </ion-item>\n    </ion-card>\n  </ng-template>\n\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip__["a" /* tripService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        tokenAuth: 'https://api.oceanictp.cl/api-token-auth/',
        tokenRefresh: 'https://api.oceanictp.cl/api-token-refresh/',
        tokenVerify: 'https://api.oceanictp.cl/api-token-verify/',
        transportSearch: 'https://api.oceanictp.cl/transportSearch/',
        tripByTransport: 'https://api.oceanictp.cl/trip/pendingTab/',
        tripsInProgress: 'https://api.oceanictp.cl/trip/progressTab/',
        tripsFinished: 'https://api.oceanictp.cl/trip/TF/',
        tripStatusToDriverInTransit: 'https://api.oceanictp.cl/trip/setStatusDIT/',
        tripStatusWaiting: 'https://api.oceanictp.cl/trip/setStatusWAI/',
        tripStatusInProgress: 'https://api.oceanictp.cl/trip/setStatusTIP/',
        tripStatusToFinished: 'https://api.oceanictp.cl/trip/setStatusTF/'
    }
]);
//# sourceMappingURL=endpoints.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnProcesoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_page_trip_page__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnProcesoPage = (function () {
    function EnProcesoPage(navCtrl, tripSrv, storage) {
        this.navCtrl = navCtrl;
        this.tripSrv = tripSrv;
        this.storage = storage;
        /*this.tripSrv.getTripInProgressByTransport('3')
              .subscribe(data => this.trips = data);*/
    }
    EnProcesoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            console.log('el token almacenado es:' + token);
            _this.token = token;
        });
        this.storage.get('transportId').then(function (t) {
            console.log('el transportId almacenado es:' + t);
            _this.transportId = t;
            _this.tripSrv.getTripInProgressByTransport(_this.transportId, _this.token)
                .subscribe(function (data) { return _this.trips = data; });
        });
    };
    EnProcesoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.tripSrv.getTripInProgressByTransport(_this.transportId, _this.token)
                .subscribe(function (data) { return _this.trips = data; });
            refresher.complete();
        }, 2000);
    };
    EnProcesoPage.prototype.onLoadTrip = function (trip, index) {
        //25-11: Considerar otra TripPage para este punto de completación
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trip_page_trip_page__["a" /* TripPage */], { trip: trip, index: index, token: this.token });
    };
    EnProcesoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-en-proceso',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/en-proceso/en-proceso.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Servicios en proceso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n     pullingIcon="arrow-dropdown"\n     pullingText="Pull to refresh"\n     refreshingSpinner="circles"\n     refreshingText="Refreshing...">\n   </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf = "trips?.length == 0; else elsetag">\n    <ion-card>\n      <img style=" width:auto;\n              height:auto;\n              margin-left: auto;\n              margin-right: auto;\n              width: 80%;\n              "\n      src="../../assets/imgs/reload.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          No existen servicios en proceso.\n          </ion-card-title>\n        <p>\n          Desplice hacia abajo para recargar o intentelo más tarde.\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ng-template #elsetag>\n    <ion-card *ngFor="let trip of trips; let i = index">\n      <!--<img src="../../assets/imgs/advance-card-map-madison.png">-->\n      <ion-item>\n        <!--<ion-icon name="football" item-start large></ion-icon>-->\n        <h2>Origen: {{trip.pickup_address}}</h2>\n        <h2>Destino: {{trip.destination_address}}</h2>\n        <ion-note>{{ trip.passenger.first_name }}  {{trip.passenger.last_name}}</ion-note>\n        <ion-note>{{trip.mobile_phone}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <span item-start>{{trip.start_trip_dt}}</span>\n        <button ion-button icon-start clear item-end (click)="onLoadTrip(trip, i)">\n          <ion-icon name="navigate"></ion-icon>\n          Start\n        </button>\n      </ion-item>\n    </ion-card>\n  </ng-template>\n\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/en-proceso/en-proceso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip__["a" /* tripService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EnProcesoPage);
    return EnProcesoPage;
}());

//# sourceMappingURL=en-proceso.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_page_trip_page__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinalizadoPage = (function () {
    function FinalizadoPage(navCtrl, tripSrv, storage) {
        this.navCtrl = navCtrl;
        this.tripSrv = tripSrv;
        this.storage = storage;
        /*this.tripSrv.getTripFinishedByTransport('3')
              .subscribe(data => this.trips = data);*/
    }
    FinalizadoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            console.log('el token almacenado es:' + token);
            _this.token = token;
        });
        this.storage.get('transportId').then(function (t) {
            console.log('el transportId almacenado es:' + t);
            _this.transportId = t;
            _this.tripSrv.getTripFinishedByTransport(_this.transportId, _this.token)
                .subscribe(function (data) { return _this.trips = data; });
        });
    };
    FinalizadoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.tripSrv.getTripFinishedByTransport(_this.transportId, _this.token)
                .subscribe(function (data) { return _this.trips = data; });
            refresher.complete();
        }, 2000);
    };
    FinalizadoPage.prototype.onLoadTrip = function (trip, index) {
        //25-11: Considerar otra TripPage para este punto de completación
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trip_page_trip_page__["a" /* TripPage */], { trip: trip, index: index, token: this.token });
    };
    FinalizadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finalizado',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/finalizado/finalizado.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Servicios Finalizados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n     pullingIcon="arrow-dropdown"\n     pullingText="Pull to refresh"\n     refreshingSpinner="circles"\n     refreshingText="Refreshing...">\n   </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf = "trips?.length == 0; else elsetag">\n    <ion-card>\n      <img style=" width:auto;\n              height:auto;\n              margin-left: auto;\n              margin-right: auto;\n              width: 80%;\n              "\n      src="../../assets/imgs/reload.png"/>\n      <ion-card-content>\n        <ion-card-title>\n          No existen servicios finalizados.\n          </ion-card-title>\n        <p>\n          Desplice hacia abajo para recargar o intentelo más tarde.\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ng-template #elsetag>\n    <ion-card *ngFor="let trip of trips; let i = index">\n      <!--<img src="../../assets/imgs/advance-card-map-madison.png">-->\n      <ion-item>\n        <!--<ion-icon name="football" item-start large></ion-icon>-->\n        <h2>Origen: {{trip.pickup_address}}</h2>\n        <h2>Destino: {{trip.destination_address}}</h2>\n        <ion-note>{{ trip.passenger.first_name }}  {{trip.passenger.last_name}}</ion-note>\n        <ion-note>{{trip.mobile_phone}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <span item-start>{{trip.start_trip_dt}}</span>\n        <button ion-button icon-start clear item-end (click)="onLoadTrip(trip, i)">\n          <ion-icon name="navigate"></ion-icon>\n          Start\n        </button>\n      </ion-item>\n    </ion-card>\n  </ng-template>\n\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/finalizado/finalizado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip__["a" /* tripService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], FinalizadoPage);
    return FinalizadoPage;
}());

//# sourceMappingURL=finalizado.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utils__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Login = (function () {
    function Login(authService, storage, utilsService, loadingCtrl, alertCtrl, navCtrl) {
        this.authService = authService;
        this.storage = storage;
        this.utilsService = utilsService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    Login.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present().then(function () {
            _this.authService.signin(form.value.username, form.value.password)
                .subscribe(function (dataAuth) {
                console.log(dataAuth.token);
                _this.storage.set('token', dataAuth.token);
                //loading.dismiss();
                _this.authService.getActiveUser(form.value.username, dataAuth.token)
                    .subscribe(function (data) {
                    console.log(data);
                    //console.log(data[0].url);
                    //var transportId = this.utils.getIdFromURL(body[0].url);
                    //let len = data[0].url.length;
                    //var transportId = data[0].url.substring(len-2, len-1);
                    console.log("TransportID: " + _this.utilsService.getIdFromURL(data[0].url));
                    _this.storage.set('username', form.value.username);
                    _this.storage.set('transportId', _this.utilsService.getIdFromURL(data[0].url));
                    loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }, function (error) {
                    if (loading)
                        loading.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: 'User is not a driver!',
                        message: error.message,
                        buttons: ['Ok']
                    });
                    alert.present();
                });
            });
        }, function (error) {
            if (loading)
                loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'User not defined!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/login/login.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignin(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Usuario</ion-label>\n        <ion-input\n          type="text"\n          ngModel\n          name="username"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input\n          type="password"\n          ngModel\n          name="password"\n          required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Signin</button>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__services_utils__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_trip_page_trip_page__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_en_proceso_en_proceso__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_finalizado_finalizado__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_trip__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_utils__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_en_proceso_en_proceso__["a" /* EnProcesoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_finalizado_finalizado__["a" /* FinalizadoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_trip_page_trip_page__["a" /* TripPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_en_proceso_en_proceso__["a" /* EnProcesoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_finalizado_finalizado__["a" /* FinalizadoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_trip_page_trip_page__["a" /* TripPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__services_trip__["a" /* tripService */],
                __WEBPACK_IMPORTED_MODULE_16__services_utils__["a" /* UtilsService */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__["a" /* LaunchNavigator */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, menuCtrl, authService) {
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */];
        this.Login = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* Login */];
        this.isAuthenticated = false;
        console.log(this.authService.isUserLogin());
        if (this.authService.isUserLogin()) {
            this.isAuthenticated = true;
            this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.isAuthenticated = false;
            this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* Login */];
        }
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.onLogout = function () {
        this.authService.logout();
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* Login */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/app/app.html"*/`<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(rootPage)"\n        *ngIf="isAuthenticated">\n        <ion-icon name="book"></ion-icon>\n        Recipe Book\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(signinPage)"\n        *ngIf="!isAuthenticated">\n        <ion-icon name="log-in"></ion-icon>\n        Signin\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(signupPage)"\n        *ngIf="!isAuthenticated">\n        <ion-icon name="person"></ion-icon>\n        Signup\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLogout()"\n        *ngIf="isAuthenticated">\n        <ion-icon name="log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_endpoints__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the RestapiService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var tripService = (function () {
    function tripService(http) {
        this.http = http;
        this.EP = __WEBPACK_IMPORTED_MODULE_3__data_endpoints__["a" /* default */];
    }
    tripService.prototype.getTripsByTransport = function (transporNumber, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + token);
        return this.http.get(this.EP[0].tripByTransport + transporNumber, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    tripService.prototype.getTripInProgressByTransport = function (transporNumber, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + token);
        return this.http.get(this.EP[0].tripsInProgress + transporNumber, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorObservable);
    };
    tripService.prototype.getTripFinishedByTransport = function (transporNumber, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + token);
        return this.http.get(this.EP[0].tripsFinished + transporNumber, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    tripService.prototype.setTripDriverInTransit = function (tripId, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + token);
        var data = { pk: tripId };
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.EP[0].tripStatusToDriverInTransit + tripId, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    tripService.prototype.setTripDriverWaiting = function (tripId, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + token);
        var data = { pk: tripId };
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.EP[0].tripStatusWaiting + tripId, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    tripService.prototype.setTripInProgress = function (tripId, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + token);
        var data = { pk: tripId };
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.EP[0].tripStatusInProgress + tripId, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    tripService.prototype.setTripFinished = function (tripId, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + token);
        var data = { pk: tripId };
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.EP[0].tripStatusToFinished + tripId, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    tripService.prototype.handleErrorObservable = function (error) {
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
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.message || error);
        /*return error;*/
    };
    tripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], tripService);
    return tripService;
}());

//# sourceMappingURL=trip.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TripPage = (function () {
    function TripPage(navCtrl, navParams, utilsService, launchNavigator, tripSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utilsService = utilsService;
        this.launchNavigator = launchNavigator;
        this.tripSrv = tripSrv;
    }
    TripPage.prototype.ngOnInit = function () {
        this.trip = this.navParams.get('trip');
        this.index = this.navParams.get('index');
        this.token = this.navParams.get('token');
    };
    TripPage.prototype.setTripDriverInTransit = function () {
        this.tripSrv.setTripDriverInTransit(this.utilsService.getIdFromURL(this.trip.url), this.token);
        this.navCtrl.popToRoot();
    };
    TripPage.prototype.setTripDriverWaiting = function () {
        this.tripSrv.setTripDriverWaiting(this.utilsService.getIdFromURL(this.trip.url), this.token);
        this.navCtrl.popToRoot();
    };
    TripPage.prototype.setTripInProgress = function () {
        this.tripSrv.setTripInProgress(this.utilsService.getIdFromURL(this.trip.url), this.token);
        this.navCtrl.popToRoot();
    };
    TripPage.prototype.setTripFinished = function () {
        this.tripSrv.setTripFinished(this.utilsService.getIdFromURL(this.trip.url), this.token);
        this.navCtrl.popToRoot();
    };
    TripPage.prototype.lauchNav = function (address) {
        var options = {};
        this.launchNavigator.navigate(address, options)
            .then(function (success) { return alert('Launched navigator'); }, function (error) { return alert('Error launching navigator: ' + error); });
    };
    TripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'trip-page',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/trip-page/trip-page.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trip Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n        <ion-col text-left>\n          <div class="subtitle"><strong>Pasajero</strong></div>\n        </ion-col>\n        <ion-col text-left>\n          <div class="subtitle">{{trip.passenger.first_name}} {{trip.passenger.last_name}}</div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col text-left>\n          <div class="subtitle"><strong>Convenio</strong></div>\n        </ion-col>\n        <ion-col text-left>\n          <div class="subtitle">{{ trip.customer.name }}</div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Origen</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.pickup_address }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Destino</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.destination_address }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Teléfono 1</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.mobile_phone }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Teléfono 2</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.phone }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Fecha</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.scheduler_trip_dt }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Forma de Pago</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.payment_term }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Estado Actual</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.current_status }}</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngIf="trip.current_status == \'assignation\' || trip.current_status == \'report\'">\n        <button\n          ion-button\n          outline\n          block\n          (click)="setTripDriverInTransit()">Hacia el pasajero</button>\n      </ion-col>\n      <ion-col *ngIf="trip.current_status == \'transitp\'">\n        <button\n          ion-button\n          outline\n          block\n          (click)="setTripDriverWaiting()">Esperando al pasajero</button>\n      </ion-col>\n      <ion-col *ngIf="trip.current_status == \'waiting\'">\n        <button\n          ion-button\n          outline\n          block\n          (click)="setTripInProgress()"\n          color="danger">Hacia el destino</button>\n      </ion-col>\n      <ion-col *ngIf="trip.current_status == \'transitd\'">\n        <button\n          ion-button\n          outline\n          block\n          (click)="setTripFinished()"\n          color="danger">Finalizado</button>\n      </ion-col>\n      <ion-col *ngIf="trip.current_status == \'finished\'">\n        <button\n          ion-button\n          outline\n          block\n          color="danger">Completar</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <button ion-button block (click)="launchNav()">Navegar al destino</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/trip-page/trip-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_2__services_trip__["a" /* tripService */]])
    ], TripPage);
    return TripPage;
}());

//# sourceMappingURL=trip-page.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map