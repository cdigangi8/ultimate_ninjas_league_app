import React, { Component } from 'react';
import UNHeader from "../components/header";
import '../style/index.css';
import {getCompInfo, getCourseObstacles, postScorecard, getStandings} from '../api/api';
import {convertObstacles, calculateScore, resetObstacleArr,rankFunction} from '../controllers/controllers';
import { Column, Row } from 'simple-flexbox';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl, faBars, faMapMarkerAlt, faHashtag, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

library.add(faListOl, faBars, faMapMarkerAlt, faHashtag, faCalendarDay);


// const drawerWidth = 300;

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
        rankArr: [],
        standingsView: 'season',
        compDate: '',
        open: true
    };

    handleDrawer = () => {
        if(this.state.open == false){
            this.setState({ open: true });
        }else{
            this.setState({ open: false });
        }
        
      };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    setStandings(val){
        this.setState({standingsView: val, location: '', showCourseSelect: false, showAgeSelect: false, showCompetitors: false, ageMin: '', ageMax: '', compDate: ''});
    }

    setLocation(val){
        if(this.state.standingsView == 'season'){
            this.setState({location: val, showAgeSelect: true, ageMin: '', ageMax: '', showCompetitors: false, showCourseSelect: false});
        }else{
            getCompInfo(val).then(resp=>{
                this.setState({courses: resp.data.courses, athletes: resp.data.athletes, location: val, showLocationSelect: false, showCourseSelect: true, showAgeSelect: false, showCompetitors: false, compDate: ''});
            })
        }
    }

    setCourse(ind){
        this.setState({courseIndex: ind, showAgeSelect: true, compDate: this.state.courses[ind].comp_date.split("T")[0], ageMin: '', ageMax: '', showCompetitors: false});
        getCourseObstacles(this.state.courses[ind].course_id).then(resp=>{
            convertObstacles(resp.data.obstacles).then(resp2=>{
                    this.setState({obstacles: resp2, resultsArr: resp.data.results});
            });
        });
    }

    setAgeGroup(min,max){
        this.setState({ageMin: min, ageMax: max, showCompetitors: true});
        if(this.state.standingsView == 'season'){
            getStandings(min, max, this.state.location).then(resp=>{
                this.setState({rankArr: resp.data.standings});
            });
        }else{
            rankFunction(this.state.resultsArr, this.state.athletes, min, max).then(resp=>{
                console.log(resp);
                this.setState({rankArr: resp.array});
            });
        }
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

    componentDidMount(){
        console.log(this);
    }

    render(){
        // const { classes, theme } = this.props;

    return <div className="mainBack">
        <UNHeader title='Youth League Results' link='' linkTitle=''></UNHeader>

        <Row>
        
<div id="drawer-container" style={{position: "relative"}}>
        <CssBaseline />
        <div
          className={classNames('drawer', {
            'drawerOpen': this.state.open,
            'drawerClose': !this.state.open,
          })}
          classes={{
            paper: classNames({
                'drawerOpen': this.state.open,
              'drawerClose': !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className='toolbar'>
          <span className="toolbarBtn">
            <FontAwesomeIcon onClick={this.handleDrawer} icon="bars"/>
            </span>
            <span style={{marginLeft: "20px", fontWeight: "bold", color: "rgb(62, 105, 154)"}}>Options</span>
          </div>
          <Column className="optionSection">
          <Row vertical="center" className="titleRow">
                <div className="titleIcon"><FontAwesomeIcon icon="list-ol"/></div>
                <div className="titleText">Standings</div>
            </Row>
            <Row vertical="center" onClick={e=>this.setStandings('season')} className={this.state.standingsView == 'season' ? 'activeListItem optionRow' : 'optionRow'}>
                <div className="optionLetterIcon">S</div>
                <div className="optionText">Season Standings</div>
            </Row>
            <Row vertical="center" onClick={e=>this.setStandings('individual')} className={this.state.standingsView == 'individual' ? 'activeListItem optionRow' : 'optionRow'}>
                <div className="optionLetterIcon">I</div>
                <div className="optionText">Individual Competition</div>
            </Row>
            </Column>
          {/* <List>
            <ListItem>
                <ListItemIcon><FontAwesomeIcon icon="list-ol"/></ListItemIcon>
                <ListItemText>Standings</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setStandings('season')} className={this.state.standingsView == 'season' ? 'activeListItem' : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 15px"}}>S</ListItemIcon>
                <ListItemText>Season Standings</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setStandings('individual')} className={this.state.standingsView == 'individual' ? 'activeListItem' : null}>
                <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 15px"}}>I</ListItemIcon>
                <ListItemText>Individual Competition</ListItemText>
            </ListItem>
          </List> */}

            <Column className="optionSection">
                <Row vertical="center" className="titleRow">
                        <div className="titleIcon"><FontAwesomeIcon icon="map-marker-alt"/></div>
                        <div className="titleText">Location</div>
                    </Row>
                    <Row vertical="center" onClick={e=>this.setLocation(1)} className={this.state.location == '1' ? 'activeListItem optionRow' : 'optionRow'}>
                        <div className="optionLetterIcon">C</div>
                        <div className="optionText">Chicago</div>
                    </Row>
                    <Row vertical="center" onClick={e=>this.setLocation(2)} className={this.state.location == '2' ? 'activeListItem optionRow' : 'optionRow'}>
                        <div className="optionLetterIcon">N</div>
                        <div className="optionText">Naperville</div>
                    </Row>
                    <Row vertical="center" onClick={e=>this.setLocation(3)} className={this.state.location == '3' ? 'activeListItem optionRow' : 'optionRow'}>
                        <div className="optionLetterIcon">L</div>
                        <div className="optionText">Libertyville</div>
                    </Row>
                    {this.state.standingsView == 'individual' ? 
                    <Row vertical="center" onClick={e=>this.setLocation(4)} className={this.state.location == '4' ? 'activeListItem optionRow' : 'optionRow'}>
                        <div className="optionLetterIcon">F</div>
                        <div className="optionText">Finals</div>
                    </Row>
                    : null}
                </Column>
          {this.state.showCourseSelect == true ?
            <Column className="optionSection">
            <Row vertical="center" className="titleRow">
                    <div className="titleIcon"><FontAwesomeIcon icon="calendar-day"/></div>
                    <div className="titleText">Competition Date</div>
                </Row>
                {this.state.courses.map((item, index) => (
                    <Row vertical="center" onClick={e=>this.setCourse(index)} className={this.state.compDate == item.comp_date.split("T")[0] ? 'activeListItem optionRow' : 'optionRow'}>
                        <div className="optionLetterIcon">{index + 1}</div>
                        <div className="optionText">{item.comp_date.split("T")[0]}</div>
                    </Row>
                ))}
            </Column>
          :null}
          {this.state.showAgeSelect == true ?

            <Column className="optionSection">
            <Row vertical="center" className="titleRow">
                    <div className="titleIcon"><FontAwesomeIcon icon="hashtag"/></div>
                    <div className="titleText">Age Group</div>
                </Row>
                <Row vertical="center" onClick={e=>this.setAgeGroup(6,8)} className={this.state.ageMax == 8 ? 'activeListItem optionRow' : 'optionRow'}>
                    <div className="optionLetterIcon">1</div>
                    <div className="optionText">Ages 6-8</div>
                </Row>
                <Row vertical="center" onClick={e=>this.setAgeGroup(9,10)} className={this.state.ageMax == 10 ? 'activeListItem optionRow' : 'optionRow'}>
                    <div className="optionLetterIcon">2</div>
                    <div className="optionText">Ages 9-10</div>
                </Row>
                <Row vertical="center" onClick={e=>this.setAgeGroup(11,12)} className={this.state.ageMax == 12 ? 'activeListItem optionRow' : 'optionRow'}>
                    <div className="optionLetterIcon">3</div>
                    <div className="optionText">Ages 11-12</div>
                </Row>
                <Row vertical="center" onClick={e=>this.setAgeGroup(13,16)} className={this.state.ageMax == 16 ? 'activeListItem optionRow' : 'optionRow'}>
                    <div className="optionLetterIcon">4</div>
                    <div className="optionText">Ages 13-16</div>
                </Row>
            </Column>
          :null}
        </div>
        </div>


                    <div className="pageContainer">

                        {this.state.showCompetitors == true && this.state.standingsView == 'individual' ?
                        <div>
                        <div className="subTitle" style={{color: "#ffffff"}}>Results</div>
                        <Column horizontal="spaced" wrap style={{marginTop: "20px"}}>
                        {this.state.rankArr.map((item, index) => {
                            if(item.age >= this.state.ageMin && item.age < this.state.ageMax+1){
                                // return <div className={item.completed == true ? "athleteBox completed" : "athleteBox"}>
                                return <div className="athleteStandingsBox">
                                    <Row horizontal='space-around' vertical='center'>
                                        <div>{item.rank}.</div>
                                        <div>{item.first_name + ' ' + item.last_name.substring(0,1)}</div>
                                        <div><div>{item.points}</div><div style={{fontSize: ".8em", color: "rgb(225,225,225)"}}>Pts.</div></div>
                                    </Row>
                                </div>
                            }
                        })}
                        </Column> </div>: null}

                        {this.state.showCompetitors == true && this.state.standingsView == 'season' ?
                        <div>
                        <div className="subTitle" style={{color: "#ffffff"}}>Standings</div>
                        <Column horizontal="spaced" wrap style={{marginTop: "20px"}}>
                        {this.state.rankArr.map((item, index) => {
                                return <div className="athleteStandingsBox">
                                    <Row horizontal='space-around' vertical='center'>
                                        <div>{item.rank}.</div>
                                        <div>{item.first_name + ' ' + item.last_name.substring(0,1)}</div>
                                        <div><div>{item.Points}</div><div style={{fontSize: ".8em", color: "rgb(225,225,225)"}}>Pts.</div></div>
                                    </Row>
                                </div>
                        })}
                        </Column> </div>: null}
                        
                    </div>

                    

                </Row>


                

        
    </div>;
    }
  }
  

//   YlLeaderboard.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
//   };

//   export default withStyles(styles, { withTheme: true })(YlLeaderboard);
export default YlLeaderboard;