webpackHotUpdate("static/development/pages/results_entry.js",{

/***/ "./pages/results_entry.js":
/*!********************************!*\
  !*** ./pages/results_entry.js ***!
  \********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _style_results_entry_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/results_entry.css */ "./style/results_entry.css");
/* harmony import */ var _style_results_entry_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_results_entry_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _controllers_controllers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../controllers/controllers */ "./controllers/controllers.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/FormLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__);






























var ResultsEntry =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ResultsEntry, _Component);

  function ResultsEntry() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResultsEntry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ResultsEntry)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
      rankArr: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, event.target.value));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeDialog", function (type) {
      _this.setState({
        openDialog: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResultsEntry, [{
    key: "setLocation",
    value: function setLocation(val) {
      var _this2 = this;

      this.setState({
        location: val,
        showLocationSelect: false,
        showCourseSelect: true
      });
      Object(_api_api__WEBPACK_IMPORTED_MODULE_10__["getCompInfo"])(val).then(function (resp) {
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

      this.setState({
        courseIndex: ind,
        showCourseSelect: false,
        showAgeSelect: true
      });
      Object(_api_api__WEBPACK_IMPORTED_MODULE_10__["getCourseObstacles"])(this.state.courses[ind].course_id).then(function (resp) {
        Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["convertObstacles"])(resp.data.obstacles).then(function (resp2) {
          Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["rankFunction"])(resp.data.results, _this3.state.athletes).then(function (resp3) {
            console.log(resp3);

            _this3.setState({
              obstacles: resp2,
              rankArr: resp3
            });
          });
        });
      });
    }
  }, {
    key: "setAgeGroup",
    value: function setAgeGroup(min, max) {
      this.setState({
        ageMin: min,
        ageMax: max,
        showCompetitors: true
      });
    }
  }, {
    key: "setScorecard",
    value: function setScorecard(athlete) {
      var elementPos = this.state.athletes.map(function (x) {
        return x.athlete_id;
      }).indexOf(athlete);
      this.setState({
        currentAthleteIndex: elementPos,
        currentAthlete: athlete,
        showCompetitors: false,
        showAgeSelect: false,
        showScorecard: true
      });
    }
  }, {
    key: "createPointRow",
    value: function createPointRow(item) {
      var _this4 = this;

      var table = [];

      var _loop = function _loop(i) {
        table.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: item.choices[i].selected == true ? "obstacleBoxContent activeBox" : "obstacleBoxContent",
          onClick: function onClick(e) {
            return _this4.addPoints(item, item.choices[i].key);
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
      var _this5 = this;

      var tie = false;
      var tieOB;
      this.state.obstacles.forEach(function (item, index) {
        for (var i = 0; i < item.choices.length; i++) {
          if (tie == false && i !== item.choices.length - 1 && item.choices[i].selected == true) {
            tie = true;
            tieOB = item.obOrder;

            _this5.setState({
              tiebreakerOb: tieOB
            });
          }
        }

        if (tie == false) {
          _this5.setState({
            tiebreakerOb: ""
          });
        }
      });
    }
  }, {
    key: "convertTime",
    value: function convertTime(min, sec, ms) {
      if (min < 10) {
        min = '0' + min;
      }

      if (sec < 10) {
        sec = '0' + sec;
      }

      if (ms < 10) {
        ms = '0' + ms;
      }

      return '00' + ':' + min + ':' + sec + '.' + ms;
    }
  }, {
    key: "addPoints",
    value: function addPoints(item, c_id) {
      for (var i = 0; i < item.choices.length; i++) {
        if (item.choices[i].key != c_id) {
          item.choices[i].selected = false;
        } else {
          item.choices[i].selected = true;
          this.checkTie();
        }
      }

      this.setState({
        obstacles: this.state.obstacles
      });
    }
  }, {
    key: "confirmSubmission",
    value: function confirmSubmission() {
      this.setState({
        openDialog: true
      });
    }
  }, {
    key: "submitScorecard",
    value: function submitScorecard() {
      var _this6 = this;

      var tiebreakTime = this.convertTime(this.state.tieBreakMin, this.state.tieBreakSec, this.state.tieBreakMs);
      console.log(tiebreakTime);
      Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["calculateScore"])(this.state.obstacles).then(function (resp) {
        var points = resp.score;
        var resultString = resp.resStr;
        Object(_api_api__WEBPACK_IMPORTED_MODULE_10__["postScorecard"])(_this6.state.currentAthlete, _this6.state.courses[_this6.state.courseIndex].course_id, points, _this6.state.tiebreakerOb, tiebreakTime, resultString).then(function (resp2) {
          console.log(resp2);
          Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["resetObstacleArr"])(_this6.state.obstacles).then(function (resp3) {
            Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["rankFunction"])(resp2.data.results, _this6.state.athletes).then(function (resp4) {
              _this6.setState({
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
                rankArr: resp4
              });
            });
          });
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "resultsEntry"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Youth League Results",
        link: "",
        linkTitle: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pageContainer"
      }, this.state.showLocationSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle"
      }, "Please Select Your Location"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this7.setLocation(1);
        }
      }, "Chicago"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this7.setLocation(2);
        }
      }, "Naperville"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this7.setLocation(3);
        }
      }, "Libertyville"))) : null, this.state.showCourseSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle"
      }, "Please Select Your Competition Date"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.courses.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "choiceBox",
          onClick: function onClick(e) {
            return _this7.setCourse(index);
          }
        }, item.comp_date.split("T")[0]);
      })), " ") : null, this.state.showAgeSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle"
      }, "Please Select an Age Group"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.ageMax == 8 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this7.setAgeGroup(6, 8);
        }
      }, "Ages 6-8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.ageMax == 10 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this7.setAgeGroup(9, 10);
        }
      }, "Ages 9-10"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.ageMax == 12 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this7.setAgeGroup(11, 12);
        }
      }, "Ages 11-12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.ageMax == 16 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this7.setAgeGroup(13, 16);
        }
      }, "Ages 13-16")), " ") : null, this.state.showCompetitors == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle"
      }, "Ninjas"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Column"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.athletes.map(function (item, index) {
        if (item.age >= _this7.state.ageMin && item.age < _this7.state.ageMax + 1) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "athleteBox completed",
            onClick: function onClick(e) {
              return _this7.setScorecard(item.athlete_id);
            }
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
            horizontal: "space-around",
            vertical: "center"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "1."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.first_name + ' ' + item.last_name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "29"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              fontSize: ".8em",
              color: "#979797"
            }
          }, "Pts."))));
        }
      })), " ") : null, this.state.showScorecard == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle"
      }, "Scorecard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Name:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "scName"
      }, this.state.athletes[this.state.currentAthleteIndex].first_name + ' ' + this.state.athletes[this.state.currentAthleteIndex].last_name))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Column"], {
        horizontal: "center"
      }, this.state.obstacles.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "obstacleBox"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "obstacleBoxTitle"
        }, item.obstacle), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
          horizontal: "center"
        }, _this7.createPointRow(item)));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
        horizontal: "center",
        style: {
          marginTop: "20px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginRight: "30px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Tiebreaker Obstacle"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        align: "middle",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "10px"
        }
      }, this.state.tiebreakerOb)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Tiebreaker Time"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginTop: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "min",
        value: this.state.tieBreakMin,
        onChange: this.handleChange('tieBreakMin')
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          paddingLeft: '5px',
          paddingRight: '5px',
          fontSize: "18px",
          fontWeight: "bold"
        }
      }, ":"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "sec",
        value: this.state.tieBreakSec,
        onChange: this.handleChange('tieBreakSec')
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          paddingLeft: '5px',
          paddingRight: '5px',
          fontSize: "18px",
          fontWeight: "bold"
        }
      }, ":"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: {
          width: '50px'
        },
        className: "skillInput",
        type: "number",
        placeholder: "ms",
        value: this.state.tieBreakMs,
        onChange: this.handleChange('tieBreakMs')
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
        horiozontal: "center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "submitBtn",
        onClick: function onClick(e) {
          return _this7.confirmSubmission();
        }
      }, "Submit"))) : null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14___default.a, {
        open: this.state.openDialog,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_18___default.a, {
        id: "form-dialog-title"
      }, "Are you sure you want to submit this scorecard?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_17___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_15___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        type: "submit",
        onClick: function onClick(e) {
          return _this7.submitScorecard();
        },
        color: "primary"
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        type: "submit",
        onClick: this.closeDialog,
        color: "default"
      }, "Cancel"))));
    }
  }]);

  return ResultsEntry;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResultsEntry);

/***/ })

})
//# sourceMappingURL=results_entry.js.b88353d7a92f900b6ae9.hot-update.js.map