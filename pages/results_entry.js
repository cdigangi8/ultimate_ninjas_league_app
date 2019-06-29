import React, { Component } from 'react';
import UNHeader from "../components/header";
import '../style/results_entry.css';
import {getCompInfo, getCourseObstacles, postScorecard, postStandings, postUpdatedScorecard} from '../api/api';
import {convertObstacles, calculateScore, resetObstacleArr,rankFunction, checkActiveScorecard} from '../controllers/controllers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Column, Row } from 'simple-flexbox';
import {addCompetitor} from '../api/api';
import Stopwatch from '../components/StopWatch';
import timeFormat from '../controllers/timeFormat';

class ResultsEntry extends Component {


    state = {
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
        openFinalDialog: false,
        completedCount: 0,
        errorDialog: false,
        errorMsg: '',
        existingScorecard: false,
        obstacleIndex: 0,
        editTime: false,
        editTimeMin: '',
        editTimeSec: '',
        editTimeMS: '',
        editTimeOb: 0,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    setLocation(val){
        this.setState({location: val, showLocationSelect: false, showCourseSelect: true});
        getCompInfo(val).then(resp=>{
            this.setState({courses: resp.data.courses, athletes: resp.data.athletes});
        })
    }

    setCourse(ind){
        var indx;
        for(var i=0; i<this.state.courses.length; i++){
            if(this.state.courses[i].course_id == ind){
                indx = i;
            }
        }
        this.setState({courseIndex: indx, showCourseSelect: false, showAgeSelect: true});
        getCourseObstacles(this.state.courses[indx].course_id).then(resp=>{
            convertObstacles(resp.data.obstacles).then(resp2=>{
                    this.setState({obstacles: resp2, resultsArr: resp.data.results});
            })
            
        });
    }

    setAgeGroup(min,max){
        this.setState({ageMin: min, ageMax: max, showCompetitors: true});
        rankFunction(this.state.resultsArr, this.state.athletes, min, max).then(resp=>{
            console.log(resp);
            this.setState({rankArr: resp.array, completedCount: resp.completedCount});
        })
    }

    setScorecard(athlete){
        var elementPos = this.state.rankArr.map(function(x) {return x.athlete_id; }).indexOf(athlete);
        checkActiveScorecard(this.state.resultsArr, this.state.obstacles, athlete).then(resp=>{
            console.log(resp);
            this.setState({currentAthleteIndex: elementPos,currentAthlete: athlete, showCompetitors: false, 
                showAgeSelect: false, showScorecard: true, obstacles: resp.obstacles, tieBreakMin: resp.min, tieBreakSec: resp.sec,
                tieBreakMs: resp.ms, existingScorecard: resp.existingScorecard, obstacleIndex: 0});
                document.getElementById('resultsEntry').scrollTop = 0;
        });
    }

    createPointRow(item){
        let table = []
    for (let i = 0; i < item.choices.length; i++) {
      table.push(<div className={item.choices[i].selected == true ? "obstacleBoxContent activeBox" : "obstacleBoxContent"} onClick={e=>this.addPoints(item, item.choices[i].key)}>{item.choices[i].value}</div>)
    }
    return table
    }

    checkTie(){
        var tie = false;
        var tieOB;
        var tieMin = '';
        var tieSec = '';
        var tieMS = '';
        this.state.obstacles.forEach((item,index)=>{
            for(var i=0; i<item.choices.length; i++){
                if(tie==false && i !== (item.choices.length-1) && item.choices[i].selected == true){
                    tie = true;
                    tieOB = item.obOrder;
                    if(index>0 && this.state.obstacles[index-1].time != ''){
                        tieMin = this.state.obstacles[index-1].time.split(":")[1];
                        tieSec = this.state.obstacles[index-1].time.split(":")[2].split('.')[0];
                        tieMS = this.state.obstacles[index-1].time.split(":")[2].split('.')[1];
                    }else if(index == 0 && item.time !=''){
                        tieMin = item.time.split(":")[1];
                        tieSec = item.time.split(":")[2].split('.')[0];
                        tieMS = item.time.split(":")[2].split('.')[1];
                    }
                    this.setState({tiebreakerOb: tieOB, tieBreakMin: tieMin, tieBreakSec: tieSec, tieBreakMs: tieMS});
                    break;
                }
            }
            if(tie == false){
                if(this.state.obstacles[this.state.obstacles.length - 1].time != ''){
                    tieMin = item.time.split(":")[1];
                    tieSec = item.time.split(":")[2].split('.')[0];
                    tieMS = item.time.split(":")[2].split('.')[1];
                }
                this.setState({tiebreakerOb: "", tieBreakMin: tieMin, tieBreakSec: tieSec, tieBreakMs: tieMS});
            }
        });
    }

    convertTime(min, sec, ms){
        console.log(min);
        console.log(sec);
        console.log(ms);
        if(parseInt(min) < 10 && min !== '00'){
            min = '0' + min;
        }else if(min ==''){
            min = "00";
        }
        if(parseInt(sec) < 10 && sec !== '00'){
            sec = '0' + sec;
        }else if(sec ==''){
            sec = "00";
        }
        if(parseInt(ms) < 10 && ms !== '00'){
            ms = '0' + ms;
        }else if(ms ==''){
            ms = "00";
        }
        return '00' + ':' + min + ':' + sec + '.' + ms;
      }

    addPoints(item, c_id, time){
        for(var i=0; i<item.choices.length;i++){
            if(item.choices[i].key != c_id){
                item.choices[i].selected = false;
            }else{
                item.choices[i].selected = true;
                if(time){
                    item.time = timeFormat( time );
                }
                this.checkTie();
            }
        }
        this.setState({obstacles: this.state.obstacles});
    }

    confirmSubmission(val){
        if(val =='scorecard'){
            this.setState({openDialog: true});
        }else{
            this.setState({openFinalDialog: true});
        }   
    }

    submitScorecard(){
        var tiebreakTime = this.convertTime(this.state.tieBreakMin, this.state.tieBreakSec, this.state.tieBreakMs);
        calculateScore(this.state.obstacles).then(resp=>{
            var points = resp.score;
            var resultString = resp.resStr;
            if(resultString.length !== this.state.obstacles.length && resultString.length > 0){
                this.setState({openDialog: false, errorDialog: true, errorMsg: "At least one obstacle is missing a point selection!"});
            }else if(tiebreakTime == '00:00:00.00' && resultString.length > 0){
                this.setState({openDialog: false, errorDialog: true, errorMsg: "Tiebreak time is zero and should have a value!"});
            }else{
                postScorecard(this.state.currentAthlete, this.state.courses[this.state.courseIndex].course_id, points, this.state.tiebreakerOb, tiebreakTime, JSON.stringify(resultString)).then(resp2=>{
                    console.log(resp2);
                    if("affectedRows" in  resp2.data.status){
                        resetObstacleArr(this.state.obstacles).then(resp3=>{
                            rankFunction(resp2.data.results, this.state.athletes, this.state.ageMin, this.state.ageMax).then(resp4=>{
                                this.setState({showScorecard: false, showCompetitors: true, currentAthlete: '', openDialog: false, showAgeSelect: true, 
                                        tieBreakMin: '', tieBreakSec: '', tieBreakMs: '', tiebreakerOb: '', obstacles: resp3, 
                                        rankArr: resp4.array, completedCount: resp4.completedCount, resultsArr: resp2.data.results,
                                        existingScorecard: false});
                            });
                        });
                    }else{
                        this.setState({openDialog: false, errorDialog: true, errorMsg: "No connection to the database! Please copy the results on paper and submit when internet is back online."});
                    }
                });
            }
        });
    }

    updateScorecard(){
        var tiebreakTime = this.convertTime(this.state.tieBreakMin, this.state.tieBreakSec, this.state.tieBreakMs);
        calculateScore(this.state.obstacles).then(resp=>{
            var points = resp.score;
            var resultString = resp.resStr;
            if(resultString.length !== this.state.obstacles.length && resultString.length > 0){
                this.setState({openDialog: false, errorDialog: true, errorMsg: "At least one obstacle is missing a point selection!"});
            }else if(tiebreakTime == '00:00:00.00' && resultString.length > 0){
                this.setState({openDialog: false, errorDialog: true, errorMsg: "Tiebreak time is zero and should have a value!"});
            }else{
                postUpdatedScorecard(this.state.currentAthlete, this.state.courses[this.state.courseIndex].course_id, points, this.state.tiebreakerOb, tiebreakTime, JSON.stringify(resultString)).then(resp2=>{
                    if("affectedRows" in  resp2.data.status){
                        resetObstacleArr(this.state.obstacles).then(resp3=>{
                            rankFunction(resp2.data.results, this.state.athletes, this.state.ageMin, this.state.ageMax).then(resp4=>{
                                this.setState({showScorecard: false, showCompetitors: true, currentAthlete: '', openDialog: false, showAgeSelect: true, 
                                        tieBreakMin: '', tieBreakSec: '', tieBreakMs: '', tiebreakerOb: '', obstacles: resp3, 
                                        rankArr: resp4.array, completedCount: resp4.completedCount, resultsArr: resp2.data.results,
                                        existingScorecard: false});
                            });
                        });
                    }else{
                        this.setState({openDialog: false, errorDialog: true, errorMsg: "No connection to the database! Please copy the results on paper and submit when internet is back online."});
                    }
                });
            }
        });
    }

    functionThatUsesResolvedValues(val){
        console.log(val);
    }

    async finalizeResults(){
        let resolvedFinalArray = await Promise.all(this.state.rankArr.map(async(value) => { // map instead of forEach
            // var points;
            var rank;
            if(value.points < 1 && value.resultStr == '[]'){
                // points = 0;
                rank = 0;
            }else{
                // points = this.state.rankArr.length - (value.rank - 1);
                rank = value.rank;
            }
            // const result = await postStandings(value, this.state.courses[this.state.courseIndex], points);
            const result = await postStandings(value, this.state.courses[this.state.courseIndex], rank);
            return result; // important to return the value
        }));
        var respArr = resolvedFinalArray;
        this.setState({openFinalDialog: false, showCompetitors: false, ageMin: '', ageMax: ''});
    }

    goBack(){
        if(this.state.showScorecard == true){
            resetObstacleArr(this.state.obstacles).then(resp=>{
                this.setState({showScorecard: false, showCompetitors: true, currentAthlete: '', showAgeSelect: true, obstacles: resp, existingScorecard: false})
            });
        }else if(this.state.showCompetitors == true || this.state.showAgeSelect == true){
            this.setState({showCompetitors: false, ageMin: '', ageMax: '', showAgeSelect: false, showCourseSelect: true, obstacles: [], resultsArr: [] });
        }else{
            this.setState({showCourseSelect: false,  courseIndex: '', courses: [], athletes: [], location: '', showLocationSelect: true});
        }
    }

    closeDialog = (type) =>{
        this.setState({ openDialog: false, openFinalDialog: false, errorDialog: false, editTime: false });
}

myCallback = (time, obstacle)=>{
    this.addPoints(this.state.obstacles[this.state.obstacleIndex], obstacle.key, time);
    if(this.state.obstacleIndex < (this.state.obstacles.length-1)){
        this.setState({obstacleIndex: this.state.obstacleIndex + 1});
    }
}

editTimeFunc(time, ind){
    var min = '';
    var sec = '';
    var ms = '';
    if(time !=''){
        var min = time.split(":")[1];
        var sec = time.split(":")[2].split('.')[0];
        var ms = time.split(":")[2].split('.')[1];
    }
    this.setState({editTime: true, editTimeMin: min, editTimeSec: sec, editTimeMS: ms, editTimeOb: ind});
}
submitNewTime(){
    this.state.obstacles[this.state.editTimeOb].time = this.convertTime(this.state.editTimeMin, this.state.editTimeSec, this.state.editTimeMS);
    this.setState({editTime: false, editTimeMin: '', editTimeSec: '', editTimeMS: ''});
    this.checkTie();
}


    componentDidMount(){
        console.log(this);
    }

    render(){
    return <div id="resultsEntry" className="resultsEntry">
        <UNHeader title='Youth League Results' link='' linkTitle=''></UNHeader>

        <Row>
                    <div className="pageContainer">

                    {this.state.location !== '' ?
                    <div className="choiceBox" onClick={e=>this.goBack()}>Back</div>: null}
                    {this.state.showLocationSelect == true ?
                    <div>
                        <div className="subTitle">Please Select Your Location</div>
                        <Row horizontal="spaced" wrap style={{marginTop: "20px"}}>
                            <div className="choiceBox" onClick={e=>this.setLocation(1)}>Chicago</div>
                            <div className="choiceBox" onClick={e=>this.setLocation(2)}>Naperville</div>
                            <div className="choiceBox" onClick={e=>this.setLocation(3)}>Libertyville</div>
                            <div className="choiceBox" onClick={e=>this.setLocation(4)}>Finals</div>
                        </Row></div> : null}
                        {this.state.showCourseSelect == true ?
                        <div>
                        <div className="subTitle">Please Select Your Competition Date</div>
                        <Row horizontal="start" wrap style={{marginTop: "20px"}}>
                            {this.state.courses.map((item, index) => (
                                <div className="choiceBox" style={{margin: "5px"}} onClick={e=>this.setCourse(item.course_id)}>{item.comp_date.split("T")[0]}</div>
                            ))}
                        </Row> </div>: null}

                        {this.state.showAgeSelect == true ?
                        <div>
                        <div className="subTitle">Please Select an Age Group</div>
                        <Row horizontal="spaced" wrap style={{marginTop: "20px"}}>
                        <div className={this.state.ageMax == 8 ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setAgeGroup(6,8)}>Ages 6-8</div>
                        <div className={this.state.ageMax == 10 ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setAgeGroup(9,10)}>Ages 9-10</div>
                        <div className={this.state.ageMax == 12 ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setAgeGroup(11,12)}>Ages 11-12</div>
                        <div className={this.state.ageMax == 16 ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setAgeGroup(13,16)}>Ages 13-16</div>
                        </Row> </div>: null}

                        {this.state.showCompetitors == true ?
                        <div>
                        <div className="subTitle">Ninjas</div>
                        <Column horizontal="spaced" wrap style={{marginTop: "20px"}}>
                        {this.state.rankArr.map((item, index) => {
                            if(item.age >= this.state.ageMin && item.age < this.state.ageMax+1){
                                return <div className={item.completed == true ? "athleteBox completed" : "athleteBox"} onClick={e=>this.setScorecard(item.athlete_id)}>
                                    <Row horizontal='space-around' vertical='center'>
                                        <div>{item.rank}.</div>
                                        <div>{item.first_name + ' ' + item.last_name}</div>
                                        <div><div>{item.points}</div><div style={{fontSize: ".8em", color: "#979797"}}>Pts.</div></div>
                                    </Row>
                                </div>
                            }
                        })}
                        </Column>
                        <Row horiozontal="center">
                        {this.state.completedCount == this.state.rankArr.length ? 
                        <button className='submitBtn' onClick={ e => this.confirmSubmission('results')}>Submit</button> : null} 
                        </Row> </div>: null}

                        {this.state.showScorecard == true ?
                        <div>
                            <Row flexGrow={1} flexBasis='auto'>
                        <div>
                         <Column horizontal="start">
                        <div className="subTitle">Scorecard</div>
                        <Row horizontal="start" wrap style={{marginTop: "20px"}}>
                            <div>
                                <div>Name:</div>
                                <div className="scName">{this.state.rankArr[this.state.currentAthleteIndex].first_name + ' ' + this.state.rankArr[this.state.currentAthleteIndex].last_name}</div>
                            </div>
                            <div align="middle" className="submitBtn" style={{width: "75px", marginLeft: "10px"}} onClick={e => this.confirmSubmission('scorecard')}>Absent</div>
                        </Row>
                        </Column>   
                        </div>

                        <div style={{width: "100%"}}>
                        <Column>
                        {this.state.existingScorecard == false ? 
                            <Stopwatch callbackFromParent={this.myCallback} choices={this.state.obstacles[this.state.obstacleIndex].choices} obstacle={this.state.obstacles[this.state.obstacleIndex].obstacle} obstacleInd={this.state.obstacleIndex} complete={this.state.scoreCardComplete} obstacleCnt={this.state.obstacles.length}/>
                            : null}
                        <Column horizontal="center" style={{marginTop: '35px'}}>
                        {this.state.obstacles.map((item, index) => {
                            return <div className="obstacleBox">
                            <div  className="obstacleBoxTitle">{item.obstacle}</div>
                            <Row horizontal="center">
                                {this.createPointRow(item)}
                            </Row>
                            <Row horizontal='center' style={{padding: "5px", borderTop: "1px solid rgb(230,230,230)"}}><div>{item.time}</div>
                            <div align="right" style={{fontSize: '11px', cursor: "pointer", marginLeft: '15px', color: "rgb(0,90,180)"}}><a onClick={e=> this.editTimeFunc(item.time, index)}>edit time</a></div>
                            </Row></div>
                            })}
                        </Column> 
                        <Row horizontal="center" style={{marginTop: "20px"}}>
                        <div style={{marginRight: "30px"}}>
                                <div>Tiebreaker Obstacle</div>
                                <div align="middle" style={{fontSize: "18px", fontWeight: "bold", marginTop: "10px"}}>{this.state.tiebreakerOb}</div>
                            </div>
                            <div>
                                <div>Tiebreaker Time</div>
                                <div style={{marginTop: "10px"}}>
                                    <span><input style={{width: '50px'}} className='skillInput' type="number" placeholder="min" value={this.state.tieBreakMin} onChange={this.handleChange('tieBreakMin')}/></span>
                                    <span style={{paddingLeft: '5px', paddingRight: '5px', fontSize: "18px", fontWeight: "bold"}}>:</span>
                                    <span><input style={{width: '50px'}} className='skillInput' type="number" placeholder="sec" value={this.state.tieBreakSec} onChange={this.handleChange('tieBreakSec')}/></span>
                                    <span style={{paddingLeft: '5px', paddingRight: '5px', fontSize: "18px", fontWeight: "bold"}}>:</span>
                                    <span><input style={{width: '50px'}} className='skillInput' type="number" placeholder="ms" value={this.state.tieBreakMs} onChange={this.handleChange('tieBreakMs')}/></span>
                                </div>
                            </div>
                        </Row>
                        <Row horizontal="center">
                            {this.state.existingScorecard == false ? <button className='submitBtn' onClick={ e => this.confirmSubmission('scorecard')}>Submit</button>
                             : <button className='updateBtn' onClick={ e => this.confirmSubmission('scorecard')}>Update</button>}
                        </Row>
                        </Column>
                        </div>
                        </Row>
                        </div>: null}
                        
                    </div>
                </Row>

                <Dialog
                    open={this.state.openDialog}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Are you sure you want to submit this scorecard?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    {this.state.existingScorecard == false ?
                    <Button type='submit' onClick={e => this.submitScorecard()} color="primary">
                            Submit
                    </Button>
                    :
                    <Button type='submit' onClick={e => this.updateScorecard()} color="primary">
                            Update
                    </Button>
                    }
                        <Button type='submit' onClick={this.closeDialog} color="default">
                            Cancel
            </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.errorDialog}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">ERROR: {this.state.errorMsg}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <span>Results NOT submitted.</span>
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' onClick={this.closeDialog} color="default">
                            OK
            </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.editTime}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Time:</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div>Please enter the new time and hit Submit</div>
                            <div style={{marginTop: "10px"}}>
                                    <span><input style={{width: '50px'}} className='skillInput' type="number" placeholder="min" value={this.state.editTimeMin} onChange={this.handleChange('editTimeMin')}/></span>
                                    <span style={{paddingLeft: '5px', paddingRight: '5px', fontSize: "18px", fontWeight: "bold"}}>:</span>
                                    <span><input style={{width: '50px'}} className='skillInput' type="number" placeholder="sec" value={this.state.editTimeSec} onChange={this.handleChange('editTimeSec')}/></span>
                                    <span style={{paddingLeft: '5px', paddingRight: '5px', fontSize: "18px", fontWeight: "bold"}}>:</span>
                                    <span><input style={{width: '50px'}} className='skillInput' type="number" placeholder="ms" value={this.state.editTimeMS} onChange={this.handleChange('editTimeMS')}/></span>
                                </div>
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' onClick={e=> this.submitNewTime()} color="default">
                            Submit
            </Button>
            <Button type='submit' onClick={this.closeDialog} color="default">
                            Cancel
            </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.openFinalDialog}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Are you sure you want to submit these results?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button type='submit' onClick={e => this.finalizeResults()} color="primary">
                            Submit
            </Button>
                        <Button type='submit' onClick={this.closeDialog} color="default">
                            Cancel
            </Button>
                    </DialogActions>
                </Dialog>
    </div>;
    }
  }
  
  export default ResultsEntry;