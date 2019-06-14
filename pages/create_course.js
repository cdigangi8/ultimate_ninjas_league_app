import React, { Component } from 'react';
import UNHeader from "../components/header";
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
import '../style/forms.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusCircle);


class CreateCourse extends Component {


    state = {
        open: false,
        obstacleArr: [],
        dialogTitle: '',
        dialogMsg: ''
    };


    closeDialog = () =>{
        this.setState({ open: false });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleObstacleChange = (name,idx) => evt => {
        const newObstacles = this.state.obstacleArr.map((item, oidx) => {
          if (idx !== oidx) return item;
          return { ...item, [name]: evt.target.value };
        });
    
        this.setState({ obstacleArr: newObstacles });
      };

    addObstacle(){
        var newArr = this.state.obstacleArr.slice();
        newArr.push({obstacle: '', points: '', pointDesc: [], setupDesc: ''});
        this.setState({obstacleArr: newArr});
    }




    componentDidMount(){

    }

    render(){
    return <div style={{backgroundColor: "rgb(225,225,225)"}}>
        <UNHeader title='Create New Course' link='' linkTitle=''></UNHeader>

        <Row>
                    <div className="pageContainer">
                        {this.state.obstacleArr.map((item, index) => {
                            return <Row>
                                <div class="courseObstacleBox">
                                    <Row horizontal="spaced" vertical="center">
                                        <div style={{fontSize: "28px;"}}>{index + 1}.</div>
                                        <div>
                                        <input className="courseInputBox" type="text" placeholder={`Obstacle`} value={item.obstacle} onChange={this.handleObstacleChange('obstacle' , index)}/>
                                        </div>
                                        <div><div><input className="courseInputBox" style={{width: "20px"}} type="text" placeholder={`#`} value={item.points} onChange={this.handleObstacleChange('points' , index)}/></div><div style={{fontSize: ".8em", color: "rgb(125,125,125)"}}>Pts.</div></div>
                                    </Row>
                                </div>
                            </Row>
                        })}
                        <Row>
                            <div className="courseObstacleBox" onClick={e=>this.addObstacle()}>
                            <FontAwesomeIcon icon="plus-circle"/> Add New Obstacle
                            </div>
                        </Row>
                    </div>
                </Row>

                            
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{this.state.dialogTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.dialogMsg}
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' onClick={this.closeDialog} color="primary">
                            Close
            </Button>
                    </DialogActions>
                </Dialog>
    </div>;
    }
  }
  
  export default CreateCourse;