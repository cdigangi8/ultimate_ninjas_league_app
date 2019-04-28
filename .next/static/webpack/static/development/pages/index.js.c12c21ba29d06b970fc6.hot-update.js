webpackHotUpdate("static/development/pages/index.js",{

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
                // arr[a].rank = rank;
                newRank = true;
              } else if (ath1pts == ath2pts) {
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

function getAvg(arr, comps) {
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
    console.log(arr[i].pts);
    num += arr[i].pts;
  } // console.log(total);
  // console.log(num);


  if (total > 0) {
    avg = num / total;
  }

  return avg;
}

function getPts(arr, comps) {
  // console.log(arr);
  var num = 0;
  var total;

  if (arr.length < comps) {
    total = arr.length;
  } else {
    total = comps;
  }

  for (var i = 0; i < total; i++) {
    num += arr[i].pts;
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
            checkA = getAvg(athletes[a].res, 6);
            checkB = getAvg(athletes[b].res, 6); // console.log(checkA);
            // console.log(checkB);

            if (checkA > checkB) {
              rank += 1;
            } else if (checkA == checkB) {
              checkA = getPts(athletes[a].res, 7);
              checkB = getPts(athletes[b].res, 7);

              if (checkA < checkB) {
                rank += 1;
              } else if (checkA == checkB) {
                checkA = getAvg(athletes[a].res, 7);
                checkB = getAvg(athletes[b].res, 7);

                if (checkA > checkB) {
                  rank += 1;
                } else if (checkA == checkB) {
                  checkA = getPts(athletes[a].res, 8);
                  checkB = getPts(athletes[b].res, 8);

                  if (checkA < checkB) {
                    rank += 1;
                  } else if (checkA == checkB) {
                    checkA = getAvg(athletes[a].res, 8);
                    checkB = getAvg(athletes[b].res, 8);

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

/***/ })

})
//# sourceMappingURL=index.js.c12c21ba29d06b970fc6.hot-update.js.map