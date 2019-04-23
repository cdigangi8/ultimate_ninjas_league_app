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
    choices: []    
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
    this.setState({ time : time + extraTime });
  }

  start() {
    this.setState({
      isRunning : true 
    }, () => {
      this.timerRef = setInterval(
        () => { this.updateTimer( 10 ) }, 10
      )
    });
  }

  stop() {
    this.setState({
      isRunning : false 
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
          <Row horizontal="center">
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