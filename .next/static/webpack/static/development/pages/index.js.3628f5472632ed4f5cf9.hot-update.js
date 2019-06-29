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
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _controllers_controllers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../controllers/controllers */ "./controllers/controllers.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");


















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
      }, "Libertyville")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this6.setLocation(4);
        },
        className: this.state.location == '4' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "F"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "optionText"
      }, "Finals"))), this.state.showCourseSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_12__["Column"], {
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

/***/ })

})
//# sourceMappingURL=index.js.3628f5472632ed4f5cf9.hot-update.js.map