webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.joinCall = function () {
        if (this.roomName && this.userName) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                roomName: this.roomName,
                userName: this.userName
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/kalyanaraman/Documents/OpenTok/video-chat/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Snap Chat</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <div class="top-section">\n\n    </div>\n    <div class="login-wrapper">\n        <div class="login-section">\n            <form (ngSubmit)=\'joinCall()\'>\n                <ion-list mode="ios">\n                    <ion-item mode="ios">\n                        <ion-label fixed>Name</ion-label>\n                        <ion-input type="text" autocapitalize="none" name="userName" [(ngModel)]="userName" required></ion-input>\n                    </ion-item>\n\n                    <ion-item mode="ios">\n                        <ion-label fixed>Chat Room</ion-label>\n                        <ion-input type="text" autocapitalize="none" name="roomName" [(ngModel)]="roomName" required></ion-input>\n                    </ion-item>\n\n                </ion-list>\n\n                <div padding>\n                    <button type="submit" ion-button round color="primary" full text-uppercase>Join Call</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/kalyanaraman/Documents/OpenTok/video-chat/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_video_pane_video_pane__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(197);
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
    function HomePage(http, navCtrl, navParams, renderer, diagnostic, platform) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.publishVideo = true;
        this.publishAudio = true;
        this.isConnected = false;
        this.participants = [];
        this.audioState = true;
        this.videoState = true;
        this.subscribers = [];
        this.activeParticipant = null;
        this.showDefaultPic = false;
        this.roomName = this.navParams.get("roomName");
        this.userName = this.navParams.get("userName");
    }
    HomePage.prototype.ngOnInit = function () {
        this.requestRequiredPermissions();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    HomePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.handleBack();
        }, 10);
    };
    HomePage.prototype.handleBack = function () {
        this.endCall();
    };
    // Toggle audio state
    HomePage.prototype.toggleAudio = function () {
        this.audioState = !this.audioState;
        this.publisher.publishAudio(this.audioState);
        this.publisher.setStyle('videoDisabledDisplayMode', (this.audioState == true ? 'off' : 'on'));
    };
    // Toggle video state
    HomePage.prototype.toggleVideo = function () {
        this.videoState = !this.videoState;
        this.publisher.publishVideo(this.videoState);
        this.publisher.setStyle('videoDisabledDisplayMode', (this.videoState == true ? 'off' : 'on'));
    };
    HomePage.prototype.endCall = function () {
        console.log('inside end call');
        if (this.session && this.isConnected) {
            this.session.disconnect();
        }
        this.navCtrl.pop();
    };
    HomePage.prototype.startCall = function () {
        var _this = this;
        // (optional) add server code here
        var SERVER_BASE_URL = 'https://opentok-videochat-testing.herokuapp.com';
        this.http.get(SERVER_BASE_URL + '/room/' + this.roomName).subscribe(function (res) {
            console.log(res);
            _this.apiKey = res.apiKey;
            _this.sessionId = res.sessionId;
            _this.token = res.token;
            _this.initializeSession();
        }, this.handleError);
    };
    // Handling all of our errors here by alerting them
    HomePage.prototype.handleError = function (error) {
        if (error) {
            alert("Please check your network connection and try again.");
            this.endCall();
        }
    };
    HomePage.prototype.requestRequiredPermissions = function () {
        var _this = this;
        this.diagnostic.requestRuntimePermissions([
            this.diagnostic.permission.CAMERA,
            this.diagnostic.permission.RECORD_AUDIO
        ]).then(function (statuses) {
            var isPermissionGranted = true;
            for (var permission in statuses) {
                switch (statuses[permission]) {
                    case _this.diagnostic.permissionStatus.GRANTED:
                        console.log("Permission granted to use " + permission);
                        break;
                    case _this.diagnostic.permissionStatus.NOT_REQUESTED:
                        console.log("Permission to use " + permission + " has not been requested yet");
                    case _this.diagnostic.permissionStatus.DENIED:
                        console.log("Permission denied to use " + permission + " - ask again?");
                    case _this.diagnostic.permissionStatus.DENIED_ALWAYS:
                        console.log("Permission permanently denied to use " + permission + " - guess we won't be using it then!");
                    default:
                        isPermissionGranted = false;
                }
            }
            if (isPermissionGranted) {
                _this.startCall();
            }
            else {
                alert("We need camera and microphone permissions to start the video call");
            }
        }, function (error) {
            if (error == "cordova_not_available") {
                _this.startCall();
            }
            else {
                alert("Please check your network connection and try again.");
                _this.endCall();
            }
            console.error("The following error occurred: " + error);
        });
    };
    HomePage.prototype.initializeSession = function () {
        var _this = this;
        this.session = OT.initSession(this.apiKey, this.sessionId);
        this.session.on('streamCreated', function (event) {
            _this.addParticipant(event.stream);
            var subscriber = _this.session.subscribe(event.stream, { insertDefaultUI: false, insertMode: 'append', width: '100%', height: '100%' }, _this.handleError);
            subscriber.on('videoElementCreated', function (event) {
                var id = event.target.stream.id;
                var participant = _this.getParticipantOfId(id);
                if (participant) {
                    console.log("Add video for participant", participant);
                    participant.video = event.element;
                }
                if (!_this.activeParticipant) {
                    _this.showParticipantInMainView(participant);
                }
                console.log("Current participants ", _this.participants);
            });
            subscriber.on({
                videoDisabled: function (event) {
                    console.log("inside video disabled");
                    subscriber.setStyle('videoDisabledDisplayMode', 'on');
                    var _id = event.target.stream.id;
                    if (_id == _this.activeParticipant.id) {
                        _this.showDefaultPic = true;
                    }
                },
                videoEnabled: function (event) {
                    console.log("inside video enabled");
                    subscriber.setStyle('videoDisabledDisplayMode', 'off');
                    var _id = event.target.stream.id;
                    if (_id == _this.activeParticipant.id) {
                        _this.showDefaultPic = false;
                    }
                }
            });
        });
        this.session.on("streamDestroyed", function (event) {
            console.log("Stream " + event.stream.name + " ended. " + event.reason);
            var _id = event.stream.id;
            var _participant = _this.getParticipantOfId(_id);
            var deleteIndex = _this.participants.indexOf(_participant);
            _this.participants.splice(deleteIndex, 1);
            if (_this.participants.length > 0) {
                var p = _this.participants[0];
                _this.showParticipantInMainView(p);
            }
        });
        var pub_name = this.userName;
        // Create a publisher
        this.publisher = OT.initPublisher('publisher', {
            insertMode: 'append',
            width: '100%',
            height: '100%',
            name: pub_name,
            style: { nameDisplayMode: "off", buttonDisplayMode: "off" }
        }, this.handleError);
        this.publisher.on('videoElementCreated', function (event) {
            console.log("Video published.");
        });
        // Connect to the session
        this.session.connect(this.token, function (error) {
            // If the connection is successful, publish to the session
            if (error) {
                _this.handleError(error);
            }
            else {
                _this.isConnected = true;
                _this.session.publish(_this.publisher, _this.handleError);
            }
        });
    };
    // Add the participant details from the stream object
    HomePage.prototype.addParticipant = function (stream) {
        var participant = {
            id: stream.id,
            name: stream.name
        };
        console.log("P added ", participant);
        this.participants.push(participant);
    };
    // Return the participant for given id
    HomePage.prototype.getParticipantOfId = function (id) {
        var participant = this.participants.find(function (p) {
            return p.id == id;
        });
        return participant;
    };
    // Show the given participant in main view
    HomePage.prototype.showParticipantInMainView = function (participant) {
        if (participant != this.activeParticipant) {
            this.activeParticipant = participant;
            this.showDefaultPic = false;
            document.getElementById("mainView").innerHTML = "";
            document.getElementById("mainView").appendChild(participant.video);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('currentVideo'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "currentVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__directives_video_pane_video_pane__["a" /* VideoPaneDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* QueryList */])
    ], HomePage.prototype, "videoPanes", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kalyanaraman/Documents/OpenTok/video-chat/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary" hideBackButton="true">\n        <ion-title>\n            Snap Chat\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- <div id="subscriber1" style="height: 100%"></div> -->\n\n    <div id="mainView" class="main-view" style="height: 100%;">\n        <div *ngIf="participants.length == 0">\n            <h3>No participants in the call.</h3>\n        </div>\n    </div>\n    <!-- <div class="no-video-pic" *ngIf="showDefaultPic"></div> -->\n\n    <!-- bottom section -->\n    <div class="bottom-section">\n\n\n        <div class="controls">\n            <button ion-button icon-only class="button-audio" (click)="toggleAudio()"> \n                  <ion-icon [name]="audioState ? \'mic\' : \'mic-off\'"  color="dark"></ion-icon>\n                </button>\n            <button ion-button icon-only class="button-call" (click)="endCall()"> \n                  <ion-icon name="call"></ion-icon>\n                </button>\n            <button ion-button icon-only class="button-video" (click)="toggleVideo()">\n                  <i [class]="videoState ? \'mi mi-videocam\' : \'mi mi-videocam-off\'"></i>\n                  <!-- <ion-icon name="videocam"></ion-icon> -->\n                </button>\n        </div>\n\n\n        <!-- <div class="participants" id="subscriber">\n            <div id="publisher" class="video-stream participant" (click)="participantDidSelect(this)"></div>\n        </div> -->\n\n        <div class="participants">\n            <div id="publisher" class="video-stream participant"></div>\n            <div class="participant" *ngFor="let participant of participants; let i = index" (click)="showParticipantInMainView(participant)" [ngClass]="{\'active\': participant == activeParticipant}">\n                <div class="name">{{participant.name | slice: 0: 1}}</div>\n                <div class="full-name">{{participant.name}}</div>\n            </div>\n        </div>\n\n    </div>\n    <!-- <div id="videos">\n        <div id="subscriber"></div>\n        <div id="publisher"></div>\n\n        <div id="controls">\n    	<a (click)=\'toggleVideo();\' class="icon-circle icon-circle-outline">\n          <i class="material-icons">{{cameraStatus()}}</i>\n        </a>\n        <a (click)=\'toggleAudio();\' class="icon-circle icon-circle-outline">\n          <i class="material-icons">{{micStatus()}}</i>\n        </a>\n        <a (click)=\'endCall();\' color="red"  class="red-background icon-circle icon-circle-outline">\n          <i class="material-icons">call_end</i>\n        </a>\n        \n    </div>\n    </div>\n     -->\n</ion-content>'/*ion-inline-end:"/Users/kalyanaraman/Documents/OpenTok/video-chat/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPaneDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the VideoPaneDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var VideoPaneDirective = (function () {
    function VideoPaneDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        console.log('Hello VideoPaneDirective Directive', this.subscriber);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], VideoPaneDirective.prototype, "subscriber", void 0);
    VideoPaneDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[videoPane]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], VideoPaneDirective);
    return VideoPaneDirective;
}());

//# sourceMappingURL=video-pane.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_video_pane_video_pane__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(201);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__directives_video_pane_video_pane__["a" /* VideoPaneDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(199);
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
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            keyboard.disableScroll(true);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kalyanaraman/Documents/OpenTok/video-chat/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kalyanaraman/Documents/OpenTok/video-chat/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map