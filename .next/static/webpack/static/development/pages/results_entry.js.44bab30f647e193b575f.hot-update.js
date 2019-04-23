webpackHotUpdate("static/development/pages/results_entry.js",{

/***/ "./components/StopWatch.js":
/*!*********************************!*\
  !*** ./components/StopWatch.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/stopwatch.css */ "./style/stopwatch.css");
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Timer */ "./components/Timer.js");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Controls */ "./components/Controls.js");
/* harmony import */ var _LapTimeList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LapTimeList */ "./components/LapTimeList.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_11__);













function getDefaultState() {
  return {
    isRunning: false,
    time: 0,
    timeList: [],
    choices: []
  };
}

var Stopwatch =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Stopwatch, _Component);

  function Stopwatch(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Stopwatch);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Stopwatch).call(this, props));
    _this.state = getDefaultState();
    _this.timerRef = null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Stopwatch, [{
    key: "updateTimer",
    value: function updateTimer(extraTime) {
      var time = this.state.time;
      this.setState({
        time: time + extraTime
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this.setState({
        isRunning: true
      }, function () {
        _this2.timerRef = setInterval(function () {
          _this2.updateTimer(10);
        }, 10);
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      this.setState({
        isRunning: false
      }, function () {
        clearInterval(_this3.timerRef);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(getDefaultState());
    }
  }, {
    key: "addLapTime",
    value: function addLapTime() {
      var _this$state = this.state,
          time = _this$state.time,
          timeList = _this$state.timeList;
      this.setState({
        timeList: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(timeList), [time])
      });
      this.someFn();
    }
  }, {
    key: "addObstacleTime",
    value: function addObstacleTime(val) {
      var returnTime = this.state.time;
      this.props.callbackFromParent(returnTime, val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          isRunning = _this$state2.isRunning,
          time = _this$state2.time,
          timeList = _this$state2.timeList;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stopwatch"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          fontSize: '24px',
          fontWeight: 'bold'
        }
      }, "Timer"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Timer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        time: time
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Controls__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isRunning: isRunning,
        start: function start() {
          return _this4.start();
        },
        stop: function stop() {
          return _this4.stop();
        },
        reset: function reset() {
          return _this4.reset();
        },
        addLapTime: function addLapTime() {
          return _this4.addLapTime();
        }
      }), isRunning ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "obstacleBox"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "obstacleBoxTitle"
      }, this.props.obstacle), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        horizontal: "center"
      }, this.props.choices.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: item.selected == true ? "obstacleBoxContent activeBox" : "obstacleBoxContent",
          onClick: function onClick(e) {
            return _this4.addObstacleTime(item);
          }
        }, item.value);
      }))) : null);
    }
  }]);

  return Stopwatch;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Stopwatch);

/***/ })

})
//# sourceMappingURL=results_entry.js.44bab30f647e193b575f.hot-update.js.map