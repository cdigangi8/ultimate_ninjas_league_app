module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: addCompetitor, getCompInfo, getAthletes, getCourseObstacles, postScorecard, postUpdatedScorecard, postStandings, updateStandings, postUpdatedRankings, getStandings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCompetitor", function() { return addCompetitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompInfo", function() { return getCompInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAthletes", function() { return getAthletes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourseObstacles", function() { return getCourseObstacles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postScorecard", function() { return postScorecard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postUpdatedScorecard", function() { return postUpdatedScorecard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postStandings", function() { return postStandings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStandings", function() { return updateStandings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postUpdatedRankings", function() { return postUpdatedRankings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStandings", function() { return getStandings; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);



function addCompetitor(firstName, lastName, age, location, gender) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/add_competitor", {
      // axios.post(`http://localhost:5000/api/complete_profile`, {
      params: {
        firstName: firstName,
        lastName: lastName,
        age: age,
        location: location,
        gender: gender
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function getCompInfo(location) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/get_comp_info", {
      params: {
        location: location
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function getAthletes(location, max, min) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/get_athletes", {
      params: {
        location: location,
        ageMax: max,
        ageMin: min
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function getCourseObstacles(id) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/get_obstacles", {
      params: {
        course: id
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function postScorecard(athlete, course, points, tieOB, tieTime, resStr) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/post_scorecard", {
      params: {
        athlete: athlete,
        course: course,
        points: points,
        tieOB: tieOB,
        tieTime: tieTime,
        resStr: resStr
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function postUpdatedScorecard(athlete, course, points, tieOB, tieTime, resStr) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/post_updated_scorecard", {
      params: {
        athlete: athlete,
        course: course,
        points: points,
        tieOB: tieOB,
        tieTime: tieTime,
        resStr: resStr
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function postStandings(athlete, course, points) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/post_standings", {
      params: {
        // array: arr,
        athlete_id: athlete.athlete_id,
        course: course,
        rank: points
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function updateStandings(athlete, total) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/update_season_standings", {
      params: {
        athlete_id: athlete.athlete_id,
        total_athletes: total
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function postUpdatedRankings(obj) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/update_season_rankings", {
      params: {
        athlete_id: obj.ath,
        ranking: obj.rank
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}
function getStandings(ageMin, ageMax, location) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/get_standings", {
      params: {
        ageMin: ageMin,
        ageMax: ageMax,
        location: location
      }
    }).then(function (resp) {
      res(resp);
    }).catch(function (err) {
      return reject(err);
    });
  });
  return p;
}

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/stopwatch.css */ "./style/stopwatch.css");
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
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
    key: "render",
    // static proptTypes = {
    //   isRunning  : PropTypes.bool,
    //   start      : PropTypes.func.isRequired,
    //   stop       : PropTypes.func.isRequired,
    //   reset      : PropTypes.func.isRequired,
    //   addLapTime : PropTypes.func.isRequired 
    // };
    value: function render() {
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
        className: "startBtn",
        ref: "startBtn"
      }, " Start ") : null, isRunning ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: stop,
        className: "stopBtn",
        ref: "stopBtn"
      }, " Stop ") : null);
    }
  }]);

  return Controls;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Controls, "defaultProps", {
  isRunning: false,
  choices: []
});

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./components/StopWatch.js":
/*!*********************************!*\
  !*** ./components/StopWatch.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/stopwatch.css */ "./style/stopwatch.css");
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Timer */ "./components/Timer.js");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Controls */ "./components/Controls.js");
/* harmony import */ var _LapTimeList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LapTimeList */ "./components/LapTimeList.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_11__);













function getDefaultState() {
  return {
    isRunning: false,
    time: 0,
    timeList: [],
    choices: [],
    start: 0,
    stopTime: 0,
    restartTime: 0,
    adjustedTime: 0
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
      var time = this.state.time; // this.setState({ time : time + extraTime });

      this.setState({
        time: extraTime
      });
    } //   setInterval(function() {
    //       var delta = Date.now() - start; // milliseconds elapsed since start
    //       …
    //       output(Math.floor(delta / 1000)); // in seconds
    //       // alternatively just show wall clock time:
    //       output(new Date().toUTCString());
    //   }, 1000); // update about every second

  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (this.state.stopTime != 0) {
        this.setState({
          restartTime: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(),
          adjustedTime: this.state.adjustedTime + (_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - this.state.stopTime)
        });
      } else {
        this.setState({
          start: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
        });
      }

      this.setState({
        isRunning: true
      }, function () {
        _this2.timerRef = setInterval(function () {
          //  this.updateTimer( 10 ) 
          var delta = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - _this2.state.start - _this2.state.adjustedTime; // milliseconds elapsed since start


          _this2.updateTimer(delta);
        }, 10);
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      this.setState({
        isRunning: false,
        stopTime: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
      }, function () {
        clearInterval(_this3.timerRef);
      });
    } //   reset() {
    //     this.setState(getDefaultState());
    //   }
    //   addLapTime() {
    //     const { time, timeList } = this.state;
    //     this.setState({
    //       timeList : [ ...timeList, time ] 
    //     });
    //     this.someFn();
    //   }

  }, {
    key: "addObstacleTime",
    value: function addObstacleTime(val) {
      var returnTime = this.state.time;
      this.props.callbackFromParent(returnTime, val);

      if (this.props.obstacleInd == this.props.obstacleCnt - 1) {
        this.stop();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          isRunning = _this$state.isRunning,
          time = _this$state.time,
          timeList = _this$state.timeList;
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
        }
      }), isRunning ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "obstacleBox"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "SWBoxTitle"
      }, this.props.obstacle), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        horizontal: "center",
        wrap: true
      }, this.props.choices.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: item.selected == true ? "SWBoxContent activeBox" : "SWBoxContent",
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

