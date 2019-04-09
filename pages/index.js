import React, { Component } from 'react';
import UNHeader from "../components/header";
import '../style/results_entry.css';
import {getCompInfo, getCourseObstacles, postScorecard} from '../api/api';
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

class YlLeaderboard extends Component {


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
        rankArr: []
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

    componentDidMount(){
        console.log(this);
    }

    render(){
    return <div className="resultsEntry">
        <UNHeader title='Youth League Results' link='' linkTitle=''></UNHeader>

        <Row>
                    <div className="pageContainer">
                    <div>Reload the page to go back to the location selection!</div>
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
                                return <div className={item.completed == true ? "athleteBox completed" : "athleteBox"}>
                                    <Row horizontal='space-around' vertical='center'>
                                        <div>{item.rank}.</div>
                                        <div>{item.first_name + ' ' + item.last_name.substring(0,1)}</div>
                                        <div><div>{item.points}</div><div style={{fontSize: ".8em", color: "#979797"}}>Pts.</div></div>
                                    </Row>
                                </div>
                            }
                        })}
                        </Column> </div>: null}
                        
                    </div>
                </Row>
    </div>;
    }
  }
  
  export default YlLeaderboard;