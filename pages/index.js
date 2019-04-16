import React, { Component } from 'react';
import UNHeader from "../components/header";
import '../style/index.css';
import {getCompInfo, getCourseObstacles, postScorecard, getStandings} from '../api/api';
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


import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl, faBars, faMapMarkerAlt, faHashtag, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

library.add(faListOl, faBars, faMapMarkerAlt, faHashtag, faCalendarDay);


const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: 'flex',
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
activeListItem:{
    backgroundColor: "rgba(0,90,180,0.5)",
    color: "#ffffff"
}
});

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
        const { classes, theme } = this.props;

    return <div className="mainBack">
        <UNHeader title='Youth League Results' link='' linkTitle=''></UNHeader>

        <Row style={{height: "100vh", overflow: "auto"}}>
        <div id="drawer-container" style={{position: "relative"}}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          PaperProps={{ style: { position: 'absolute' } }}
          ModalProps={{
            style: { position: 'absolute'}
          }}
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawer}>
            <FontAwesomeIcon icon="bars"/>
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>
                <ListItemIcon><FontAwesomeIcon icon="list-ol"/></ListItemIcon>
                <ListItemText>Standings</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setStandings('season')} className={this.state.standingsView == 'season' ? classes.activeListItem : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 15px"}}>S</ListItemIcon>
                <ListItemText>Season Standings</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setStandings('individual')} className={this.state.standingsView == 'individual' ? classes.activeListItem : null}>
                <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 15px"}}>I</ListItemIcon>
                <ListItemText>Individual Competition</ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
                <ListItemIcon><FontAwesomeIcon icon="map-marker-alt"/></ListItemIcon>
                <ListItemText>Location</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setLocation(1)} className={this.state.location == '1' ? classes.activeListItem : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 12px"}}>C</ListItemIcon>
                <ListItemText>Chicago</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setLocation(2)} className={this.state.location == '2' ? classes.activeListItem : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 12px"}}>N</ListItemIcon>
                <ListItemText>Naperville</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setLocation(3)} className={this.state.location == '3' ? classes.activeListItem : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 12px"}}>L</ListItemIcon>
                <ListItemText>Libertyville</ListItemText>
            </ListItem>
          </List>
          <Divider />
          {this.state.showCourseSelect == true ?
            <List>
                <ListItem>
                    <ListItemIcon><FontAwesomeIcon icon="calendar-day"/></ListItemIcon>
                    <ListItemText>Competition Date</ListItemText>
                </ListItem>
                {this.state.courses.map((item, index) => (
                <ListItem button onClick={e=>this.setCourse(index)} className={this.state.compDate == item.comp_date.split("T")[0] ? classes.activeListItem : null}>
                    <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 12px"}}>{index + 1}</ListItemIcon>
                    <ListItemText>{item.comp_date.split("T")[0]}</ListItemText>
                </ListItem>
                ))}
            </List>
          :null}
          <Divider />
          {this.state.showAgeSelect == true ?
            <List>
            <ListItem>
                <ListItemIcon><FontAwesomeIcon icon="hashtag"/></ListItemIcon>
                <ListItemText>Age Group</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setAgeGroup(6,8)} className={this.state.ageMax == 8 ? classes.activeListItem : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 12px"}}>1</ListItemIcon>
                <ListItemText>Ages 6-8</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setAgeGroup(9,10)} className={this.state.ageMax == 10 ? classes.activeListItem : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 12px"}}>2</ListItemIcon>
                <ListItemText>Ages 9-10</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setAgeGroup(11,12)} className={this.state.ageMax == 12 ? classes.activeListItem : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 12px"}}>3</ListItemIcon>
                <ListItemText>Ages 11-12</ListItemText>
            </ListItem>
            <ListItem button onClick={e=>this.setAgeGroup(13,16)} className={this.state.ageMax == 16 ? classes.activeListItem : null}>
            <ListItemIcon align="middle" style={{marginLeft: "10px", backgroundColor: "rgb(230,230,230)", height: "35px", width: "35px", borderRadius: "50%", padding: "8px 12px"}}>4</ListItemIcon>
                <ListItemText>Ages 13-16</ListItemText>
            </ListItem>
          </List>
          :null}
        </Drawer>
        </div>
                    <div className="pageContainer">
                    {/* <div>
                    <Row horizontal="start" wrap style={{marginTop: "10px"}}>
                            <div className={this.state.standingsView == 'season' ? "choiceBox activeBox" : "choiceBox"} style={{margin: '5px'}} onClick={e=>this.setStandings('season')}>Season Standings</div>
                            <div className={this.state.standingsView == 'individual' ? "choiceBox activeBox" : "choiceBox"} style={{margin: '5px'}} onClick={e=>this.setStandings('individual')}>Individual Competitions</div>
                        </Row>
                    </div> */}
                    {/* <div>
                        <div className="subTitle" style={{color: "#ffffff"}}>Please Select Your Location</div>
                        <Row horizontal="spaced" wrap style={{marginTop: "20px"}}>
                            <div className={this.state.location == '1' ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setLocation(1)}>Chicago</div>
                            <div className={this.state.location == '2' ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setLocation(2)}>Naperville</div>
                            <div className={this.state.location == '3' ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setLocation(3)}>Libertyville</div>
                        </Row></div> */}
                        {/* {this.state.showCourseSelect == true ?
                        <div>
                        <div className="subTitle" style={{color: "#ffffff"}}>Please Select Your Competition Date</div>
                        <Row horizontal="start" wrap style={{marginTop: "20px"}}>
                            {this.state.courses.map((item, index) => (
                                <div className={this.state.compDate == item.comp_date.split("T")[0] ? "choiceBox activeBox" : "choiceBox"} style={{margin: "5px"}} onClick={e=>this.setCourse(index)}>{item.comp_date.split("T")[0]}</div>
                            ))}
                        </Row> </div>: null} */}
{/* 
                        {this.state.showAgeSelect == true ?
                        <div>
                        <div className="subTitle" style={{color: "#ffffff"}}>Please Select an Age Group</div>
                        <Row horizontal="spaced" wrap style={{marginTop: "20px"}}>
                        <div className={this.state.ageMax == 8 ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setAgeGroup(6,8)}>Ages 6-8</div>
                        <div className={this.state.ageMax == 10 ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setAgeGroup(9,10)}>Ages 9-10</div>
                        <div className={this.state.ageMax == 12 ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setAgeGroup(11,12)}>Ages 11-12</div>
                        <div className={this.state.ageMax == 16 ? "choiceBox activeBox" : "choiceBox"} onClick={e=>this.setAgeGroup(13,16)}>Ages 13-16</div>
                        </Row> </div>: null} */}

                        {this.state.showCompetitors == true && this.state.standingsView == 'individual' ?
                        <div>
                        <div className="subTitle" style={{color: "#ffffff"}}>Results</div>
                        <Column horizontal="spaced" wrap style={{marginTop: "20px"}}>
                        {this.state.rankArr.map((item, index) => {
                            if(item.age >= this.state.ageMin && item.age < this.state.ageMax+1){
                                // return <div className={item.completed == true ? "athleteBox completed" : "athleteBox"}>
                                return <div className="athleteBox">
                                    <Row horizontal='space-around' vertical='center'>
                                        <div>{item.rank}.</div>
                                        <div>{item.first_name + ' ' + item.last_name.substring(0,1)}</div>
                                        <div><div>{item.points}</div><div style={{fontSize: ".8em", color: "#979797"}}>Pts.</div></div>
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
                                return <div className="athleteBox">
                                    <Row horizontal='space-around' vertical='center'>
                                        <div>{index + 1}.</div>
                                        <div>{item.first_name + ' ' + item.last_name.substring(0,1)}</div>
                                        <div><div>{item.Points}</div><div style={{fontSize: ".8em", color: "#979797"}}>Pts.</div></div>
                                    </Row>
                                </div>
                        })}
                        </Column> </div>: null}
                        
                    </div>

                    

                </Row>


                

        
    </div>;
    }
  }
  

  YlLeaderboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(YlLeaderboard);