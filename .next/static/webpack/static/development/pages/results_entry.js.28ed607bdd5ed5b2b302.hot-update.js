webpackHotUpdate("static/development/pages/results_entry.js",{

/***/ "./controllers/controllers.js":
/*!************************************!*\
  !*** ./controllers/controllers.js ***!
  \************************************/
/*! exports provided: convertObstacles, resetObstacleArr, calculateScore, rankFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertObstacles", function() { return convertObstacles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetObstacleArr", function() { return resetObstacleArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateScore", function() { return calculateScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankFunction", function() { return rankFunction; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

function convertObstacles(arr) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    var newArr = [];
    arr.forEach(function (item, index) {
      item.choices = [];

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
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    arr.forEach(function (item, index) {
      for (var i = 0; i < item.choices.length; i++) {
        item.choices[i].selected = false;
      }
    });
    res(arr);
  });
  return p;
}
function calculateScore(arr) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    var resArr = '';
    var totalScore = 0;
    arr.forEach(function (item, index) {
      for (var i = 0; i < item.choices.length; i++) {
        if (item.choices[i].selected == true) {
          totalScore += item.choices[i].value;

          if (resArr == '') {
            resArr = resArr + '{key: ' + item.obstacle_id + ', value: ' + item.choices[i].value + '}';
          } else {
            resArr = resArr + ',{key: ' + item.obstacle_id + ', value: ' + item.choices[i].value + '}';
          }
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

function rankFunction(results, athletes) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, reject) {
    var rankArr = [];

    for (var a = 0; a < athletes.length; a++) {
      var resultMatch = checkResult(results, athletes[a].athlete_id);
      console.log(resultMatch);
    } // athletes.forEach(function(item, index){
    //     var obj = {};
    //     var ageMin;
    //     var ageMax;
    //     obj.first_name = item.first_name;
    //     obj.last_name = item.last_name;
    //     obj.athlete_id = item.athlete_id;
    //     obj.age = item.age;
    //     if(item.age == 6 || item.age == 7 || item.age == 8){
    //         ageMin = 6;
    //         ageMax = 8;
    //     }else if(item.age == 9 || item.age == 10){
    //         ageMin = 9;
    //         ageMax = 10;
    //     }else if(item.age == 11 || item.age == 12){
    //         ageMin = 11;
    //         ageMax = 12;
    //     }else if(item.age == 13 || item.age == 16){
    //         ageMin = 13;
    //         ageMax = 16;
    //     }
    //     for(var i=0; i<results.length; i++){
    //         if(item.athlete_id == results[i].athlete_id){
    //             obj.points = results[i].Points;
    //             obj.tieOB = results[i].tiebreaker_obstacle;
    //             obj.tieTime = results[i].tiebreaker_time;
    //             obj.resultStr = results[i].result_string;
    //             obj.completed = true;
    //             break;
    //         }else{
    //             obj.points = '';
    //             obj.tieOB = '';
    //             obj.tieTime = '';
    //             obj.resultStr = '';
    //             obj.completed = false;
    //             obj.rank = '';
    //         }
    //     }
    //     if(obj.points != ''){
    //         var rank = 1;
    //         if(rankArr.length < 1){
    //             obj.rank = rank;
    //             rankArr.push(rankArr);
    //         }else{
    //             for(var k=0; k<rankArr.length;k++){
    //                 if(rankArr[k].points == '' ){
    //                     obj.rank = rank;
    //                     rankArr.unshift(obj);
    //                 }else{
    //                     if(rankArr[k].age >= ageMin && item.age < ageMax+1){
    //                         if(obj.points == rankArr[k].points){
    //                             //tie in points
    //                             if(obj.tieOB > rankArr[k].tieOB){
    //                                 obj.rank = rank;
    //                                 rankArr.splice((k-1), 0, obj);
    //                                 for(var z=k+1; z<rankArr.length; z++){
    //                                     if(rankArr[z].age >= ageMin && item.age < ageMax+1 && rankArr[z].rank !=''){
    //                                         rankArr[z].rank += 1;
    //                                     }
    //                                 }
    //                                 break;
    //                             }else if(obj.tieOB != '' && obj.tieOB == rankArr[k].tieOB){
    //                                 var ath1res = JSON.parse('['+obj.resultStr+']');
    //                                 var ath1pts;
    //                                 var ath2res = JSON.parse('['+rankArr[k].resultStr+']');
    //                                 var ath2pts;
    //                                 ath1res.forEach((item,index)=>{
    //                                     if(item.key == obj.tieOB){
    //                                         ath1pts = item.value;
    //                                     }
    //                                 });
    //                                 ath2res.forEach((item,index)=>{
    //                                     if(item.key == rankArr[k].tieOB){
    //                                         ath2pts = item.value;
    //                                     }
    //                                 });
    //                                 if(ath1pts > ath2pts){
    //                                     obj.rank = rank;
    //                                     rankArr.splice((k-1), 0, obj);
    //                                     for(var z=k+1; z<rankArr.length; z++){
    //                                         if(rankArr[z].age >= ageMin && item.age < ageMax+1 && rankArr[z].rank !=''){
    //                                             rankArr[z].rank += 1;
    //                                         }
    //                                     }
    //                                     break;
    //                                 }else if(ath1pts == ath2pts){
    //                                     if(obj.tieTime > rankArr[k].tieTime){
    //                                         obj.rank = rank;
    //                                         rankArr.splice((k-1), 0, obj);
    //                                         for(var z=k+1; z<rankArr.length; z++){
    //                                             if(rankArr[z].age >= ageMin && item.age < ageMax+1 && rankArr[z].rank !=''){
    //                                                 rankArr[z].rank += 1;
    //                                             }
    //                                         }
    //                                         break;
    //                                     }else if(obj.tieTime == rankArr[k].tieTime){
    //                                         obj.rank = rank;
    //                                         rankArr.splice((k-1), 0, obj);
    //                                         break;
    //                                     }else{
    //                                         rank += 1;
    //                                     }
    //                                 }else{
    //                                     rank += 1;
    //                                 }
    //                             }
    //                         }else if(obj.points < rankArr[k].points){
    //                             //lower points
    //                             rank += 1;
    //                         }else{
    //                             //more points
    //                             obj.rank = rank;
    //                             rankArr.splice((k-1), 0, obj);
    //                             for(var z=k+1; z<rankArr.length; z++){
    //                                 if(rankArr[z].age >= ageMin && item.age < ageMax+1 && rankArr[z].rank !=''){
    //                                     rankArr[z].rank += 1;
    //                                 }
    //                             }
    //                             break;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }else{
    //         rankArr.push(obj);
    //     }
    // });


    res(rankArr);
  });
  return p;
} //need to return array of objects with:

/*
athlete first_name
athlete last_name
athlete id
athlete age
rank
points
*/

/***/ })

})
//# sourceMappingURL=results_entry.js.28ed607bdd5ed5b2b302.hot-update.js.map