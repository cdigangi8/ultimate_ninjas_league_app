import React, { Component, PropTypes } from 'react';
import '../style/stopwatch.css';
import { Column, Row } from 'simple-flexbox';

class Controls extends Component {

  // static proptTypes = {
  //   isRunning  : PropTypes.bool,
  //   start      : PropTypes.func.isRequired,
  //   stop       : PropTypes.func.isRequired,
  //   reset      : PropTypes.func.isRequired,
  //   addLapTime : PropTypes.func.isRequired 
  // };

  static defaultProps = {
    isRunning : false,
    choices : []
  };

  render() {
    const { isRunning, start, stop, reset, addLapTime, choices } = this.props;

    return (
      <div className="Controls">
        { !isRunning ?
            <button
              onClick={ start }
              className="startBtn"
              ref="startBtn" > Start </button>
          : null }

        { isRunning ?
          <button
            onClick={ stop }
            className="startBtn"
            style={{backgroundColor: "rgb(216, 83,78)"}}
            ref="stopBtn" > Stop </button>
        : null }

        {/* <button
          onClick={ reset }
          disabled={ isRunning }
          className="Controls__button"
          ref="resetBtn" > Reset </button>

        <button
          onClick={ addLapTime }
          disabled={ !isRunning }
          className="Controls__button"
          ref="lapBtn" > Lap Time </button> */}

      </div>
    );
  }
}

export default Controls;