(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9od":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BooKService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooKService", function() { return BooKService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
class BooKService {
    constructor(http) {
        this.http = http;
        this.booksUrl = "https://api.mocki.io/v1/67d9fd57";
    }
    getBooks() {
        return this.http.get(this.booksUrl);
    }
    addBook(booky) {
        return this.http.post(this.booksUrl, booky, httpOptions);
    }
}
BooKService.ɵfac = function BooKService_Factory(t) { return new (t || BooKService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BooKService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BooKService, factory: BooKService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TROY\angularAssignment\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "N4J0":
/*!************************************************!*\
  !*** ./src/app/bookApp/book/book.component.ts ***!
  \************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/book.service */ "+9od");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _book_item_book_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book-item/book-item.component */ "Q8it");





function BookComponent_div_18_app_book_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-book-item", 5);
} if (rf & 2) {
    const book_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("myBook", book_r2);
} }
function BookComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookComponent_div_18_app_book_item_1_Template, 1, 1, "app-book-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.bookList);
} }
class BookComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this.hidden = false;
    }
    ngOnInit() {
        // this.bookList = this.bookService.getBooks();
        this.bookService.getBooks().subscribe(books => {
            this.bookList = books;
        });
    }
    // addBook(book:Books){
    //   this.bookService.addBook(book).subscribe(books => { this.bookList.push(books)})
    // }
    Search() {
        if (this.title == "") {
            this.ngOnInit();
        }
        else {
            this.bookList = this.bookList.filter(res => {
                return res.title.toLowerCase().match(this.title.toLowerCase());
            });
            this.hidden = true;
        }
    }
}
BookComponent.ɵfac = function BookComponent_Factory(t) { return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BooKService"])); };
BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookComponent, selectors: [["app-book"]], decls: 19, vars: 2, consts: [[1, "input"], ["type", "text", "name", "bookAuthor", "placeholder", "SEARCH", "id", "inputBar", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", "id", "subbtn", 3, "click"], [4, "ngIf"], [3, "myBook", 4, "ngFor", "ngForOf"], [3, "myBook"]], template: function BookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Search For more Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " How to write for the world of work\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 The Great Gatsby\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 The Grapes of Wrath\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 Harry Potter and the Order of the Phoenix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " To Kill a Mockingbird\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 Pride and Prejudice\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 Twilight (Twilight, #1)\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 The Book Thief\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 Animal Farm\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The Chronicles of Narnia (Chronicles of Narnia, #1-7)\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 The Fault in Our Stars\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 Margaret Mitchell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The Giving Tree\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 Wuthering Height\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 The Picture of Dorian Gray\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 Les Mis\u00E9rables\u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookComponent_Template_input_ngModelChange_16_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookComponent_Template_input_click_17_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BookComponent_div_18_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _book_item_book_item_component__WEBPACK_IMPORTED_MODULE_4__["BookItemComponent"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    font-size: 120px;\r\n    text-transform: uppercase;\r\n    margin: 0px;\r\n    padding:0px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n    padding:0px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-weight:bold;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n    background: firebrick;\r\n    padding: 15px;\r\n    margin: auto;\r\n    text-align: center;\r\n  }\r\n\r\n#inputBar[_ngcontent-%COMP%]{\r\n      width:500px;\r\n      height:20px;\r\n      background-color: yellow;\r\n      border:5px solid darkred;\r\n  }\r\n\r\n#subbtn[_ngcontent-%COMP%]{\r\n      background-color: greenyellow;\r\n      width: 120px;\r\n      height: 50px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztBQUVBO01BQ0ksV0FBVztNQUNYLFdBQVc7TUFDWCx3QkFBd0I7TUFDeEIsd0JBQXdCO0VBQzVCOztBQUVBO01BQ0ksNkJBQTZCO01BQzdCLFlBQVk7TUFDWixZQUFZO0VBQ2hCIiwiZmlsZSI6ImJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59XHJcblxyXG5oMSwgaDIsIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzowcHg7XHJcbn1cclxuXHJcblxyXG5we1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG4uaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogZmlyZWJyaWNrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICNpbnB1dEJhcntcclxuICAgICAgd2lkdGg6NTAwcHg7XHJcbiAgICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgIGJvcmRlcjo1cHggc29saWQgZGFya3JlZDtcclxuICB9XHJcblxyXG4gICNzdWJidG57XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "Q8it":
/*!**********************************************************!*\
  !*** ./src/app/bookApp/book-item/book-item.component.ts ***!
  \**********************************************************/
/*! exports provided: BookItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookItemComponent", function() { return BookItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BookItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookItemComponent.ɵfac = function BookItemComponent_Factory(t) { return new (t || BookItemComponent)(); };
BookItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookItemComponent, selectors: [["app-book-item"]], inputs: { myBook: "myBook" }, decls: 11, vars: 3, consts: [[1, "item"]], template: function BookItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ISBN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TITLE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " AUTHOR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.myBook.isbn, " \u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.myBook.title, " \u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.myBook.author, " ");
    } }, styles: ["div[_ngcontent-%COMP%]{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bolder;\r\n    font-size: 14px;\r\n    color:darkred;\r\n    position: relative;\r\n    left: 180px;\r\n    \r\n}\r\n.item[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    color:black;\r\n    opacity: .5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2staXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNERBQTREO0lBQzVELG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJib29rLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjpkYXJrcmVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTgwcHg7XHJcbiAgICAvKiBkaXNwbGF5Om5vbmU7ICovXHJcbn1cclxuLml0ZW17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIG9wYWNpdHk6IC41O1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bookApp_book_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookApp/book/book.component */ "N4J0");


class AppComponent {
    constructor() {
        this.title = 'angularAssignment';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_bookApp_book_book_component__WEBPACK_IMPORTED_MODULE_1__["BookComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n    max-width: -webkit-fit-content;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _bookApp_book_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookApp/book/book.component */ "N4J0");
/* harmony import */ var _bookApp_book_item_book_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookApp/book-item/book-item.component */ "Q8it");
/* harmony import */ var _bookApp_user_input_user_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bookApp/user-input/user-input.component */ "Zwh3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-order-pipe */ "cudM");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            ng2_order_pipe__WEBPACK_IMPORTED_MODULE_9__["Ng2OrderModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _bookApp_book_book_component__WEBPACK_IMPORTED_MODULE_5__["BookComponent"],
        _bookApp_book_item_book_item_component__WEBPACK_IMPORTED_MODULE_6__["BookItemComponent"],
        _bookApp_user_input_user_input_component__WEBPACK_IMPORTED_MODULE_7__["UserInputComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
        ng2_order_pipe__WEBPACK_IMPORTED_MODULE_9__["Ng2OrderModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]] }); })();


/***/ }),

/***/ "Zwh3":
/*!************************************************************!*\
  !*** ./src/app/bookApp/user-input/user-input.component.ts ***!
  \************************************************************/
/*! exports provided: UserInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInputComponent", function() { return UserInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserInputComponent {
    constructor() {
        this.addBook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSubmit() {
        let newMovie = {
            isbn: this.isbn,
            title: this.title,
            author: this.author
        };
        this.addBook.emit(newMovie);
    }
}
UserInputComponent.ɵfac = function UserInputComponent_Factory(t) { return new (t || UserInputComponent)(); };
UserInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInputComponent, selectors: [["app-user-input"]], outputs: { addBook: "addBook" }, decls: 0, vars: 0, template: function UserInputComponent_Template(rf, ctx) { }, styles: [".input[_ngcontent-%COMP%] {\r\n  background: firebrick;\r\n  padding: 15px;\r\n  margin: auto;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoidXNlci1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogZmlyZWJyaWNrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map