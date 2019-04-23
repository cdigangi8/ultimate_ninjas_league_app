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

class AddCompetitor extends Component {


    state = {
        open: false,
        firstName: '',
        lastName: '',
        location: '',
        gender: '',
        age: '',
        dialogTitle: '',
        dialogMsg: ''
    };

    submitCompetitor = () => {
        if (this.state.firstName == '' || this.state.lastName == '' || this.state.age == '' || this.state.location == '' || this.state.gender == '') {
            this.setState({ open: true, dialogMsg: 'Please make sure all fields are filled out!', dialogTitle: 'Warning!' });
        }else {
            this.setState({ open: false });
                addCompetitor(this.state.firstName, this.state.lastName, this.state.age, this.state.location, this.state.gender)
                .then(res => {
                    //handle response from api
                    console.log(res);
                        // this.props.history.replace('/splash_page');
                        // console.log(res);
                        this.setState({ open: true, dialogMsg: 'Successfully added competitor!', dialogTitle: 'Success!', firstName: '', lastName: '', age: '', location: '', gender: '' });
                })
        }
    };

    closeDialog = () =>{
        this.setState({ open: false });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };




    componentDidMount(){

    }

    render(){
    return <div>
        <UNHeader title='Youth League' link='' linkTitle=''></UNHeader>

        <Row>
                    <div className="pageContainer">

                        <Row className="pageInstructions" horizontal='center'>Add New Competitor</Row>
                        <div className="completeProfile">
                            <Row flexGrow={1} wrap horizontal='spaced'>
                                <Column flexGrow={1} style={{ marginRight: '10px' }}>
                                    <TextField
                                        id="first-name"
                                        label="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleChange('firstName')}
                                        margin="dense"
                                        fullWidth
                                        required
                                    />
                                </Column>
                                <Column flexGrow={1} style={{ marginRight: '10px' }}>
                                    <TextField
                                        required
                                        id="last-name"
                                        label="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleChange('lastName')}
                                        margin="dense"
                                        fullWidth
                                    />
                                </Column>
                                <Column flexGrow={1}>
                                    <TextField
                                        required
                                        id="age"
                                        label="Age"
                                        value={this.state.age}
                                        onChange={this.handleChange('age')}
                                        margin="dense"
                                        fullWidth
                                    />
                                </Column>
                            </Row>
                            <Row style={{ marginTop: '20px' }}>
                                <Column flexGrow={1}>
                                    <FormControl required component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup
                                            aria-label="Gender"
                                            name="gender1"
                                            value={this.state.gender}
                                            onChange={this.handleChange('gender')}
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </FormControl>
                                </Column>
                            </Row>
                            <Row>
                                <Column flexGrow={1}>
                                    <FormControl required>
                                        <InputLabel>Location</InputLabel>
                                        <Select
                                            value={this.state.location}
                                            onChange={this.handleChange('location')}
                                        >
                                            <MenuItem value='1'>Chicago</MenuItem>
                                            <MenuItem value='2'>Naperville</MenuItem>
                                            <MenuItem value='3'>Libertyville</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Column>
                            </Row>
                            
                        </div>
                        <Row>
                            <button className='submitBtn' onClick={e => this.submitCompetitor()}>Submit</button>
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
  
  export default AddCompetitor;