/***/ }),

/***/ "./components/Timer.js":
/*!*****************************!*\
  !*** ./components/Timer.js ***!
  \*****************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/stopwatch.css */ "./style/stopwatch.css");
/* harmony import */ var _style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_stopwatch_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _controllers_timeFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controllers/timeFormat */ "./controllers/timeFormat.js");










var Timer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Timer, _Component);

  function Timer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Timer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Timer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Timer, [{
    key: "render",
    //   static proptTypes = {
    //     time : PropTypes.number
    //   };
    value: function render() {
      var time = this.props.time;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Timer"
      }, Object(_controllers_timeFormat__WEBPACK_IMPORTED_MODULE_8__["default"])(time));
    }
  }]);

  return Timer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Timer, "defaultProps", {
  time: 0
});

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/header.css */ "./style/header.css");
/* harmony import */ var _style_header_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_header_css__WEBPACK_IMPORTED_MODULE_7__);







 // import Button from '@material-ui/core/Button';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var UNHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UNHeader, _Component);

  function UNHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UNHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UNHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UNHeader, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "headerSection",
        vertical: "center",
        wrap: true,
        style: {
          paddingBottom: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_6__["Column"], {
        flexBasis: "0%",
        style: {
          paddingTop: '15px',
          paddingBottom: '15px',
          paddingLeft: '15px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "un_logo",
        src: "../static/un_logo.png",
        width: "175",
        height: "auto"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_6__["Column"], {
        horizontal: "center",
        flexGrow: 1,
        className: "mainTitle"
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_6__["Column"], null, this.props.link != '' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Link, {
        style: {
          textDecoration: 'none'
        },
        to: this.props.link
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "navBtn"
      }, this.props.linkTitle)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          width: '150px'
        }
      }))));
    }
  }]);

  return UNHeader;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UNHeader);

/***/ }),

/***/ "./controllers/controllers.js":
/*!************************************!*\
  !*** ./controllers/controllers.js ***!
  \************************************/
