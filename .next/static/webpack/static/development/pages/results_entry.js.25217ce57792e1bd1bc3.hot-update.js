webpackHotUpdate("static/development/pages/results_entry.js",{

/***/ "./components/Controls.js":
/*!********************************!*\
  !*** ./components/Controls.js ***!
  \********************************/
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
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_8__);










var Controls =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Controls, _Component);

  function Controls() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Controls);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Controls).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Controls, [{
    key: "createPointRow",
    // static proptTypes = {
    //   isRunning  : PropTypes.bool,
    //   start      : PropTypes.func.isRequired,
    //   stop       : PropTypes.func.isRequired,
    //   reset      : PropTypes.func.isRequired,
    //   addLapTime : PropTypes.func.isRequired 
    // };
    value: function createPointRow(item) {
      var table = [];

      for (var i = 0; i < item.choices.length; i++) {
        table.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: item.choices[i].selected == true ? "obstacleBoxContent activeBox" : "obstacleBoxContent"
        }, item.choices[i].value));
      }

      return table;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          isRunning = _this$props.isRunning,
          start = _this$props.start,
          stop = _this$props.stop,
          reset = _this$props.reset,
          addLapTime = _this$props.addLapTime,
          choices = _this$props.choices;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Controls"
      }, !isRunning ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: start,
        className: "Controls__button",
        ref: "startBtn"
      }, " Start ") : null, isRunning ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: stop,
        className: "Controls__button",
        ref: "stopBtn"
      }, " Stop ") : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: reset,
        disabled: isRunning,
        className: "Controls__button",
        ref: "resetBtn"
      }, " Reset "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: addLapTime,
        disabled: !isRunning,
        className: "Controls__button",
        ref: "lapBtn"
      }, " Lap Time "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, this.state.obstacles.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "obstacleBox"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          horizontal: "center"
        }, _this.createPointRow(item)));
      })));
    }
  }]);

  return Controls;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Controls, "defaultProps", {
  isRunning: false,
  choices: []
});

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ })

})
//# sourceMappingURL=results_entry.js.25217ce57792e1bd1bc3.hot-update.js.map