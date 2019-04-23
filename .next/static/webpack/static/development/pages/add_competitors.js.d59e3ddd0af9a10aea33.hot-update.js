webpackHotUpdate("static/development/pages/add_competitors.js",{

/***/ "./components/LapTimeList.js":
/*!***********************************!*\
  !*** ./components/LapTimeList.js ***!
  \***********************************/
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
/* harmony import */ var _LapTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LapTime */ "./components/LapTime.js");










var LapTimeList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LapTimeList, _Component);

  function LapTimeList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LapTimeList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LapTimeList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LapTimeList, [{
    key: "render",
    //   static proptTypes = {
    //     timeList : PropTypes.array
    //   };
    value: function render() {
      var timeList = this.props.timeList;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "LapTimeList"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "LapTimeList__listwrap"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "LapTimeList__headers"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, " Lap "), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, " Time ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "LapTimeList__list"
      }, timeList.map(function (time, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_LapTime__WEBPACK_IMPORTED_MODULE_8__["default"], {
          lap: index + 1,
          time: time
        }));
      }))));
    }
  }]);

  return LapTimeList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(LapTimeList, "defaultProps", {
  timeList: []
});

/* harmony default export */ __webpack_exports__["default"] = (LapTimeList);

/***/ })

})
//# sourceMappingURL=add_competitors.js.d59e3ddd0af9a10aea33.hot-update.js.map