/*! exports provided: convertObstacles, resetObstacleArr, calculateScore, rankFunction, checkActiveScorecard, updateSeasonRanking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertObstacles", function() { return convertObstacles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetObstacleArr", function() { return resetObstacleArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateScore", function() { return calculateScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankFunction", function() { return rankFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkActiveScorecard", function() { return checkActiveScorecard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSeasonRanking", function() { return updateSeasonRanking; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);


function convertObstacles(arr) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
    var newArr = [];
    arr.forEach(function (item, index) {
      item.choices = [];
      item.time = '';

      for (var i = 0; i <= item.linear_points_available; i++) {
        item.choices.push({
          key: item.obstacle_id + ':' + i,
          value: i,
          selected: false
        });
      }
    });
    res(arr);
  });
  return p;
}
function resetObstacleArr(arr) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
    arr.forEach(function (item, index) {
      item.time = '';

      for (var i = 0; i < item.choices.length; i++) {
        item.choices[i].selected = false;
      }
    });
    res(arr);
  });
  return p;
}
function calculateScore(arr) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
    var resArr = [];
    var totalScore = 0;
    arr.forEach(function (item, index) {
      for (var i = 0; i < item.choices.length; i++) {
        if (item.choices[i].selected == true) {
          totalScore += item.choices[i].value;
          resArr.push({
            key: item.obstacle_id,
            value: item.choices[i].value,
            time: item.time
          });
        }
      }
    });
    var returnVar = {
      score: totalScore,
      resStr: resArr
    };
    res(returnVar);
  });
  return p;
}

function checkResult(arr, id) {
  var found = arr.some(function (el) {
    return el.athlete_id === id;
  });
  return found;
}

function getAgeArray(arr, ageMin, ageMax) {
  var newArr = [];

  for (var a = 0; a < arr.length; a++) {
    if (arr[a].age >= ageMin && arr[a].age < ageMax + 1) {
      newArr.push(arr[a]);
    }
  }

  return newArr;
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  var pointsA = a.rank;
  var pointsB = b.rank;
  var comparison = 0;

  if (pointsA > pointsB || pointsB == '' || pointsA == '') {
    comparison = 1;
  } else if (pointsA < pointsB) {
    comparison = -1;
  }

  return comparison;
}

function convertMilliSec(t) {
  var time;
  var hour = t.split(":")[0];
  var min = t.split(":")[1];
  var sec = t.split(":")[2].split('.')[0];
  var ms = t.split(":")[2].split('.')[1];
  time = (hour * 3600 + min * 60 + sec) * 1000 + ms;
  return time;
}

function rankArrFunc(arr) {
  var newArr = arr;

  for (var a = 0; a < arr.length; a++) {
    var rank = 1;
    var newRank = false;

    for (var b = 0; b < arr.length; b++) {
      if (arr[a].points !== '' && arr[a].athlete_id !== arr[b].athlete_id) {
        if (arr[a].points == arr[b].points) {
          if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(arr[a].tieOB) > _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(arr[b].tieOB)) {
            newRank = true;
          } else if (arr[a].tieOB == arr[b].tieOB) {
            if (arr[a].tieOB == '') {
              var aTime = convertMilliSec(arr[a].tieTime);
              var bTime = convertMilliSec(arr[b].tieTime);

              if (aTime < bTime) {
                // arr[a].rank = rank;
                newRank = true;
              } else if (aTime == bTime) {
                // arr[a].rank = rank;
                newRank = true;
              } else {
                rank += 1;
              }
            } else {
              var ath1res = JSON.parse(arr[a].resultStr);
              var ath1pts;
              var ath2res = JSON.parse(arr[b].resultStr);
              var ath2pts; // console.log(ath1res);
              // console.log(ath2res);

              for (var a1 = 0; a1 < ath1res.length; a1++) {
                // if(ath1res[a1].key == arr[a].tieOB){
                if (a1 + 1 == arr[a].tieOB) {
                  ath1pts = ath1res[a1].value;
                  break;
                }
              }

              for (var a2 = 0; a2 < ath2res.length; a2++) {
                // if(ath2res[a2].key == arr[a].tieOB){
                if (a2 + 1 == arr[a].tieOB) {
                  ath2pts = ath2res[a2].value;
                  break;
                }
              } // console.log(ath1pts + ' : ' + ath2pts);


              if (ath1pts > ath2pts) {
                newRank = true;
              } else if (ath1pts == ath2pts) {
                var aTime = convertMilliSec(arr[a].tieTime);
                var bTime = convertMilliSec(arr[b].tieTime);

                if (aTime < bTime) {
                  newRank = true;
                } else if (aTime == bTime) {
                  newRank = true;
                } else {
                  rank += 1;
                }
              } else {
                rank += 1;
              }
            }
          } else {
            if (arr[a].athlete_id == 89) {
              console.log(rank);
              console.log(arr[a]);
              console.log(arr[b]);
            }

            rank += 1;
          }
        } else if (arr[a].points < arr[b].points) {
          //lower points
          rank += 1;
        } else {
          //more points
          newRank = true;
        }
      }
    }

    if (newRank == true) {
      // console.log(arr[a]);
      // console.log(rank);
      arr[a].rank = rank;
    } else {
      arr[a].rank = arr.length;
    }
  }

  return arr;
}

function rankFunction(results, athletes, ageMin, ageMax) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
    var completedCount = 0;
    var kidArray = getAgeArray(athletes, ageMin, ageMax);

    for (var a = 0; a < kidArray.length; a++) {
      var resultMatch = checkResult(results, kidArray[a].athlete_id);

      if (resultMatch == true) {
        for (var i = 0; i < results.length; i++) {
          if (kidArray[a].athlete_id == results[i].athlete_id) {
            kidArray[a].points = results[i].Points;
            kidArray[a].tieOB = results[i].tiebreaker_obstacle;
            kidArray[a].tieTime = results[i].tiebreaker_time;
            kidArray[a].resultStr = results[i].result_string;
            kidArray[a].completed = true;
            completedCount += 1;
            break;
          }
        }
      } else {
        kidArray[a].points = '';
        kidArray[a].tieOB = '';
        kidArray[a].tieTime = '';
        kidArray[a].resultStr = '';
        kidArray[a].completed = false;
        kidArray[a].rank = '';
      }
    }

    var rankArray = rankArrFunc(kidArray);
    rankArray.sort(compare);
    res({
      array: rankArray,
      completedCount: completedCount
    });
  });
  return p;
}
function checkActiveScorecard(results, obstacles, athlete) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
    var tiebreakMin = '';
    var tiebreakSec = '';
    var tiebreakMS = '';
    var existingScorecard = false;
    console.log(athlete);

    for (var i = 0; i < results.length; i++) {
      if (results[i].athlete_id == athlete) {
        console.log('success');
        var resultArr = JSON.parse(results[i].result_string);

        for (var z = 0; z < obstacles.length; z++) {
          for (var x = 0; x < resultArr.length; x++) {
            if (obstacles[z].obstacle_id == resultArr[x].key) {
              for (var k = 0; k < obstacles[z].choices.length; k++) {
                if (obstacles[z].choices[k].value == resultArr[x].value) {
                  obstacles[z].choices[k].selected = true;

                  if (resultArr[x].time) {
                    obstacles[z].time = resultArr[x].time;
                  }

                  break;
                }
              }

              break;
            }
          }
        }

        tiebreakMin = results[i].tiebreaker_time.split(":")[1];
        tiebreakSec = results[i].tiebreaker_time.split(":")[2].split(".")[0];
        tiebreakMS = results[i].tiebreaker_time.split(":")[2].split(".")[1];
        existingScorecard = true;
        break;
      }
    }

    res({
      obstacles: obstacles,
      min: tiebreakMin,
      sec: tiebreakSec,
      ms: tiebreakMS,
      existingScorecard: existingScorecard
    });
  });
  return p;
}

function sortArr(arr) {
  var cnt = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].pts == 0) {
      cnt += 1;
    }
  }

  if (cnt > 0) {
    for (var z = 0; z < cnt; z++) {
      arr.push(arr[z]);
    }

    arr.splice(0, cnt);
  }

  return arr;
}

function getAvg(arr, comps) {
  arr = sortArr(arr);
  console.log(arr);
  var avg;
  var num = 0;
  var total;

  if (arr.length < comps) {
    total = arr.length;
  } else {
    total = comps;
  }

  for (var i = 0; i < total; i++) {
    num += arr[i].rank;
  }

  if (total > 0) {
    avg = num / total;
    console.log(avg);
  }

  return avg;
}

function getPts(arr, comps, athCnt) {
  var num = 0;
  var total;

  if (arr.length < comps) {
    total = arr.length;
  } else {
    total = comps;
  }

  for (var i = 0; i < total; i++) {
    num += athCnt - (arr[i].rank - 1);
  }

  return num;
}

function updateSeasonRanking(athletes) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
    for (var a = 0; a < athletes.length; a++) {
      var rank = 1;

      for (var b = 0; b < athletes.length; b++) {
        var checkA;
        var checkB;

        if (athletes[a].ath !== athletes[b].ath) {
          if (athletes[a].pts < athletes[b].pts) {
            rank += 1;
          } else if (athletes[a].pts == athletes[b].pts) {
            checkA = getAvg(athletes[a].res, 6);
            checkB = getAvg(athletes[b].res, 6);

            if (checkA > checkB) {
              rank += 1;
            } else if (checkA == checkB) {
              checkA = getPts(athletes[a].res, 7, athletes.length);
              checkB = getPts(athletes[b].res, 7, athletes.length);

              if (checkA < checkB) {
                rank += 1;
              } else if (checkA == checkB) {
                checkA = getAvg(athletes[a].res, 7);
                checkB = getAvg(athletes[b].res, 7);

                if (checkA > checkB) {
                  rank += 1;
                } else if (checkA == checkB) {
                  checkA = getPts(athletes[a].res, 8, athletes.length);
                  checkB = getPts(athletes[b].res, 8, athletes.length);

                  if (checkA < checkB) {
                    rank += 1;
                  } else if (checkA == checkB) {
                    checkA = getAvg(athletes[a].res, 8);
                    checkB = getAvg(athletes[b].res, 8);

                    if (checkA > checkB) {
                      rank += 1;
                    }
                  }
                }
              }
            }
          }
        }
      }

      athletes[a].rank = rank;
    }

    res({
      array: athletes
    });
  });
  return p;
}

/***/ }),

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

  var S = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(miliseconds % 1000 / 10, 10);

  return "".concat(zeroPad(hh), ":").concat(zeroPad(mm), ":").concat(zeroPad(ss), ".").concat(zeroPad(S));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/results_entry.js":
