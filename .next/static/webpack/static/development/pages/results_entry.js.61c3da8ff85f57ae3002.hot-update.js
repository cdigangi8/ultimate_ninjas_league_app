webpackHotUpdate("static/development/pages/results_entry.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _style_results_entry_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../style/results_entry.css */ "./style/results_entry.css");
/* harmony import */ var _style_results_entry_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_results_entry_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _controllers_controllers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../controllers/controllers */ "./controllers/controllers.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/FormLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
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
          Object(_api_api__WEBPACK_IMPORTED_MODULE_15__["postScorecard"])(_this8.state.currentAthlete, _this8.state.courses[_this8.state.courseIndex].course_id, points, _this8.state.tiebreakerOb, tiebreakTime, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(resultString)).then(function (resp2) {
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
          Object(_api_api__WEBPACK_IMPORTED_MODULE_15__["postUpdatedScorecard"])(_this9.state.currentAthlete, _this9.state.courses[_this9.state.courseIndex].course_id, points, _this9.state.tiebreakerOb, tiebreakTime, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(resultString)).then(function (resp2) {
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
      }, "Submit") : null), " ") : null, this.state.showScorecard == true ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Row"], {
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
      }, "Absent")))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, this.state.existingScorecard == false ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_StopWatch__WEBPACK_IMPORTED_MODULE_33__["default"], {
        callbackFromParent: this.myCallback,
        choices: this.state.obstacles[this.state.obstacleIndex].choices,
        obstacle: this.state.obstacles[this.state.obstacleIndex].obstacle,
        obstacleInd: this.state.obstacleIndex,
        complete: this.state.scoreCardComplete,
        obstacleCnt: this.state.obstacles.length
      }) : null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_32__["Column"], {
        horizontal: "center"
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
        horiozontal: "center"
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
      }, "Update"))))) : null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_19___default.a, {
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

/***/ })

})
//# sourceMappingURL=results_entry.js.61c3da8ff85f57ae3002.hot-update.js.map