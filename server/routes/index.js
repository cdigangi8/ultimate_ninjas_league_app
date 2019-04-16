(function() {

//     'use strict';

var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function openConnection(){
    var connection = mysql.createConnection({
      host     : process.env.RDS_HOSTNAME,
      user     : process.env.RDS_USERNAME,
      password : process.env.RDS_PASSWORD,
      port     : process.env.RDS_PORT,
      database: process.env.RDS_DATABASE
    });
    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database.');
    });
    return connection;
}

function sqlReq(con, sql){
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    // });
    const p = new Promise((res,reject)=>{
      con.query(sql, function(err, result){
        if (err){
          reject(err);
        }else{
          res(result);
        }
      })
    }).catch(err => {
      return err;
    });
    return p;
}

      
router.get('/get_athletes', function(req, res){
  var con = openConnection();
  var sql = "SELECT * from yl_competitors WHERE location=" + req.query.location;
    sqlReq(con,sql).then(resp=>{
      sql = "SELECT * from yl_courses WHERE location=" + req.query.location + " and complete IS NULL";
      sqlReq(con,sql).then(resp2=>{
        con.end();
        res.json({'athletes': resp, 'courses': resp2});
      });
  });
});

router.get('/get_obstacles', function(req, res){
  var con = openConnection();
  var sql = "SELECT * from yl_obstacles WHERE course_id=" + req.query.course + " ORDER BY obOrder";
    sqlReq(con,sql).then(resp=>{
      var sql = "SELECT * from yl_results WHERE course_id=" + req.query.course + " ORDER BY Points";
      sqlReq(con,sql).then(resp2=>{
        con.end();
        res.json({'obstacles': resp, 'results': resp2});
      });
  });
});

router.get('/get_standings', function(req, res){
  var con = openConnection();
  var ageMax = parseInt(req.query.ageMax) + 1;
  var sql = "SELECT * FROM yl_standings ys \
              INNER JOIN yl_competitors ycomp\
              ON ys.athlete_id = ycomp.athlete_id\
              and ycomp.age >= " + req.query.ageMin + " and ycomp.age < " + ageMax + " and ycomp.location= " + req.query.location + " and ys.yl_id = (select yl_id from yl_sessions where current_session=1)\
              order by Points desc";
    sqlReq(con,sql).then(resp=>{
      con.end();
      res.json({'standings': resp});
    });
});

router.post('/add_competitor', function(req, res){
    var con = openConnection();
    console.log(req.body.params);
    var sql = "INSERT INTO yl_competitors (first_name, last_name, age, location, gender) \
                VALUES('" + req.body.params.firstName + "','" + req.body.params.lastName + "',\
                '" + req.body.params.age + "','" + req.body.params.location + "',\
                '" + req.body.params.gender + "')";
      sqlReq(con,sql).then(function(resp){
          con.end();
          res.json({'request': resp});
      });
  });

  router.post('/post_scorecard', function(req, res){
    var con = openConnection();
    console.log(req.body.params);
    var sql = "INSERT INTO yl_results (athlete_id, course_id, Points, tiebreaker_obstacle, tiebreaker_time, result_string) \
                VALUES('" + req.body.params.athlete + "','" + req.body.params.course + "',\
                '" + req.body.params.points + "','" + req.body.params.tieOB + "',\
                '" + req.body.params.tieTime + "','" + req.body.params.resStr + "')";
      sqlReq(con,sql).then(resp=>{
        sql = "SELECT * FROM yl_results WHERE course_id = " + req.body.params.course;
        sqlReq(con,sql).then(resp2=>{
          con.end();
          res.json({'results': resp2});
        })
      });
  });

  router.post('/post_standings', function(req, res){
    var con = openConnection();
    console.log(req.body.params);
    // var arr = req.body.params.array;
    // var item = req.body.params.athlete;
    
    // arr.forEach(function(item, index){
      var sql = "SELECT * FROM yl_standings ys INNER JOIN yl_courses yc ON ys.course_id = yc.course_id and ys.athlete_id = " + req.body.params.athlete_id + " and ys.yl_id= " + req.body.params.course.yl_id;
      sqlReq(con,sql).then(resp=>{
        var runSQL = true;
        if(resp.length < 1){
          sql = "INSERT INTO yl_standings (athlete_id, Points, course_id) \
          VALUES (" + req.body.params.athlete_id + ", " + req.body.params.points + ", " + req.body.params.course.course_id + ")";
        }else{
          var ylDate = new Date(resp[0].comp_date);
          var newDate = new Date(req.body.params.course.comp_date);
          console.log(ylDate);
          if(newDate.getTime() > ylDate.getTime()){
            var newPoints = parseInt(resp[0].Points) + parseInt(req.body.params.points);
            sql = "UPDATE yl_standings SET Points = " + newPoints + ", course_id = \
            " + req.body.params.course.course_id + " WHERE athlete_id = " + req.body.params.athlete_id;
          }else{
            runSQL = false;
          }
        }
        if(runSQL == true){
          sqlReq(con,sql).then(resp2=>{
            con.end();
            res.json({'request': resp2});
          });
        }else{
          con.end();
            res.json({'request': "Standings already up to date!"});
        }
        
      });
    // });
    // var sql = "INSERT INTO yl_results (athlete_id, course_id, Points, tiebreaker_obstacle, tiebreaker_time, result_string) \
    //             VALUES('" + req.body.params.athlete + "','" + req.body.params.course + "',\
    //             '" + req.body.params.points + "','" + req.body.params.tieOB + "',\
    //             '" + req.body.params.tieTime + "','" + req.body.params.resStr + "')";
    //   sqlReq(con,sql).then(resp=>{
    //     sql = "SELECT * FROM yl_results WHERE course_id = " + req.body.params.course;
    //     sqlReq(con,sql).then(resp2=>{
          
    //     })
    //   });
  });

      
  
    module.exports = router;
  
  }());
  