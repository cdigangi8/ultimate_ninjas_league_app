webpackHotUpdate("static/development/pages/add_competitors.js",{

/***/ "./components/Controls.js":
false,

/***/ "./components/LapTime.js":
false,

/***/ "./components/LapTimeList.js":
false,

/***/ "./components/StopWatch.js":
false,

/***/ "./components/Timer.js":
false,

/***/ "./controllers/timeFormat.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/fn/parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
false,

/***/ "./pages/add_competitors.js":
/*!**********************************!*\
  !*** ./pages/add_competitors.js ***!
  \**********************************/
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/FormLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! simple-flexbox */ "./node_modules/simple-flexbox/build/index.js");
/* harmony import */ var simple_flexbox__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../api/api */ "./api/api.js");



























var AddCompetitor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddCompetitor, _Component);

  function AddCompetitor() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddCompetitor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddCompetitor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      open: false,
      firstName: '',
      lastName: '',
      location: '',
      gender: '',
      age: '',
      dialogTitle: '',
      dialogMsg: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitCompetitor", function () {
      if (_this.state.firstName == '' || _this.state.lastName == '' || _this.state.age == '' || _this.state.location == '' || _this.state.gender == '') {
        _this.setState({
          open: true,
          dialogMsg: 'Please make sure all fields are filled out!',
          dialogTitle: 'Warning!'
        });
      } else {
        _this.setState({
          open: false
        });

        Object(_api_api__WEBPACK_IMPORTED_MODULE_25__["addCompetitor"])(_this.state.firstName, _this.state.lastName, _this.state.age, _this.state.location, _this.state.gender).then(function (res) {
          //handle response from api
          console.log(res); // this.props.history.replace('/splash_page');
          // console.log(res);

          _this.setState({
            open: true,
            dialogMsg: 'Successfully added competitor!',
            dialogTitle: 'Success!',
            firstName: '',
            lastName: '',
            age: '',
            location: '',
            gender: ''
          });
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeDialog", function () {
      _this.setState({
        open: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, event.target.value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddCompetitor, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Youth League",
        link: "",
        linkTitle: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pageContainer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Row"], {
        className: "pageInstructions",
        horizontal: "center"
      }, "Add New Competitor"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "completeProfile"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Row"], {
        flexGrow: 1,
        wrap: true,
        horizontal: "spaced"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Column"], {
        flexGrow: 1,
        style: {
          marginRight: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "first-name",
        label: "First Name",
        value: this.state.firstName,
        onChange: this.handleChange('firstName'),
        margin: "dense",
        fullWidth: true,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Column"], {
        flexGrow: 1,
        style: {
          marginRight: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
        required: true,
        id: "last-name",
        label: "Last Name",
        value: this.state.lastName,
        onChange: this.handleChange('lastName'),
        margin: "dense",
        fullWidth: true
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Column"], {
        flexGrow: 1
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
        required: true,
        id: "age",
        label: "Age",
        value: this.state.age,
        onChange: this.handleChange('age'),
        margin: "dense",
        fullWidth: true
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Row"], {
        style: {
          marginTop: '20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Column"], {
        flexGrow: 1
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_19___default.a, {
        required: true,
        component: "fieldset"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_20___default.a, {
        component: "legend"
      }, "Gender"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17___default.a, {
        "aria-label": "Gender",
        name: "gender1",
        value: this.state.gender,
        onChange: this.handleChange('gender')
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18___default.a, {
        value: "female",
        control: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16___default.a, null),
        label: "Female"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18___default.a, {
        value: "male",
        control: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16___default.a, null),
        label: "Male"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Column"], {
        flexGrow: 1
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_19___default.a, {
        required: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22___default.a, null, "Location"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23___default.a, {
        value: this.state.location,
        onChange: this.handleChange('location')
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21___default.a, {
        value: "1"
      }, "Chicago"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21___default.a, {
        value: "2"
      }, "Naperville"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21___default.a, {
        value: "3"
      }, "Libertyville")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(simple_flexbox__WEBPACK_IMPORTED_MODULE_24__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "submitBtn",
        onClick: function onClick(e) {
          return _this2.submitCompetitor();
        }
      }, "Submit")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default.a, {
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15___default.a, {
        id: "form-dialog-title"
      }, this.state.dialogTitle), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_14___default.a, null, this.state.dialogMsg)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "submit",
        onClick: this.closeDialog,
        color: "primary"
      }, "Close"))));
    }
  }]);

  return AddCompetitor;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddCompetitor);

/***/ })

})
//# sourceMappingURL=add_competitors.js.c07dfe31376dde5d3662.hot-update.js.map