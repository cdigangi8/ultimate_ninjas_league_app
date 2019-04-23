webpackHotUpdate("static/development/pages/update_season_standings.js",{

/***/ "./pages/update_season_standings.js":
/*!******************************************!*\
  !*** ./pages/update_season_standings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _controllers_controllers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../controllers/controllers */ "./controllers/controllers.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/FormLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



















































_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_48__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_50__["faListOl"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_50__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_50__["faMapMarkerAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_50__["faHashtag"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_50__["faCalendarDay"]);

var UpdateStandings =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(UpdateStandings, _Component);

  function UpdateStandings() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, UpdateStandings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(UpdateStandings)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      location: "",
      athletes: [],
      showLocationSelect: true,
      showAgeSelect: false,
      showCompetitors: false,
      ageMin: '',
      ageMax: '',
      openDialog: false,
      rankArr: [],
      open: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleDrawer", function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, event.target.value));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "closeDialog", function (type) {
      _this.setState({
        openDialog: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(UpdateStandings, [{
    key: "setLocation",
    value: function setLocation(val) {
      this.setState({
        location: val,
        showAgeSelect: true,
        ageMin: '',
        ageMax: '',
        showCompetitors: false
      });
    }
  }, {
    key: "confirmSubmission",
    value: function confirmSubmission(val) {
      this.setState({
        openDialog: true
      });
    }
  }, {
    key: "setAgeGroup",
    value: function setAgeGroup(min, max) {
      var _this2 = this;

      this.setState({
        ageMin: min,
        ageMax: max,
        showCompetitors: true
      });
      Object(_api_api__WEBPACK_IMPORTED_MODULE_13__["getAthletes"])(this.state.location, max, min).then(function (resp) {
        Object(_api_api__WEBPACK_IMPORTED_MODULE_13__["getStandings"])(min, max, _this2.state.location).then(function (resp2) {
          _this2.setState({
            athletes: resp.data.athletes,
            rankArr: resp2.data.standings
          });
        });
      });
    }
  }, {
    key: "updateSeasonRanks",
    value: function () {
      var _updateSeasonRanks = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(arr) {
        var resolvedFinalArray, respArr;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(arr);
                _context2.next = 3;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(arr.map(
                /*#__PURE__*/
                function () {
                  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
                    var result;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return Object(_api_api__WEBPACK_IMPORTED_MODULE_13__["postUpdatedRankings"])(value);

                          case 2:
                            result = _context.sent;
                            return _context.abrupt("return", result);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 3:
                resolvedFinalArray = _context2.sent;
                respArr = resolvedFinalArray;
                console.log(respArr);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateSeasonRanks(_x) {
        return _updateSeasonRanks.apply(this, arguments);
      }

      return updateSeasonRanks;
    }()
  }, {
    key: "updateSeasonStandings",
    value: function () {
      var _updateSeasonStandings = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this3 = this;

        var resolvedFinalArray, respArr;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(this.state.athletes.map(
                /*#__PURE__*/
                function () {
                  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value) {
                    var result;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return Object(_api_api__WEBPACK_IMPORTED_MODULE_13__["updateStandings"])(value, _this3.state.athletes.length);

                          case 2:
                            result = _context3.sent;
                            return _context3.abrupt("return", {
                              pts: result.data.points,
                              res: result.data.rankings,
                              ath: value.athlete_id
                            });

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 2:
                resolvedFinalArray = _context4.sent;
                respArr = resolvedFinalArray;
                this.setState({
                  showCompetitors: false,
                  ageMin: '',
                  ageMax: '',
                  openDialog: false
                });
                Object(_controllers_controllers__WEBPACK_IMPORTED_MODULE_14__["updateSeasonRanking"])(respArr).then(function (resp) {
                  _this3.updateSeasonRanks(resp.array);
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateSeasonStandings() {
        return _updateSeasonStandings.apply(this, arguments);
      }

      return updateSeasonStandings;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "mainBack"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Update Youth League Standings",
        link: "",
        linkTitle: ""
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "drawer-container",
        style: {
          position: "relative"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_38___default.a, null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_32___default()('drawer', {
          'drawerOpen': this.state.open,
          'drawerClose': !this.state.open
        }),
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_32___default()({
            'drawerOpen': this.state.open,
            'drawerClose': !this.state.open
          })
        },
        open: this.state.open
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "toolbar"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "toolbarBtn"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_49__["FontAwesomeIcon"], {
        onClick: this.handleDrawer,
        icon: "bars"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          marginLeft: "20px",
          fontWeight: "bold",
          color: "rgb(62, 105, 154)"
        }
      }, "Options")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Column"], {
        className: "optionSection"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        className: "titleRow"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "titleIcon"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_49__["FontAwesomeIcon"], {
        icon: "map-marker-alt"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "titleText"
      }, "Location")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this4.setLocation(1);
        },
        className: this.state.location == '1' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionText"
      }, "Chicago")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this4.setLocation(2);
        },
        className: this.state.location == '2' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "N"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionText"
      }, "Naperville")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this4.setLocation(3);
        },
        className: this.state.location == '3' ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "L"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionText"
      }, "Libertyville"))), this.state.showAgeSelect == true ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Column"], {
        className: "optionSection"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        className: "titleRow"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "titleIcon"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_49__["FontAwesomeIcon"], {
        icon: "hashtag"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "titleText"
      }, "Age Group")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this4.setAgeGroup(6, 8);
        },
        className: this.state.ageMax == 8 ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "1"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionText"
      }, "Ages 6-8")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this4.setAgeGroup(9, 10);
        },
        className: this.state.ageMax == 10 ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "2"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionText"
      }, "Ages 9-10")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this4.setAgeGroup(11, 12);
        },
        className: this.state.ageMax == 12 ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "3"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionText"
      }, "Ages 11-12")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
        vertical: "center",
        onClick: function onClick(e) {
          return _this4.setAgeGroup(13, 16);
        },
        className: this.state.ageMax == 16 ? 'activeListItem optionRow' : 'optionRow'
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionLetterIcon"
      }, "4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "optionText"
      }, "Ages 13-16"))) : null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "pageContainer"
      }, this.state.showCompetitors == true ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "submitBtn",
        style: {
          marginBottom: "0px"
        },
        onClick: function onClick(e) {
          return _this4.confirmSubmission('scorecard');
        }
      }, "Update Standings"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "subTitle",
        style: {
          color: "#ffffff"
        }
      }, "Standings"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Column"], {
        horizontal: "spaced",
        wrap: true,
        style: {
          marginTop: "20px"
        }
      }, this.state.rankArr.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "athleteStandingsBox"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_30__["Row"], {
          horizontal: "space-around",
          vertical: "center"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, item.rank, "."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, item.first_name + ' ' + item.last_name.substring(0, 1)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, item.Points), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            fontSize: ".8em",
            color: "rgb(225,225,225)"
          }
        }, "Pts."))));
      })), " ") : null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17___default.a, {
        open: this.state.openDialog,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_21___default.a, {
        id: "form-dialog-title"
      }, "Are you sure you want to update the season standings?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_19___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_20___default.a, null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
        type: "submit",
        onClick: function onClick(e) {
          return _this4.updateSeasonStandings();
        },
        color: "primary"
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
        type: "submit",
        onClick: this.closeDialog,
        color: "default"
      }, "Cancel"))));
    }
  }]);

  return UpdateStandings;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateStandings);

/***/ })

})
//# sourceMappingURL=update_season_standings.js.e588c88cee989f5cc948.hot-update.js.map