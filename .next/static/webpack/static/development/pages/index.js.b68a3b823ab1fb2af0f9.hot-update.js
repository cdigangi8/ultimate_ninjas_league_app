webpackHotUpdate("static/development/pages/index.js",{

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
      rankArr: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, event.target.value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(YlLeaderboard, [{
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
      Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_11__["rankFunction"])(this.state.resultsArr, this.state.athletes, min, max).then(function (resp) {
        console.log(resp);

        _this4.setState({
          rankArr: resp
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
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "resultsEntry"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Youth League Results",
        link: "",
        linkTitle: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pageContainer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Reload the page to go back to the location selection!"), this.state.showLocationSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
          return _this5.setLocation(1);
        }
      }, "Chicago"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this5.setLocation(2);
        }
      }, "Naperville"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "choiceBox",
        onClick: function onClick(e) {
          return _this5.setLocation(3);
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
            return _this5.setCourse(index);
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
          return _this5.setAgeGroup(6, 8);
        }
      }, "Ages 6-8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.ageMax == 10 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this5.setAgeGroup(9, 10);
        }
      }, "Ages 9-10"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.ageMax == 12 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this5.setAgeGroup(11, 12);
        }
      }, "Ages 11-12"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.ageMax == 16 ? "choiceBox activeBox" : "choiceBox",
        onClick: function onClick(e) {
          return _this5.setAgeGroup(13, 16);
        }
      }, "Ages 13-16")), " ") : null, this.state.showCompetitors == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle"
      }, "Ninjas"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Column"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.rankArr.map(function (item, index) {
        if (item.age >= _this5.state.ageMin && item.age < _this5.state.ageMax + 1) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: item.completed == true ? "athleteBox completed" : "athleteBox"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
            horizontal: "space-around",
            vertical: "center"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.rank, "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.first_name + ' ' + item.last_name.substring(1, 1)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.points), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              fontSize: ".8em",
              color: "#979797"
            }
          }, "Pts."))));
        }
      })), " ") : null)));
    }
  }]);

  return YlLeaderboard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (YlLeaderboard);

/***/ })

})
//# sourceMappingURL=index.js.b68a3b823ab1fb2af0f9.hot-update.js.map