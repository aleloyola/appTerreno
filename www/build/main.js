webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(196);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_endpoints__ = __webpack_require__(199);
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
        this.EP = __WEBPACK_IMPORTED_MODULE_4__data_endpoints__["a" /* default */];
    }
    AuthService.prototype.signin = function (username, password) {
        console.log("username:" + username + " - pass:" + password);
        //agregar archivo properties con las URLs
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = { username: username, password: password };
        return this.http.post(this.EP[0].apiToken, body, options)
            .map(this.extractData);
        //.catch(this.handleErrorObservable);
    };
    AuthService.prototype.logout = function () {
        console.log("deslogeando");
        return true;
    };
    AuthService.prototype.getActiveUser = function (username) {
        return this.http.get(this.EP[0].transportSearch + username + '/')
            .map(this.extractData);
        //.catch(this.handleErrorObservable);
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
        /*console.error(error.message || error);
        return Observable.throw(error.message || error);*/
        return error;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/contact/contact.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trip_page_trip_page__ = __webpack_require__(200);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.tripSrv = tripSrv;
        this.storage = storage;
        this.tripSrv.getTripsByTransport('3')
            .subscribe(function (data) { return _this.trips = data; });
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.storage.get('transportId').then(function (t) {
            console.log('el transportId almacenado es:' + t);
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.tripSrv.getTripsByTransport('3')
                .subscribe(function (data) { return _this.trips = data; });
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.onLoadTrip = function (trip, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trip_page_trip_page__["a" /* TripPage */], { trip: trip, index: index });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Trip List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n     pullingIcon="arrow-dropdown"\n     pullingText="Pull to refresh"\n     refreshingSpinner="circles"\n     refreshingText="Refreshing...">\n   </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let trip of trips; let i = index">\n    <img src="../../assets/imgs/advance-card-map-madison.png">\n    <ion-item>\n      <!--<ion-icon name="football" item-start large></ion-icon>-->\n      <h2>Origen: {{trip.pickup_address}}</h2>\n      <h2>Destino: {{trip.destination_address}}</h2>\n      <ion-note>{{ trip.passenger.first_name }}  {{trip.passenger.last_name}}</ion-note>\n      <ion-note>{{trip.mobile_phone}}</ion-note>\n    </ion-item>\n    <ion-item>\n      <span item-start>{{trip.start_trip_dt}}</span>\n      <button ion-button icon-start clear item-end (click)="onLoadTrip(trip, i)">\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip__["a" /* tripService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_endpoints__ = __webpack_require__(199);
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
    tripService.prototype.getTripsByTransport = function (transporNumber) {
        return this.http.get(this.EP[0].tripByTransport + transporNumber)
            .map(function (res) { return res.json(); });
    };
    tripService.prototype.getTripFinishedByTransport = function (transporNumber) {
        return this.http.get(this.EP[0].tripsFinished + transporNumber)
            .map(function (res) { return res.json(); });
    };
    tripService.prototype.setTripDriverInTransit = function (tripId) {
        return this.http.get(this.EP[0].tripStatusToDriverInTransit + tripId)
            .map(function (res) { return res.json(); });
    };
    tripService.prototype.setTripInProgress = function (tripId) {
        return this.http.get(this.EP[0].tripStatusInProgress + tripId)
            .map(function (res) { return res.json(); });
    };
    tripService.prototype.setTripFinished = function (tripId) {
        return this.http.get(this.EP[0].tripStatusToFinished + tripId)
            .map(function (res) { return res.json(); });
    };
    tripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], tripService);
    return tripService;
}());

