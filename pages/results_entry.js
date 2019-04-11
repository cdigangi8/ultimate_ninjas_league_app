import React, { Component } from 'react';
import UNHeader from "../components/header";
import '../style/results_entry.css';
import {getCompInfo, getCourseObstacles, postScorecard, postStandings} from '../api/api';
import {convertObstacles, calculateScore, resetObstacleArr,rankFunction} from '../controllers/controllers';
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
        openFinalDialog: false
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
        this.setState({courseIndex: ind, showCourseSelect: false, showAgeSelect: true});
        getCourseObstacles(this.state.courses[ind].course_id).then(resp=>{
            convertObstacles(resp.data.obstacles).then(resp2=>{
                    this.setState({obstacles: resp2, resultsArr: resp.data.results});
            })
            
        });
    }

    setAgeGroup(min,max){
        this.setState({ageMin: min, ageMax: max, showCompetitors: true});
        rankFunction(this.state.resultsArr, this.state.athletes, min, max).then(resp=>{
            console.log(resp);
            this.setState({rankArr: resp});
        })
    }

    setScorecard(athlete){
        var elementPos = this.state.rankArr.map(function(x) {return x.athlete_id; }).indexOf(athlete);
        this.setState({currentAthleteIndex: elementPos,currentAthlete: athlete, showCompetitors: false, showAgeSelect: false, showScorecard: true})
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
        this.state.obstacles.forEach((item,index)=>{
            for(var i=0; i<item.choices.length; i++){
                if(tie==false && i !== (item.choices.length-1) && item.choices[i].selected == true){
                    tie = true;
                    tieOB = item.obOrder;
                    this.setState({tiebreakerOb: tieOB});
                }
            }
            if(tie == false){
                this.setState({tiebreakerOb: ""});
            }
        });
    }

    convertTime(min, sec, ms){
        if(min < 10){
            min = '0' + min;
        }
        if(sec < 10){
            sec = '0' + sec;
        }
        if(ms < 10){
            ms = '0' + ms;
        }
        return '00' + ':' + min + ':' + sec + '.' + ms;
      }

    addPoints(item, c_id){
        for(var i=0; i<item.choices.length;i++){
            if(item.choices[i].key != c_id){
                item.choices[i].selected = false;
            }else{
                item.choices[i].selected = true;
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
        console.log(tiebreakTime);
        calculateScore(this.state.obstacles).then(resp=>{
            var points = resp.score;
            var resultString = resp.resStr;
            postScorecard(this.state.currentAthlete, this.state.courses[this.state.courseIndex].course_id, points, this.state.tiebreakerOb, tiebreakTime, resultString).then(resp2=>{
                console.log(resp2);
                resetObstacleArr(this.state.obstacles).then(resp3=>{
                    rankFunction(resp2.data.results, this.state.athletes, this.state.ageMin, this.state.ageMax).then(resp4=>{
                        this.setState({showScorecard: false, showCompetitors: true, currentAthlete: '', openDialog: false, showAgeSelect: true, 
                                tieBreakMin: '', tieBreakSec: '', tieBreakMs: '', tiebreakerOb: '', obstacles: resp3, rankArr: resp4, resultsArr: resp2.data.results});
                    });
                });
            });
        });
    }

    finalizeResults(){
        postStandings(this.state.rankArr).then(resp=>{
            console.log(resp);
        });
    }

    goBack(){
        if(this.state.showScorecard == true){
            resetObstacleArr(this.state.obstacles).then(resp=>{
                this.setState({showScorecard: false, showCompetitors: true, currentAthlete: '', showAgeSelect: true, obstacles: resp})
            });
        }else if(this.state.showCompetitors == true || this.state.showAgeSelect == true){
            this.setState({showCompetitors: false, ageMin: '', ageMax: '', showAgeSelect: false, showCourseSelect: true, obstacles: [], resultsArr: [] });
        }else{
            this.setState({showCourseSelect: false,  courseIndex: '', courses: [], athletes: [], location: '', showLocationSelect: true});
        }
    }

    closeDialog = (type) =>{
        this.setState({ openDialog: false, openFinalDialog: false });
}


    componentDidMount(){
        console.log(this);
    }

    render(){
    return <div className="resultsEntry">
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
                        </Row></div> : null}
                        {this.state.showCourseSelect == true ?
                        <div>
                        <div className="subTitle">Please Select Your Competition Date</div>
                        <Row horizontal="spaced" wrap style={{marginTop: "20px"}}>
                            {this.state.courses.map((item, index) => (
                                <div className="choiceBox" onClick={e=>this.setCourse(index)}>{item.comp_date.split("T")[0]}</div>
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
                        <button className='submitBtn' onClick={ e => this.confirmSubmission('results')}>Submit</button>
                        </Row> </div>: null}

                        {this.state.showScorecard == true ?
                        <div>
                        <div className="subTitle">Scorecard</div>
                        <Row horizontal="spaced" wrap style={{marginTop: "20px"}}>
                            <div>
                                <div>Name:</div>
                                <div className="scName">{this.state.rankArr[this.state.currentAthleteIndex].first_name + ' ' + this.state.rankArr[this.state.currentAthleteIndex].last_name}</div>
                            </div>
                        </Row>
                        <Column horizontal="center">
                        {this.state.obstacles.map((item, index) => {
                            return <div className="obstacleBox">
                            <div  className="obstacleBoxTitle">{item.obstacle}</div>
                            <Row horizontal="center">
                                {this.createPointRow(item)}
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
                        <Row horiozontal="center">
                        <button className='submitBtn' onClick={ e => this.confirmSubmission('scorecard')}>Submit</button>
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
                    <Button type='submit' onClick={e => this.submitScorecard()} color="primary">
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