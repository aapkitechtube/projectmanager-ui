(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewtask/viewtask.component */ "./src/app/viewtask/viewtask.component.ts");







var routes = [
    {
        path: 'project/add',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
    },
    {
        path: 'project/edit/:projectId',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
    },
    {
        path: 'user/add',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
    },
    {
        path: 'user/edit/:userId',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
    },
    {
        path: 'task/add',
        component: _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"]
    },
    {
        path: 'task/edit/:userId',
        component: _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"]
    },
    {
        path: 'viewtasks',
        component: _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_6__["ViewtaskComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background-color: #420fb9;\r\n  }\r\n  .navbar .navbar-brand {\r\n    color: #a4a6a7;\r\n  }\r\n  .navbar .navbar-brand:hover,\r\n  .navbar .navbar-brand:focus {\r\n    color: #2134a1;\r\n  }\r\n  .navbar .navbar-text {\r\n    color: #a4a6a7;\r\n  }\r\n  .navbar .navbar-text a {\r\n    color: #2134a1;\r\n  }\r\n  .navbar .navbar-text a:hover,\r\n  .navbar .navbar-text a:focus {\r\n    color: #2134a1; \r\n  }\r\n  .navbar .navbar-nav .nav-link {\r\n    color: #a4a6a7;\r\n    border-radius: .25rem;\r\n    margin: 0 0.25em;\r\n  }\r\n  .navbar .navbar-nav .nav-link:not(.disabled):hover,\r\n  .navbar .navbar-nav .nav-link:not(.disabled):focus {\r\n    color: #2134a1;\r\n  }\r\n  .navbar .navbar-nav .nav-item.active .nav-link,\r\n  .navbar .navbar-nav .nav-item.active .nav-link:hover,\r\n  .navbar .navbar-nav .nav-item.active .nav-link:focus,\r\n  .navbar .navbar-nav .nav-item.show .nav-link,\r\n  .navbar .navbar-nav .nav-item.show .nav-link:hover,\r\n  .navbar .navbar-nav .nav-item.show .nav-link:focus {\r\n    color: #2134a1;\r\n    background-color: #420fb9;\r\n  }\r\n  .navbar .navbar-toggle {\r\n    border-color: #420fb9;\r\n  }\r\n  .navbar .navbar-toggle:hover,\r\n  .navbar .navbar-toggle:focus {\r\n    background-color: #420fb9;\r\n  }\r\n  .navbar .navbar-toggle .navbar-toggler-icon {\r\n    color: #a4a6a7;\r\n  }\r\n  .navbar .navbar-collapse,\r\n  .navbar .navbar-form {\r\n    border-color: #a4a6a7;\r\n  }\r\n  .navbar .navbar-link {\r\n    color: #a4a6a7;\r\n  }\r\n  .navbar .navbar-link:hover {\r\n    color: #2134a1;\r\n  }\r\n  @media (max-width: 575px) {\r\n    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {\r\n      color: #a4a6a7;\r\n    }\r\n    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n      color: #2134a1;\r\n    }\r\n    .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n      color: #2134a1;\r\n      background-color: #420fb9;\r\n    }\r\n  }\r\n  @media (max-width: 767px) {\r\n    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {\r\n      color: #a4a6a7;\r\n    }\r\n    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n      color: #2134a1;\r\n    }\r\n    .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n      color: #2134a1;\r\n      background-color: #420fb9;\r\n    }\r\n  }\r\n  @media (max-width: 991px) {\r\n    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {\r\n      color: #a4a6a7;\r\n    }\r\n    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n      color: #2134a1;\r\n    }\r\n    .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n      color: #2134a1;\r\n      background-color: #420fb9;\r\n    }\r\n  }\r\n  @media (max-width: 1199px) {\r\n    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {\r\n      color: #a4a6a7;\r\n    }\r\n    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n      color: #2134a1;\r\n    }\r\n    .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n      color: #2134a1;\r\n      background-color: #420fb9;\r\n    }\r\n  }\r\n  .navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {\r\n    color: #a4a6a7;\r\n  }\r\n  .navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,\r\n  .navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {\r\n    color: #2134a1;\r\n  }\r\n  .navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {\r\n    color: #2134a1;\r\n    background-color: #420fb9;\r\n  }\r\n  .btn-light {\r\n    background-color: #a4a6a7;\r\n  }\r\n  .error {\r\n      color: rgb(124, 13, 13)\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7Ozs7OztJQU1FLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBOztJQUVFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBOztJQUVFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7O01BRUUsY0FBYztJQUNoQjtJQUNBO01BQ0UsY0FBYztNQUNkLHlCQUF5QjtJQUMzQjtFQUNGO0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7SUFDQTs7TUFFRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxjQUFjO01BQ2QseUJBQXlCO0lBQzNCO0VBQ0Y7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtJQUNBOztNQUVFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGNBQWM7TUFDZCx5QkFBeUI7SUFDM0I7RUFDRjtFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7O01BRUUsY0FBYztJQUNoQjtJQUNBO01BQ0UsY0FBYztNQUNkLHlCQUF5QjtJQUMzQjtFQUNGO0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0VBRUE7TUFDSTtFQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjBmYjk7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogI2E0YTZhNztcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWJyYW5kOmhvdmVyLFxyXG4gIC5uYXZiYXIgLm5hdmJhci1icmFuZDpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzIxMzRhMTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLXRleHQge1xyXG4gICAgY29sb3I6ICNhNGE2YTc7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci10ZXh0IGEge1xyXG4gICAgY29sb3I6ICMyMTM0YTE7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci10ZXh0IGE6aG92ZXIsXHJcbiAgLm5hdmJhciAubmF2YmFyLXRleHQgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzIxMzRhMTsgXHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjYTRhNmE3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwIDAuMjVlbTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbms6bm90KC5kaXNhYmxlZCk6aG92ZXIsXHJcbiAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbms6bm90KC5kaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMyMTM0YTE7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmssXHJcbiAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluazpob3ZlcixcclxuICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rOmZvY3VzLFxyXG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxyXG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rOmhvdmVyLFxyXG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMjEzNGExO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyMGZiOTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0MjBmYjk7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci10b2dnbGU6aG92ZXIsXHJcbiAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIwZmI5O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgIGNvbG9yOiAjYTRhNmE3O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UsXHJcbiAgLm5hdmJhciAubmF2YmFyLWZvcm0ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYTRhNmE3O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItbGluayB7XHJcbiAgICBjb2xvcjogI2E0YTZhNztcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyMTM0YTE7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICBjb2xvcjogI2E0YTZhNztcclxuICAgIH1cclxuICAgIC5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyLFxyXG4gICAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xyXG4gICAgICBjb2xvcjogIzIxMzRhMTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjMjEzNGExO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIwZmI5O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgY29sb3I6ICNhNGE2YTc7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlcixcclxuICAgIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcclxuICAgICAgY29sb3I6ICMyMTM0YTE7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogIzIxMzRhMTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyMGZiOTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgIGNvbG9yOiAjYTRhNmE3O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXHJcbiAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjMjEzNGExO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlIHtcclxuICAgICAgY29sb3I6ICMyMTM0YTE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjBmYjk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgY29sb3I6ICNhNGE2YTc7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlcixcclxuICAgIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcclxuICAgICAgY29sb3I6ICMyMTM0YTE7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogIzIxMzRhMTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyMGZiOTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXYgLnNob3cgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgY29sb3I6ICNhNGE2YTc7XHJcbiAgfVxyXG4gIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyLFxyXG4gIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5zaG93IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMjEzNGExO1xyXG4gIH1cclxuICAubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiAuc2hvdyAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMyMTM0YTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIwZmI5O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTRhNmE3O1xyXG4gIH1cclxuXHJcbiAgLmVycm9yIHtcclxuICAgICAgY29sb3I6IHJnYigxMjQsIDEzLCAxMylcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div style=\"text-align:center\">\n    <h1 i18n=\"@@project.title\">\n      {{ title }}\n    </h1>\n    <h1>\n    </h1>\n  </div>\n\n  <nav class=\"navbar navbar-expand-sm bg-light\">\n    <div class=\"container-fluid\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLink=\"project/add\" class=\"nav-link\" routerLinkActive=\"active\">\n            <b i18n=\"@@project.add.project\">Add Project</b>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"task/add\" class=\"nav-link\" routerLinkActive=\"active\">\n            <b i18n=\"@@project.add.task\">Add Task</b>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"user/add\" class=\"nav-link\" routerLinkActive=\"active\">\n            <b i18n=\"@@project.add.user\">Add User</b>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"viewtasks\" class=\"nav-link\" routerLinkActive=\"active\">\n            <b i18n=\"@@project.view.task\">View Task</b>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n\n<section>\n    <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, BootstrapValidationCssDirective, DateValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapValidationCssDirective", function() { return BootstrapValidationCssDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidators", function() { return DateValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Manager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var BootstrapValidationCssDirective = /** @class */ (function () {
    function BootstrapValidationCssDirective(cd) {
        this.cd = cd;
    }
    Object.defineProperty(BootstrapValidationCssDirective.prototype, "isInvalid", {
        get: function () {
            var control = this.cd.control;
            return control ? control.invalid && control.touched : false;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-invalid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BootstrapValidationCssDirective.prototype, "isInvalid", null);
    BootstrapValidationCssDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[formControlName],[ngModel],[formControl]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], BootstrapValidationCssDirective);
    return BootstrapValidationCssDirective;
}());

var DateValidators = /** @class */ (function () {
    function DateValidators() {
    }
    DateValidators.dateLessThan = function (dateField1, dateField2, validatorField) {
        return function (c) {
            var date1 = c.get(dateField1).value;
            var date2 = c.get(dateField2).value;
            if ((date1 !== null && date2 !== null) && date1 > date2) {
                return validatorField;
            }
            return null;
        };
    };
    return DateValidators;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewtask/viewtask.component */ "./src/app/viewtask/viewtask.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_7__["BootstrapValidationCssDirective"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_10__["TaskComponent"],
                _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_12__["ViewtaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAlertModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Hide the browser's default checkbox */\r\n.customcheck input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    border-radius: 5px;\r\n}\r\n.customcheck:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n.customcheck input:checked ~ .checkmark {\r\n    background-color: #02cf32;\r\n    border-radius: 5px;\r\n}\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.customcheck input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n.customcheck .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\ninput[type=\"date\"] {\r\n    align-items: center;\r\n    display: -webkit-inline-flex;\r\n    font-family: monospace;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    -webkit-padding-start: 1px;\r\n}\r\n.form-group input.ng-invalid.ng-touched, \r\n.form-group input.ng-invalid:focus, \r\n.form-group select.ng-invalid.ng-touched, \r\n.form-group textarea.ng-invalid.ng-touched,\r\n.form-submit input.ng-invalid,\r\n.form-submit select.ng-invalid,\r\n.form-submit  textarea.ng-invalid\r\n{\r\n    border-color: #ff4c6a;\r\n}\r\n.invalid-feedback.form-error {\r\n    display: block;\r\n}\r\n.button5 {border-radius: 50%;}\r\n.ng-valid[required], .ng-valid.required  {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-left: 10px solid rgb(218, 200, 43); /* yellow */\r\n}\r\n.backdrop {\r\n    background-color:rgba(0,0,0,0.6);\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100vh;\r\n}\r\n.table-bg {\r\n    background-color: lightgrey;\r\n}\r\n.search-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n.search-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n    cursor: pointer;\r\n  }\r\n.mat-row:hover {\r\n    background-color: lightgrey;\r\n  }\r\n.btn-light {\r\n    background-color: #d6d5d5;\r\n  }\r\n.btn-light:hover {\r\n    background-color: #b4b4b4;\r\n  }\r\n.list-group {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: none;\r\n    font-size: 14px;\r\n  }\r\n.list-group-item {\r\n    list-style-type: none;\r\n    text-align: left;\r\n    float: left;\r\n    border: none;\r\n    background: transparent;\r\n  }\r\n.list-bg {\r\n    background-color: #d6d5d5;\r\n  }\r\n.error {\r\n    color: rgb(235, 26, 26)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUVBLG9DQUFvQztBQUNwQztJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUVoQyx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCO0FBRUE7Ozs7Ozs7O0lBUUkscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0EsVUFBVSxrQkFBa0IsQ0FBQztBQUU3QjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlDQUF5QyxFQUFFLFdBQVc7QUFDMUQ7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsS0FBSztJQUNMLE1BQU07SUFDTixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xyXG4uY3VzdG9tY2hlY2sgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbi5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmN1c3RvbWNoZWNrOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uY3VzdG9tY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyY2YzMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uY3VzdG9tY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jdXN0b21jaGVjayAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMXB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIFxyXG4uZm9ybS1ncm91cCBpbnB1dC5uZy1pbnZhbGlkOmZvY3VzLCBcclxuLmZvcm0tZ3JvdXAgc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCwgXHJcbi5mb3JtLWdyb3VwIHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCxcclxuLmZvcm0tc3VibWl0IGlucHV0Lm5nLWludmFsaWQsXHJcbi5mb3JtLXN1Ym1pdCBzZWxlY3QubmctaW52YWxpZCxcclxuLmZvcm0tc3VibWl0ICB0ZXh0YXJlYS5uZy1pbnZhbGlkXHJcbntcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNGM2YTtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2suZm9ybS1lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnV0dG9uNSB7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDIxOCwgMjAwLCA0Myk7IC8qIHllbGxvdyAqL1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxufVxyXG5cclxuLnRhYmxlLWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWhlYWRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgLmJ0bi1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNWQ1O1xyXG4gIH1cclxuICAuYnRuLWxpZ2h0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7XHJcbiAgfVxyXG4gIC5saXN0LWdyb3VwIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ1ZDU7XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICBjb2xvcjogcmdiKDIzNSwgMjYsIDI2KVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngb-alert *ngIf=\"successMessage\" type=\"secondary\" (close)=\"successMessage = null\" i18n=\"@@project.success.msg\">{{ successMessage }}</ngb-alert>\n  <form class=\"mt-3\" [formGroup]=\"projectForm\" (ngSubmit)=\"addProject()\">\n    <div class=\"form-group row\">\n      <label for=\"project\" class=\"col-sm-1 col-form-label\"  i18n=\"@@project.form.lbl.project\">Project: </label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"project\"\n          [ngClass]=\"{ 'is-invalid': submitted && projectForm.controls.project.errors }\">\n        <div *ngIf=\"submitted && projectForm.controls.project.errors\" class=\"error\"></div>\n        <div *ngIf=\"submitted && projectForm.controls.project.errors?.required\" class=\"error\" i18n=\"@@project.project.error\">Project is required.</div>\n        <input type=\"hidden\" class=\"form-control\" formControlName=\"projectId\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"selectDate\" class=\"col-sm-1 col-form-label\"></label>\n      <div class=\"col-sm-3\">\n        <div class=\"col-sm custom-control custom-checkbox\">\n          <input type=\"checkbox\" formControlName=\"selectDate\" data-md-icheck (change)=\"setDate($event)\" class=\"custom-control-input\" id=\"selectDate\">\n          <label class=\"custom-control-label\" for=\"selectDate\" i18n=\"@@project.form.lbl.setDate\">Set Start and End Date</label>\n        </div>\n      </div>\n      <div class=\"col-sm-2\" role=\"group\">\n        <input type=\"date\" formControlName=\"startDate\" disabled>\n      </div>\n      <div class=\"col-sm-2\" role=\"group\">\n        <input type=\"date\" formControlName=\"endDate\" disabled>\n      </div>\n    </div>\n    <div class=\"row\">\n        <label class=\"col-sm-1 col-form-label\"></label>\n        <div class=\"error col-sm-6\" *ngIf=\"projectForm.hasError('loaddate')\" i18n=\"@@project.date.error\">\n          Start date must be before the end date\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"priority\" class=\"col-sm-1 col-form-label\" i18n=\"@@project.form.lbl.priority\">Priority: </label>\n      <div class=\"col-sm-7\">\n        <div class=\"d-flex justify-content-left my-6\">\n          <span class=\"font-weight-bold indigo-text mr-2 mt-1\">0</span>\n          <div class=\"range-field w-100\">\n            <input class=\"custom-range\" type=\"range\" value=\"0\" min=\"0\" max=\"30\" formControlName=\"priority\" />\n          </div>\n          <span class=\"font-weight-bold indigo-text ml-2 mt-1\">30</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"manager\" class=\"col-sm-1 col-form-label\" i18n=\"@@project.form.lbl.manager\">Manager: </label>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"manager\"\n          [ngClass]=\"{ 'is-invalid': submitted && projectForm.controls.manager.errors }\" disabled>\n        <div *ngIf=\"submitted && projectForm.controls.manager.errors\" class=\"error\"></div>\n        <div *ngIf=\"submitted && projectForm.controls.manager.errors?.required\" class=\"error\" i18n=\"@@project.manager.error\">Manager is required.</div>\n        <input type=\"hidden\" class=\"form-control\" formControlName=\"managerId\">\n      </div>\n      <div class=\"btn-group col-sm-1\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-outline-secondary button5\" (click)=\"openSearchModalDialog()\" i18n=\"@@project.btn.search\">Search</button>\n      </div>\n    </div>\n\n    <div class=\"btn-toolbar col-sm-6 float-right mt-3\" role=\"toolbar\">\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"submit\" class=\"btn btn-light\" i18n=\"@@project.btn.add\">{{ projectBtnLabel }}</button>\n      </div>\n      <div>&nbsp;&nbsp;</div>\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"resetForm ()\" i18n=\"@@project.btn.reset\">Reset</button>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"col-sm row\">\n    <div class=\"col-sm-8 mt-5\">\n      <input type=\"text\" (keyup)='searchProject($event.target.value)' class=\"form-control\" id=\"search\"\n        placeholder=\"Search...\">\n    </div>\n  </div>\n\n  <div class=\"mt-3\"></div>\n\n  <div class=\"col-sm row\">\n    <div class=\"btn-group col-sm-8\" role=\"group\">\n      <div class=\"btn-toolbar row\" role=\"toolbar\">\n        <div class=\"btn-toolbar row\" role=\"toolbar\">\n          <label for=\"project\" class=\"col-form-label ml-4\" i18n=\"@@project.lbl.sortBy\">Sort By: </label>\n          <div class=\"btn-group ml-2\" role=\"group\">\n            <button class=\"btn btn-light\" (click)=\"sortProject($event.target)\" id=\"startDate\" i18n=\"@@project.btn.startDate\">Start Date</button>\n            <button class=\"btn btn-light\" (click)=\"sortProject($event.target)\" id=\"endDate\" i18n=\"@@project.btn.endDate\">End Date</button>\n            <button class=\"btn btn-light\" (click)=\"sortProject($event.target)\" id=\"priority\" i18n=\"@@project.btn.priority\">Priority</button>\n            <button class=\"btn btn-light\" (click)=\"sortProject($event.target)\" id=\"taskCompleted\" i18n=\"@@project.btn.completed\">Completed</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm mt-3\" *ngFor=\"let p of allprojects\">\n    <div class=\"row mt-3\">\n      <div class=\"col-sm-6\">\n          <ul class=\"list-group list-bg\">\n            <li class=\"list-group-item col-sm\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\"><span i18n=\"@@project.lbl.project\">Project</span>: {{p.project}}</div>\n                </div>\n            </li>\n            <li class=\"list-group-item col-sm\">\n              <div class=\"row\">\n                  <div class=\"col-sm-6\"><span i18n=\"@@project.lbl.noOfTask\">No of Tasks</span>: {{p.totalTasks}}</div>\n                  <div class=\"col-sm-6\"><span i18n=\"@@project.lbl.completed\">Completed</span>: {{p.taskCompleted}}</div>\n              </div>\n            </li>\n            <li class=\"list-group-item col-sm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\"><span i18n=\"@@project.lbl.startDate\">Start Date</span>: {{p.startDate}}</div>\n                    <div class=\"col-sm-6\"><span i18n=\"@@project.lbl.startDate\">End Date</span>: {{p.endDate}}</div>\n                </div>\n            </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-1\">\n          <div class=\"row\">\n            <ul class=\"list-group list-bg\">\n                <li class=\"list-group-item col-sm-2\">\n                    <div class=\"col-sm-1\" i18n=\"@@project.lbl.priority\">Priority</div>\n                </li> \n                <li class=\"list-group-item col-sm-2\">\n                    <div class=\"col-sm-1\">{{p.priority}}</div>\n                </li>\n            </ul>\n          </div>\n      </div>\n      <div class=\"col-sm\">\n          <div class=\"col-sm-2\">\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"updateProject(p)\" i18n=\"@@project.btn.update\">Update</button>\n          </div>\n          <div class=\"col-sm-2\">\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"suspendProject(p.projectId)\" i18n=\"@@project.btn.suspend\">Suspend</button>\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- MODAL WINDOW CODE-->\n  <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <strong>Search User</strong>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModalDialog()\"><span\n              aria-hidden=\"true\">&times;</span></button>\n        </div>\n\n        <!-- modal-body -->\n        <div class=\"modal-body\">\n            <div class=\"search-header\">\n                <mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                </mat-form-field>\n              </div>\n              \n              <div class=\"search-container\">\n                <mat-table [dataSource]=\"dataSource\" matSort>\n                  <ng-container matColumnDef=\"employeeId\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Employee ID </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.employeeId}} </mat-cell>\n                  </ng-container>\n                 \n                  <ng-container matColumnDef=\"firstName\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.firstName}} {{row.lastName}}</mat-cell>\n                  </ng-container>\n              \n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                    (click)=\"selectUser(row.id, row.firstName, row.lastName)\">\n                  </mat-row>\n                </mat-table>\n              </div>\n        </div>\n\n        <!-- modal-footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"closeModalDialog()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");










var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(formBuilder, projectService, userService) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.userService = userService;
        this.submitted = false;
        this.isDateSelected = false;
        this.display = 'none';
        this.projectBtnLabel = 'Add';
        this.displayedColumns = ["employeeId", "firstName"];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.staticAlertClosed = false;
        this.currentDate = new Date();
        this.nextDay = new Date();
        this.projectForm = formBuilder.group({
            projectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0'),
            selectDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            managerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator])
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _app_component__WEBPACK_IMPORTED_MODULE_9__["DateValidators"].dateLessThan('startDate', 'endDate', { 'loaddate': true })
            ])
        });
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllProjects();
        this.getAllUsers();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allUsers);
        this.projectForm.controls['priority'].setValue(0);
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
        this.projectForm.get('selectDate').valueChanges.subscribe(function (selectDate) {
            if (selectDate === true) {
                _this.projectForm.controls['startDate'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                _this.projectForm.controls['endDate'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
    };
    ProjectComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    ProjectComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ProjectComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    ProjectComponent.prototype.setDate = function (e) {
        if (e.target.checked) {
            this.projectForm.get("startDate").enable();
            this.projectForm.get("endDate").enable();
            this.projectForm.controls['startDate'].setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.currentDate, 'yyyy-MM-dd', 'en'));
            this.projectForm.controls['endDate'].setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.nextDay.setDate(this.currentDate.getDate() + 1), 'yyyy-MM-dd', 'en'));
        }
        else {
            this.projectForm.get("startDate").disable();
            this.projectForm.get("endDate").disable();
            this.projectForm.controls['startDate'].setValue('');
            this.projectForm.controls['endDate'].setValue('');
        }
    };
    ProjectComponent.prototype.resetForm = function () {
        this.projectBtnLabel = 'Add';
        this.projectForm.reset();
        this.projectForm.get("startDate").disable();
        this.projectForm.get("endDate").disable();
        this.projectForm.patchValue({
            priority: 0
        });
    };
    ProjectComponent.prototype.addProject = function () {
        var _this = this;
        this.submitted = true;
        if (this.projectForm.invalid) {
            return;
        }
        if (this.projectBtnLabel == 'Add') {
            this.projectService.createProject(this.projectForm.value, this.projectForm.controls['managerId'].value).subscribe(function (project) {
                return _this.changeSuccessMessage('Project created sucessfully!');
            });
        }
        else {
            this.projectService.updateProject(this.projectForm.value, this.projectForm.controls['projectId'].value, this.projectForm.controls['managerId'].value).subscribe(function (project) {
                return _this.changeSuccessMessage('Project updated sucessfully!');
            });
        }
    };
    ProjectComponent.prototype.openSearchModalDialog = function () {
        this.getAllUsers();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allUsers);
        this.display = 'block';
    };
    ProjectComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    ProjectComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projectService.getAllProjects().subscribe(function (data) {
            _this.allprojects = data;
        });
    };
    ProjectComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.allUsers = data;
        });
    };
    ProjectComponent.prototype.getUserById = function (projectId) {
        var _this = this;
        this.userService.getUserById(projectId).subscribe(function (data) {
            _this.user = data;
        });
    };
    ProjectComponent.prototype.selectUser = function (id, firstName, lastName) {
        this.projectForm.controls['managerId'].setValue(id);
        this.projectForm.controls['manager'].setValue(firstName + ' ' + lastName);
        this.closeModalDialog();
    };
    ProjectComponent.prototype.changeSuccessMessage = function (message) {
        this._success.next(message);
        this.getAllProjects();
    };
    ProjectComponent.prototype.searchProject = function (searchText) {
        if (!searchText) {
            this.getAllProjects();
        }
        else {
            this.filteredProjects = this.allprojects.filter(function (x) {
                return x.project.trim().toLowerCase()
                    .includes(searchText.trim().toLowerCase());
            });
        }
        this.allprojects = this.filteredProjects;
    };
    ProjectComponent.prototype.sortProject = function (e) {
        var arr = e.id.split('_');
        if (arr.length > 1 && arr[1] == 'desc') {
            e.id = arr[0] + "_" + 'asc';
        }
        else {
            e.id = arr[0] + "_" + 'desc';
        }
        var direction = (arr.length > 1 && arr[1] == 'desc') ? 1 : -1;
        var sortedProjects = this.allprojects;
        sortedProjects.sort(function (a, b) {
            var aa;
            var bb;
            if (!isNaN(a[arr[0]]) && !isNaN(b[arr[0]])) {
                aa = parseInt(a[arr[0]]);
                bb = parseInt(b[arr[0]]);
            }
            else if (arr[0] == 'startDate' || arr[0] == 'endDate') {
                aa = new Date(a[arr[0]]);
                bb = new Date(b[arr[0]]);
            }
            else {
                aa = a;
                bb = b;
            }
            if (aa < bb) {
                return -1 * direction;
            }
            else if (aa > bb) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
        this.allprojects = sortedProjects;
    };
    ProjectComponent.prototype.updateProject = function (project) {
        var _this = this;
        this.project = JSON.parse(JSON.stringify(project));
        delete this.project['taskCompleted'];
        delete this.project['totalTasks'];
        if (this.project["startDate"] == null || this.project["endDate"] == null) {
            this.project['selectDate'] = false;
            this.projectForm.get("startDate").disable();
            this.projectForm.get("endDate").disable();
        }
        else {
            this.project['selectDate'] = true;
            this.projectForm.get("startDate").enable();
            this.projectForm.get("endDate").enable();
        }
        this.projectBtnLabel = "Update";
        this.userService.getUserById(this.project['projectId']).subscribe(function (data) {
            _this.user = data;
            if (_this.user['id'] > 0) {
                _this.project['manager'] = _this.user['firstName'] + ' ' + _this.user['lastName'];
                _this.project['managerId'] = _this.user['id'];
            }
            else {
                _this.project['manager'] = '';
                _this.project['managerId'] = '';
            }
            _this.projectForm.setValue(_this.project);
        });
    };
    ProjectComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.projectService.deleteProject(id).subscribe(function (project) {
            return _this.changeSuccessMessage('Project suspended successfully');
        });
        this.getAllProjects();
    };
    ProjectComponent.prototype.suspendProject = function (projectId) {
        this.deleteProject(projectId);
        this.getAllProjects();
        this.getAllUsers();
        this.changeSuccessMessage("Project suspeced sucessfully!");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ProjectComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ProjectComponent.prototype, "sort", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ProjectService.prototype.getAllProjects = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/projects/tasks")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('createProject')));
    };
    ProjectService.prototype.getProjects = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/projects/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProjects')));
    };
    ProjectService.prototype.createProject = function (project, userId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/projects/" + userId, project, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('createProject')));
    };
    ProjectService.prototype.updateProject = function (project, projectId, userId) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/projects/" + projectId + "/" + userId, project, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProject')));
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/projects/" + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProject')));
    };
    ProjectService.prototype.handleError = function (operation) {
        return function (err) {
            var errMsg = "error in " + operation + "()";
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
        };
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/service/task.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/task.service.ts ***!
  \*****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    TaskService.prototype.getAllTasks = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/tasks")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllTasks')));
    };
    TaskService.prototype.getAllParentTasks = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/parenttasks")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllParentTasks')));
    };
    TaskService.prototype.getTaskById = function (taskId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/tasks/" + taskId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTaskById')));
    };
    TaskService.prototype.getTasksByProject = function (projectId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/tasksbyproject/" + projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTasksByProject')));
    };
    TaskService.prototype.createTask = function (task, userId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/tasks/" + userId, task, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('createTask')));
    };
    TaskService.prototype.updateTask = function (task, taskId, userId) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/tasks/" + taskId + "/" + userId, task, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateTask')));
    };
    TaskService.prototype.createParentTask = function (parentTask) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/parenttasks", parentTask, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('createParentTask')));
    };
    TaskService.prototype.updateTaskStatus = function (taskId) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/tasks/status/" + taskId, null, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateTaskStatus')));
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/projects/" + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProject')));
    };
    TaskService.prototype.handleError = function (operation) {
        return function (err) {
            var errMsg = "error in " + operation + "()";
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
        };
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/users");
    };
    UserService.prototype.getUserById = function (projectId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/userbyproject/" + projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUserById')));
    };
    UserService.prototype.getUserByProjectAndTaskId = function (projectId, taskId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/users/" + projectId + "/" + taskId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUserByProjectAndTaskId')));
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/users", user, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('createUser')));
    };
    UserService.prototype.updateUser = function (user, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/users/" + id, user, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateUser')));
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/users/" + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteUser')));
    };
    UserService.prototype.handleError = function (operation) {
        return function (err) {
            var errMsg = "error in " + operation + "()";
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Hide the browser's default checkbox */\r\n.customcheck input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    border-radius: 5px;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.customcheck:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.customcheck input:checked ~ .checkmark {\r\n    background-color: #02cf32;\r\n    border-radius: 5px;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.customcheck input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.customcheck .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\ninput[type=\"date\"] {\r\n    align-items: center;\r\n    display: -webkit-inline-flex;\r\n    font-family: monospace;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    -webkit-padding-start: 1px;\r\n}\r\n.form-group input.ng-invalid.ng-touched, \r\n.form-group input.ng-invalid:focus, \r\n.form-group select.ng-invalid.ng-touched, \r\n.form-group textarea.ng-invalid.ng-touched,\r\n.form-submit input.ng-invalid,\r\n.form-submit select.ng-invalid,\r\n.form-submit  textarea.ng-invalid\r\n{\r\n    border-color: #ff4c6a;\r\n}\r\n.invalid-feedback.form-error {\r\n    display: block;\r\n}\r\n.button5 {\r\n    border-radius: 50%;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-left: 10px solid rgb(218, 200, 43); /* yellow */\r\n}\r\n.backdrop {\r\n    background-color:rgba(0,0,0,0.6);\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100vh;\r\n}\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n    cursor: pointer;\r\n  }\r\n.mat-row:hover {\r\n    background-color: lightgrey;\r\n  }\r\n.btn-light {\r\n    background-color: #d6d5d5;\r\n  }\r\n.btn-light:hover {\r\n    background-color: #b4b4b4;\r\n  }\r\n.error {\r\n    color: rgb(235, 26, 26)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBRUEsK0NBQStDO0FBQy9DO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUVBLDZEQUE2RDtBQUM3RDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUVBLG9DQUFvQztBQUNwQztJQUNJLGNBQWM7QUFDbEI7QUFFQSxrQ0FBa0M7QUFDbEM7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFFaEMsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDBCQUEwQjtBQUM5QjtBQUVBOzs7Ozs7OztJQVFJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5Q0FBeUMsRUFBRSxXQUFXO0FBQzFEO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLEtBQUs7SUFDTCxNQUFNO0lBQ04sVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0U7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmN1c3RvbWNoZWNrIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uY3VzdG9tY2hlY2s6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY3VzdG9tY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyY2YzMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uY3VzdG9tY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbi5jdXN0b21jaGVjayAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMXB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIFxyXG4uZm9ybS1ncm91cCBpbnB1dC5uZy1pbnZhbGlkOmZvY3VzLCBcclxuLmZvcm0tZ3JvdXAgc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCwgXHJcbi5mb3JtLWdyb3VwIHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCxcclxuLmZvcm0tc3VibWl0IGlucHV0Lm5nLWludmFsaWQsXHJcbi5mb3JtLXN1Ym1pdCBzZWxlY3QubmctaW52YWxpZCxcclxuLmZvcm0tc3VibWl0ICB0ZXh0YXJlYS5uZy1pbnZhbGlkXHJcbntcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNGM2YTtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2suZm9ybS1lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYnV0dG9uNSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDIxOCwgMjAwLCA0Myk7IC8qIHllbGxvdyAqL1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgLmJ0bi1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNWQ1O1xyXG4gIH1cclxuICAuYnRuLWxpZ2h0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICBjb2xvcjogcmdiKDIzNSwgMjYsIDI2KVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngb-alert *ngIf=\"successMessage\" type=\"secondary\" (close)=\"successMessage = null\" i18n=\"@@task.success.msg\">{{ successMessage }}</ngb-alert>\n  <form class=\"mt-3\" [formGroup]=\"taskForm\" (ngSubmit)=\"addTask()\">\n    <div class=\"form-group row\">\n      <label for=\"project\" class=\"col-sm-2 col-form-label\" i18n=\"@@task.lbl.project\">Project: </label>\n      <div class=\"col-sm-5\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"project\"\n          [ngClass]=\"{ 'is-invalid': submitted && taskForm.controls.projectId.errors }\">\n        <div *ngIf=\"submitted && taskForm.controls.projectId.errors\" class=\"error\"></div>\n        <div *ngIf=\"submitted && taskForm.controls.projectId.errors?.required\" i18n=\"@@task.project.error\" class=\"error\">Project is required.</div>\n        <input type=\"hidden\" [disabled]=\"isParent\" formControlName=\"projectId\">\n      </div>\n      <div class=\"btn-group col-sm-1\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-outline-secondary button5\" i18n=\"@@task.btn.search\" [disabled]=\"isParent || addButton == 'Update'\" (click)=\"openProjectDialog()\">Search</button>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"task\" class=\"col-sm-2 col-form-label\" i18n=\"@@task.lbl.task\">Task: </label>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"task\"\n          [ngClass]=\"{ 'is-invalid': submitted && taskForm.controls.task.errors }\">\n        <div *ngIf=\"submitted && taskForm.controls.task.errors\" class=\"error\"></div>\n        <div *ngIf=\"submitted && taskForm.controls.task.errors?.required\" i18n=\"@@task.task.error\" class=\"error\">Task is required.</div>\n        <input type=\"hidden\" formControlName=\"id\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"markParentTask\" class=\"col-sm-2 col-form-label\"></label>\n      <div class=\"col-sm-3\">\n        <div class=\"col-sm custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" data-md-icheck formControlName=\"markParentTask\"\n            id=\"markParentTask\" (click)=\"handleParent($event.target)\">\n          <label class=\"custom-control-label\" for=\"markParentTask\" i18n=\"@@task.lbl.chk.parenttask\">Parent Task</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"priority\" class=\"col-sm-2 col-form-label\" i18n=\"@@task.lbl.priority\">Priority: </label>\n      <div class=\"col-sm-6\">\n        <div class=\"d-flex justify-content-left my-6\">\n          <span class=\"font-weight-bold indigo-text mr-2 mt-1\" i18n=\"@@task.lbl.0\">0</span>\n          <div class=\"range-field w-100\">\n            <input class=\"custom-range\" [disabled]=\"isParent\" type=\"range\" min=\"0\" max=\"30\" formControlName=\"priority\" />\n          </div>\n          <span class=\"font-weight-bold indigo-text ml-2 mt-1\" i18n=\"@@task.lbl.30\">30</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"parentTask\" class=\"col-sm-2 col-form-label\" i18n=\"@@task.lbl.parenttask\">Parent Task: </label>\n      <div class=\"col-sm-5\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"parentTask\"\n          [ngClass]=\"{ 'is-invalid': submitted && taskForm.controls.parentTask.errors }\">\n        <div *ngIf=\"submitted && taskForm.controls.parentTask.errors\" class=\"error\"></div>\n        <div *ngIf=\"submitted && taskForm.controls.parentTask.errors?.required\" class=\"error\" i18n=\"@@task.parenttask.error\">Parent task is required.</div>\n        <input type=\"hidden\" formControlName=\"parentId\">\n      </div>\n      <div class=\"btn-group col-sm-1\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-outline-secondary button5\" [disabled]=\"isParent\" (click)=\"openParentDialog()\" i18n=\"@@task.parent.btn.search\">Search</button>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"startDate\" class=\"col-sm-2 col-form-label\" i18n=\"@@task.lbl.startDate\">Start Date: </label>\n      <div class=\"col-sm-2\">\n        <input type=\"date\" [disabled]=\"isParent\" formControlName=\"startDate\"\n          [ngClass]=\"{ 'is-invalid': submitted && taskForm.controls.startDate.errors }\">\n        <div *ngIf=\"submitted && taskForm.controls.startDate.errors\" class=\"error\"></div>\n        <div *ngIf=\"submitted && taskForm.controls.startDate.errors?.required\" class=\"error\" i18n=\"@@task.startDate.error\">Start Date is required.</div>\n      </div>\n      <label for=\"endDate\" class=\"col-sm-2 col-form-label\" i18n=\"@@task.lbl.endDate\">End Date: </label>\n      <div class=\"col-sm-2\">\n        <input type=\"date\" [disabled]=\"isParent\" formControlName=\"endDate\"\n          [ngClass]=\"{ 'is-invalid': submitted && taskForm.controls.endDate.errors }\">\n        <div *ngIf=\"submitted && taskForm.controls.endDate.errors\" class=\"error\"></div>\n        <div *ngIf=\"submitted && taskForm.controls.endDate.errors?.required\" class=\"error\" i18n=\"@@task.endDate.error\">End Date is required.</div>\n      </div>\n    </div>\n    <div class=\"row\">\n        <label class=\"col-sm-2 col-form-label\"></label>\n        <div class=\"error col-sm-6\" *ngIf=\"taskForm.hasError('loaddate')\" i18n=\"@@task.date.error\">\n          Start date must be before the end date\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"user\" class=\"col-sm-2 col-form-label\" i18n=\"@@task.lbl.user\">User: </label>\n      <div class=\"col-sm-5\">\n        <input type=\"text\" class=\"form-control\" [disabled]=\"isParent\" formControlName=\"user\"\n          [ngClass]=\"{ 'is-invalid': submitted && taskForm.controls.userId.errors }\">\n        <div *ngIf=\"submitted && taskForm.controls.userId.errors\" class=\"error\"></div>\n        <div *ngIf=\"submitted && taskForm.controls.userId.errors?.required\" class=\"error\" i18n=\"@@task.user.error\">User is required.</div>\n        <input type=\"hidden\" formControlName=\"userId\">\n      </div>\n      <div class=\"btn-group col-sm-1\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-outline-secondary button5\" [disabled]=\"isParent\" (click)=\"openUserDialog()\" i18n=\"@@task.user.btn.search\">Search</button>\n      </div>\n    </div>\n\n    <div class=\"btn-toolbar col-sm-6 float-right\" role=\"toolbar\">\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"submit\" class=\"btn btn-light\" i18n=\"@@task.btn.add\">{{ addButton }}</button>\n      </div>\n      <div>&nbsp;&nbsp;&nbsp;</div>\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"resetForm()\" i18n=\"@@task.btn.reset\">Reset</button>\n      </div>\n    </div>\n\n    <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <strong>{{ modalHeader }}</strong>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModalDialog()\"><span\n                aria-hidden=\"true\">&times;</span></button>\n          </div>\n\n          <!-- modal-body -->\n          <div class=\"modal-body\">\n            <!-- Search Project Start-->\n            <div *ngIf=\"isSearchProject\">\n              <div class=\"search-header\">\n                <mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"search-container\">\n                <mat-table [dataSource]=\"dataSource\" matSort>\n                  <ng-container matColumnDef=\"project\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Project </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.project}} </mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"startDate\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{ row.startDate }} </mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"endDate\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> End Date </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{ row.endDate }} </mat-cell>\n                  </ng-container>\n\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectProject(row)\">\n                  </mat-row>\n                </mat-table>\n              </div>\n            </div>\n            <!-- Search project End-->\n\n            <!-- Search Parent Start-->\n            <div *ngIf=\"isSearchParent\">\n              <div class=\"search-header\">\n                <mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                </mat-form-field>\n              </div>\n              <div class=\"search-container\">\n                <mat-table [dataSource]=\"dataSource\" matSort>\n                  <ng-container matColumnDef=\"parentTask\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Parent Task </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.parentTask}} </mat-cell>\n                  </ng-container>\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectParent(row)\">\n                  </mat-row>\n                </mat-table>\n              </div>\n            </div>\n            <!-- Search Parent End-->\n\n            <!-- Search User Start-->\n            <div *ngIf=\"isSearchUser\">\n              <div class=\"search-header\">\n                <mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                </mat-form-field>\n              </div>\n              <div class=\"search-container\">\n                <mat-table [dataSource]=\"dataSource\" matSort>\n                  <ng-container matColumnDef=\"employeeId\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Employee ID </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.employeeId}} </mat-cell>\n                  </ng-container>\n                  <ng-container matColumnDef=\"firstName\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> First Name </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.firstName}} </mat-cell>\n                  </ng-container>\n                  <ng-container matColumnDef=\"lastName\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.lastName}} </mat-cell>\n                  </ng-container>\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectUser(row)\">\n                  </mat-row>\n                </mat-table>\n              </div>\n            </div>\n            <!-- Search User End-->\n          </div>\n\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"closeModalDialog()\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");












var TaskComponent = /** @class */ (function () {
    function TaskComponent(formBuilder, taskService, projectService, userService, activatedRoute) {
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.projectService = projectService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.display = 'none';
        this.addButton = 'Add';
        this.isParent = false;
        this.modalHeader = 'Search Project';
        this.displayedColumns = ["project", "startDate", "endDate"];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.staticAlertClosed = false;
        this.currentDate = new Date();
        this.nextDay = new Date();
        this.isSearchProject = false;
        this.isSearchParent = false;
        this.isSearchUser = false;
        this.createTaskForm();
    }
    TaskComponent.prototype.createTaskForm = function () {
        this.taskForm = this.formBuilder.group({
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            projectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator]),
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            markParentTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            parentTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            parentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator])
        }, { validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _app_component__WEBPACK_IMPORTED_MODULE_11__["DateValidators"].dateLessThan('startDate', 'endDate', { 'loaddate': true })
            ])
        });
    };
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskForm.patchValue({
            startDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.currentDate, 'yyyy-MM-dd', 'en'),
            endDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.nextDay.setDate(this.currentDate.getDate() + 1), 'yyyy-MM-dd', 'en'),
            priority: 0
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.task = _this.taskService.editTaskData;
            _this.taskService.editTaskData = null;
            if (_this.task != null && _this.task['id'] > 0) {
                _this.addButton = 'Update';
                _this.taskForm.controls['markParentTask'].disable();
                _this.taskForm.controls['markParentTask'].disable();
                _this.getUserByProjectAndTask();
            }
            else {
                _this.addButton = 'Add';
                _this.taskForm.reset();
            }
        });
        this.handleParent(this.taskForm.controls['markParentTask']);
        this.getAllProjects();
        this.getAllParentTasks();
        this.getAllUsers();
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    TaskComponent.prototype.resetForm = function () {
        this.taskForm.controls['markParentTask'].enable();
        this.taskForm.controls['startDate'].enable();
        this.taskForm.controls['endDate'].enable();
        this.taskForm.controls['priority'].enable();
        this.addButton = 'Add';
        this.isParent = false;
        this.taskForm.reset();
        this.taskForm.patchValue({
            startDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.currentDate, 'yyyy-MM-dd', 'en'),
            endDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.nextDay.setDate(this.currentDate.getDate() + 1), 'yyyy-MM-dd', 'en'),
            priority: 0
        });
    };
    TaskComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    TaskComponent.prototype.addTask = function () {
        this.submitted = true;
        if (this.taskForm.invalid) {
            return;
        }
        if (this.taskForm.controls['markParentTask'].value) {
            this.createParentTask({ 'parentTask': this.taskForm.controls['task'].value });
        }
        else {
            // Handle add edit task
            if (this.addButton == 'Add') {
                //Add flow
                var taskData = this.taskForm.value;
                delete taskData['id'];
                delete taskData['userId'];
                delete taskData['markParentTask'];
                if (this.taskForm.controls['parentId'].value === null) {
                    delete taskData['parentId'];
                }
                this.createTask(taskData, this.taskForm.controls['userId'].value);
            }
            else {
                // update flow
                console.log('update task:' + JSON.stringify(this.taskForm.value));
                var taskData = this.taskForm.value;
                delete taskData['id'];
                delete taskData['markParentTask'];
                if (this.taskForm.controls['parentId'].value === null) {
                    delete taskData['parentId'];
                }
                this.updateTask(taskData, this.taskForm.controls['id'].value, this.taskForm.controls['userId'].value);
            }
        }
    };
    TaskComponent.prototype.getTaskById = function (taskId) {
        var _this = this;
        this.taskService.getTaskById(taskId).subscribe(function (data) {
            _this.task = data;
        });
    };
    TaskComponent.prototype.createParentTask = function (parentTask) {
        var _this = this;
        this.taskService.createParentTask(parentTask).subscribe(function (data) {
            _this.changeSuccessMessage('Parent task created successfully!');
            _this.getAllParentTasks();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allParentTasks);
        });
    };
    TaskComponent.prototype.createTask = function (task, userId) {
        var _this = this;
        this.taskService.createTask(task, userId).subscribe(function (data) {
            _this.changeSuccessMessage('Task created successfully!');
        });
    };
    TaskComponent.prototype.updateTask = function (task, taskId, userId) {
        var _this = this;
        this.taskService.updateTask(task, taskId, userId).subscribe(function (data) {
            _this.changeSuccessMessage('Task updated successfully!');
        });
    };
    TaskComponent.prototype.getUserByProjectAndTask = function () {
        var _this = this;
        this.userService.getUserByProjectAndTaskId(this.task['projectId'], this.task['id'])
            .subscribe(function (data) {
            _this.task['user'] = data['firstName'] + ' ' + data['lastName'];
            _this.task['userId'] = data['id'];
            _this.taskForm.setValue(_this.task);
        });
    };
    TaskComponent.prototype.selectProject = function (project) {
        this.taskForm.controls['projectId'].setValue(project['id']);
        this.taskForm.controls['project'].setValue(project['project']);
        this.closeModalDialog();
    };
    TaskComponent.prototype.selectParent = function (parent) {
        this.taskForm.controls['parentId'].setValue(parent['id']);
        this.taskForm.controls['parentTask'].setValue(parent['parentTask']);
        this.closeModalDialog();
    };
    TaskComponent.prototype.selectUser = function (user) {
        this.taskForm.controls['userId'].setValue(user['id']);
        this.taskForm.controls['user'].setValue(user['firstName'] + ' ' + user['lastName']);
        this.closeModalDialog();
    };
    TaskComponent.prototype.openProjectDialog = function () {
        this.getAllProjects();
        this.isSearchProject = true;
        this.isSearchParent = false;
        this.isSearchUser = false;
        this.modalHeader = "Select Project";
        this.displayedColumns = this.projectColumns;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allProjects);
        this.dataSource.sort = this.matSort;
        this.display = 'block';
    };
    TaskComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (data) {
            _this.allProjects = data;
            _this.projectColumns = ["project", "startDate", "endDate"];
        });
    };
    TaskComponent.prototype.openParentDialog = function () {
        this.getAllParentTasks();
        this.isSearchProject = false;
        this.isSearchParent = true;
        this.isSearchUser = false;
        this.modalHeader = "Select Parent Task";
        this.displayedColumns = this.parentTaskColumns;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allParentTasks);
        this.dataSource.sort = this.matSort;
        this.display = 'block';
    };
    TaskComponent.prototype.getAllParentTasks = function () {
        var _this = this;
        this.taskService.getAllParentTasks().subscribe(function (data) {
            _this.allParentTasks = data;
            _this.parentTaskColumns = ["parentTask"];
        });
    };
    TaskComponent.prototype.openUserDialog = function () {
        this.getAllUsers();
        this.isSearchProject = false;
        this.isSearchParent = false;
        this.isSearchUser = true;
        this.modalHeader = "Select User";
        this.displayedColumns = this.userColumns;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allUsers);
        this.dataSource.sort = this.matSort;
        this.display = 'block';
    };
    TaskComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.allUsers = data;
            _this.userColumns = ["employeeId", "firstName", "lastName"];
        });
    };
    TaskComponent.prototype.handleParent = function (target) {
        if (target.checked) {
            this.isParent = true;
            this.taskForm.patchValue({
                startDate: '',
                endDate: ''
            });
            this.taskForm.controls['priority'].disable();
            this.taskForm.controls['startDate'].disable();
            this.taskForm.controls['endDate'].disable();
            this.taskForm.controls['userId'].setValidators(null);
            this.taskForm.controls["userId"].updateValueAndValidity();
            this.taskForm.controls['projectId'].setValidators(null);
            this.taskForm.controls["projectId"].updateValueAndValidity();
        }
        else {
            this.isParent = false;
            this.taskForm.controls['priority'].enable();
            this.taskForm.controls['startDate'].enable();
            this.taskForm.controls['endDate'].enable();
            this.taskForm.controls['userId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]);
            this.taskForm.controls["userId"].updateValueAndValidity();
            this.taskForm.controls['projectId'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]);
            this.taskForm.controls["projectId"].updateValueAndValidity();
            this.taskForm.patchValue({
                startDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.currentDate, 'yyyy-MM-dd', 'en'),
                endDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.nextDay.setDate(this.currentDate.getDate() + 1), 'yyyy-MM-dd', 'en'),
                priority: 0
            });
        }
    };
    TaskComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    TaskComponent.prototype.changeSuccessMessage = function (message) {
        this._success.next(message);
    };
    TaskComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], TaskComponent.prototype, "matSort", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
            _service_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"date\"] {\r\n    align-items: center;\r\n    display: -webkit-inline-flex;\r\n    font-family: monospace;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    -webkit-padding-start: 1px;\r\n}\r\n\r\n.table-bg {\r\n    background-color: lightgrey;\r\n    border-color: white;\r\n}\r\n\r\n.spacer {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.btn-light {\r\n    background-color: #d6d5d5;\r\n}\r\n\r\n.btn-light:hover {\r\n    background-color: #b4b4b4;\r\n}\r\n\r\n.error {\r\n    color: rgb(235, 26, 26)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMXB4O1xyXG59XHJcblxyXG4udGFibGUtYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5idG4tbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDVkNTtcclxufVxyXG4uYnRuLWxpZ2h0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGI0YjQ7XHJcbn1cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZ2IoMjM1LCAyNiwgMjYpXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngb-alert *ngIf=\"successMessage\" type=\"secondary\" (close)=\"successMessage = null\" i18n=\"@@user.success.msg\">{{ successMessage }}</ngb-alert>\n\n  <div class=\"col-sm\">\n    <form class=\"mt-3\" [formGroup]=\"userForm\" (ngSubmit)=\"addUser()\">\n      <div class=\"col-sm\">\n          <div class=\"form-group row\">\n              <label for=\"firstName\" class=\"col-sm-2 col-form-label\"><span i18n=\"@@user.lbl.firstName\">First Name</span>: </label>\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"firstName\"\n                  [ngClass]=\"{ 'is-invalid': submitted && userForm.controls.firstName.errors }\">\n                <div *ngIf=\"submitted && userForm.controls.firstName.errors\" class=\"error\"></div>\n                <div *ngIf=\"submitted && userForm.controls.firstName.errors?.required\" class=\"error\" i18n=\"@@user.firstName.error\">First Name is required.</div>\n              </div>\n            </div>\n      \n            <div class=\"form-group row\">\n              <label for=\"lastName\" class=\"col-sm-2 col-form-label\" ><span i18n=\"@@user.lbl.lastName\">Last Name</span>: </label>\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"lastName\"\n                  [ngClass]=\"{ 'is-invalid': submitted && userForm.controls.lastName.errors }\">\n                <div *ngIf=\"submitted && userForm.controls.lastName.errors\" class=\"error\"></div>\n                <div *ngIf=\"submitted && userForm.controls.lastName.errors?.required\" class=\"error\" i18n=\"@@user.lastName.error\">Last Name is required.</div>\n              </div>\n            </div>\n      \n            <div class=\"form-group row\">\n              <label for=\"employeeId\" class=\"col-sm-2 col-form-label\"><span i18n=\"@@user.lbl.employeeId\">Employee ID</span>: </label>\n              <div class=\"col-sm-3\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"employeeId\"\n                  [ngClass]=\"{ 'is-invalid': submitted && userForm.controls.employeeId.errors }\">\n                <div *ngIf=\"submitted && userForm.controls.employeeId.errors\" class=\"error\"></div>\n                <div *ngIf=\"submitted && userForm.controls.employeeId.errors?.required\" class=\"error\" i18n=\"@@user.empId.error\">Employee ID is required.</div>\n                <input type=\"hidden\" formControlName=\"id\">\n              </div>\n            </div>\n      \n            <div class=\"btn-toolbar col-sm-7 mt-2 float-right spacer\">\n              <div class=\"btn-group\">\n                <button type=\"submit\" i18n=\"@@user.btn.add\"  class=\"btn btn-light\">{{ userBtnLabel }}</button>\n              </div>\n              <div>&nbsp;&nbsp;&nbsp;</div>\n              <div class=\"btn-group\">\n                <button type=\"button\" i18n=\"@@user.btn.reset\" class=\"btn btn-light\" (click)=\"resetForm()\">Reset</button>\n              </div>\n            </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"col-sm row\">\n    <div class=\"col-sm-3\">\n      <input type=\"text\" (keyup)='searchUser($event.target.value)' class=\"form-control\" id=\"search\" placeholder=\"Search...\">\n    </div>\n    <div class=\"btn-group col-sm-8\" role=\"group\">\n      <div class=\"btn-toolbar row\" role=\"toolbar\">\n        <div class=\"btn-toolbar row\" role=\"toolbar\">\n          <label for=\"project\" class=\"col-form-label ml-4\" i18n=\"@@user.lbl.sort\">Sort: </label>\n          <div class=\"btn-group ml-2\" role=\"group\">\n            <button class=\"btn btn-light\" (click)=\"sortUser($event.target)\" i18n=\"@@user.btn.firstName\" id=\"firstName\">First Name</button>\n            <button class=\"btn btn-light\" (click)=\"sortUser($event.target)\" i18n=\"@@user.btn.lastName\" id=\"lastName\">Last Name</button>\n            <button class=\"btn btn-light\" (click)=\"sortUser($event.target)\" i18n=\"@@user.btn.employeeId\" id=\"employeeId\">Id</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm mt-2\">\n    <table class=\"col-sm-6 table table-condensed\">\n      <tbody>\n        <tr mdbTableCol *ngFor=\"let user of allUsers\">\n          <td class=\"col-sm-6\">\n            <table class=\"table\">\n              <tr>\n                <td class=\"table-bg\" i18n=\"@@user.disp.firstName\">First Name:</td>\n                <td class=\"table-bg\">{{user.firstName}}</td>\n              </tr>\n              <tr>\n                <td class=\"table-bg\" i18n=\"@@user.disp.lastName\">Last Name:</td>\n                <td class=\"table-bg\">{{user.lastName}}</td>\n              </tr>\n              <tr>\n                <td class=\"table-bg\" i18n=\"@@user.disp.employeeId\">Employee ID:</td>\n                <td class=\"table-bg\">{{user.employeeId}}</td>\n              </tr>\n            </table>\n          </td>\n          <td class=\"col-sm-2\">\n            <div class=\"form-group row\">\n              <button type=\"button\" class=\"btn btn-light\" i18n=\"@@user.btn.edit\" (click)=\"editUser(user)\">Edit</button>\n            </div>\n            <div class=\"form-group row\">\n              <button type=\"button\" class=\"btn btn-light\" i18n=\"@@user.btn.delete\" (click)=\"deleteUser(user.id)\">Delete</button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UserComponent = /** @class */ (function () {
    function UserComponent(formBuilder, userService, localeId) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.localeId = localeId;
        this.submitted = false;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.staticAlertClosed = false;
        this.userForm = formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator]),
            employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userBtnLabel = "Add";
        this.getAllUsers();
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    UserComponent.prototype.resetForm = function () {
        this.userBtnLabel = "Add";
        this.userForm.reset();
    };
    UserComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    UserComponent.prototype.addUser = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        if (this.userBtnLabel == 'Add') {
            this.userService.createUser(this.userForm.value).subscribe(function (project) {
                return _this.changeSuccessMessage('User created successfully');
            });
        }
        else {
            this.userService.updateUser(this.userForm.value, this.userForm.controls['id'].value).subscribe(function (project) {
                return _this.changeSuccessMessage('User updated successfully');
            });
        }
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (project) {
            return _this.changeSuccessMessage('User deleted successfully');
        });
        this.getAllUsers();
    };
    UserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.allUsers = data;
            console.log(data);
        });
    };
    UserComponent.prototype.changeSuccessMessage = function (message) {
        this._success.next(message);
        this.getAllUsers();
    };
    UserComponent.prototype.editUser = function (user) {
        this.user = JSON.parse(JSON.stringify(user));
        delete this.user['projectId'];
        delete this.user['taskId'];
        this.userBtnLabel = "Update";
        this.userForm.setValue(this.user);
    };
    UserComponent.prototype.searchUser = function (searchText) {
        if (!searchText) {
            this.getAllUsers();
        }
        else {
            this.filterUsers = this.allUsers.filter(function (x) {
                return (x.firstName + x.lastName + x.employeeId).trim().toLowerCase()
                    .includes(searchText.trim().toLowerCase());
            });
        }
        this.allUsers = this.filterUsers;
    };
    UserComponent.prototype.sortUser = function (e) {
        var arr = e.id.split('_');
        if (arr.length > 1 && arr[1] == 'desc') {
            e.id = arr[0] + "_" + 'asc';
        }
        else {
            e.id = arr[0] + "_" + 'desc';
        }
        var direction = (arr.length > 1 && arr[1] == 'desc') ? 1 : -1;
        var sortedUsers = this.allUsers;
        sortedUsers.sort(function (a, b) {
            if (isNaN(a[arr[0]]) && isNaN(b[arr[0]])) {
                if (a[arr[0]] < b[arr[0]]) {
                    return -1 * direction;
                }
                else if (a[arr[0]] > b[arr[0]]) {
                    return 1 * direction;
                }
                else {
                    return 0;
                }
            }
            else {
                if (parseInt(a[arr[0]]) < parseInt(b[arr[0]])) {
                    return -1 * direction;
                }
                else if (parseInt(a[arr[0]]) > parseInt(b[arr[0]])) {
                    return 1 * direction;
                }
                else {
                    return 0;
                }
            }
        });
        this.allUsers = sortedUsers;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UserComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], UserComponent.prototype, "sort", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], String])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/viewtask/viewtask.component.css":
