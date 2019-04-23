webpackHotUpdate("static/development/pages/add_competitors.js",{

/***/ "./components/LapTime.js":
/*!*******************************!*\
  !*** ./components/LapTime.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/stopwatch.css */ "./style/stopwatch.css");
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _controllers_timeFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controllers/timeFormat */ "./controllers/timeFormat.js");










var LapTime =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LapTime, _Component);

  function LapTime() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LapTime);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LapTime).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LapTime, [{
    key: "render",
    //   static proptTypes = {
    //     lap  : PropTypes.number,
    //     time : PropTypes.number
    //   };
    value: function render() {
      var _this$props = this.props,
          lap = _this$props.lap,
          time = _this$props.time;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "LapTime"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "LapTime__lap"
      }, lap), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "LapTime__time"
      }, Object(_controllers_timeFormat__WEBPACK_IMPORTED_MODULE_8__["default"])(time)));
    }
  }]);

  return LapTime;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(LapTime, "defaultProps", {
  lap: 0,
  time: 0
});

/* harmony default export */ __webpack_exports__["default"] = (LapTime);

/***/ })

})
//# sourceMappingURL=add_competitors.js.e4f8be0a249c32cf568c.hot-update.js.map