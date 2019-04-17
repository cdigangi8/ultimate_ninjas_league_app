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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
















































_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_45__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_47__["faListOl"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_47__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_47__["faMapMarkerAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_47__["faHashtag"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_47__["faCalendarDay"]); // const drawerWidth = 300;
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
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
        style: {
          height: "100vh",
          overflow: "auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "drawer-container",
        style: {
          position: "relative"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_35___default.a, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_29___default()('drawer', {
          'drawerOpen': this.state.open,
          'drawerClose': !this.state.open
        }),
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_29___default()({
            'drawerOpen': this.state.open,
            'drawerClose': !this.state.open
          })
        },
        open: this.state.open
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "toolbar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "toolbarBtn"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_46__["FontAwesomeIcon"], {
        onClick: this.handleDrawer,
        icon: "bars"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          marginLeft: "20px",
          fontWeight: "bold"
        }
      }, "Options")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_37___default.a, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_46__["FontAwesomeIcon"], {
        icon: "list-ol"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Standings")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_37___default.a, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_34___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_46__["FontAwesomeIcon"], {
        icon: "map-marker-alt"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Location")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, {
        button: true,
        onClick: function onClick(e) {
          return _this6.setLocation(1);
        },
        className: this.state.location == '1' ? 'activeListItem' : null
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, {
        align: "middle",
        style: {
          marginLeft: "10px",
          backgroundColor: "rgb(230,230,230)",
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          padding: "8px 12px"
        }
      }, "C"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Chicago")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, {
        button: true,
        onClick: function onClick(e) {
          return _this6.setLocation(2);
        },
        className: this.state.location == '2' ? 'activeListItem' : null
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, {
        align: "middle",
        style: {
          marginLeft: "10px",
          backgroundColor: "rgb(230,230,230)",
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          padding: "8px 12px"
        }
      }, "N"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Naperville")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, {
        button: true,
        onClick: function onClick(e) {
          return _this6.setLocation(3);
        },
        className: this.state.location == '3' ? 'activeListItem' : null
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, {
        align: "middle",
        style: {
          marginLeft: "10px",
          backgroundColor: "rgb(230,230,230)",
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          padding: "8px 12px"
        }
      }, "L"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Libertyville"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_37___default.a, null), this.state.showCourseSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_34___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_46__["FontAwesomeIcon"], {
        icon: "calendar-day"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Competition Date")), this.state.courses.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, {
          button: true,
          onClick: function onClick(e) {
            return _this6.setCourse(index);
          },
          className: _this6.state.compDate == item.comp_date.split("T")[0] ? 'activeListItem' : null
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, {
          align: "middle",
          style: {
            marginLeft: "10px",
            backgroundColor: "rgb(230,230,230)",
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            padding: "8px 12px"
          }
        }, index + 1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, item.comp_date.split("T")[0]));
      })) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_37___default.a, null), this.state.showAgeSelect == true ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_34___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_46__["FontAwesomeIcon"], {
        icon: "hashtag"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Age Group")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, {
        button: true,
        onClick: function onClick(e) {
          return _this6.setAgeGroup(6, 8);
        },
        className: this.state.ageMax == 8 ? 'activeListItem' : null
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, {
        align: "middle",
        style: {
          marginLeft: "10px",
          backgroundColor: "rgb(230,230,230)",
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          padding: "8px 12px"
        }
      }, "1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Ages 6-8")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, {
        button: true,
        onClick: function onClick(e) {
          return _this6.setAgeGroup(9, 10);
        },
        className: this.state.ageMax == 10 ? 'activeListItem' : null
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, {
        align: "middle",
        style: {
          marginLeft: "10px",
          backgroundColor: "rgb(230,230,230)",
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          padding: "8px 12px"
        }
      }, "2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Ages 9-10")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, {
        button: true,
        onClick: function onClick(e) {
          return _this6.setAgeGroup(11, 12);
        },
        className: this.state.ageMax == 12 ? 'activeListItem' : null
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, {
        align: "middle",
        style: {
          marginLeft: "10px",
          backgroundColor: "rgb(230,230,230)",
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          padding: "8px 12px"
        }
      }, "3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Ages 11-12")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_42___default.a, {
        button: true,
        onClick: function onClick(e) {
          return _this6.setAgeGroup(13, 16);
        },
        className: this.state.ageMax == 16 ? 'activeListItem' : null
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_43___default.a, {
        align: "middle",
        style: {
          marginLeft: "10px",
          backgroundColor: "rgb(230,230,230)",
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          padding: "8px 12px"
        }
      }, "4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_44___default.a, null, "Ages 13-16"))) : null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pageContainer"
      }, this.state.showCompetitors == true && this.state.standingsView == 'individual' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle",
        style: {
          color: "#ffffff"
        }
      }, "Results"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Column"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.rankArr.map(function (item, index) {
        if (item.age >= _this6.state.ageMin && item.age < _this6.state.ageMax + 1) {
          // return <div className={item.completed == true ? "athleteBox completed" : "athleteBox"}>
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "athleteBox"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
            horizontal: "space-around",
            vertical: "center"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.rank, "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.first_name + ' ' + item.last_name.substring(0, 1)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.points), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              fontSize: ".8em",
              color: "#979797"
            }
          }, "Pts."))));
        }
      })), " ") : null, this.state.showCompetitors == true && this.state.standingsView == 'season' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subTitle",
        style: {
          color: "#ffffff"
        }
      }, "Standings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Column"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.rankArr.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "athleteBox"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_27__["Row"], {
          horizontal: "space-around",
          vertical: "center"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, index + 1, "."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.first_name + ' ' + item.last_name.substring(0, 1)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, item.Points), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            fontSize: ".8em",
            color: "#979797"
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
//# sourceMappingURL=index.js.aec78478d1307b9f5aef.hot-update.js.map