/*!*************************************************!*\
  !*** ./src/app/viewtask/viewtask.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button5 {\r\n    border-radius: 50%;\r\n}\r\n\r\nhr {\r\n    border:none;\r\n    border-top:1px dotted rgb(36, 34, 34);\r\n    color:#fff;\r\n    background-color:#fff;\r\n    height:1px;\r\n    width:50%;\r\n  }\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.mat-row:hover {\r\n    background-color: lightgrey;\r\n  }\r\n\r\n.gray-bg {\r\n    background-color: lightgrey;\r\n    border-spacing: 2px;\r\n    border-collapse: separate;\r\n  }\r\n\r\n.btn-light {\r\n    background-color: #d6d5d5;\r\n  }\r\n\r\n.btn-light:hover {\r\n    background-color: #b4b4b4;\r\n  }\r\n\r\n.error {\r\n    color: rgb(235, 26, 26)\r\n  }\r\n\r\ntable, td {\r\n    border: 1px solid white;\r\n  }\r\n\r\n.w-30 {\r\n    width: 20%;\r\n  }\r\n\r\n.w-90 {\r\n    width: 90%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Rhc2svdmlld3Rhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztFQUNYOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLDJCQUEyQjtFQUM3Qjs7QUFDQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOztBQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUNBO0lBQ0U7RUFDRjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLFVBQVU7RUFDWjs7QUFDQTtJQUNFLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXd0YXNrL3ZpZXd0YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uNSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXRvcDoxcHggZG90dGVkIHJnYigzNiwgMzQsIDM0KTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBoZWlnaHQ6MXB4O1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgLmdyYXktYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgfVxyXG4gIC5idG4tbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDVkNTtcclxuICB9XHJcbiAgLmJ0bi1saWdodDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRiNGI0O1xyXG4gIH1cclxuICAuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDI2LCAyNilcclxuICB9XHJcblxyXG4gIHRhYmxlLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgLnctMzAge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgLnctOTAge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/viewtask/viewtask.component.html":
/*!**************************************************!*\
  !*** ./src/app/viewtask/viewtask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngb-alert *ngIf=\"successMessage\" type=\"secondary\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n  <form class=\"mt-3\" [formGroup]=\"viewTaskForm\">\n    <div class=\"col-sm\">\n      <div class=\"form-group row\">\n        <label for=\"project\" class=\"col-sm-1 col-form-label\">Project: </label>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"project\">\n          <input type=\"hidden\" formControlName=\"projectId\">\n        </div>\n        <div class=\"btn-group col-sm-8\" role=\"group\">\n          <div class=\"btn-toolbar row\" role=\"toolbar\">\n            <div class=\"btn-group\" role=\"group\">\n              <button type=\"button\" class=\"btn btn-outline-secondary button5\" (click)=\"openProjectDialog()\">Search</button>\n            </div>\n            <div class=\"btn-toolbar row\" role=\"toolbar\">\n              <label for=\"project\" class=\"col-form-label ml-4\">Sort Task By: </label>\n              <div class=\"btn-group ml-2\" role=\"group\">\n                <button class=\"btn btn-light\" id=\"startDate\" (click)=\"sortTasks($event.target)\">Start Date</button>\n                <button class=\"btn btn-light\" id=\"endDate\" (click)=\"sortTasks($event.target)\">End Date</button>\n                <button class=\"btn btn-light\" id=\"priority\" (click)=\"sortTasks($event.target)\">Priority</button>\n                <button class=\"btn btn-light\" id=\"status\" (click)=\"sortTasks($event.target)\">Completed</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mt-5\"></div>\n\n      <div class=\"table-responsive\" *ngFor=\"let task of tasks\">\n        <table class=\"table w-90\">\n          <thead>\n            <tr>\n              <th scope=\"col\" class=\"w-30\">Task</th>\n              <th scope=\"col\" class=\"w-30\">Parent</th>\n              <th scope=\"col\">Priority</th>\n              <th scope=\"col\">Start</th>\n              <th scope=\"col\">End</th>\n              <th scope=\"col\"></th>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"gray-bg w-30\">{{ task.task }}</td>\n              <td class=\"gray-bg w-30\">{{ task.parentTask == null ? 'This Task Has NO Parent' : task.parentTask}}</td>\n              <td>{{ task.priority }}</td>\n              <td>{{ task.startDate }}</td>\n              <td>{{ task.endDate }}</td>\n              <td><button class=\"btn btn-light\"\n                (click)=\"navigateToEditTask(task)\">Edit</button>\n                <button class=\"btn btn-light\" \n                [disabled]=\"task.status == 'complete'\"\n                  (click)=\"updateTaskStatus(task.id)\">End Task</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <!-- Modal-->\n    <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <strong>Search Project</strong>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModalDialog()\"><span\n                aria-hidden=\"true\">&times;</span></button>\n          </div>\n\n          <!-- modal-body -->\n          <div class=\"modal-body\">\n            <div class=\"search-header\">\n              <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n              </mat-form-field>\n            </div>\n\n            <div class=\"search-container\">\n              <mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"project\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Project </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{row.project}} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"startDate\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{ row.startDate }} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"endDate\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> End Date </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\"> {{ row.endDate }} </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectProject(row.id, row.project)\">\n                </mat-row>\n              </mat-table>\n            </div>\n          </div>\n\n          <!-- modal-footer -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"closeModalDialog()\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/viewtask/viewtask.component.ts":
/*!************************************************!*\
  !*** ./src/app/viewtask/viewtask.component.ts ***!
  \************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(formBuilder, router, taskService, projectService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.taskService = taskService;
        this.projectService = projectService;
        this.submitted = false;
        this.display = 'none';
        this.headElements = ["Task", "Parent", "Priority", "Start", "End", "", ""];
        this.displayedColumns = ["project", "startDate", "endDate"];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.staticAlertClosed = false;
        this.viewTaskForm = formBuilder.group({
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            projectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ViewtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllProjects();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.projects);
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    ViewtaskComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    ViewtaskComponent.prototype.getTasksByProject = function (projectId) {
        var _this = this;
        this.taskService.getTasksByProject(projectId).subscribe(function (data) {
            _this.tasks = data;
        });
    };
    ViewtaskComponent.prototype.openProjectDialog = function () {
        this.getAllProjects();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.projects);
        this.display = 'block';
    };
    ViewtaskComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    ViewtaskComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    ViewtaskComponent.prototype.selectProject = function (id, project) {
        this.viewTaskForm.controls['project'].setValue(project);
        this.viewTaskForm.controls['projectId'].setValue(id);
        this.getTasksByProject(id);
        this.closeModalDialog();
    };
    ViewtaskComponent.prototype.navigateToEditTask = function (task) {
        task['project'] = this.viewTaskForm.controls['project'].value;
        task['projectId'] = this.viewTaskForm.controls['projectId'].value;
        delete task['status'];
        task['markParentTask'] = false;
        this.taskService.editTaskData = task;
        this.router.navigateByUrl("/task/add");
    };
    ViewtaskComponent.prototype.updateTaskStatus = function (taskId) {
        var _this = this;
        this.taskService.updateTaskStatus(taskId).subscribe(function (data) {
            _this.getTasksByProject(_this.viewTaskForm.controls['projectId'].value);
            _this.changeSuccessMessage('Task status is mark as completed!');
        });
    };
    ViewtaskComponent.prototype.changeSuccessMessage = function (message) {
        this._success.next(message);
    };
    ViewtaskComponent.prototype.sortTasks = function (e) {
        var arr = e.id.split('_');
        if (arr.length > 1 && arr[1] == 'desc') {
            e.id = arr[0] + "_" + 'asc';
        }
        else {
            e.id = arr[0] + "_" + 'desc';
        }
        var direction = (arr.length > 1 && arr[1] == 'desc') ? 1 : -1;
        var sortedTasks = this.tasks;
        sortedTasks.sort(function (a, b) {
            var aa;
            var bb;
            if (!isNaN(a[arr[0]]) && !isNaN(b[arr[0]])) {
                aa = parseInt(a[arr[0]]);
                bb = parseInt(b[arr[0]]);
            }
            else if (arr[0] == 'startDate' || arr[0] == 'endDate') {
                aa = new Date(a[arr[0]]);
                bb = new Date(b[arr[0]]);
            }
            else {
                aa = a;
                bb = b;
            }
            if (aa < bb) {
                return -1 * direction;
            }
            else if (aa > bb) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
        this.tasks = sortedTasks;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], ViewtaskComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], ViewtaskComponent.prototype, "sort", void 0);
    ViewtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/viewtask/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/viewtask/viewtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
            _service_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiURL: "http://localhost:7080/api/v1"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DataAnalytics\POC\S1\ProjectManager\project-management-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map