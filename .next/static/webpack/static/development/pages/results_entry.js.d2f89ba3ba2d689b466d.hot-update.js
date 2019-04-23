webpackHotUpdate("static/development/pages/results_entry.js",{

/***/ "./controllers/timeFormat.js":
/*!***********************************!*\
  !*** ./controllers/timeFormat.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timeFormat; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);


function zeroPad(number) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var s = String(number);

  while (s.length < size) {
    s = '0' + s;
  }

  return s;
} // Convert time from miliseconds int to hh:mm:ss.S string


function timeFormat(miliseconds) {
  var remaining = miliseconds / 1000;

  var hh = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(remaining / 3600, 10);

  remaining %= 3600;

  var mm = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(remaining / 60, 10);

  var ss = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(remaining % 60, 10);

  var S = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(miliseconds % 1000 / 100, 100);

  return "".concat(zeroPad(hh), ":").concat(zeroPad(mm), ":").concat(zeroPad(ss), ".").concat(S);
}

/***/ })

})
//# sourceMappingURL=results_entry.js.d2f89ba3ba2d689b466d.hot-update.js.map