//# sourceMappingURL=trip.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        apiToken: 'http://dev.oceanictp.cl:8100/api/token/',
        transportSearch: 'http://dev.oceanictp.cl:8100/transportSearch/',
        tripByTransport: 'http://dev.oceanictp.cl:8100/trip/transport/',
        tripsFinished: 'http://dev.oceanictp.cl:8100/trip/TF/',
        tripStatusToDriverInTransit: 'http://dev.oceanictp.cl:8100/trip/setStatusDIT/',
        tripStatusInProgress: 'http://dev.oceanictp.cl:8100/trip/setStatusTIP/',
        tripStatusToFinished: 'http://dev.oceanictp.cl:8100/trip/setStatusTF/'
    }
]);
//# sourceMappingURL=endpoints.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
    function TripPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TripPage.prototype.ngOnInit = function () {
        this.trip = this.navParams.get('trip');
        this.index = this.navParams.get('index');
    };
    TripPage.prototype.onEditRecipe = function () {
        //this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
    };
    TripPage.prototype.onAddIngredients = function () {
        //this.slService.addItems(this.recipe.ingredients);
    };
    TripPage.prototype.onDeleteRecipe = function () {
        //this.recipesService.removeRecipe(this.index);
        this.navCtrl.popToRoot();
    };
    TripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'trip-page',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/trip-page/trip-page.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trip Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n        <ion-col text-left>\n          <div class="subtitle"><strong>Pasajero</strong></div>\n        </ion-col>\n        <ion-col text-left>\n          <div class="subtitle">{{trip._id}}{{trip.passenger.first_name}} {{trip.passenger.last_name}}</div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col text-left>\n          <div class="subtitle"><strong>Convenio</strong></div>\n        </ion-col>\n        <ion-col text-left>\n          <div class="subtitle">{{ trip.customer.name }}</div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Origen</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.pickup_address }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Destino</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.destination_address }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Teléfono 1</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.mobile_phone }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Teléfono 2</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.phone }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Fecha</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.scheduler_trip_dt }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left>\n        <div class="subtitle"><strong>Forma de Pago</strong></div>\n      </ion-col>\n      <ion-col text-left>\n        <div class="subtitle">{{ trip.payment_term }}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button\n          ion-button\n          outline\n          block\n          (click)="onEditRecipe()">In progress</button>\n      </ion-col>\n      <ion-col>\n        <button\n          ion-button\n          outline\n          block\n          (click)="onDeleteRecipe()"\n          color="danger">Cancel Trip</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/trip-page/trip-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TripPage);
    return TripPage;
}());

//# sourceMappingURL=trip-page.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utils__ = __webpack_require__(202);
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
            _this.authService.signin(form.value.email, form.value.password)
                .subscribe(function (data) {
                console.log(data);
                //loading.dismiss();
                _this.authService.getActiveUser(form.value.email)
                    .subscribe(function (data) {
                    console.log(data);
                    //console.log(data[0].url);
                    //var transportId = this.utils.getIdFromURL(body[0].url);
                    //let len = data[0].url.length;
                    //var transportId = data[0].url.substring(len-2, len-1);
                    console.log("TransportID: " + _this.utilsService.getIdFromURL(data[0].url));
                    _this.storage.set('username', form.value.email);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/alexis/Developer/ionic/appTerreno/src/pages/login/login.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignin(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Mail</ion-label>\n        <ion-input\n          type="email"\n          ngModel\n          name="email"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input\n          type="password"\n          ngModel\n          name="password"\n          required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Signin</button>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/alexis/Developer/ionic/appTerreno/src/pages/login/login.html"*/,
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getIdFromURL = function (URL) {
        var str = URL;
        var len = str.length;
        var res = str.substring(len - 2, len - 1);
        return res;
    };
    return UtilsService;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_trip__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_utils__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_trip_page_trip_page__ = __webpack_require__(200);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trip_page_trip_page__["a" /* TripPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trip_page_trip_page__["a" /* TripPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_trip__["a" /* tripService */],
                __WEBPACK_IMPORTED_MODULE_14__services_utils__["a" /* UtilsService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(102);
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

/***/ })

},[205]);
//# sourceMappingURL=main.js.map