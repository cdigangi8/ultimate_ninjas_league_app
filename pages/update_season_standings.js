import React, { Component } from 'react';
import UNHeader from "../components/header";
import '../style/index.css';
import {getCompInfo, getCourseObstacles, postScorecard, getStandings, updateStandings, getAthletes, postUpdatedRankings} from '../api/api';
import {convertObstacles, calculateScore, resetObstacleArr,rankFunction, updateSeasonRanking} from '../controllers/controllers';
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

class UpdateStandings extends Component {


    state = {
        location: "",
        athletes: [],
        showLocationSelect: true,
        showAgeSelect: false,
        showCompetitors: false,
        ageMin: '',
        ageMax: '',
        openDialog: false,
        rankArr: [],
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

    setLocation(val){
            this.setState({location: val, showAgeSelect: true, ageMin: '', ageMax: '', showCompetitors: false});
    }

    confirmSubmission(val){
            this.setState({openDialog: true}); 
    }

    closeDialog = (type) =>{
        this.setState({ openDialog: false });
}

    setAgeGroup(min,max){
        this.setState({ageMin: min, ageMax: max, showCompetitors: true});
        getAthletes(this.state.location, max, min).then(resp=>{
            getStandings(min, max, this.state.location).then(resp2=>{
                this.setState({athletes: resp.data.athletes ,rankArr: resp2.data.standings});
            });
        });    
    }

    async updateSeasonRanks(arr){
        console.log(arr);
        let resolvedFinalArray = await Promise.all(arr.map(async(value) => { // map instead of forEach
            const result = await postUpdatedRankings(value);
            return result; // important to return the value
        }));
        var respArr = resolvedFinalArray;
        console.log(respArr);
    }

    async updateSeasonStandings(){
        let resolvedFinalArray = await Promise.all(this.state.athletes.map(async(value) => { // map instead of forEach
            const result = await updateStandings(value, this.state.athletes.length);
            return {pts: result.data.points, res: result.data.rankings, ath: value.athlete_id}; // important to return the value
        }));
        var respArr = resolvedFinalArray;
        this.setState({showCompetitors: false, ageMin: '', ageMax: '', openDialog: false});
        updateSeasonRanking(respArr).then(resp=>{
            this.updateSeasonRanks(resp.array);
        });
    }

    componentDidMount(){
        console.log(this);
    }

    render(){
    return <div className="mainBack">
        <UNHeader title='Update Youth League Standings' link='' linkTitle=''></UNHeader>
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
                </Column>
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

                        {this.state.showCompetitors == true ?
                        <div>
                            <button className='submitBtn' style={{marginBottom: "0px"}} onClick={ e => this.confirmSubmission('scorecard')}>Update Standings</button>
                        <div className="subTitle" style={{color: "#ffffff"}}>Standings</div>
                        <Column horizontal="spaced" wrap style={{marginTop: "20px"}}>
                        {this.state.rankArr.map((item, index) => {
                                return <div className="athleteStandingsBox">
                                    <Row horizontal='space-around' vertical='center'>
                                        {/* <div>{index + 1}.</div> */}
                                        <div>{item.rank}.</div>
                                        <div>{item.first_name + ' ' + item.last_name.substring(0,1)}</div>
                                        <div><div>{item.Points}</div><div style={{fontSize: ".8em", color: "rgb(225,225,225)"}}>Pts.</div></div>
                                    </Row>
                                </div>
                        })}
                        </Column> </div>: null}
                        
                    </div>

                    

                </Row>

                <Dialog
                    open={this.state.openDialog}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Are you sure you want to update the season standings?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button type='submit' onClick={e => this.updateSeasonStandings()} color="primary">
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

export default UpdateStandings;