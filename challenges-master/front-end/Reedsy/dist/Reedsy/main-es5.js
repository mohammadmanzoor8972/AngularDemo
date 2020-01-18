(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-warning justify-content-between\">\n        <a class=\"navbar-brand\">Reedsy's Book Store</a>\n        <form class=\"form-inline\" (submit)=\"submitHnadler()\">\n          <input #input class=\"form-control mr-sm-2\" type=\"search\"\n           placeholder=\"Search\" aria-label=\"Search\" value=\"\" [(ngModel)]=\"search\" name=\"search\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" (click)=\"searchHandler(input)\">Search</button>\n        </form>\n      </nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upvote/upvote.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upvote/upvote.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"upvote\">\n        <button \n        class=\"btn {{upvoted ? 'btn-outline-warning' : 'btn-warning' }}\" \n        type=\"button\">{{upvoted=='true' ? 'Upvoted' : 'Upvote' }}</button> <span> Upvoted {{upvotes}} times</span>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-detail/book-detail.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-detail/book-detail.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n\n<div class=\"title d-flex flex-row flex-wrap\">\n    <div class=\"upvote\"> \n        <h3>{{book?.title}}</h3> \n        <p class=\"author\">{{book?.author}}</p>\n        </div>\n        <app-upvote [upvoted]=\"book.upvoted\" [upvotes]=\"book.upvotes\" class=\"justify-content-end\"></app-upvote>\n</div>\n<div class=\"cover text-center\">\n    <img src=\"{{book.cover}}\"/>\n</div>\n<h4>Synopsis</h4>\n<p>\n{{book.synopsis}}\n</p>\n<strong>\n<span class=\"rating\">Rating {{book?.rating}}/10</span></strong>\n       \n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-list/book-list.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-list/book-list.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header (handler)=\"filterBook($event)\"></app-header>\n<div class=\"title\">\n        <h2 class=\"text-center\">Top books of all time</h2>\n    </div>\n<div class=\"container\" *ngIf=\"bookList.length>0\">\n\n\n    <div class=\"book-list\">\n        <div class=\"book-item d-flex flex-row\" *ngFor=\"let book of bookList\">\n            <div class=\"book-desc  overflow-hidden\">\n                <h5 routerLink=\"/book/{{book.slug}}\">{{book?.title}}</h5> <span class=\"rating\">{{book?.rating}}</span>\n                <p class=\"author\">{{book?.author}}</p>\n                <p class=\"synopsis\">\n                    {{book?.synopsis}}\n                </p>\n                <app-upvote [upvoted]=\"book.upvoted\" [upvotes]=\"book.upvotes\"></app-upvote>\n                \n            </div>\n            <div class=\"book-image\" routerLink=\"/book/{{book.slug}}\">\n                <img src=\"{{book.cover}}\"/>\n            </div>\n        </div>\n    </div>\n    <nav aria-label=\"Page navigation example\">\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav>\n    <!-- Content here -->\n  </div>\n\n<div class=\"container text-center\" *ngIf=\"bookList.length==0\">\nBook not found !\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/book-detail/book-detail.component */ "./src/app/pages/book-detail/book-detail.component.ts");
            /* harmony import */ var _pages_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/book-list/book-list.component */ "./src/app/pages/book-list/book-list.component.ts");
            var routes = [
                {
                    path: '',
                    redirectTo: 'booklist',
                    pathMatch: 'full'
                },
                {
                    path: 'booklist',
                    component: _pages_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"]
                },
                {
                    path: 'book/:id',
                    component: _pages_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_3__["BookDetailComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n  margin: 0;\n  padding: 0;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWxhbS9Eb2N1bWVudHMvTGVhcm4vQW5ndWxhci9jaGFsbGVuZ2VzLW1hc3Rlci9mcm9udC1lbmQvUmVlZHN5L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSIsImJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Reedsy';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _pages_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/book-list/book-list.component */ "./src/app/pages/book-list/book-list.component.ts");
            /* harmony import */ var _pages_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/book-detail/book-detail.component */ "./src/app/pages/book-detail/book-detail.component.ts");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _components_upvote_upvote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/upvote/upvote.component */ "./src/app/components/upvote/upvote.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _pages_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_6__["BookListComponent"],
                        _pages_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                        _components_upvote_upvote_component__WEBPACK_IMPORTED_MODULE_9__["UpvoteComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                    providers: [_services_book_service__WEBPACK_IMPORTED_MODULE_11__["BookService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/header/header.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                    this.handler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.search = "";
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                HeaderComponent.prototype.searchHandler = function (input) {
                    this.handler.emit({ text: input.value });
                };
                HeaderComponent.prototype.submitHnadler = function () {
                    event.preventDefault;
                    this.handler.emit({ text: this.search });
                };
                return HeaderComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], HeaderComponent.prototype, "handler", void 0);
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/upvote/upvote.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/upvote/upvote.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXB2b3RlL3Vwdm90ZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/upvote/upvote.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/upvote/upvote.component.ts ***!
          \*******************************************************/
        /*! exports provided: UpvoteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function () { return UpvoteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UpvoteComponent = /** @class */ (function () {
                function UpvoteComponent() {
                    this.upvoted = false;
                }
                UpvoteComponent.prototype.ngOnInit = function () {
                };
                return UpvoteComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpvoteComponent.prototype, "upvoted", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpvoteComponent.prototype, "upvotes", void 0);
            UpvoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-upvote',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upvote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upvote/upvote.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upvote.component.scss */ "./src/app/components/upvote/upvote.component.scss")).default]
                })
            ], UpvoteComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/book-detail/book-detail.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/pages/book-detail/book-detail.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 150px;\n  margin: auto;\n  border: 1px solid bisque;\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 20;\n  box-shadow: 0 0 3px 0px #afafaf;\n  padding: 20px;\n}\n\n.upvote {\n  flex-grow: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWxhbS9Eb2N1bWVudHMvTGVhcm4vQW5ndWxhci9jaGFsbGVuZ2VzLW1hc3Rlci9mcm9udC1lbmQvUmVlZHN5L3NyYy9hcHAvcGFnZXMvYm9vay1kZXRhaWwvYm9vay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jvb2stZGV0YWlsL2Jvb2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdDO0VBQ0ksWUFBQTtBQ0FMIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9vay1kZXRhaWwvYm9vay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6MTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJpc3F1ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAyMDtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDBweCAjYWZhZmFmO1xuICAgIHBhZGRpbmc6MjBweDtcblxuIH1cblxuIC51cHZvdGV7XG4gICAgIGZsZXgtZ3JvdzogMjtcbiB9IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJpc3F1ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAyMDtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAwcHggI2FmYWZhZjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnVwdm90ZSB7XG4gIGZsZXgtZ3JvdzogMjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/book-detail/book-detail.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/pages/book-detail/book-detail.component.ts ***!
          \************************************************************/
        /*! exports provided: BookDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function () { return BookDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
            var BookDetailComponent = /** @class */ (function () {
                function BookDetailComponent(route, http) {
                    this.route = route;
                    this.http = http;
                    this.book = {};
                }
                BookDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (parms) {
                        console.log(parms);
                        _this.http.getBookbyId(parms.id).subscribe(function (resp) {
                            _this.book = resp;
                        });
                    });
                };
                return BookDetailComponent;
            }());
            BookDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] }
            ]; };
            BookDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-book-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-detail/book-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-detail.component.scss */ "./src/app/pages/book-detail/book-detail.component.scss")).default]
                })
            ], BookDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/book-list/book-list.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/pages/book-list/book-list.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a {\n  cursor: pointer;\n}\n\n.pagination {\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.title {\n  padding: 30px;\n}\n\n.container {\n  margin-top: 50px;\n  margin: auto;\n  border: 1px solid bisque;\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 20;\n  box-shadow: 0 0 3px 0px #afafaf;\n}\n\n.book-item:nth-of-type(odd) {\n  background: #fafaf4;\n}\n\n.book-item {\n  height: 240px;\n  margin-bottom: 20px;\n  background: #ffff;\n}\n\n.book-item .book-desc {\n  width: 80%;\n  padding: 1rem;\n}\n\n.book-item .book-desc h5 {\n  display: inline;\n  color: #a27934;\n  cursor: pointer;\n}\n\n.book-item .book-desc span.rating:before {\n  content: \" (\";\n}\n\n.book-item .book-desc span.rating:after {\n  content: \")\";\n}\n\n.book-item .book-desc .author {\n  font-style: italic;\n  padding: 0.5rem 0 0.5rem 0;\n}\n\n.book-item .book-desc .synopsis {\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.book-item .book-desc .upvote {\n  margin: 5px 0 5px 0;\n}\n\n.book-item .book-image {\n  width: 15%;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.book-item .book-image img {\n  height: 192px;\n  width: 123px;\n  box-shadow: 0 0 2px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWxhbS9Eb2N1bWVudHMvTGVhcm4vQW5ndWxhci9jaGFsbGVuZ2VzLW1hc3Rlci9mcm9udC1lbmQvUmVlZHN5L3NyYy9hcHAvcGFnZXMvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFJLGVBQUE7QUNFSjs7QUREQTtFQUNHLHVCQUFBO0VBQ0EsZUFBQTtBQ0lIOztBREZBO0VBQ0csYUFBQTtBQ0tIOztBREhBO0VBQ0csZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDTUg7O0FESEE7RUFDRyxtQkFBQTtBQ01IOztBREpBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNPSDs7QURMRztFQUNHLFVBQUE7RUFDQSxhQUFBO0FDT047O0FETE07RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNPVDs7QURMTTtFQUNHLGFBQUE7QUNPVDs7QURMTTtFQUNHLFlBQUE7QUNPVDs7QURMTTtFQUNHLGtCQUFBO0VBQ0EsMEJBQUE7QUNPVDs7QURMTTtFQUNHLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDT1Q7O0FESk07RUFDRyxtQkFBQTtBQ01UOztBREhHO0VBQ0csVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDS047O0FESk07RUFDRyxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDTVQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7IGN1cnNvcjogcG9pbnRlcjsgfVxuLnBhZ2luYXRpb24ge1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udGl0bGV7XG4gICBwYWRkaW5nOjMwcHg7XG59XG4uY29udGFpbmVye1xuICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgbWFyZ2luOiBhdXRvO1xuICAgYm9yZGVyOiAxcHggc29saWQgYmlzcXVlO1xuICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgIGJveC1zaGFkb3c6IDIwO1xuICAgYm94LXNoYWRvdzogMCAwIDNweCAwcHggI2FmYWZhZjtcbn1cblxuLmJvb2staXRlbTpudGgtb2YtdHlwZShvZGQpe1xuICAgYmFja2dyb3VuZDogI2ZhZmFmNDtcbn1cbi5ib29rLWl0ZW17XG4gICBoZWlnaHQ6IDI0MHB4O1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgIGJhY2tncm91bmQ6ICNmZmZmO1xuIFxuICAgLmJvb2stZGVzY3tcbiAgICAgIHdpZHRoOjgwJTtcbiAgICAgIHBhZGRpbmc6MXJlbTtcblxuICAgICAgaDUge1xuICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgY29sb3I6I2EyNzkzNDtcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIHNwYW4ucmF0aW5nOmJlZm9yZXtcbiAgICAgICAgIGNvbnRlbnQ6ICcgKCdcbiAgICAgIH1cbiAgICAgIHNwYW4ucmF0aW5nOmFmdGVye1xuICAgICAgICAgY29udGVudDonKSdcbiAgICAgIH1cbiAgICAgIC5hdXRob3J7XG4gICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMCAuNXJlbSAwO1xuICAgICAgfVxuICAgICAgLnN5bm9wc2lze1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG5cbiAgICAgIC51cHZvdGV7XG4gICAgICAgICBtYXJnaW4gOiA1cHggMCA1cHggMDtcbiAgICAgIH1cbiAgIH1cbiAgIC5ib29rLWltYWdle1xuICAgICAgd2lkdGg6MTUlO1xuICAgICAgcGFkZGluZzouNXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGltZ3tcbiAgICAgICAgIGhlaWdodDogMTkycHg7XG4gICAgICAgICB3aWR0aDogMTIzcHg7XG4gICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xuICAgICAgfVxuICB9XG5cbn1cblxuIiwiYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBiaXNxdWU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMjA7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMHB4ICNhZmFmYWY7XG59XG5cbi5ib29rLWl0ZW06bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZjQ7XG59XG5cbi5ib29rLWl0ZW0ge1xuICBoZWlnaHQ6IDI0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbn1cbi5ib29rLWl0ZW0gLmJvb2stZGVzYyB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uYm9vay1pdGVtIC5ib29rLWRlc2MgaDUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbG9yOiAjYTI3OTM0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9vay1pdGVtIC5ib29rLWRlc2Mgc3Bhbi5yYXRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCIgKFwiO1xufVxuLmJvb2staXRlbSAuYm9vay1kZXNjIHNwYW4ucmF0aW5nOmFmdGVyIHtcbiAgY29udGVudDogXCIpXCI7XG59XG4uYm9vay1pdGVtIC5ib29rLWRlc2MgLmF1dGhvciB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDA7XG59XG4uYm9vay1pdGVtIC5ib29rLWRlc2MgLnN5bm9wc2lzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmJvb2staXRlbSAuYm9vay1kZXNjIC51cHZvdGUge1xuICBtYXJnaW46IDVweCAwIDVweCAwO1xufVxuLmJvb2staXRlbSAuYm9vay1pbWFnZSB7XG4gIHdpZHRoOiAxNSU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvb2staXRlbSAuYm9vay1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDE5MnB4O1xuICB3aWR0aDogMTIzcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggYmxhY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/book-list/book-list.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/pages/book-list/book-list.component.ts ***!
          \********************************************************/
        /*! exports provided: BookListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function () { return BookListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
            var BookListComponent = /** @class */ (function () {
                function BookListComponent(http) {
                    this.http = http;
                    this.bookList = [];
                }
                BookListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.http.getBookList().subscribe(function (resp) {
                        _this.bookList = resp.books.slice();
                        console.log(resp.books);
                        //  this.bookList = [...resp]
                    });
                };
                BookListComponent.prototype.filterBook = function (e) {
                    var _this = this;
                    var txt = e.text;
                    this.http.getBookList().subscribe(function (resp) {
                        _this.bookList = resp.books.slice().filter(function (book) { return book.title.includes(txt); });
                    });
                };
                return BookListComponent;
            }());
            BookListComponent.ctorParameters = function () { return [
                { type: _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
            ]; };
            BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-book-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book-list/book-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-list.component.scss */ "./src/app/pages/book-list/book-list.component.scss")).default]
                })
            ], BookListComponent);
            /***/ 
        }),
        /***/ "./src/app/services/book.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/book.service.ts ***!
          \******************************************/
        /*! exports provided: BookService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function () { return BookService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var BookService = /** @class */ (function () {
                function BookService(http) {
                    this.http = http;
                }
                BookService.prototype.getBookList = function () {
                    return this.http.get("http://localhost:3000/books").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
                };
                BookService.prototype.getBookbyId = function (slug) {
                    return this.http.get("http://localhost:3000/books/" + slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
                };
                return BookService;
            }());
            BookService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BookService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/malam/Documents/Learn/Angular/challenges-master/front-end/Reedsy/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map