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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
            // arr[a].rank = rank;
            newRank = true;
          } else if (arr[a].tieOB == arr[b].tieOB) {
            if (arr[a].tieOB == '') {
              if (arr[a].tieTime < arr[b].tieTime) {
                // arr[a].rank = rank;
                newRank = true;
              } else if (arr[a].tieTime == arr[b].tieTime) {
                // arr[a].rank = rank;
                newRank = true;
              } else {
                rank += 1;
              }
            } else {
              var ath1res = JSON.parse(arr[a].resultStr);
              var ath1pts;
              var ath2res = JSON.parse(arr[b].resultStr);
              var ath2pts;
              console.log(ath1res);
              console.log(ath2res);

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
              }

              console.log(ath1pts + ' : ' + ath2pts);

              if (ath1pts > ath2pts) {
                newRank = true;
              } else if (ath1pts == ath2pts) {
                // var aTime = convertMilliSec(arr[a].tieTime);
                // var bTime = convertMilliSec(arr[b].tieTime);
                if (arr[a].tieTime < arr[b].tieTime) {
                  newRank = true;
                } else if (arr[a].tieTime == arr[b].tieTime) {
                  newRank = true;
                } else {
                  rank += 1;
                }
              } else {
                rank += 1;
              }
            }
          } else {
            rank += 1;
          }
        } else if (arr[a].points < arr[b].points) {
          //lower points
          rank += 1;
        } else {
          //more points
          // arr[a].rank = rank;
          newRank = true;
        } // }else{
        //     newRank = true;
        // }

      }
    }

    if (newRank == true) {
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

function getAvg(arr, comps, athCnt) {
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
    if (arr[i].rank == 0) {
      num += athCnt;
    } else {
      num += arr[i].rank;
    }
  }

  if (total > 0) {
    avg = num / total;
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
    if (arr[i].rank == 0) {
      num += 0;
    } else {
      num += athCnt - (arr[i].rank - 1);
    }
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
            checkA = getAvg(athletes[a].res, 6, athletes.length);
            checkB = getAvg(athletes[b].res, 6, athletes.length);

            if (checkA > checkB) {
              rank += 1;
            } else if (checkA == checkB) {
              checkA = getPts(athletes[a].res, 7, athletes.length);
              checkB = getPts(athletes[b].res, 7, athletes.length);

              if (checkA < checkB) {
                rank += 1;
              } else if (checkA == checkB) {
                checkA = getAvg(athletes[a].res, 7, athletes.length);
                checkB = getAvg(athletes[b].res, 7, athletes.length);

                if (checkA > checkB) {
                  rank += 1;
                } else if (checkA == checkB) {
                  checkA = getPts(athletes[a].res, 8, athletes.length);
                  checkB = getPts(athletes[b].res, 8, athletes.length);

                  if (checkA < checkB) {
                    rank += 1;
                  } else if (checkA == checkB) {
                    checkA = getAvg(athletes[a].res, 8, athletes.length);
                    checkB = getAvg(athletes[b].res, 8, athletes.length);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _controllers_controllers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../controllers/controllers */ "./controllers/controllers.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! simple-flexbox */ "simple-flexbox");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__);


















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faListOl"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faMapMarkerAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faHashtag"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__["faCalendarDay"]); // const drawerWidth = 300;
// const styles = theme => ({
//   root: {
//     display: 'flex',
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36,
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: theme.spacing.unit * 7 + 1,
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing.unit * 7 + 1,
//     },
//   },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//   },
// activeListItem:{
//     backgroundColor: "rgba(0,90,180,0.5)",
//     color: "#ffffff"
// }
// });

var YlLeaderboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(YlLeaderboard, _Component);

  function YlLeaderboard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, YlLeaderboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(YlLeaderboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
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
      standingsView: 'season',
      compDate: '',
      open: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDrawer", function () {
      if (_this.state.open == false) {
        _this.setState({
          open: true
        });
      } else {
        _this.setState({
          open: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, event.target.value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(YlLeaderboard, [{
    key: "setStandings",
    value: function setStandings(val) {
      this.setState({
        standingsView: val,
        location: '',
        showCourseSelect: false,
        showAgeSelect: false,
        showCompetitors: false,
        ageMin: '',
        ageMax: '',
        compDate: ''
      });
    }
  }, {
    key: "setLocation",
    value: function setLocation(val) {
      var _this2 = this;

      if (this.state.standingsView == 'season') {
        this.setState({
          location: val,
          showAgeSelect: true,
          ageMin: '',
          ageMax: '',
          showCompetitors: false,
          showCourseSelect: false
        });
      } else {
        Object(_api_api__WEBPACK_IMPORTED_MODULE_10__["getCompInfo"])(val).then(function (resp) {
          _this2.setState({
            courses: resp.data.courses,
            athletes: resp.data.athletes,
            location: val,
            showLocationSelect: false,
            showCourseSelect: true,
            showAgeSelect: false,
            showCompetitors: false,
            compDate: ''
          });
        });
      }
    }
  }, {
    key: "setCourse",
    value: function setCourse(ind) {
      var _this3 = this;

      this.setState({
        courseIndex: ind,
        showAgeSelect: true,
        compDate: this.state.courses[ind].comp_date.split("T")[0],
        ageMin: '',
        ageMax: '',
        showCompetitors: false
      });
      Object(_api_api__WEBPACK_IMPORTED_MODULE_10__["getCourseObstacles"])(this.state.courses[ind].course_id).then(function (resp) {
        Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["convertObstacles"])(resp.data.obstacles).then(function (resp2) {
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

      if (this.state.standingsView == 'season') {
        Object(_api_api__WEBPACK_IMPORTED_MODULE_10__["getStandings"])(min, max, this.state.location).then(function (resp) {
          _this4.setState({
            rankArr: resp.data.standings
          });
        });
      } else {
        Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["rankFunction"])(this.state.resultsArr, this.state.athletes, min, max).then(function (resp) {
          console.log(resp);

          _this4.setState({
            rankArr: resp.array
          });
        });
      }
    }
  }, {
    key: "goBack",
    value: function goBack() {
      var _this5 = this;

      if (this.state.showScorecard == true) {
        Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["resetObstacleArr"])(this.state.obstacles).then(function (resp) {
          _this5.setState({
            showScorecard: false,
            showCompetitors: true,
            currentAthlete: '',
            showAgeSelect: true,
            obstacles: resp
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
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      // const { classes, theme } = this.props;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mainBack"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Youth League Results",
        link: "",
        linkTitle: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "drawer-container",
        style: {
          position: "relative"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14___default.a, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()('drawer', {
          'drawerOpen': this.state.open,
          'drawerClose': !this.state.open
        }),
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_13___default()({
            'drawerOpen': this.state.open,
            'drawerClose': !this.state.open
          })
        },
        open: this.state.open
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "toolbar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "toolbarBtn"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        onClick: this.handleDrawer,
        icon: "bars"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          marginLeft: "20px",
          fontWeight: "bold",
          color: "rgb(62, 105, 154)"
        }
      }, "Options")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Column"], {
        className: "optionSection"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        className: "titleRow"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleIcon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: "list-ol"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleText"
      }, "Standings")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setStandings('season');
        },
        className: this.state.standingsView == 'season' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "S"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Season Standings")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setStandings('individual');
        },
        className: this.state.standingsView == 'individual' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "I"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Individual Competition"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Column"], {
        className: "optionSection"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        className: "titleRow"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleIcon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: "map-marker-alt"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleText"
      }, "Location")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setLocation(1);
        },
        className: this.state.location == '1' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "C"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Chicago")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setLocation(2);
        },
        className: this.state.location == '2' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "N"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Naperville")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setLocation(3);
        },
        className: this.state.location == '3' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "L"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Libertyville")), this.state.standingsView == 'individual' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setLocation(4);
        },
        className: this.state.location == '4' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "F"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Finals")) : null), this.state.showCourseSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Column"], {
        className: "optionSection"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        className: "titleRow"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleIcon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: "calendar-day"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleText"
      }, "Competition Date")), this.state.courses.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
          vertical: "center",
          onClick: function onClick(e) {
            return _this6.setCourse(index);
          },
          className: _this6.state.compDate == item.comp_date.split("T")[0] ? 'activeListItem optionRow' : 'optionRow'
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "optionLetterIcon"
        }, index + 1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "optionText"
        }, item.comp_date.split("T")[0]));
      })) : null, this.state.showAgeSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Column"], {
        className: "optionSection"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        className: "titleRow"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleIcon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeIcon"], {
        icon: "hashtag"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleText"
      }, "Age Group")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setAgeGroup(6, 8);
        },
        className: this.state.ageMax == 8 ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Ages 6-8")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setAgeGroup(9, 10);
        },
        className: this.state.ageMax == 10 ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Ages 9-10")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setAgeGroup(11, 12);
        },
        className: this.state.ageMax == 12 ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Ages 11-12")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setAgeGroup(13, 16);
        },
        className: this.state.ageMax == 16 ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Ages 13-16"))) : null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pageContainer"
      }, this.state.showCompetitors == true && this.state.standingsView == 'individual' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle",
        style: {
          color: "#ffffff"
        }
      }, "Results"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Column"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.rankArr.map(function (item, index) {
        if (item.age >= _this6.state.ageMin && item.age < _this6.state.ageMax + 1) {
          // return <div className={item.completed == true ? "athleteBox completed" : "athleteBox"}>
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "athleteStandingsBox"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
            horizontal: "space-around",
            vertical: "center"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.rank, "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.first_name + ' ' + item.last_name.substring(0, 1)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.points), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              fontSize: ".8em",
              color: "rgb(225,225,225)"
            }
          }, "Pts."))));
        }
      })), " ") : null, this.state.showCompetitors == true && this.state.standingsView == 'season' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle",
        style: {
          color: "#ffffff"
        }
      }, "Standings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Column"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.rankArr.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "athleteStandingsBox"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
          horizontal: "space-around",
          vertical: "center"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.rank, "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.first_name + ' ' + item.last_name.substring(0, 1)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.Points), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            fontSize: ".8em",
            color: "rgb(225,225,225)"
          }
        }, "Pts."))));
      })), " ") : null)));
    }
  }]);

  return YlLeaderboard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); //   YlLeaderboard.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
//   };
//   export default withStyles(styles, { withTheme: true })(YlLeaderboard);


/* harmony default export */ __webpack_exports__["default"] = (YlLeaderboard);

/***/ }),

/***/ "./style/header.css":
/*!**************************!*\
  !*** ./style/header.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/christopherdigangi/git/ultimate_ninjas_app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "simple-flexbox":
/*!*********************************!*\
  !*** external "simple-flexbox" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-flexbox");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map