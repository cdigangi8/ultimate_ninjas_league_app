import React, { Component } from 'react';
import '../style/stopwatch.css';

import Timer         from './Timer';
import Controls      from './Controls';
import LapTimeList   from './LapTimeList';
import { Column, Row } from 'simple-flexbox';


function getDefaultState() {
  return {
    isRunning : false,
    time      : 0,
    timeList  : [],
    choices: [],
    start: 0,
    stopTime: 0,
    restartTime: 0,
    adjustedTime: 0
  }
}

class Stopwatch extends Component {

  constructor( props ) {
    super(props);
    this.state    = getDefaultState();
    this.timerRef = null;
  }

  updateTimer(extraTime) {
    const { time } = this.state;
    // this.setState({ time : time + extraTime });
    this.setState({ time : extraTime });
  }


//   setInterval(function() {
//       var delta = Date.now() - start; // milliseconds elapsed since start
//       …
//       output(Math.floor(delta / 1000)); // in seconds
//       // alternatively just show wall clock time:
//       output(new Date().toUTCString());
//   }, 1000); // update about every second

  start() {
    if(this.state.stopTime != 0){
        this.setState({restartTime: Date.now(), adjustedTime: this.state.adjustedTime + (Date.now() - this.state.stopTime)});
    }else{
        this.setState({start: Date.now()});
    }
    this.setState({
      isRunning : true 
    }, () => {
      this.timerRef = setInterval(
        () => {
            //  this.updateTimer( 10 ) 
            var delta = Date.now() - this.state.start - (this.state.adjustedTime); // milliseconds elapsed since start
            this.updateTimer(delta);
            }, 10
      )
    });
  }

  stop() {
    this.setState({
      isRunning : false,
      stopTime: Date.now()
    }, () => {
      clearInterval(this.timerRef);
    });
  }

//   reset() {
//     this.setState(getDefaultState());
//   }

//   addLapTime() {
//     const { time, timeList } = this.state;

//     this.setState({
//       timeList : [ ...timeList, time ] 
//     });
//     this.someFn();
//   }

  addObstacleTime(val) {
    var returnTime = this.state.time;
      this.props.callbackFromParent(returnTime, val);
      if(this.props.obstacleInd == (this.props.obstacleCnt-1)){
        this.stop();
      }
  }

  render() {

    const { isRunning, time, timeList } = this.state;

    return (
      <div className="Stopwatch">

        <div style={{fontSize: '24px', fontWeight: 'bold'}}>Timer</div>

        <Timer time={ time } />

        <Controls
          isRunning={ isRunning } 
          start={ () => this.start() }
          stop={ () => this.stop() }
        />

        { isRunning ?
          <div className="obstacleBox">
          <div  className="SWBoxTitle">{this.props.obstacle}</div>
          <Row horizontal="center" wrap>
          {this.props.choices.map((item, index) => {
                return <div className={item.selected == true ? "SWBoxContent activeBox" : "SWBoxContent"} onClick={e=> this.addObstacleTime(item) }>{item.value}</div>
            })}
            </Row>
          </div>
          : null }  

      </div>
    );
  }
}

export default Stopwatch;