/*!********************************!*\
  !*** ./pages/results_entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _style_results_entry_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../style/results_entry.css */ "./style/results_entry.css");
/* harmony import */ var _style_results_entry_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_results_entry_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _controllers_controllers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../controllers/controllers */ "./controllers/controllers.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _components_StopWatch__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../components/StopWatch */ "./components/StopWatch.js");
/* harmony import */ var _controllers_timeFormat__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../controllers/timeFormat */ "./controllers/timeFormat.js");





































var ResultsEntry =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(ResultsEntry, _Component);

  function ResultsEntry() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ResultsEntry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ResultsEntry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      location: "",
      courses: [],
      athletes: [],
      obstacles: [],
      courseIndex: "",
      showLocationSelect: true,
      showCourseSelect: false,
      showAgeSelect: false,
      showCompetitors: false,
      ageMin: '',
      ageMax: '',
      showScorecard: false,
      currentAthlete: '',
      currentAthleteIndex: '',
      tiebreakerOb: "",
      tieBreakMin: '',
      tieBreakSec: '',
      tieBreakMs: '',
      openDialog: false,
      resultsArr: [],
      rankArr: [],
      openFinalDialog: false,
      completedCount: 0,
      errorDialog: false,
      errorMsg: '',
      existingScorecard: false,
      obstacleIndex: 0,
      editTime: false,
      editTimeMin: '',
      editTimeSec: '',
      editTimeMS: '',
      editTimeOb: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])({}, name, event.target.value));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "closeDialog", function (type) {
      _this.setState({
        openDialog: false,
        openFinalDialog: false,
        errorDialog: false,
        editTime: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "myCallback", function (time, obstacle) {
      _this.addPoints(_this.state.obstacles[_this.state.obstacleIndex], obstacle.key, time);

      if (_this.state.obstacleIndex < _this.state.obstacles.length - 1) {
        _this.setState({
          obstacleIndex: _this.state.obstacleIndex + 1
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ResultsEntry, [{
    key: "setLocation",
    value: function setLocation(val) {
      var _this2 = this;

      this.setState({
        location: val,
        showLocationSelect: false,
        showCourseSelect: true
      });
      Object(_api_api__WEBPACK_IMPORTED_MODULE_15__["getCompInfo"])(val).then(function (resp) {
        _this2.setState({
          courses: resp.data.courses,
          athletes: resp.data.athletes
        });
      });
    }
  }, {
    key: "setCourse",
    value: function setCourse(ind) {
      var _this3 = this;

      var indx;

      for (var i = 0; i < this.state.courses.length; i++) {
        if (this.state.courses[i].course_id == ind) {
          indx = i;
        }
      }

      this.setState({
        courseIndex: indx,
        showCourseSelect: false,
        showAgeSelect: true
      });
      Object(_api_api__WEBPACK_IMPORTED_MODULE_15__["getCourseObstacles"])(this.state.courses[indx].course_id).then(function (resp) {
        Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["convertObstacles"])(resp.data.obstacles).then(function (resp2) {
          _this3.setState({
            obstacles: resp2,
            resultsArr: resp.data.results
          });
        });
      });
    }
  }, {
    key: "setAgeGroup",
    value: function setAgeGroup(min, max) {
      var _this4 = this;

      this.setState({
        ageMin: min,
        ageMax: max,
        showCompetitors: true
      });
      Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["rankFunction"])(this.state.resultsArr, this.state.athletes, min, max).then(function (resp) {
        console.log(resp);

        _this4.setState({
          rankArr: resp.array,
          completedCount: resp.completedCount
        });
      });
    }
  }, {
    key: "setScorecard",
    value: function setScorecard(athlete) {
      var _this5 = this;

      var elementPos = this.state.rankArr.map(function (x) {
        return x.athlete_id;
      }).indexOf(athlete);
      Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["checkActiveScorecard"])(this.state.resultsArr, this.state.obstacles, athlete).then(function (resp) {
        console.log(resp);

        _this5.setState({
          currentAthleteIndex: elementPos,
          currentAthlete: athlete,
          showCompetitors: false,
          showAgeSelect: false,
          showScorecard: true,
          obstacles: resp.obstacles,
          tieBreakMin: resp.min,
          tieBreakSec: resp.sec,
          tieBreakMs: resp.ms,
          existingScorecard: resp.existingScorecard,
          obstacleIndex: 0
        });

        document.getElementById('resultsEntry').scrollTop = 0;
      });
    }
  }, {
    key: "createPointRow",
    value: function createPointRow(item) {
      var _this6 = this;

      var table = [];

      var _loop = function _loop(i) {
        table.push(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: item.choices[i].selected == true ? "obstacleBoxContent activeBox" : "obstacleBoxContent",
          onClick: function onClick(e) {
            return _this6.addPoints(item, item.choices[i].key);
          }
        }, item.choices[i].value));
      };

      for (var i = 0; i < item.choices.length; i++) {
        _loop(i);
      }

      return table;
    }
  }, {
    key: "checkTie",
    value: function checkTie() {
      var _this7 = this;

      var tie = false;
      var tieOB;
      var tieMin = '';
      var tieSec = '';
      var tieMS = '';
      this.state.obstacles.forEach(function (item, index) {
        for (var i = 0; i < item.choices.length; i++) {
          if (tie == false && i !== item.choices.length - 1 && item.choices[i].selected == true) {
            tie = true;
            tieOB = item.obOrder;

            if (index > 0 && _this7.state.obstacles[index - 1].time != '') {
              tieMin = _this7.state.obstacles[index - 1].time.split(":")[1];
              tieSec = _this7.state.obstacles[index - 1].time.split(":")[2].split('.')[0];
              tieMS = _this7.state.obstacles[index - 1].time.split(":")[2].split('.')[1];
            } else if (index == 0 && item.time != '') {
              tieMin = item.time.split(":")[1];
              tieSec = item.time.split(":")[2].split('.')[0];
              tieMS = item.time.split(":")[2].split('.')[1];
            }

            _this7.setState({
              tiebreakerOb: tieOB,
              tieBreakMin: tieMin,
              tieBreakSec: tieSec,
              tieBreakMs: tieMS
            });

            break;
          }
        }

        if (tie == false) {
          if (_this7.state.obstacles[_this7.state.obstacles.length - 1].time != '') {
            tieMin = item.time.split(":")[1];
            tieSec = item.time.split(":")[2].split('.')[0];
            tieMS = item.time.split(":")[2].split('.')[1];
          }

          _this7.setState({
            tiebreakerOb: "",
            tieBreakMin: tieMin,
            tieBreakSec: tieSec,
            tieBreakMs: tieMS
          });
        }
      });
    }
  }, {
    key: "convertTime",
    value: function convertTime(min, sec, ms) {
      console.log(min);
      console.log(sec);
      console.log(ms);

      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(min) < 10 && min !== '00') {
        min = '0' + min;
      } else if (min == '') {
        min = "00";
      }

      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(sec) < 10 && sec !== '00') {
        sec = '0' + sec;
      } else if (sec == '') {
        sec = "00";
      }

      if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(ms) < 10 && ms !== '00') {
        ms = '0' + ms;
      } else if (ms == '') {
        ms = "00";
      }

      return '00' + ':' + min + ':' + sec + '.' + ms;
    }
  }, {
    key: "addPoints",
    value: function addPoints(item, c_id, time) {
      for (var i = 0; i < item.choices.length; i++) {
        if (item.choices[i].key != c_id) {
          item.choices[i].selected = false;
        } else {
          item.choices[i].selected = true;

          if (time) {
            item.time = Object(_controllers_timeFormat__WEBPACK_IMPORTED_MODULE_34__["default"])(time);
          }

          this.checkTie();
        }
      }

      this.setState({
        obstacles: this.state.obstacles
      });
    }
  }, {
    key: "confirmSubmission",
    value: function confirmSubmission(val) {
      if (val == 'scorecard') {
        this.setState({
          openDialog: true
        });
      } else {
        this.setState({
          openFinalDialog: true
        });
      }
    }
  }, {
    key: "submitScorecard",
    value: function submitScorecard() {
      var _this8 = this;

      var tiebreakTime = this.convertTime(this.state.tieBreakMin, this.state.tieBreakSec, this.state.tieBreakMs);
      var tiebreakOB;

      if (this.state.tiebreakerOb == '') {
        tiebreakOB = this.state.obstacles.length;
      } else {
        tiebreakOB = this.state.tiebreakerOb;
      }

      Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["calculateScore"])(this.state.obstacles).then(function (resp) {
        var points = resp.score;
        var resultString = resp.resStr;

        if (resultString.length !== _this8.state.obstacles.length && resultString.length > 0) {
          _this8.setState({
            openDialog: false,
            errorDialog: true,
            errorMsg: "At least one obstacle is missing a point selection!"
          });
        } else if (tiebreakTime == '00:00:00.00' && resultString.length > 0) {
          _this8.setState({
            openDialog: false,
            errorDialog: true,
            errorMsg: "Tiebreak time is zero and should have a value!"
          });
        } else {
          Object(_api_api__WEBPACK_IMPORTED_MODULE_15__["postScorecard"])(_this8.state.currentAthlete, _this8.state.courses[_this8.state.courseIndex].course_id, points, tiebreakOB, tiebreakTime, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(resultString)).then(function (resp2) {
            console.log(resp2);

            if ("affectedRows" in resp2.data.status) {
              Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["resetObstacleArr"])(_this8.state.obstacles).then(function (resp3) {
                Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["rankFunction"])(resp2.data.results, _this8.state.athletes, _this8.state.ageMin, _this8.state.ageMax).then(function (resp4) {
                  _this8.setState({
                    showScorecard: false,
                    showCompetitors: true,
                    currentAthlete: '',
                    openDialog: false,
                    showAgeSelect: true,
                    tieBreakMin: '',
                    tieBreakSec: '',
                    tieBreakMs: '',
                    tiebreakerOb: '',
                    obstacles: resp3,
                    rankArr: resp4.array,
                    completedCount: resp4.completedCount,
                    resultsArr: resp2.data.results,
                    existingScorecard: false
                  });
                });
              });
            } else {
              _this8.setState({
                openDialog: false,
                errorDialog: true,
                errorMsg: "No connection to the database! Please copy the results on paper and submit when internet is back online."
              });
            }
          });
        }
      });
    }
  }, {
    key: "updateScorecard",
    value: function updateScorecard() {
      var _this9 = this;

      var tiebreakTime = this.convertTime(this.state.tieBreakMin, this.state.tieBreakSec, this.state.tieBreakMs);
      var tiebreakOB;

      if (this.state.tiebreakerOb == '') {
        tiebreakOB = this.state.obstacles.length;
      } else {
        tiebreakOB = this.state.tiebreakerOb;
      }

      Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["calculateScore"])(this.state.obstacles).then(function (resp) {
        var points = resp.score;
        var resultString = resp.resStr;

        if (resultString.length !== _this9.state.obstacles.length && resultString.length > 0) {
          _this9.setState({
            openDialog: false,
            errorDialog: true,
            errorMsg: "At least one obstacle is missing a point selection!"
          });
        } else if (tiebreakTime == '00:00:00.00' && resultString.length > 0) {
          _this9.setState({
            openDialog: false,
            errorDialog: true,
            errorMsg: "Tiebreak time is zero and should have a value!"
          });
        } else {
          Object(_api_api__WEBPACK_IMPORTED_MODULE_15__["postUpdatedScorecard"])(_this9.state.currentAthlete, _this9.state.courses[_this9.state.courseIndex].course_id, points, tiebreakOB, tiebreakTime, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(resultString)).then(function (resp2) {
            if ("affectedRows" in resp2.data.status) {
              Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["resetObstacleArr"])(_this9.state.obstacles).then(function (resp3) {
                Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["rankFunction"])(resp2.data.results, _this9.state.athletes, _this9.state.ageMin, _this9.state.ageMax).then(function (resp4) {
                  _this9.setState({
                    showScorecard: false,
                    showCompetitors: true,
                    currentAthlete: '',
                    openDialog: false,
                    showAgeSelect: true,
                    tieBreakMin: '',
                    tieBreakSec: '',
                    tieBreakMs: '',
                    tiebreakerOb: '',
                    obstacles: resp3,
                    rankArr: resp4.array,
                    completedCount: resp4.completedCount,
                    resultsArr: resp2.data.results,
                    existingScorecard: false
                  });
                });
              });
            } else {
              _this9.setState({
                openDialog: false,
                errorDialog: true,
                errorMsg: "No connection to the database! Please copy the results on paper and submit when internet is back online."
              });
            }
          });
        }
      });
    }
  }, {
    key: "functionThatUsesResolvedValues",
    value: function functionThatUsesResolvedValues(val) {
      console.log(val);
    }
  }, {
    key: "finalizeResults",
    value: function () {
      var _finalizeResults = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this10 = this;

        var resolvedFinalArray, respArr;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(this.state.rankArr.map(
                /*#__PURE__*/
                function () {
                  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
                    var rank, result;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            // map instead of forEach
                            // var points;
                            if (value.points < 1 && value.resultStr == '[]') {
                              // points = 0;
                              rank = 0;
                            } else {
                              // points = this.state.rankArr.length - (value.rank - 1);
                              rank = value.rank;
                            } // const result = await postStandings(value, this.state.courses[this.state.courseIndex], points);


                            _context.next = 3;
                            return Object(_api_api__WEBPACK_IMPORTED_MODULE_15__["postStandings"])(value, _this10.state.courses[_this10.state.courseIndex], rank);

                          case 3:
                            result = _context.sent;
                            return _context.abrupt("return", result);

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 2:
                resolvedFinalArray = _context2.sent;
                respArr = resolvedFinalArray;
                this.setState({
                  openFinalDialog: false,
                  showCompetitors: false,
                  ageMin: '',
                  ageMax: ''
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function finalizeResults() {
        return _finalizeResults.apply(this, arguments);
      }

      return finalizeResults;
    }()
  }, {
    key: "goBack",
    value: function goBack() {
      var _this11 = this;

      if (this.state.showScorecard == true) {
        Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_16__["resetObstacleArr"])(this.state.obstacles).then(function (resp) {
          _this11.setState({
            showScorecard: false,
            showCompetitors: true,
            currentAthlete: '',
            showAgeSelect: true,
            obstacles: resp,
            existingScorecard: false
          });
        });
      } else if (this.state.showCompetitors == true || this.state.showAgeSelect == true) {
        this.setState({
          showCompetitors: false,
          ageMin: '',
          ageMax: '',
          showAgeSelect: false,
          showCourseSelect: true,
          obstacles: [],
          resultsArr: []
        });
      } else {
        this.setState({
          showCourseSelect: false,
          courseIndex: '',
          courses: [],
          athletes: [],
          location: '',
          showLocationSelect: true
        });
      }
    }
  }, {
    key: "editTimeFunc",
    value: function editTimeFunc(time, ind) {
      var min = '';
      var sec = '';
      var ms = '';

      if (time != '') {
        var min = time.split(":")[1];
        var sec = time.split(":")[2].split('.')[0];
        var ms = time.split(":")[2].split('.')[1];
      }

      this.setState({
        editTime: true,
        editTimeMin: min,
        editTimeSec: sec,
        editTimeMS: ms,
        editTimeOb: ind
      });
    }
  }, {
    key: "submitNewTime",
    value: function submitNewTime() {
      this.state.obstacles[this.state.editTimeOb].time = this.convertTime(this.state.editTimeMin, this.state.editTimeSec, this.state.editTimeMS);
      this.setState({
        editTime: false,
        editTimeMin: '',
        editTimeSec: '',
        editTimeMS: ''
      });
      this.checkTie();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this12 = this;

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: "resultsEntry",
        className: "resultsEntry"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Youth League Results",
        link: "",
        linkTitle: ""
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "pageContainer"
      }, this.state.location !== '' ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this12.goBack();
        }
      }, "Back") : null, this.state.showLocationSelect == true ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "subTitle"
      }, "Please Select Your Location"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this12.setLocation(1);
        }
      }, "Chicago"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this12.setLocation(2);
        }
      }, "Naperville"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this12.setLocation(3);
        }
      }, "Libertyville"))) : null, this.state.showCourseSelect == true ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "subTitle"
      }, "Please Select Your Competition Date"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
        horizontal: "start",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.courses.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "choiceBox",
          style: {
            margin: "5px"
          },
          onClick: function onClick(e) {
            return _this12.setCourse(item.course_id);
          }
        }, item.comp_date.split("T")[0]);
      })), " ") : null, this.state.showAgeSelect == true ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "subTitle"
      }, "Please Select an Age Group"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: this.state.ageMax == 8 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this12.setAgeGroup(6, 8);
        }
      }, "Ages 6-8"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: this.state.ageMax == 10 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this12.setAgeGroup(9, 10);
        }
      }, "Ages 9-10"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: this.state.ageMax == 12 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this12.setAgeGroup(11, 12);
        }
      }, "Ages 11-12"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: this.state.ageMax == 16 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this12.setAgeGroup(13, 16);
        }
      }, "Ages 13-16")), " ") : null, this.state.showCompetitors == true ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "subTitle"
      }, "Ninjas"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Column"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.rankArr.map(function (item, index) {
        if (item.age >= _this12.state.ageMin && item.age < _this12.state.ageMax + 1) {
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
            className: item.completed == true ? "athleteBox completed" : "athleteBox",
            onClick: function onClick(e) {
              return _this12.setScorecard(item.athlete_id);
            }
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
            horizontal: "space-around",
            vertical: "center"
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, item.rank, "."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, item.first_name + ' ' + item.last_name), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, item.points), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
            style: {
              fontSize: ".8em",
              color: "#979797"
            }
          }, "Pts."))));
        }
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
        horiozontal: "center"
      }, this.state.completedCount == this.state.rankArr.length ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "submitBtn",
        onClick: function onClick(e) {
          return _this12.confirmSubmission('results');
        }
      }, "Submit") : null), " ") : null, this.state.showScorecard == true ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
        flexGrow: 1,
        flexBasis: "auto"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Column"], {
        horizontal: "start"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "subTitle"
      }, "Scorecard"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
        horizontal: "start",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, "Name:"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "scName"
      }, this.state.rankArr[this.state.currentAthleteIndex].first_name + ' ' + this.state.rankArr[this.state.currentAthleteIndex].last_name)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        align: "middle",
        className: "submitBtn",
        style: {
          width: "75px",
          marginLeft: "10px"
        },
        onClick: function onClick(e) {
          return _this12.confirmSubmission('scorecard');
        }
      }, "Absent")))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Column"], null, this.state.existingScorecard == false ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_StopWatch__WEBPACK_IMPORTED_MODULE_33__["default"], {
        callbackFromParent: this.myCallback,
        choices: this.state.obstacles[this.state.obstacleIndex].choices,
        obstacle: this.state.obstacles[this.state.obstacleIndex].obstacle,
        obstacleInd: this.state.obstacleIndex,
        complete: this.state.scoreCardComplete,
        obstacleCnt: this.state.obstacles.length
      }) : null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Column"], {
        horizontal: "center",
        style: {
          marginTop: '35px'
        }
      }, this.state.obstacles.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "obstacleBox"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "obstacleBoxTitle"
        }, item.obstacle), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
          horizontal: "center"
        }, _this12.createPointRow(item)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
          horizontal: "center",
          style: {
            padding: "5px",
            borderTop: "1px solid rgb(230,230,230)"
          }
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, item.time), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          align: "right",
          style: {
            fontSize: '11px',
            cursor: "pointer",
            marginLeft: '15px',
            color: "rgb(0,90,180)"
          }
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
          onClick: function onClick(e) {
            return _this12.editTimeFunc(item.time, index);
          }
        }, "edit time"))));
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
        horizontal: "center",
        style: {
          marginTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginRight: "30px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, "Tiebreaker Obstacle"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        align: "middle",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "10px"
        }
      }, this.state.tiebreakerOb)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, "Tiebreaker Time"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginTop: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "min",
        value: this.state.tieBreakMin,
        onChange: this.handleChange('tieBreakMin')
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          paddingLeft: '5px',
          paddingRight: '5px',
          fontSize: "18px",
          fontWeight: "bold"
        }
      }, ":"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "sec",
        value: this.state.tieBreakSec,
        onChange: this.handleChange('tieBreakSec')
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          paddingLeft: '5px',
          paddingRight: '5px',
          fontSize: "18px",
          fontWeight: "bold"
        }
      }, ":"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "ms",
        value: this.state.tieBreakMs,
        onChange: this.handleChange('tieBreakMs')
      }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
        horizontal: "center"
      }, this.state.existingScorecard == false ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "submitBtn",
        onClick: function onClick(e) {
          return _this12.confirmSubmission('scorecard');
        }
      }, "Submit") : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "updateBtn",
        onClick: function onClick(e) {
          return _this12.confirmSubmission('scorecard');
        }
      }, "Update")))))) : null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19___default.a, {
        open: this.state.openDialog,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23___default.a, {
        id: "form-dialog-title"
      }, "Are you sure you want to submit this scorecard?"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22___default.a, null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20___default.a, null, this.state.existingScorecard == false ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "submit",
        onClick: function onClick(e) {
          return _this12.submitScorecard();
        },
        color: "primary"
      }, "Submit") : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "submit",
        onClick: function onClick(e) {
          return _this12.updateScorecard();
        },
        color: "primary"
      }, "Update"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "submit",
        onClick: this.closeDialog,
        color: "default"
      }, "Cancel"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19___default.a, {
        open: this.state.errorDialog,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23___default.a, {
        id: "form-dialog-title"
      }, "ERROR: ", this.state.errorMsg), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, "Results NOT submitted."))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "submit",
        onClick: this.closeDialog,
        color: "default"
      }, "OK"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19___default.a, {
        open: this.state.editTime,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23___default.a, {
        id: "form-dialog-title"
      }, "Edit Time:"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, "Please enter the new time and hit Submit"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginTop: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "min",
        value: this.state.editTimeMin,
        onChange: this.handleChange('editTimeMin')
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          paddingLeft: '5px',
          paddingRight: '5px',
          fontSize: "18px",
          fontWeight: "bold"
        }
      }, ":"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "sec",
        value: this.state.editTimeSec,
        onChange: this.handleChange('editTimeSec')
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          paddingLeft: '5px',
          paddingRight: '5px',
          fontSize: "18px",
          fontWeight: "bold"
        }
      }, ":"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "ms",
        value: this.state.editTimeMS,
        onChange: this.handleChange('editTimeMS')
      }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "submit",
        onClick: function onClick(e) {
          return _this12.submitNewTime();
        },
        color: "default"
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "submit",
        onClick: this.closeDialog,
        color: "default"
      }, "Cancel"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19___default.a, {
        open: this.state.openFinalDialog,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23___default.a, {
        id: "form-dialog-title"
      }, "Are you sure you want to submit these results?"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22___default.a, null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "submit",
        onClick: function onClick(e) {
          return _this12.finalizeResults();
        },
        color: "primary"
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "submit",
        onClick: this.closeDialog,
        color: "default"
      }, "Cancel"))));
    }
  }]);

  return ResultsEntry;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResultsEntry);

/***/ }),

/***/ "./style/header.css":
/*!**************************!*\
  !*** ./style/header.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/results_entry.css":
/*!*********************************!*\
  !*** ./style/results_entry.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/stopwatch.css":
/*!*****************************!*\
  !*** ./style/stopwatch.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/results_entry.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/christopherdigangi/git/ultimate_ninjas_app/pages/results_entry.js */"./pages/results_entry.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "simple-flexbox":
/*!*********************************!*\
  !*** external "simple-flexbox" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-flexbox");

/***/ })

/******/ });
//# sourceMappingURL=results_entry.js.map