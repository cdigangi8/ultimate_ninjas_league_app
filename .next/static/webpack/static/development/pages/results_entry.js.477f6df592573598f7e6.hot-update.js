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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);


function convertObstacles(arr) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
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
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
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
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
    var resArr = [];
    var totalScore = 0;
    arr.forEach(function (item, index) {
      for (var i = 0; i < item.choices.length; i++) {
        if (item.choices[i].selected == true) {
          totalScore += item.choices[i].value;
          resArr.push({
            key: item.obstacle_id,
            value: item.choices[i].value
          });
        }
      }
    });
    var returnVar = {
      score: totalScore,
      resStr: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(resArr)
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

function rankArrFunc(arr) {
  console.log(arr);

  for (var a = 0; a < arr.length; a++) {
    var rank = 1;
    var newRank = false;

    for (var b = 0; b < arr.length; b++) {
      if (arr[a].points !== '' && arr[a].athlete_id !== arr[b].athlete_id) {
        if (arr[b].rank !== '') {
          console.log(arr[a].first_name);
          console.log(arr[b].first_name);

          if (arr[a].points == arr[b].points) {
            console.log('tie'); //tie in points

            if (arr[a].tieOB > arr[b].tieOB) {
              console.log('tieOB'); // arr[a].rank = rank;

              newRank = true;
            } else if (arr[a].tieOB == arr[b].tieOB) {
              if (arr[a].tieOB == '') {
                if (arr[a].tieTime < arr[b].tieTime) {
                  console.log('Correct tie!!'); // arr[a].rank = rank;

                  newRank = true;
                } else if (arr[a].tieTime == arr[b].tieTime) {
                  console.log('tieTIME TIE'); // arr[a].rank = rank;

                  newRank = true;
                } else {
                  console.log('LOSE TIEBREAKER');
                  rank += 1;
                }
              } else {
                console.log('tietime');
                var ath1res = JSON.parse(arr[a].resultStr);
                var ath1pts;
                var ath2res = JSON.parse(arr[b].resultStr);
                var ath2pts;

                for (var a1 = 0; a1 < ath1res.length; a1++) {
                  if (ath1res[a1].key == arr[a].tieOB) {
                    ath1pts = ath1res[a1].value;
                    break;
                  }
                }

                for (var a2 = 0; a2 < ath2res.length; a2++) {
                  if (ath2res[a2].key == arr[a].tieOB) {
                    ath2pts = ath2res[a2].value;
                    break;
                  }
                }

                if (ath1pts > ath2pts) {
                  console.log('tieOB points'); // arr[a].rank = rank;

                  newRank = true;
                } else if (ath1pts == ath2pts) {
                  console.log('tieOB time');

                  if (arr[a].tieTime > arr[b].tieTime) {
                    // arr[a].rank = rank;
                    newRank = true;
                  } else if (arr[a].tieTime == arr[b].tieTime) {
                    console.log('tieTIME TIE'); // arr[a].rank = rank;

                    newRank = true;
                  } else {
                    console.log('LOSE TIEBREAKER');
                    rank += 1;
                  }
                } else {
                  console.log('LOSE POINTS TIEBREAKER');
                  rank += 1;
                }
              }
            }
          } else if (arr[a].points < arr[b].points) {
            //lower points
            console.log('LOSE POINTS');
            rank += 1;
          } else {
            //more points
            console.log('WIN POINTS'); // arr[a].rank = rank;

            newRank = true;
          }
        } else {
          console.log('skipped because non-ranked' + arr[b].first_name);
          newRank = true;
        }
      }
    }

    if (newRank == true) {
      arr[a].rank = rank;
      console.log(rank + arr[a].first_name);

      for (var c = 0; c < arr.length; c++) {
        console.log(arr[c].rank + 'rank' + arr[c].first_name);

        if (arr[c].rank != '' && arr[c].rank >= rank && arr[c].rank !== arr[a].rank) {
          arr[c].rank += 1;
          console.log('rank changed' + arr[c].rank + arr[c].first_name);
        }
      }
    }
  }

  return arr;
}

function rankFunction(results, athletes, ageMin, ageMax) {
  var p = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, reject) {
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
    // kidArray.sort(compare);


    var rankArray = rankArrFunc(kidArray);
    rankArray.sort(compare);
    res(rankArray);
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
//# sourceMappingURL=results_entry.js.477f6df592573598f7e6.hot-update.js.map